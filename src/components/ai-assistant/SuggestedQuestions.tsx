import React from 'react'
import { Sparkles } from 'lucide-react'
import type { SuggestedQuestion } from '@/types/assistant.types'

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[]
  onSelect: (questionText: string) => void
  disabled?: boolean
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  questions,
  onSelect,
  disabled = false,
}) => {
  if (!questions || questions.length === 0) return null

  return (
    <div className="py-2 px-1">
      <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
        <span>Suggested Questions</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {questions.map((q) => (
          <button
            key={q.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(q.text)}
            className="text-left text-xs bg-slate-100/90 hover:bg-blue-50 hover:text-[#0066FF] hover:border-blue-200 border border-slate-200/80 text-slate-700 px-2.5 py-1.5 rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xs hover:shadow-xs active:scale-[0.98]"
          >
            {q.text}
          </button>
        ))}
      </div>
    </div>
  )
}
