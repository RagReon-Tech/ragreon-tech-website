import React from 'react'
import { cn } from '@/utils/cn'

export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding
  hoverEffect?: boolean
  dark?: boolean
  bordered?: boolean
}

const paddingStyles: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8 sm:p-10',
}

export const Card: React.FC<CardProps> = ({
  padding = 'md',
  hoverEffect = false,
  dark = false,
  bordered = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-200',
        dark
          ? 'bg-[#0B132B] text-white shadow-xl shadow-slate-950/20'
          : 'bg-white text-slate-900 shadow-sm shadow-slate-200/50',
        bordered && (dark ? 'border border-slate-800' : 'border border-slate-200/80'),
        hoverEffect &&
          (dark
            ? 'hover:border-blue-500/40 hover:shadow-blue-500/10 hover:-translate-y-0.5'
            : 'hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5'),
        paddingStyles[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
