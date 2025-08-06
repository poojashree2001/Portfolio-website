'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ResponsiveContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '7xl': 'max-w-7xl',
}

const paddingClasses = {
  none: '',
  sm: 'px-4 sm:px-6',
  md: 'px-4 sm:px-6 lg:px-8',
  lg: 'px-4 sm:px-6 lg:px-8 xl:px-12',
  xl: 'px-4 sm:px-6 lg:px-8 xl:px-16',
}

export default function ResponsiveContainer({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'md',
  animate = false,
}: ResponsiveContainerProps) {
  const containerClasses = `
    ${maxWidthClasses[maxWidth]}
    ${paddingClasses[padding]}
    mx-auto
    w-full
    ${className}
  `.trim()

  if (animate) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={containerClasses}>{children}</div>
}

// Responsive Grid Component
interface ResponsiveGridProps {
  children: ReactNode
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6 sm:gap-8',
  lg: 'gap-8 sm:gap-12',
  xl: 'gap-12 sm:gap-16',
}

export function ResponsiveGrid({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
}: ResponsiveGridProps) {
  const gridCols = []
  
  if (cols.default) gridCols.push(`grid-cols-${cols.default}`)
  if (cols.sm) gridCols.push(`sm:grid-cols-${cols.sm}`)
  if (cols.md) gridCols.push(`md:grid-cols-${cols.md}`)
  if (cols.lg) gridCols.push(`lg:grid-cols-${cols.lg}`)
  if (cols.xl) gridCols.push(`xl:grid-cols-${cols.xl}`)
  if (cols['2xl']) gridCols.push(`2xl:grid-cols-${cols['2xl']}`)

  const gridClasses = `
    grid
    ${gridCols.join(' ')}
    ${gapClasses[gap]}
    ${className}
  `.trim()

  return <div className={gridClasses}>{children}</div>
}

// Responsive Text Component
interface ResponsiveTextProps {
  children: ReactNode
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div'
}

const textSizeClasses = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-base sm:text-lg',
  lg: 'text-lg sm:text-xl md:text-2xl',
  xl: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  '2xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  '3xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  '4xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  '5xl': 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
}

export function ResponsiveText({
  children,
  size = 'base',
  className = '',
  as: Component = 'p',
}: ResponsiveTextProps) {
  const textClasses = `${textSizeClasses[size]} ${className}`.trim()

  return <Component className={textClasses}>{children}</Component>
}

// Responsive Spacing Component
interface ResponsiveSpacingProps {
  children: ReactNode
  y?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  x?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

const spacingYClasses = {
  sm: 'space-y-4 sm:space-y-6',
  md: 'space-y-6 sm:space-y-8 md:space-y-10',
  lg: 'space-y-8 sm:space-y-12 md:space-y-16',
  xl: 'space-y-12 sm:space-y-16 md:space-y-20',
  '2xl': 'space-y-16 sm:space-y-20 md:space-y-24',
}

const spacingXClasses = {
  sm: 'space-x-4 sm:space-x-6',
  md: 'space-x-6 sm:space-x-8 md:space-x-10',
  lg: 'space-x-8 sm:space-x-12 md:space-x-16',
  xl: 'space-x-12 sm:space-x-16 md:space-x-20',
  '2xl': 'space-x-16 sm:space-x-20 md:space-x-24',
}

export function ResponsiveSpacing({
  children,
  y,
  x,
  className = '',
}: ResponsiveSpacingProps) {
  const spacingClasses = `
    ${y ? spacingYClasses[y] : ''}
    ${x ? spacingXClasses[x] : ''}
    ${className}
  `.trim()

  return <div className={spacingClasses}>{children}</div>
}
