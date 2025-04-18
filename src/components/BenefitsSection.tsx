
import { CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    title: "Save Hours Every Day",
    description: "Automate repetitive tasks like answering FAQs, sending price lists, and following up with customers.",
    list: [
      "Auto-reply to common questions 24/7",
      "Schedule and send messages in bulk",
      "Pre-program entire conversation flows"
    ]
  },
  {
    title: "Boost Sales & Revenue",
    description: "Make it easier for customers to browse products, place orders, and pay—all within WhatsApp.",
    list: [
      "Send catalogs and product images automatically",
      "Accept UPI payments with one click",
      "Send personalized offers based on purchase history"
    ]
  },
  {
    title: "Improve Customer Satisfaction",
    description: "Respond faster and more consistently to provide a better customer experience.",
    list: [
      "Reply to queries within seconds, not hours",
      "Maintain consistent messaging quality",
      "Speak to customers in their preferred language"
    ]
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section bg-brand-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How WhatsAutomate Benefits Your Business</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Our platform is specifically designed to help Indian SMEs succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full">
                <h3 className="text-2xl font-semibold mb-3 text-brand-primary">{benefit.title}</h3>
                <p className="text-brand-dark/70 mb-6">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.list.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-brand-primary shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
