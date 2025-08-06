'use client'

import { useState, useEffect } from 'react'

interface BreakpointConfig {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

const breakpoints: BreakpointConfig = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export type Breakpoint = keyof BreakpointConfig

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs')

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setWindowSize({ width, height })

      // Determine current breakpoint
      if (width >= breakpoints['2xl']) {
        setCurrentBreakpoint('2xl')
      } else if (width >= breakpoints.xl) {
        setCurrentBreakpoint('xl')
      } else if (width >= breakpoints.lg) {
        setCurrentBreakpoint('lg')
      } else if (width >= breakpoints.md) {
        setCurrentBreakpoint('md')
      } else if (width >= breakpoints.sm) {
        setCurrentBreakpoint('sm')
      } else {
        setCurrentBreakpoint('xs')
      }
    }

    // Set initial values
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = currentBreakpoint === 'xs' || currentBreakpoint === 'sm'
  const isTablet = currentBreakpoint === 'md'
  const isDesktop = currentBreakpoint === 'lg' || currentBreakpoint === 'xl' || currentBreakpoint === '2xl'
  const isLargeScreen = currentBreakpoint === 'xl' || currentBreakpoint === '2xl'

  const isBreakpoint = (breakpoint: Breakpoint) => currentBreakpoint === breakpoint
  const isAboveBreakpoint = (breakpoint: Breakpoint) => windowSize.width >= breakpoints[breakpoint]
  const isBelowBreakpoint = (breakpoint: Breakpoint) => windowSize.width < breakpoints[breakpoint]

  return {
    windowSize,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    isBreakpoint,
    isAboveBreakpoint,
    isBelowBreakpoint,
    breakpoints,
  }
}

// Hook for responsive values
export function useResponsiveValue<T>(values: Partial<Record<Breakpoint, T>>, defaultValue: T): T {
  const { currentBreakpoint } = useResponsive()

  // Find the appropriate value for current breakpoint
  const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint)

  // Look for a value starting from current breakpoint and going down
  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const breakpoint = breakpointOrder[i]
    if (values[breakpoint] !== undefined) {
      return values[breakpoint] as T
    }
  }

  return defaultValue
}

// Hook for responsive grid columns
export function useResponsiveGrid(config: Partial<Record<Breakpoint, number>>) {
  const { currentBreakpoint } = useResponsive()
  
  const defaultCols = config[currentBreakpoint] || config.xs || 1
  return defaultCols
}

// Hook for responsive spacing
export function useResponsiveSpacing(config: Partial<Record<Breakpoint, string>>) {
  const { currentBreakpoint } = useResponsive()
  
  const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs']
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint)

  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const breakpoint = breakpointOrder[i]
    if (config[breakpoint]) {
      return config[breakpoint]
    }
  }

  return config.xs || '1rem'
}

// Utility function to get responsive classes
export function getResponsiveClasses(
  baseClasses: string,
  responsiveClasses: Partial<Record<Breakpoint, string>>
): string {
  const classes = [baseClasses]
  
  Object.entries(responsiveClasses).forEach(([breakpoint, className]) => {
    if (className) {
      const prefix = breakpoint === 'xs' ? '' : `${breakpoint}:`
      classes.push(`${prefix}${className}`)
    }
  })
  
  return classes.join(' ')
}

// Touch device detection
export function useIsTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0
      )
    }

    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  return isTouchDevice
}

// Reduced motion preference detection
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}
