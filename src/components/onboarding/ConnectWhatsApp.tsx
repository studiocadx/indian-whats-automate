
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Phone, Key, HelpCircle, ArrowRight, Loader2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define form schema with validation
const formSchema = z.object({
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  apiKey: z.string().min(1, "API key is required"),
  provider: z.enum(["360Dialog", "Wati", "Twilio", "Other"])
});

interface ConnectWhatsAppProps {
  initialData: {
    phoneNumber: string;
    apiKey: string;
    provider: string;
  };
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

const ConnectWhatsApp = ({ initialData, onSubmit }: ConnectWhatsAppProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("connect");

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: initialData.phoneNumber,
      apiKey: initialData.apiKey,
      provider: initialData.provider as "360Dialog" | "Wati" | "Twilio" | "Other"
    },
  });

  // Form submit handler
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // Simulate API validation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onSubmit(values);
  };

  return (
    <div className="max-w-3xl mx-auto w-full">
      <AnimatedSection className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Connect your WhatsApp Business Account</h1>
        <p className="mt-2 text-lg text-gray-600">
          Link your WhatsApp Business account to start automating messages
        </p>
      </AnimatedSection>

      <Tabs defaultValue="connect" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="connect">Connect Account</TabsTrigger>
          <TabsTrigger value="help">Need Help?</TabsTrigger>
        </TabsList>
        
        <TabsContent value="connect">
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="provider"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>WhatsApp Business API Provider</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4 flex-wrap"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="360Dialog" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                360Dialog
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Wati" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Wati
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Twilio" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Twilio
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="Other" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Other
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormDescription>
                          Select your WhatsApp Business API provider
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                                  <HelpCircle className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">
                                  If you don't have a WhatsApp Business API provider yet, click the "Need Help?" tab for guidance.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WhatsApp Business Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input 
                                {...field} 
                                placeholder="+91 1234567890" 
                                className="pl-10"
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Include country code (e.g., +91 for India)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            API Key
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                                    <HelpCircle className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">
                                    The API key from your WhatsApp Business API provider. This is used to authenticate your requests.
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Key className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input 
                                {...field} 
                                type="password"
                                placeholder="••••••••••••••••" 
                                className="pl-10"
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Found in your provider's dashboard
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-brand-primary hover:bg-brand-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="help">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">How to get started with WhatsApp Business API</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Follow these steps to set up your WhatsApp Business API:
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm mr-2">1</span>
                      Create an account with a WhatsApp Business API provider
                    </h4>
                    <p className="text-sm ml-8 mt-1">
                      We recommend 360Dialog or Wati for Indian businesses. Click the links below to sign up:
                    </p>
                    <div className="ml-8 mt-2 space-y-2">
                      <a 
                        href="https://www.360dialog.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        360Dialog <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                      <a 
                        href="https://www.wati.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Wati <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm mr-2">2</span>
                      Verify your business and phone number
                    </h4>
                    <p className="text-sm ml-8 mt-1">
                      Complete the verification process required by WhatsApp. This typically involves providing your business details and verifying your phone number.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm mr-2">3</span>
                      Get your API key
                    </h4>
                    <p className="text-sm ml-8 mt-1">
                      Once your account is set up, get your API key from your provider's dashboard. This key is used to authenticate API requests.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center">
                      <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm mr-2">4</span>
                      Enter details in WhatsAutomate
                    </h4>
                    <p className="text-sm ml-8 mt-1">
                      Return to the "Connect Account" tab and enter your WhatsApp Business phone number and API key to complete the integration.
                    </p>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <h4 className="font-medium text-amber-800 flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-amber-600" />
                    Need more help?
                  </h4>
                  <p className="text-sm text-amber-700 mt-1">
                    If you're having trouble connecting your WhatsApp Business account, contact our support team at support@whatsautomate.com or refer to our detailed guide.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-amber-700 p-0 h-auto mt-2"
                    onClick={() => setActiveTab("connect")}
                  >
                    Back to connection form
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConnectWhatsApp;
