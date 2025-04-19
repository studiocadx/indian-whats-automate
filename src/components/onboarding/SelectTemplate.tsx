
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, ArrowRight, Check, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample template data - in a real app, this would come from an API
const TEMPLATES = [
  {
    id: "grocery-basic",
    name: "Basic Grocery Store",
    industry: "Grocery",
    description: "Essential automated responses for grocery stores, including hours, product availability, and order placement.",
    keywords: ["hours", "products", "order", "delivery", "payment"],
    popular: true,
    languages: ["English", "Hindi", "Tamil"]
  },
  {
    id: "grocery-premium",
    name: "Premium Grocery Store",
    industry: "Grocery",
    description: "Advanced automation with inventory integration, loyalty program management, and personalized recommendations.",
    keywords: ["inventory", "loyalty", "recommendations", "subscription", "discount"],
    popular: false,
    languages: ["English", "Hindi"]
  },
  {
    id: "salon-basic",
    name: "Basic Salon & Spa",
    industry: "Salon",
    description: "Essential automated responses for salons, including services, pricing, appointment booking, and cancellation.",
    keywords: ["services", "prices", "appointment", "cancel", "location"],
    popular: true,
    languages: ["English", "Hindi", "Tamil"]
  },
  {
    id: "salon-premium",
    name: "Premium Salon & Spa",
    industry: "Salon",
    description: "Advanced automation with stylist selection, digital catalogs, loyalty rewards, and personalized beauty tips.",
    keywords: ["stylist", "catalog", "rewards", "tips", "packages"],
    popular: false,
    languages: ["English", "Hindi"]
  },
  {
    id: "education-basic",
    name: "Basic Education Institute",
    industry: "Education",
    description: "Essential automated responses for tuition centers and schools, including course information, schedules, and fee details.",
    keywords: ["courses", "schedule", "fees", "admission", "faculty"],
    popular: true,
    languages: ["English", "Hindi", "Tamil"]
  },
  {
    id: "restaurant-basic",
    name: "Basic Restaurant",
    industry: "Restaurant",
    description: "Essential automated responses for restaurants, including menu items, reservations, and takeaway orders.",
    keywords: ["menu", "reservation", "takeaway", "special", "hours"],
    popular: true,
    languages: ["English", "Hindi", "Tamil"]
  }
];

interface SelectTemplateProps {
  initialData: {
    industry: string;
    templateId: string;
    templateName: string;
  };
  onSubmit: (data: { industry: string; templateId: string; templateName: string }) => void;
  onBack: () => void;
  preferredLanguage: string;
}

const SelectTemplate = ({ initialData, onSubmit, onBack, preferredLanguage }: SelectTemplateProps) => {
  const [selectedIndustry, setSelectedIndustry] = useState(initialData.industry || "Grocery");
  const [selectedTemplate, setSelectedTemplate] = useState(initialData.templateId || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Get all unique industries from templates
  const industries = Array.from(new Set(TEMPLATES.map(template => template.industry)));
  
  // Filter templates by industry and search term
  const filteredTemplates = TEMPLATES.filter(template => 
    template.industry === selectedIndustry && 
    (searchTerm === "" || 
     template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     template.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  // Check if selected template is valid for preferred language
  useEffect(() => {
    if (selectedTemplate) {
      const template = TEMPLATES.find(t => t.id === selectedTemplate);
      if (template && !template.languages.includes(preferredLanguage)) {
        // Reset selection if language not supported
        setSelectedTemplate("");
      }
    }
  }, [selectedTemplate, preferredLanguage]);

  const handleSubmit = async () => {
    if (!selectedTemplate) return;
    
    const template = TEMPLATES.find(t => t.id === selectedTemplate);
    if (!template) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    onSubmit({
      industry: template.industry,
      templateId: template.id,
      templateName: template.name
    });
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    setSelectedTemplate("");
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <AnimatedSection className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Select Your Chatbot Template</h1>
        <p className="mt-2 text-lg text-gray-600">
          Choose a template that best fits your business needs
        </p>
      </AnimatedSection>

      <div className="mb-6">
        <Tabs defaultValue={selectedIndustry} onValueChange={handleIndustryChange}>
          <TabsList className="flex flex-wrap justify-center">
            {industries.map(industry => (
              <TabsTrigger key={industry} value={industry}>
                {industry}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <Input
          type="text"
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map(template => {
            const isSelected = selectedTemplate === template.id;
            const isLanguageSupported = template.languages.includes(preferredLanguage);
            
            return (
              <Card
                key={template.id}
                className={`p-4 cursor-pointer transition-all ${
                  isSelected 
                    ? 'ring-2 ring-brand-primary border-transparent' 
                    : 'hover:shadow-md'
                } ${!isLanguageSupported ? 'opacity-60' : ''}`}
                onClick={() => isLanguageSupported && setSelectedTemplate(template.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg flex items-center">
                      {template.name}
                      {template.popular && (
                        <span className="ml-2 text-xs bg-brand-accent text-white px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                  </div>
                  {isSelected && (
                    <div className="h-6 w-6 rounded-full bg-brand-primary flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {template.keywords.map(keyword => (
                    <span key={keyword} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                {!isLanguageSupported && (
                  <div className="mt-3 text-sm text-red-600">
                    Not available in {preferredLanguage}
                  </div>
                )}
                
                <div className="mt-3 text-xs text-gray-500">
                  Available in: {template.languages.join(", ")}
                </div>
              </Card>
            );
          })
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No templates found. Try another search term or industry.</p>
          </div>
        )}
      </div>

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
          disabled={!selectedTemplate || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default SelectTemplate;
