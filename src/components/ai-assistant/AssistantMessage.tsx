import React from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, RotateCcw, User } from 'lucide-react'
import type { ChatMessage } from '@/types/assistant.types'
import { ProjectRecommendationCard } from './ProjectRecommendationCard'

interface AssistantMessageProps {
  message: ChatMessage
  onRetry?: () => void
  onNavigate?: () => void
}

/**
 * Parses markdown inline tokens: **bold**, `code`, and [link](url).
 */
function renderInlineContent(text: string, onNavigate?: () => void): React.ReactNode[] {
  // Regex to match markdown links: [text](url), bold: **bold**, code: `code`
  const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.substring(lastIndex, match.index))
    }

    const fullMatch = match[0]
    if (fullMatch.startsWith('[') && match[2] && match[3]) {
      const label = match[2]
      const url = match[3]
      if (url.startsWith('/')) {
        nodes.push(
          <Link
            key={match.index}
            to={url}
            onClick={onNavigate}
            className="text-[#0066FF] font-semibold underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            {label}
          </Link>,
        )
      } else {
        nodes.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0066FF] font-semibold underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            {label}
          </a>,
        )
      }
    } else if (fullMatch.startsWith('**') && match[4]) {
      nodes.push(
        <strong key={match.index} className="font-semibold text-slate-900">
          {match[4]}
        </strong>,
      )
    } else if (fullMatch.startsWith('`') && match[5]) {
      nodes.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 bg-slate-100 text-slate-800 rounded text-xs font-mono"
        >
          {match[5]}
        </code>,
      )
    }

    lastIndex = match.index + fullMatch.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex))
  }

  return nodes
}

/**
 * Formats multi-line text into formatted paragraphs and bullet lists.
 */
function formatMessageContent(content: string, onNavigate?: () => void): React.ReactNode {
  const blocks = content.split(/\n\n+/)

  return (
    <div className="space-y-2">
      {blocks.map((block, blockIdx) => {
        const lines = block.split('\n')
        const isList = lines.every((line) => line.trim().startsWith('- ') || line.trim().startsWith('* '))

        if (isList) {
          return (
            <ul key={blockIdx} className="space-y-1 my-1.5 pl-3 list-disc marker:text-[#0066FF]">
              {lines.map((line, lineIdx) => {
                const clean = line.trim().replace(/^[-*]\s+/, '')
                return (
                  <li key={lineIdx} className="text-xs leading-relaxed text-slate-700 pl-1">
                    {renderInlineContent(clean, onNavigate)}
                  </li>
                )
              })}
            </ul>
          )
        }

        return (
          <p key={blockIdx} className="text-xs leading-relaxed text-slate-700">
            {lines.map((line, lineIdx) => (
              <React.Fragment key={lineIdx}>
                {lineIdx > 0 && <br />}
                {renderInlineContent(line, onNavigate)}
              </React.Fragment>
            ))}
          </p>
        )
      })}
    </div>
  )
}

export const AssistantMessage: React.FC<AssistantMessageProps> = ({
  message,
  onRetry,
  onNavigate,
}) => {
  const isUser = message.role === 'user'
  const isError = message.isError

  return (
    <div
      className={`flex items-start gap-2.5 my-3 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center p-0.5 border ${
          isUser
            ? 'bg-[#0066FF] text-white border-blue-400/40'
            : isError
            ? 'bg-rose-100 text-rose-600 border-rose-200'
            : 'bg-white border-blue-500/25 shadow-2xs'
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4" />
        ) : (
          <img
            src="/logos/ragreon-icon.png"
            alt="RagReon AI"
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Message Bubble & Cards */}
      <div className={`max-w-[85%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-xs shadow-2xs ${
            isUser
              ? 'bg-[#0066FF] text-white rounded-tr-xs'
              : isError
              ? 'bg-rose-50/90 border border-rose-200/90 text-rose-800 rounded-tl-xs'
              : 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-xs'
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          ) : (
            <div>
              {isError && (
                <div className="flex items-center gap-1.5 font-semibold text-rose-700 mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Connection Notice</span>
                </div>
              )}
              {formatMessageContent(message.content, onNavigate)}
            </div>
          )}
        </div>

        {/* Retry Button on Error */}
        {isError && message.canRetry && onRetry && (
          <div className="mt-1.5 flex items-center gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0066FF] hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-md transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Retry</span>
            </button>
          </div>
        )}

        {/* Embedded Project Cards */}
        {message.projectCards && message.projectCards.length > 0 && (
          <div className="mt-2 space-y-2 w-full">
            {message.projectCards.map((card) => (
              <ProjectRecommendationCard
                key={card.slug}
                project={card}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
