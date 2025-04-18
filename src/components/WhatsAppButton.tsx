
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button 
      className={`fixed bottom-6 right-6 z-50 bg-brand-whatsapp text-white rounded-full p-4 shadow-lg hover:bg-brand-whatsapp/90 transition-all hover:scale-110 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      aria-label="WhatsApp Demo"
    >
      <MessageSquare size={28} />
      <span className={`absolute -top-2 -right-2 w-4 h-4 bg-brand-accent rounded-full animate-pulse ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}></span>
    </button>
  );
};

export default WhatsAppButton;
