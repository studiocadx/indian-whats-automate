
import { MessageSquare, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import ButtonWithLoading from "./ButtonWithLoading";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartFreeTrial = () => {
    navigate("/signup");
  };

  const handleWhatsAppDemo = () => {
    // In a real app, this would open a WhatsApp link or show a demo
    window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20a%20demo", "_blank");
  };

  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-whatsapp/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <AnimatedSection className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Grow Your Business with <span className="text-brand-primary">WhatsApp Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 max-w-lg">
              Save time, increase sales, and delight customers in minutes with our no-code platform designed for Indian SMEs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonWithLoading 
                className="btn-primary flex items-center justify-center gap-2"
                onClick={handleStartFreeTrial}
              >
                <span>Start Free Trial</span>
                <Send size={18} />
              </ButtonWithLoading>
              <ButtonWithLoading 
                className="btn-whatsapp"
                onClick={handleWhatsAppDemo}
              >
                <MessageSquare size={20} className="mr-2" /> 
                See Demo on WhatsApp
              </ButtonWithLoading>
            </div>
            <div className="flex items-center gap-4 pt-4 text-sm text-brand-dark/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <p>Join <span className="font-semibold text-brand-dark">2,500+</span> Indian businesses already growing with WhatsAutomate</p>
            </div>
          </AnimatedSection>

          {/* Right Content - Phone Mockup */}
          <AnimatedSection className="w-full md:w-1/2 flex justify-center md:justify-end" delay={300}>
            <div className="relative w-80 md:w-96 bg-white rounded-3xl shadow-2xl border-8 border-brand-dark/10 overflow-hidden animate-float">
              {/* Phone Header */}
              <div className="bg-brand-whatsapp text-white p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xl font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-medium">Grocery Store</p>
                    <p className="text-xs opacity-80">WhatsApp Business</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-[420px] bg-[#e5ddd5] p-4 overflow-y-auto relative">
                <div className="space-y-3">
                  {/* Customer Message */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-sm">
                      <p>Hi, do you have Amul butter in stock?</p>
                      <p className="text-xs text-right text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </div>

                  {/* Auto Response */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[70%] shadow-sm">
                      <p>Yes! We have Amul butter in stock (100g, 200g, 500g). Would you like to place an order?</p>
                      <p className="text-xs text-right text-gray-500 mt-1">10:30 AM</p>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg p-3 max-w-[70%] shadow-sm">
                      <p>Yes, I'll take 2 packs of 200g</p>
                      <p className="text-xs text-right text-gray-500 mt-1">10:31 AM</p>
                    </div>
                  </div>

                  {/* Auto Response with Payment */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] rounded-lg p-3 max-w-[70%] shadow-sm">
                      <p className="mb-2">Great! Here's your order:</p>
                      <div className="bg-white/60 rounded-md p-2 mb-2">
                        <p className="font-medium">Order #12345</p>
                        <p>2x Amul Butter 200g</p>
                        <p className="font-semibold mt-1">Total: ₹180</p>
                      </div>
                      <div className="bg-brand-accent text-white py-2 px-3 rounded-md text-center font-medium">
                        Pay Now with UPI
                      </div>
                      <p className="text-xs text-right text-gray-500 mt-1">10:32 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
