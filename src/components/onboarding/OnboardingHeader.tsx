
import { Link } from "react-router-dom";
import { CheckCircle, Circle } from "lucide-react";

interface OnboardingHeaderProps {
  currentStep: number;
}

const OnboardingHeader = ({ currentStep }: OnboardingHeaderProps) => {
  const steps = [
    { id: 1, name: "Connect WhatsApp" },
    { id: 2, name: "Select Template" },
    { id: 3, name: "Complete Setup" }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-primary">WhatsAutomate</span>
          </Link>
          
          <div className="hidden md:flex items-center justify-center space-x-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                {step.id < currentStep ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : step.id === currentStep ? (
                  <div className="h-5 w-5 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs">
                    {step.id}
                  </div>
                ) : (
                  <Circle className="h-5 w-5 text-gray-300" />
                )}
                <span 
                  className={`ml-2 text-sm font-medium ${
                    step.id === currentStep 
                      ? 'text-brand-primary' 
                      : step.id < currentStep 
                        ? 'text-gray-900' 
                        : 'text-gray-500'
                  }`}
                >
                  {step.name}
                </span>
                {step.id !== steps.length && (
                  <svg className="ml-4 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          
          <div className="md:hidden">
            <span className="text-sm font-medium text-brand-primary">
              Step {currentStep} of {steps.length}
            </span>
          </div>
        </div>
      </div>
      
      {/* Mobile progress indicator */}
      <div className="md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-brand-primary h-2.5 rounded-full transition-all duration-500" 
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OnboardingHeader;
