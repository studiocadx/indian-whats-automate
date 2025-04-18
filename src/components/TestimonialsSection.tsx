
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Doubled my orders in just one week! Customers love being able to browse our products and pay right in WhatsApp.",
    name: "Rajesh Kumar",
    business: "Grocery Store Owner, Mumbai",
    image: "/placeholder.svg"
  },
  {
    quote: "I'm saving at least 3 hours every day by automating appointment reminders and FAQs for my salon.",
    name: "Priya Singh",
    business: "Beauty Salon Owner, Delhi",
    image: "/placeholder.svg"
  },
  {
    quote: "The multilingual support helps me connect with students and parents in both Tamil and English. Amazing tool!",
    name: "Arun Mehta",
    business: "Tuition Center Director, Chennai",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
            Businesses across India are transforming their operations with WhatsAutomate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col h-full">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-4.418 0-8 3.582-8 8v12h8v-12h-4c0-2.209 1.791-4 4-4v-4zM26 8c-4.418 0-8 3.582-8 8v12h8v-12h-4c0-2.209 1.791-4 4-4v-4z" />
                  </svg>
                </div>
                <p className="text-lg mb-6 flex-1 italic text-brand-dark/80">{testimonial.quote}</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 mr-4 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-brand-dark/70">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
