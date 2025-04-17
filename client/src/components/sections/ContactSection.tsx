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
import { Mail, Phone, MapPin, Loader2, Layers, Linkedin, Twitter, Github, MessageSquare } from "lucide-react";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { contactInfo } from "@/lib/constants";

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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-secondary-600 mb-10">Have questions or want to discuss potential collaboration? Reach out directly.</p>
            
            <div className="space-y-6 mb-10">
              <motion.div 
                className="flex items-start"
                variants={fadeIn}
                custom={0.1}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={fadeIn}
                custom={0.2}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={fadeIn}
                custom={0.3}
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-secondary-600">{contactInfo.location}</p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <p className="font-medium mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://medium.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Medium"
                >
                  <MessageSquare size={18} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-10 w-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-secondary-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
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
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Message subject" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message"
                          className="resize-none"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Layers className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
