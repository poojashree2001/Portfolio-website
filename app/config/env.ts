import { EnvironmentConfig } from '../../types';

// Environment configuration with validation
export const env: EnvironmentConfig = {
  NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development',
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://poojashree-portfolio.vercel.app',
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
};

// Validation function
export const validateEnv = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_SITE_URL',
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !env[varName as keyof EnvironmentConfig]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Missing environment variables: ${missingVars.join(', ')}`
    );
  }

  return missingVars.length === 0;
};

// Development mode check
export const isDevelopment = env.NODE_ENV === 'development';
export const isProduction = env.NODE_ENV === 'production';
export const isTest = env.NODE_ENV === 'test';

// Feature flags
export const features = {
  enableAnalytics: isProduction && !!env.NEXT_PUBLIC_GA_TRACKING_ID,
  enableEmailJS: !!(env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
  enablePerformanceMonitoring: isDevelopment,
  enableLoadingScreen: true,
  enableBlog: true,
  enableResumeDownload: true,
};

// API endpoints
export const apiEndpoints = {
  contact: '/api/contact',
  emailjsCheck: '/api/emailjs-check',
  health: '/api/health',
};

// External links
export const externalLinks = {
  github: 'https://github.com/poojashree-ks',
  linkedin: 'https://linkedin.com/in/poojashree-k-s',
  email: 'mailto:poojamanu567@gmail.com',
  phone: 'tel:+919901002231',
};

// SEO configuration
export const seoConfig = {
  defaultTitle: 'Poojashree K S - Software Engineer Trainee & Accessibility Expert',
  titleTemplate: '%s | Poojashree K S',
  defaultDescription: 'Software Engineer Trainee at Cisco specializing in Python automation, accessibility testing, and inclusive web development. Experienced with Python, Flask, Django, PostgreSQL, and accessibility compliance.',
  siteUrl: env.NEXT_PUBLIC_SITE_URL,
  defaultImage: '/profile-photo.png',
  twitterHandle: '@poojashree_ks',
  keywords: [
    'software engineer',
    'python automation',
    'accessibility testing',
    'WCAG compliance',
    'web development',
    'Flask',
    'Django',
    'PostgreSQL',
    'inclusive design',
    'Cisco',
    'portfolio'
  ],
};

// Theme configuration
export const themeConfig = {
  colors: {
    primary: '#00f5ff',
    secondary: '#8b5cf6',
    accent: '#f471b5',
    background: '#0a0a0a',
    surface: '#111111',
    border: '#1f1f1f',
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Animation configuration
export const animationConfig = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
  stagger: {
    children: 0.1,
    items: 0.05,
  },
};

// Performance configuration
export const performanceConfig = {
  loadingScreenDuration: 2500,
  imageOptimization: {
    quality: 85,
    formats: ['image/webp', 'image/avif'],
  },
  caching: {
    staticAssets: '1y',
    apiResponses: '5m',
  },
};

// Initialize environment validation
if (typeof window === 'undefined') {
  validateEnv();
}
