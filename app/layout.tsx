import './globals.css'
import type { Metadata, Viewport } from 'next'
import PerformanceMonitor from './components/PerformanceMonitor'

export const metadata: Metadata = {
  title: 'Poojashree K S - Software Engineer Trainee & Accessibility Expert',
  description: 'Software Engineer Trainee at Cisco specializing in Python automation, accessibility testing, and inclusive web development.',
  keywords: 'Software Engineer, Python Automation, Accessibility Testing, WCAG Compliance, Web Development, Cisco',
  authors: [{ name: 'Poojashree K S' }],
  openGraph: {
    title: 'Poojashree K S - Software Engineer Trainee',
    description: 'Software Engineer Trainee at Cisco specializing in Python automation, accessibility testing, and inclusive web development.',
    url: 'https://poojashree-portfolio.vercel.app',
    siteName: 'Poojashree K S Portfolio',
    type: 'website',
    images: [
      {
        url: '/profile-photo.png',
        width: 1200,
        height: 630,
        alt: 'Poojashree K S - Software Engineer Trainee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poojashree K S - Software Engineer Trainee',
    description: 'Software Engineer Trainee at Cisco specializing in Python automation, accessibility testing, and inclusive web development.',
    creator: '@poojashree_ks',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#00f5ff',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}
