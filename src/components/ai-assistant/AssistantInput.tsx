import React, { useState, useRef, useEffect } from 'react'
import { Send, AlertCircle } from 'lucide-react'

interface AssistantInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

const MAX_CHARS = 600

export const AssistantInput: React.FC<AssistantInputProps> = ({
  onSend,
  disabled = false,
  placeholder = 'Ask about our services, 21 projects, team...',
}) => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input automatically when enabled
  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus()
    }
  }, [disabled])

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed || disabled) return

    onSend(trimmed)
    setValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const isOverLimit = value.length > MAX_CHARS

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-white border-t border-slate-200/80 rounded-b-2xl"
    >
      <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-xl focus-within:border-[#0066FF] focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full py-2.5 pl-3.5 pr-12 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
          maxLength={MAX_CHARS + 20}
        />

        <button
          type="submit"
          disabled={disabled || !value.trim() || isOverLimit}
          className="absolute right-1.5 p-2 bg-[#0066FF] hover:bg-blue-700 disabled:bg-slate-200 text-white disabled:text-slate-400 rounded-lg transition-all duration-150 flex items-center justify-center disabled:cursor-not-allowed shadow-2xs hover:shadow-xs active:scale-95"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between mt-1.5 px-1 text-[11px] text-slate-400">
        <span>Press Enter to send</span>
        <span
          className={`flex items-center gap-1 font-mono ${
            isOverLimit ? 'text-rose-500 font-semibold' : 'text-slate-400'
          }`}
        >
          {isOverLimit && <AlertCircle className="w-3 h-3" />}
          {value.length}/{MAX_CHARS}
        </span>
      </div>
    </form>
  )
}
