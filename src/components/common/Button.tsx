import React from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  to?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 border border-transparent',
  secondary:
    'bg-blue-50 hover:bg-blue-100 text-[#0066FF] border border-blue-200/60 shadow-sm',
  outline:
    'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-300',
  ghost:
    'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-transparent',
  navy:
    'bg-[#0B132B] hover:bg-[#1C2541] text-white shadow-md shadow-slate-900/10 border border-slate-800',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 font-medium',
  md: 'text-sm px-5 py-2.5 rounded-xl gap-2 font-medium',
  lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  to,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]'

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  )

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </>
  )

  if (to) {
    const { type: _type, ...restProps } = props
    return (
      <Link to={to} className={combinedClasses} role="button" {...(restProps as any)}>
        {content}
      </Link>
    )
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
