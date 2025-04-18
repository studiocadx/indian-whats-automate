
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "1",
    title: "Register & Connect WhatsApp",
    description: "Sign up in 30 seconds and connect your WhatsApp Business number through our guided setup.",
    image: "/placeholder.svg"
  },
  {
    number: "2",
    title: "Choose Your Templates",
    description: "Select from industry-specific templates designed for Indian businesses like yours.",
    image: "/placeholder.svg"
  },
  {
    number: "3",
    title: "Customize & Launch",
    description: "Personalize your automation flows with our no-code editor and go live in minutes.",
    image: "/placeholder.svg"
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Get started in just 10 minutes with our simple 3-step process
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 relative">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 200} className="flex-1 relative">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-brand-dark/70 mb-6">{step.description}</p>
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4">
                  <img src={step.image} alt={step.title} className="max-h-full" />
                </div>
              </div>
              
              {/* Connector arrow for all but the last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-brand-primary" size={24} />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn-primary">Start Your 14-Day Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
