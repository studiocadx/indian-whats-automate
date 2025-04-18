
import { 
  Clock, 
  FileType, 
  IndianRupee, 
  Sparkles, 
  Bell, 
  LayoutDashboard, 
  Users, 
  Languages 
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "Instant Onboarding",
    description: "Set up your WhatsApp automation in just 10 minutes with our guided process.",
    icon: Clock,
  },
  {
    title: "Pre-built Templates",
    description: "Ready-to-use templates for various industries including retail, services, and education.",
    icon: FileType,
  },
  {
    title: "In-chat Payments",
    description: "Accept UPI payments directly inside WhatsApp chats with automatic status updates.",
    icon: IndianRupee,
  },
  {
    title: "AI Smart Replies",
    description: "AI-powered responses that understand customer queries and respond intelligently.",
    icon: Sparkles,
  },
  {
    title: "Automated Reminders",
    description: "Schedule and send payment, appointment, and follow-up reminders automatically.",
    icon: Bell,
  },
  {
    title: "Mini CRM Dashboard",
    description: "Track customers, payments, and communications all in one mobile-friendly interface.",
    icon: LayoutDashboard,
  },
  {
    title: "Bulk Messaging",
    description: "Send personalized messages to multiple customers with built-in compliance tools.",
    icon: Users,
  },
  {
    title: "Multilingual Support",
    description: "Connect with customers in Hindi, Tamil, Telugu, and other Indian languages.",
    icon: Languages,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Indian SMEs</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Everything you need to automate and grow your business using WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="feature-card hover:border-brand-primary/20 group h-full">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-all">
                  <feature.icon className="text-brand-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-brand-dark/70">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
