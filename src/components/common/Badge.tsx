import React from 'react'
import { cn } from '@/utils/cn'

export type BadgeVariant = 'brand' | 'blue' | 'slate' | 'emerald' | 'amber' | 'navy'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  icon?: React.ReactNode
}

const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
  brand: {
    container: 'bg-blue-50 text-[#0066FF] border border-blue-200/80',
    dot: 'bg-[#0066FF]',
  },
  blue: {
    container: 'bg-sky-50 text-sky-700 border border-sky-200',
    dot: 'bg-sky-500',
  },
  slate: {
    container: 'bg-slate-100 text-slate-700 border border-slate-200',
    dot: 'bg-slate-500',
  },
  emerald: {
    container: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    dot: 'bg-emerald-500',
  },
  amber: {
    container: 'bg-amber-50 text-amber-700 border border-amber-200',
    dot: 'bg-amber-500',
  },
  navy: {
    container: 'bg-[#0B132B] text-white border border-slate-700',
    dot: 'bg-blue-400',
  },
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-xs px-2.5 py-0.5 gap-1.5 font-medium rounded-full',
  md: 'text-xs px-3 py-1 gap-2 font-medium rounded-full',
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  size = 'sm',
  dot = false,
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center tracking-wide shrink-0 transition-colors',
        variantStyles[variant].container,
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            variantStyles[variant].dot,
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}

export default Badge
