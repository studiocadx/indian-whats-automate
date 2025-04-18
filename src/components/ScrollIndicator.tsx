
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div
        className="h-full bg-brand-primary"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
