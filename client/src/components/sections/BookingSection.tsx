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
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

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
    <section id="book" className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-data-grid opacity-15"></div>
      <div className="absolute inset-0 bg-noise-subtle opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute -top-32 -right-32 w-96 h-96 bg-accent-gradient-start/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          repeatType: 'reverse',
        }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-gradient-end/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: 'reverse',
          delay: 2
        }}
      />
      
      {/* Subtle animated circuit pattern for tech feel */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading 
            title={
              <>Book Your <span className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent font-black">Strategy Session</span></>
            }
            description="Ready to transform your business with AI? Schedule a personalized strategy session to discuss your challenges and unlock new opportunities."
            className="text-slate-900 dark:text-white [&>p]:text-slate-600 dark:[&>p]:text-slate-300 max-w-3xl"
          />
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 border border-slate-200 dark:border-slate-700 overflow-hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle background patterns */}
          <div className="absolute inset-0 bg-noise-subtle opacity-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 relative z-10">
            <div className="md:col-span-2">
              {/* Animated badge */}
              <motion.div 
                className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-6 border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-accent-gradient-start mr-2"></div>
                Premium Strategy Session
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-black mb-8 text-slate-900 dark:text-white leading-tight">
                Transform Your AI Strategy
              </h3>
              
              {/* Session benefits with enhanced styling */}
              <div className="space-y-5 mb-8">
                {[
                  "In-depth discussion of your business goals and challenges",
                  "Custom assessment of AI opportunities for your organization",
                  "Strategic recommendations and implementation roadmap",
                  "60-minute video call with follow-up materials and action plan"
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start perspective-1000"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                    whileHover={{ scale: 1.02, translateZ: 10 }}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent-gradient-start flex items-center justify-center mr-4 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Client testimonial with enhanced card */}
              <motion.div 
                className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent-highlight/50 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-accent-gradient-end/50 blur-xl"></div>
                
                <div className="absolute top-0 right-0">
                  <svg width="70" height="70" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
                    <path d="M17.1 24.5H12.5L16.1 16.9H11.5V10.9H21.1V17.9L17.1 24.5ZM28.6 24.5H24L27.6 16.9H23V10.9H32.6V17.9L28.6 24.5Z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <p className="text-secondary-600 dark:text-secondary-200 italic leading-relaxed mb-4">
                    "The strategy session with Pete provided more value than months of internal discussions. His ability to quickly understand our business and identify AI opportunities was remarkable."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end shadow-md p-[2px] mr-3">
                      <div className="w-full h-full rounded-full bg-white dark:bg-midnight-700 flex items-center justify-center">
                        <svg className="w-4 h-4 text-accent-gradient-start" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-midnight-900 dark:text-white">Recent client</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-3 relative">
              {/* Subtle decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent-highlight/20 rounded-full blur-lg"></div>
              
              <h4 className="text-2xl font-black mb-8 flex items-center text-slate-900 dark:text-white">
                <Calendar className="h-6 w-6 mr-3 text-accent-gradient-start" />
                Select a Date & Time
              </h4>
              
              {/* Timeslot selection with enhanced loading states */}
              {slotsLoading ? (
                <motion.div 
                  className="flex flex-col justify-center items-center py-12 bg-secondary-50/50 dark:bg-midnight-700/30 rounded-xl border border-secondary-100 dark:border-secondary-700"
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                    scale: [0.98, 1, 0.98] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Loader2 className="h-10 w-10 animate-spin text-accent-gradient-start mb-3" />
                  <p className="text-secondary-500 dark:text-secondary-300">Loading available slots...</p>
                </motion.div>
              ) : slots.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-secondary-200 dark:border-secondary-700 rounded-xl bg-secondary-50/50 dark:bg-midnight-700/30">
                  <Calendar className="h-12 w-12 mx-auto text-secondary-300 dark:text-secondary-600 mb-3" />
                  <p className="text-secondary-600 dark:text-secondary-300 mb-2">No available slots at the moment.</p>
                  <p className="text-secondary-400 dark:text-secondary-500 text-sm">Please check back later or contact directly.</p>
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                >
                  {slots.map((slot, index) => {
                    const availableTimes = slot.times;
                    if (availableTimes.length === 0) return null;
                    
                    // Show the first available time 
                    const firstTime = availableTimes[0];
                    const isSelected = selectedDate === slot.date;
                    
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5,
                          delay: index * 0.1
                        }}
                        whileHover={{ 
                          scale: isSelected ? 1.03 : 1.05, 
                          y: -3,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                        }}
                        className={`
                          relative overflow-hidden p-4 sm:p-5 border-2 rounded-xl cursor-pointer
                          transition-all duration-300 transform-gpu
                          ${isSelected 
                            ? 'border-accent-gradient-start bg-accent-highlight/10 dark:bg-accent-highlight/5 shadow-md' 
                            : 'border-secondary-200 dark:border-secondary-700 hover:border-accent-highlight dark:hover:border-accent-highlight hover:bg-secondary-50/80 dark:hover:bg-midnight-700/50'
                          }
                        `}
                        onClick={() => selectTimeSlot(slot.date, firstTime)}
                      >
                        {/* Selected indicator */}
                        {isSelected && (
                          <motion.div 
                            className="absolute top-0 right-0 h-8 w-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              damping: 20
                            }}
                          >
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[25px] border-r-[25px] border-b-0 border, border-l-0 border-solid border-t-accent-gradient-end border-r-accent-gradient-end/0"></div>
                            <Check className="absolute top-0.5 right-0.5 h-3.5 w-3.5 text-white" />
                          </motion.div>
                        )}
                        
                        <div className="flex flex-col items-center">
                          <p className="font-semibold mb-2 text-midnight dark:text-white text-center">{slot.date}</p>
                          <div className="flex items-center justify-center px-3 py-1.5 bg-secondary-100/80 dark:bg-midnight-600/50 rounded-full">
                            <Clock className="h-3.5 w-3.5 mr-1.5 text-accent-gradient-start" />
                            <p className="text-sm text-secondary-700 dark:text-secondary-200">{firstTime}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
              
              {/* Form with enhanced styling */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-midnight dark:text-white font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="border-secondary-200 dark:border-secondary-700 focus:border-accent-gradient-start dark:focus:border-accent-gradient-start bg-white/70 dark:bg-midnight-700/50 backdrop-blur-sm" 
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
                          <FormLabel className="text-midnight dark:text-white font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              {...field} 
                              className="border-secondary-200 dark:border-secondary-700 focus:border-accent-gradient-start dark:focus:border-accent-gradient-start bg-white/70 dark:bg-midnight-700/50 backdrop-blur-sm" 
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
                        <FormLabel className="text-midnight dark:text-white font-medium flex items-center">
                          <Building className="h-4 w-4 mr-1.5 text-accent-gradient-start" />
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            {...field} 
                            className="border-secondary-200 dark:border-secondary-700 focus:border-accent-gradient-start dark:focus:border-accent-gradient-start bg-white/70 dark:bg-midnight-700/50 backdrop-blur-sm" 
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
                        <FormLabel className="text-midnight dark:text-white font-medium flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1.5 text-accent-gradient-start" />
                          What challenges are you looking to address?
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals and challenges"
                            className="resize-none border-secondary-200 dark:border-secondary-700 focus:border-accent-gradient-start dark:focus:border-accent-gradient-start bg-white/70 dark:bg-midnight-700/50 backdrop-blur-sm"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Enhanced submit button with animation */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white hover:brightness-110 transition-all duration-300 shadow-glow-accent font-medium group"
                      disabled={bookingMutation.isPending}
                    >
                      {bookingMutation.isPending ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                          <span>Processing your booking...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <span>Confirm Booking</span>
                          <div className="relative ml-2 w-5">
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity, 
                                repeatType: 'loop',
                                ease: "easeInOut"
                              }}
                            >
                              <ArrowRight className="h-5 w-5" />
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
