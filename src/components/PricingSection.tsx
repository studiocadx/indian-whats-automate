
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "per month",
    description: "Perfect for small businesses just getting started",
    features: [
      "1 WhatsApp Business number",
      "Up to 1,000 messages/month",
      "Basic chatbot templates",
      "UPI payment links",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Growth",
    price: "₹2,499",
    period: "per month",
    description: "For growing businesses with moderate message volume",
    features: [
      "1 WhatsApp Business number",
      "Up to 5,000 messages/month",
      "All industry templates",
      "UPI & Razorpay integration",
      "AI smart replies",
      "Bulk messaging",
      "Basic analytics",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "₹5,999",
    period: "per month",
    description: "For established businesses with high messaging needs",
    features: [
      "3 WhatsApp Business numbers",
      "Up to 20,000 messages/month",
      "All industry templates",
      "UPI & Razorpay integration",
      "Advanced AI capabilities",
      "Bulk messaging & scheduling",
      "Advanced analytics & reporting",
      "Multi-user access",
      "Custom integrations",
      "Priority phone & email support",
    ],
    cta: "Contact Sales",
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div 
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg h-full ${plan.highlight ? 'border-2 border-brand-primary relative' : 'border border-gray-100'}`}
              >
                {plan.highlight && (
                  <div className="bg-brand-primary text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-brand-dark/70 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-brand-dark/70 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-brand-primary shrink-0 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${plan.highlight ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'bg-brand-secondary text-white hover:bg-brand-secondary/90'}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12 text-brand-dark/70">
          <p>Need a custom solution? <a href="#" className="text-brand-primary font-medium">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
