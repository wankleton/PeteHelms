import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Loader2, 
  Send, 
  Linkedin, 
  Twitter, 
  Github, 
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { contactInfo } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Please provide a detailed message")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  // Set up form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  // Handle form submission
  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-accent-highlight/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-accent-gradient-start/10 blur-3xl rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>Contact <span className="gradient-text">Me</span></>}
          description="Questions or ready to start? Reach out."
        />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="bg-midnight text-white p-8 rounded-xl shadow-xl relative overflow-hidden">
                {/* Background pattern for card */}
                <div className="absolute inset-0 bg-data-grid opacity-20"></div>
                <div className="absolute top-0 -right-20 w-40 h-40 bg-accent-gradient-start/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 -left-20 w-40 h-40 bg-accent-gradient-end/20 blur-3xl rounded-full"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="text-secondary-300 mb-8">Ready for AI results? Connect with me.</p>
                  
                  <div className="space-y-6 mb-8">
                    <motion.div 
                      className="flex items-start group"
                      variants={fadeIn}
                      custom={0.1}
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 group-hover:bg-accent-gradient-start/20 flex items-center justify-center mr-4 transition-colors">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-200 mb-1">Email</p>
                        <a 
                          href={`mailto:${contactInfo.email}`} 
                          className="text-white hover:text-accent-highlight transition-colors group-hover:underline"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start group"
                      variants={fadeIn}
                      custom={0.2}
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 group-hover:bg-accent-gradient-start/20 flex items-center justify-center mr-4 transition-colors">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-200 mb-1">Phone</p>
                        <a 
                          href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                          className="text-white hover:text-accent-highlight transition-colors group-hover:underline"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start group"
                      variants={fadeIn}
                      custom={0.3}
                    >
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/10 group-hover:bg-accent-gradient-start/20 flex items-center justify-center mr-4 transition-colors">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-200 mb-1">Location</p>
                        <p className="text-white">{contactInfo.location}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/20">
                    <p className="font-medium text-white mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-gradient-start hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-gradient-end hover:text-white transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href="https://medium.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent-highlight hover:text-midnight transition-colors"
                        aria-label="Medium"
                      >
                        <MessageSquare size={18} />
                      </a>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-midnight transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-secondary-50 p-6 rounded-lg border border-secondary-200 hidden lg:block">
                <h4 className="text-lg font-bold mb-3 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-2" />
                  Quick Response Guarantee
                </h4>
                <p className="text-secondary-600">
                  24-hour response guaranteed on business days.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="lg:col-span-7"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-xl p-8 shadow-lg border border-secondary-100">
                  <h3 className="text-2xl font-bold text-midnight mb-6">Message Me</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-midnight font-medium">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="border-secondary-200 focus:border-accent-gradient-start" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-midnight font-medium">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              {...field} 
                              className="border-secondary-200 focus:border-accent-gradient-start" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-midnight font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            {...field} 
                            className="border-secondary-200 focus:border-accent-gradient-start" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="text-midnight font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message"
                            className="resize-none min-h-[150px] border-secondary-200 focus:border-accent-gradient-start"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-midnight hover:bg-midnight-800 text-white transition-colors group"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Sending...
                      </>
                    ) : (
                      <>
                        Send <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
