// Configure your ordering link here
// For WhatsApp: https://wa.me/<COUNTRY_CODE><NUMBER>?text=<ENCODED_MESSAGE>
// Example: https://wa.me/15551234567?text=Hi%20Fit%20Bowl!%20I'd%20like%20to%20order%20a%20Signature%20Bowl.

export const ORDER_URL = "https://wa.me/15551234567?text=Hi%20Fit%20Bowl!%20I'd%20like%20to%20order%20a%20Signature%20Bowl.";

// Analytics event tracking (optional)
export const trackCTAClick = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "cta_click", {
      event_category: "engagement",
      event_label: label,
    });
  }
};

