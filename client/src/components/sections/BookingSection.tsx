import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/ui/section-heading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Loader2, Calendar, Clock, Building, MessageSquare } from "lucide-react";
import { fadeIn, fadeInUp } from "@/lib/animations";

// Form validation schema
const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().optional(),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time")
});

type BookingFormValues = z.infer<typeof bookingSchema>;

// Slot type for appointment slots
type TimeSlot = {
  date: string;
  times: string[];
};

export default function BookingSection() {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  // Fetch available booking slots
  const { data, isLoading: slotsLoading } = useQuery({
    queryKey: ['/api/booking-slots'],
  });
  
  // Type assertion for slots
  interface SlotResponse {
    slots: TimeSlot[];
  }
  
  const slotsData = data as SlotResponse | undefined;
  const slots: TimeSlot[] = slotsData?.slots || [];

  // Set up form
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      date: "",
      time: ""
    }
  });
  
  // Handle time slot selection
  const selectTimeSlot = (date: string, time: string) => {
    form.setValue("date", date);
    form.setValue("time", time);
    setSelectedDate(date);
  };
  
  // Handle form submission
  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormValues) => {
      const response = await apiRequest('POST', '/api/bookings', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking confirmed!",
        description: "Your strategy session has been scheduled.",
      });
      form.reset();
      setSelectedDate(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  });
  
  const onSubmit = (data: BookingFormValues) => {
    bookingMutation.mutate(data);
  };

  return (
    <section id="book" className="py-16 md:py-24 bg-midnight relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-data-grid opacity-20"></div>
      
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-gradient-start/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-gradient-end/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={<>Book a <span className="gradient-text">Strategy Session</span></>}
          description="Take the first step toward transforming your business with AI. Schedule a one-on-one strategy session to discuss your challenges and opportunities."
          className="text-white [&>p]:text-secondary-300"
        />
        
        <motion.div 
          className="bg-white rounded-xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="inline-flex items-center rounded-full bg-accent-highlight/20 px-3 py-1 text-sm font-medium text-midnight mb-3">
                <Check className="h-4 w-4 mr-1" /> What's Included
              </div>
              <h3 className="text-2xl font-bold mb-5 text-midnight">Transform Your AI Strategy</h3>
              
              <div className="space-y-5 mb-8">
                {[
                  "In-depth discussion of your business goals and challenges",
                  "Initial assessment of AI opportunities specific to your organization",
                  "Recommendations for next steps and potential engagement options",
                  "60-minute video call with follow-up materials"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    variants={fadeIn}
                    custom={index * 0.1}
                  >
                    <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end flex items-center justify-center mr-3 mt-0.5 shadow-md">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                    <p className="text-secondary-700">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 bg-secondary-50 rounded-xl border border-secondary-200 relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent-highlight/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-highlight"></div>
                </div>
                <p className="text-secondary-600 italic">
                  "The strategy session with Pete provided more value than months of internal discussions. His ability to quickly understand our business and identify AI opportunities was remarkable."
                </p>
                <p className="text-sm font-medium mt-2">— Recent client</p>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-xl font-bold mb-6 flex items-center text-midnight">
                <Calendar className="h-5 w-5 mr-2 text-accent-gradient-start" />
                Select a Date & Time
              </h4>
              
              {slotsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <Loader2 className="h-8 w-8 animate-spin text-accent-gradient-start" />
                </div>
              ) : slots.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-secondary-200 rounded-lg bg-secondary-50">
                  <p className="text-secondary-600">No available slots at the moment. Please check back later.</p>
                </div>
              ) : (
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {slots.map((slot, index) => {
                    const availableTimes = slot.times;
                    if (availableTimes.length === 0) return null;
                    
                    // Show the first available time 
                    const firstTime = availableTimes[0];
                    const isSelected = selectedDate === slot.date;
                    
                    return (
                      <div 
                        key={index}
                        className={`text-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'border-accent-gradient-start bg-accent-highlight/10 shadow-md' 
                            : 'border-secondary-200 hover:border-accent-highlight hover:bg-secondary-50'
                        }`}
                        onClick={() => selectTimeSlot(slot.date, firstTime)}
                      >
                        <p className="font-semibold mb-2 text-midnight">{slot.date}</p>
                        <p className="text-sm text-secondary-600 flex items-center justify-center">
                          <Clock className="h-3.5 w-3.5 mr-1.5 text-secondary-400" />
                          {firstTime}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-midnight font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
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
                          <FormLabel className="text-midnight font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-midnight font-medium flex items-center">
                          <Building className="h-4 w-4 mr-1.5 text-secondary-400" />
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
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
                      <FormItem>
                        <FormLabel className="text-midnight font-medium flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1.5 text-secondary-400" />
                          What challenges are you looking to address?
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals and challenges"
                            className="resize-none border-secondary-200 focus:border-accent-gradient-start"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white hover:brightness-110 transition-all duration-300 shadow-lg"
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Processing
                      </>
                    ) : (
                      <>
                        Confirm Booking <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
