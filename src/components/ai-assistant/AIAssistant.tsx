import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAIAssistant } from '@/hooks/useAIAssistant'
import { AssistantFloatingButton } from './AssistantFloatingButton'
import { AssistantChatWindow } from './AssistantChatWindow'

const KNOWN_ROUTE_PREFIXES = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/team',
  '/contact',
  '/start-project',
  '/sreeram',
  '/raghuraman',
]

export const AIAssistant: React.FC = () => {
  const location = useLocation()
  const {
    isOpen,
    setIsOpen,
    isMinimized,
    toggleOpen,
    toggleMinimize,
    messages,
    isTyping,
    suggestedQuestions,
    sendMessage,
    retryLastMessage,
    clearConversation,
  } = useAIAssistant()

  // Determine if the current route is a valid website page (hide on 404 / unmatched error pages)
  const isKnownRoute = KNOWN_ROUTE_PREFIXES.some((prefix) => {
    if (prefix === '/') {
      return location.pathname === '/'
    }
    return location.pathname === prefix || location.pathname.startsWith(prefix + '/')
  })

  if (!isKnownRoute) {
    return null
  }

  return (
    <>
      {/* Floating Interactive Widget Button */}
      <AssistantFloatingButton isOpen={isOpen} onClick={toggleOpen} />

      {/* Floating Chat Window Modal */}
      <AssistantChatWindow
        isOpen={isOpen}
        isMinimized={isMinimized}
        messages={messages}
        isTyping={isTyping}
        suggestedQuestions={suggestedQuestions}
        onClose={() => setIsOpen(false)}
        onMinimize={toggleMinimize}
        onClear={clearConversation}
        onSend={sendMessage}
        onRetry={retryLastMessage}
      />
    </>
  )
}

export default AIAssistant
