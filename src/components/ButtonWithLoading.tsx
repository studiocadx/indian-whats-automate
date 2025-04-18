
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ButtonWithLoadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

const ButtonWithLoading = ({ children, className = "", delay = 1500, onClick }: ButtonWithLoadingProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (onClick) onClick();
    }, delay);
  };

  return (
    <button 
      className={`relative ${className}`} 
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
          <Loader2 className="w-5 h-5 animate-spin" />
        </span>
      )}
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
    </button>
  );
};

export default ButtonWithLoading;
