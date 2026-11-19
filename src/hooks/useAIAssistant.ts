import { useState, useEffect, useCallback, useRef } from 'react'
import type { ChatMessage, ChatHistoryItem, SuggestedQuestion } from '@/types/assistant.types'
import { sendChatMessage } from '@/services/assistantApi'
import { defaultSuggestedQuestions } from '@/data/assistantKnowledge'

const STORAGE_KEY = 'ragreon_ai_chat_messages_v1'
const SESSION_ID_KEY = 'ragreon_ai_session_id'

const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome-message',
  role: 'assistant',
  content:
    "Hello! Welcome to RagReon Tech.\n\nI'm **RagReon AI**, your virtual company assistant. I can help you explore our services, technical domains, 21 portfolio projects, co-founders, and collaboration opportunities.\n\nWhat would you like to know?",
  timestamp: Date.now(),
}

function getStoredMessages(): ChatMessage[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return [WELCOME_MESSAGE]
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME_MESSAGE]
  } catch {
    return [WELCOME_MESSAGE]
  }
}

function getOrCreateSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_ID_KEY)
    if (!id) {
      id = 'ragreon-session-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now()
      sessionStorage.setItem(SESSION_ID_KEY, id)
    }
    return id
  } catch {
    return 'ragreon-session-default'
  }
}

export function useAIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(getStoredMessages)
  const [isTyping, setIsTyping] = useState(false)
  const [lastFailedMessage, setLastFailedMessage] = useState<string | null>(null)
  const [suggestedQuestions, setSuggestedQuestions] = useState<SuggestedQuestion[]>(
    defaultSuggestedQuestions,
  )

  const sessionIdRef = useRef<string>(getOrCreateSessionId())

  // Persist messages to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // Ignore sessionStorage quotas or private browsing errors
    }
  }, [messages])

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isTyping) return

      const userMsgId = 'msg-' + Date.now() + '-user'
      const userMessage: ChatMessage = {
        id: userMsgId,
        role: 'user',
        content: trimmed,
        timestamp: Date.now(),
      }

      // 1. Prepare history for memory (exclude error messages and welcome message)
      const currentMessages = messages
      const memoryHistory: ChatHistoryItem[] = currentMessages
        .filter((m) => !m.isError && m.id !== 'welcome-message')
        .map((m) => ({
          role: m.role,
          text: m.content,
        }))

      // Optimistically add user message
      setMessages((prev) => [...prev, userMessage])
      setIsTyping(true)
      setLastFailedMessage(null)

      // 2. Call backend API
      const result = await sendChatMessage(trimmed, memoryHistory, sessionIdRef.current)

      setIsTyping(false)

      if (result.success && result.reply) {
        const assistantMsg: ChatMessage = {
          id: 'msg-' + Date.now() + '-assistant',
          role: 'assistant',
          content: result.reply,
          timestamp: Date.now(),
          projectCards: result.projectCards,
        }

        setMessages((prev) => [...prev, assistantMsg])

        // Update suggested questions if provided
        if (result.suggestions && result.suggestions.length > 0) {
          setSuggestedQuestions(
            result.suggestions.map((s, idx) => ({
              id: 'sugg-' + Date.now() + '-' + idx,
              text: s,
            })),
          )
        }
      } else {
        // Handle failure with retry flag
        setLastFailedMessage(trimmed)
        const errorMsg: ChatMessage = {
          id: 'msg-' + Date.now() + '-error',
          role: 'assistant',
          content:
            result.error ||
            "I'm having trouble connecting to RagReon AI right now. Please try again or reach out to us at ragreontechofficial@gmail.com.",
          timestamp: Date.now(),
          isError: true,
          canRetry: true,
        }
        setMessages((prev) => [...prev, errorMsg])
      }
    },
    [isTyping, messages],
  )

  const retryLastMessage = useCallback(() => {
    if (lastFailedMessage) {
      sendMessage(lastFailedMessage)
    }
  }, [lastFailedMessage, sendMessage])

  const clearConversation = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {}
    setMessages([WELCOME_MESSAGE])
    setLastFailedMessage(null)
    setSuggestedQuestions(defaultSuggestedQuestions)
  }, [])

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) setIsMinimized(false)
      return !prev
    })
  }, [])

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev)
  }, [])

  return {
    isOpen,
    setIsOpen,
    isMinimized,
    toggleOpen,
    toggleMinimize,
    messages,
    isTyping,
    suggestedQuestions,
    lastFailedMessage,
    sendMessage,
    retryLastMessage,
    clearConversation,
  }
}
