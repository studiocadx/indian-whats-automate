
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show the banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50 animate-fade-in-up">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-brand-dark/80">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            <a href="#" className="text-brand-primary font-medium ml-1">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="bg-brand-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-brand-primary/90 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleClose}
            className="text-brand-dark/70 hover:text-brand-dark"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
