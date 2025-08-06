'use client'

import { useResponsive } from '../hooks/useResponsive'

export default function ResponsiveDebug() {
  const { 
    windowSize, 
    currentBreakpoint, 
    isMobile, 
    isTablet, 
    isDesktop,
    isLargeScreen 
  } = useResponsive()

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-dark-bg/90 backdrop-blur-sm border border-cyber-blue/30 rounded-lg p-3 text-xs font-mono text-cyber-blue">
      <div className="space-y-1">
        <div>Size: {windowSize.width}x{windowSize.height}</div>
        <div>Breakpoint: {currentBreakpoint}</div>
        <div>
          {isMobile && '📱 Mobile'}
          {isTablet && '📱 Tablet'}
          {isDesktop && '💻 Desktop'}
          {isLargeScreen && ' (Large)'}
        </div>
      </div>
    </div>
  )
}
