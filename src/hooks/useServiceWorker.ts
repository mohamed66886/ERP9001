import { useEffect, useCallback } from 'react';
import { reportError, trackEvent } from '@/lib/vercel-utils';

export const useServiceWorker = () => {
  const registerServiceWorker = useCallback(async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('Service Worker registered successfully:', registration);
      
      trackEvent('service_worker_registered', {
        scope: registration.scope,
        updateViaCache: registration.updateViaCache
      });

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New content available
              trackEvent('service_worker_updated');
              
              // Show update notification
              showUpdateNotification();
            }
          });
        }
      });

      // Handle controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

    } catch (error) {
      console.error('Service Worker registration failed:', error);
      reportError(error as Error, 'Service Worker Registration');
    }
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator && import.meta.env.MODE === 'production') {
      registerServiceWorker();
    }
  }, [registerServiceWorker]);

  const showUpdateNotification = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('تحديث جديد متاح', {
        body: 'يتوفر إصدار جديد من ERP90. قم بتحديث الصفحة للحصول على أحدث الميزات.',
        icon: '/favicon-192x192.png',
        tag: 'app-update'
      });
    } else {
      // Fallback to in-app notification
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #4CAF50;
          color: white;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 10000;
          max-width: 300px;
          font-family: system-ui, -apple-system, sans-serif;
        ">
          <div style="font-weight: bold; margin-bottom: 8px;">تحديث جديد متاح</div>
          <div style="font-size: 14px; margin-bottom: 12px;">
            يتوفر إصدار جديد من ERP90. قم بتحديث الصفحة للحصول على أحدث الميزات.
          </div>
          <div style="display: flex; gap: 8px;">
            <button onclick="window.location.reload()" style="
              background: white;
              color: #4CAF50;
              border: none;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 12px;
            ">تحديث الآن</button>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
              background: transparent;
              color: white;
              border: 1px solid white;
              padding: 8px 16px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 12px;
            ">لاحقاً</button>
          </div>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      // Auto remove after 10 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 10000);
    }
  };

  return {
    registerServiceWorker,
    showUpdateNotification
  };
};
