
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollUtils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleStartFreeTrial = () => {
    navigate("/signup");
  };

  return (
    <header className="py-4 border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-display font-bold text-brand-primary flex items-center gap-2">
            <span className="text-brand-whatsapp">Whats</span>
            <span>Automate</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-brand-dark hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="text-brand-dark hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-brand-dark hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-brand-dark hover:text-brand-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Pricing
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="btn-ghost" onClick={handleLogin}>Login</button>
          <button className="btn-primary" onClick={handleStartFreeTrial}>Start Free Trial</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4 border-b border-gray-100">
          <div className="container-custom flex flex-col space-y-4">
            <button 
              className="text-brand-dark hover:text-brand-primary py-2 transition-colors text-left w-full bg-transparent border-none cursor-pointer" 
              onClick={() => {
                scrollToSection('features');
                setIsMenuOpen(false);
              }}
            >
              Features
            </button>
            <button 
              className="text-brand-dark hover:text-brand-primary py-2 transition-colors text-left w-full bg-transparent border-none cursor-pointer" 
              onClick={() => {
                scrollToSection('benefits');
                setIsMenuOpen(false);
              }}
            >
              Benefits
            </button>
            <button 
              className="text-brand-dark hover:text-brand-primary py-2 transition-colors text-left w-full bg-transparent border-none cursor-pointer" 
              onClick={() => {
                scrollToSection('testimonials');
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </button>
            <button 
              className="text-brand-dark hover:text-brand-primary py-2 transition-colors text-left w-full bg-transparent border-none cursor-pointer" 
              onClick={() => {
                scrollToSection('pricing');
                setIsMenuOpen(false);
              }}
            >
              Pricing
            </button>
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <button className="btn-ghost w-full" onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}>Login</button>
              <button className="btn-primary w-full" onClick={() => {
                handleStartFreeTrial();
                setIsMenuOpen(false);
              }}>Start Free Trial</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
