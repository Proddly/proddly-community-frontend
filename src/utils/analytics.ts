export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // In a real implementation, this would send data to Google Analytics
  console.log(`[Analytics] Event: ${eventName}`, params);
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};
