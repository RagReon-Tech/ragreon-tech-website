import React from 'react'
import { Badge } from '@/components/common/Badge'
import { cn } from '@/utils/cn'

export interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
  className,
}) => {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'max-w-3xl space-y-3.5',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {badge && (
        <div className={cn('flex', isCenter ? 'justify-center' : 'justify-start')}>
          <Badge variant={dark ? 'navy' : 'brand'} size="md" dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight',
          dark ? 'text-white' : 'text-[#0B132B]',
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            dark ? 'text-slate-300' : 'text-slate-600',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
