import React from 'react'
import { RotateCcw, Minus, X } from 'lucide-react'

interface AssistantHeaderProps {
  onMinimize: () => void
  onClose: () => void
  onClear: () => void
  isMinimized?: boolean
}

export const AssistantHeader: React.FC<AssistantHeaderProps> = ({
  onMinimize,
  onClose,
  onClear,
  isMinimized = false,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#0B132B] text-white border-b border-slate-800 rounded-t-2xl select-none">
      {/* Brand & Identity */}
      <div className="flex items-center gap-2.5">
        <div className="relative w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center border-2 border-blue-500/25 shadow-xs shrink-0">
          <img
            src="/logos/ragreon-icon.png"
            alt="RagReon Logo"
            className="w-full h-full object-contain"
          />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#0B132B]" />
        </div>

        <div>
          <div className="flex items-center gap-1.5 leading-none">
            <span className="font-bold text-sm tracking-tight text-white">RagReon AI</span>
            <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-[#0066FF] border border-blue-500/30">
              Online
            </span>
          </div>
          <span className="text-[11px] text-slate-400 block mt-0.5 font-normal">
            Your Intelligent Company Assistant
          </span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-1 text-slate-400">
        <button
          type="button"
          onClick={onClear}
          title="Reset conversation"
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-hidden focus:ring-1 focus:ring-blue-500 cursor-pointer"
          aria-label="Clear chat"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onMinimize}
          title={isMinimized ? 'Expand' : 'Minimize'}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-hidden focus:ring-1 focus:ring-blue-500 cursor-pointer"
          aria-label="Minimize chat"
        >
          <Minus className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onClose}
          title="Close chat"
          className="p-1.5 hover:text-white hover:bg-rose-500/20 hover:text-rose-400 rounded-lg transition-colors focus:outline-hidden focus:ring-1 focus:ring-rose-500 cursor-pointer"
          aria-label="Close chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
