import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ChatMessage, SuggestedQuestion } from '@/types/assistant.types'
import { AssistantHeader } from './AssistantHeader'
import { AssistantMessage } from './AssistantMessage'
import { AssistantInput } from './AssistantInput'
import { SuggestedQuestions } from './SuggestedQuestions'

interface AssistantChatWindowProps {
  isOpen: boolean
  isMinimized: boolean
  messages: ChatMessage[]
  isTyping: boolean
  suggestedQuestions: SuggestedQuestion[]
  onClose: () => void
  onMinimize: () => void
  onClear: () => void
  onSend: (message: string) => void
  onRetry: () => void
}

export const AssistantChatWindow: React.FC<AssistantChatWindowProps> = ({
  isOpen,
  isMinimized,
  messages,
  isTyping,
  suggestedQuestions,
  onClose,
  onMinimize,
  onClear,
  onSend,
  onRetry,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom whenever messages or typing state change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
        className="fixed z-50 bottom-22 sm:bottom-28 right-4 sm:right-6 w-[calc(100vw-32px)] max-w-sm sm:max-w-none sm:w-[420px] rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col transition-all duration-200"
        style={{
          height: isMinimized ? 'auto' : 'min(580px, calc(100vh - 120px))',
          maxHeight: 'calc(100vh - 110px)',
        }}
      >
        {/* Header */}
        <AssistantHeader
          onClose={onClose}
          onMinimize={onMinimize}
          onClear={onClear}
          isMinimized={isMinimized}
        />

        {/* Minimized view stops here */}
        {!isMinimized && (
          <>
            {/* Conversation Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50/70 to-slate-100/50 scroll-smooth"
            >
              {messages.map((msg) => (
                <AssistantMessage
                  key={msg.id}
                  message={msg}
                  onRetry={onRetry}
                  onNavigate={onClose}
                />
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400 py-1 pl-1">
                  <div className="w-6 h-6 rounded-full bg-white border border-blue-500/25 p-0.5 flex items-center justify-center shadow-2xs">
                    <img
                      src="/logos/ragreon-icon.png"
                      alt="AI"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-2xl rounded-tl-xs border border-slate-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-bounce" />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">RagReon AI is thinking...</span>
                </div>
              )}

              {/* Contextual Suggested Questions Chips */}
              {!isTyping && suggestedQuestions.length > 0 && (
                <div className="pt-2">
                  <SuggestedQuestions
                    questions={suggestedQuestions}
                    onSelect={onSend}
                    disabled={isTyping}
                  />
                </div>
              )}
            </div>

            {/* Input Composer */}
            <AssistantInput onSend={onSend} disabled={isTyping} />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
