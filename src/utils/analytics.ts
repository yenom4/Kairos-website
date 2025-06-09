// Google Analytics Tracking Service
// Kairos AI - Suivi des conversions et événements

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      target: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-JGM9B57JZY';

// Vérifier si gtag est disponible
export const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Tracker une page vue
export const trackPageView = (url: string, title?: string): void => {
  if (!isGtagAvailable()) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};

// Tracker un événement général
export const trackEvent = (
  eventName: string, 
  parameters?: Record<string, any>
): void => {
  if (!isGtagAvailable()) return;
  
  window.gtag('event', eventName, {
    event_category: 'engagement',
    event_label: parameters?.label || '',
    value: parameters?.value || 0,
    ...parameters,
  });
};

// Tracker les conversions importantes
export const trackConversion = (
  type: 'contact_form' | 'calendar_booking' | 'phone_call' | 'email_click',
  value?: number,
  label?: string
): void => {
  if (!isGtagAvailable()) return;

  const eventMap = {
    contact_form: {
      event_name: 'form_submit',
      event_category: 'conversion',
      event_label: label || 'Contact Form',
      value: value || 100, // Valeur estimée de lead
    },
    calendar_booking: {
      event_name: 'book_appointment',
      event_category: 'conversion', 
      event_label: label || 'Calendar Booking',
      value: value || 200, // Valeur élevée pour RDV
    },
    phone_call: {
      event_name: 'phone_call',
      event_category: 'engagement',
      event_label: label || 'Phone Call Click',
      value: value || 50,
    },
    email_click: {
      event_name: 'email_click',
      event_category: 'engagement',
      event_label: label || 'Email Click',
      value: value || 25,
    },
  };

  const config = eventMap[type];
  window.gtag('event', config.event_name, config);
};

// Tracker les interactions avec les sections
export const trackSectionView = (sectionName: string): void => {
  trackEvent('section_view', {
    event_category: 'page_interaction',
    event_label: sectionName,
  });
};

// Tracker les clics sur les boutons CTA
export const trackCTAClick = (ctaLabel: string, location?: string): void => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaLabel,
    cta_location: location || 'unknown',
  });
};

// Tracker les téléchargements (si applicable)
export const trackDownload = (fileName: string): void => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
  });
};

// Tracker les erreurs
export const trackError = (errorType: string, errorMessage?: string): void => {
  trackEvent('error', {
    event_category: 'error',
    event_label: errorType,
    error_message: errorMessage || '',
  });
}; 