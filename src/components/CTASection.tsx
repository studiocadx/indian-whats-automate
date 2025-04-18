
import { MessageSquare } from "lucide-react";
import ButtonWithLoading from "./ButtonWithLoading";

const CTASection = () => {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="container-custom">
        <div className="bg-brand-primary/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your WhatsApp Business?</h2>
              <p className="text-lg text-white/80 mb-6 md:max-w-xl">
                Join thousands of Indian SMEs who are saving time, boosting sales, and improving customer satisfaction with WhatsAutomate.
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10-minute setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No technical skills needed</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>14-day free trial</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex flex-col gap-4">
              <ButtonWithLoading className="bg-white text-brand-primary hover:bg-white/90 font-semibold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg text-lg">
                Start Your Free Trial
              </ButtonWithLoading>
              <ButtonWithLoading className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-lg">
                <MessageSquare size={20} />
                Schedule a Demo
              </ButtonWithLoading>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
