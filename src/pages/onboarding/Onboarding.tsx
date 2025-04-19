
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import ConnectWhatsApp from "@/components/onboarding/ConnectWhatsApp";
import SelectTemplate from "@/components/onboarding/SelectTemplate";
import OnboardingComplete from "@/components/onboarding/OnboardingComplete";
import { scrollToSection } from "@/utils/scrollUtils";
import { z } from "zod";

// Define the WhatsApp data type to match the FormData from ConnectWhatsApp
type WhatsAppData = {
  phoneNumber: string;
  apiKey: string;
  provider: "360Dialog" | "Wati" | "Twilio" | "Other";
};

const Onboarding = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [whatsappData, setWhatsappData] = useState<WhatsAppData>({
    phoneNumber: "",
    apiKey: "",
    provider: "360Dialog"
  });
  const [selectedTemplate, setSelectedTemplate] = useState({
    industry: "",
    templateId: "",
    templateName: ""
  });

  // Redirect if not logged in or email not verified
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (!currentUser.emailVerified) {
      navigate("/verify-email");
    } else if (currentUser.onboardingComplete) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStep(prev => prev - 1);
  };

  const handleWhatsAppSubmit = (data: WhatsAppData) => {
    setWhatsappData(data);
    handleNext();
  };

  const handleTemplateSelect = (data: typeof selectedTemplate) => {
    setSelectedTemplate(data);
    handleNext();
  };

  const handleComplete = () => {
    // In a real app, you would update the user's profile here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <OnboardingHeader currentStep={currentStep} />
      
      <main className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        {currentStep === 1 && (
          <ConnectWhatsApp 
            initialData={whatsappData} 
            onSubmit={handleWhatsAppSubmit} 
          />
        )}
        
        {currentStep === 2 && (
          <SelectTemplate 
            initialData={selectedTemplate}
            onSubmit={handleTemplateSelect}
            onBack={handleBack}
            preferredLanguage={currentUser?.preferredLanguage || "English"}
          />
        )}
        
        {currentStep === 3 && (
          <OnboardingComplete 
            whatsappData={whatsappData}
            selectedTemplate={selectedTemplate}
            onBack={handleBack}
            onComplete={handleComplete}
          />
        )}
      </main>
    </div>
  );
};

export default Onboarding;
