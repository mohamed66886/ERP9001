// Utility functions for Vercel deployment

// Type definitions
interface AnalyticsProperties {
  [key: string]: string | number | boolean | null | undefined;
}

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  formType?: string;
}

interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  label: string;
}

// Environment detection
export const isProduction = import.meta.env.MODE === 'production';
export const isVercel = !!import.meta.env.VITE_VERCEL;
export const isDevelopment = import.meta.env.MODE === 'development';

// Get the current site URL
export const getSiteUrl = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  if (import.meta.env.VITE_VERCEL_URL) {
    return `https://${import.meta.env.VITE_VERCEL_URL}`;
  }
  
  if (import.meta.env.VITE_VERCEL_DEPLOYMENT_URL) {
    return `https://${import.meta.env.VITE_VERCEL_DEPLOYMENT_URL}`;
  }
  
  return isProduction ? 'https://erp90.cloud' : 'http://localhost:8080';
};

// Analytics tracking
export const trackEvent = async (eventName: string, properties: AnalyticsProperties = {}) => {
  if (!isProduction) {
    console.log('Analytics Event:', { eventName, properties });
    return;
  }

  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        page: window.location.pathname,
        action: 'track',
        properties: {
          ...properties,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        }
      })
    });
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
};

// Form submission
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission failed:', error);
    throw error;
  }
};

// Performance monitoring
export const reportWebVitals = (metric: WebVitalMetric) => {
  if (!isProduction) {
    console.log('Web Vital:', metric);
    return;
  }

  // Send to analytics service
  trackEvent('web_vital', {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    label: metric.label
  });
};

// Error reporting
export const reportError = (error: Error, context?: string) => {
  console.error('Application Error:', error, context);
  
  if (isProduction) {
    trackEvent('error', {
      message: error.message,
      stack: error.stack,
      context,
      url: window.location.href
    });
  }
};

// Cache utilities
export const getCacheKey = (key: string): string => {
  return `erp90_${key}_${import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA || 'dev'}`;
};

// API utilities
export const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const url = endpoint.startsWith('/') ? `${getSiteUrl()}${endpoint}` : endpoint;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    reportError(error as Error, `API Request to ${url}`);
    throw error;
  }
};

// Social sharing utilities
export const shareOnSocial = (platform: string, url: string, text: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
  };

  const shareUrl = shareUrls[platform as keyof typeof shareUrls];
  if (shareUrl) {
    trackEvent('social_share', { platform, url, text });
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};

// Device detection
export const getDeviceInfo = () => {
  if (typeof window === 'undefined') return null;
  
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad/i.test(userAgent) || (isMobile && window.innerWidth > 768);
  const isDesktop = !isMobile && !isTablet;
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    userAgent,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  };
};

export default {
  isProduction,
  isVercel,
  isDevelopment,
  getSiteUrl,
  trackEvent,
  submitContactForm,
  reportWebVitals,
  reportError,
  getCacheKey,
  apiRequest,
  shareOnSocial,
  getDeviceInfo
};
