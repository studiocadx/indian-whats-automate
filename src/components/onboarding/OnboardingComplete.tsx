
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, CheckCircle, Loader2, ExternalLink } from "lucide-react";

interface OnboardingCompleteProps {
  whatsappData: {
    phoneNumber: string;
    apiKey: string;
    provider: string;
  };
  selectedTemplate: {
    industry: string;
    templateId: string;
    templateName: string;
  };
  onBack: () => void;
  onComplete: () => void;
}

const OnboardingComplete = ({ 
  whatsappData, 
  selectedTemplate, 
  onBack, 
  onComplete 
}: OnboardingCompleteProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    onComplete();
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <AnimatedSection className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Setup Complete!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your WhatsApp Business automation is ready to go
        </p>
      </AnimatedSection>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Setup Summary</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">WhatsApp Business</h3>
            <div className="mt-2 border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone Number</p>
                  <p className="mt-1">{whatsappData.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Connected via</p>
                  <p className="mt-1">{whatsappData.provider}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Chatbot Template</h3>
            <div className="mt-2 border border-gray-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="mt-1">{selectedTemplate.industry}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Template</p>
                  <p className="mt-1">{selectedTemplate.templateName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-blue-800">Watch the Quick Start Tutorial</h3>
            <p className="text-sm text-blue-600 mt-1">
              Learn how to customize your templates and manage your automated responses
            </p>
          </div>
          <Button
            variant="outline"
            className="shrink-0 border-blue-300 text-blue-700 hover:bg-blue-100"
          >
            Watch Tutorial
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Card>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <Button
          className="bg-brand-primary hover:bg-brand-primary/90"
          onClick={handleComplete}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Setting up your dashboard...
            </>
          ) : (
            "Go to Dashboard"
          )}
        </Button>
      </div>
    </div>
  );
};

export default OnboardingComplete;
