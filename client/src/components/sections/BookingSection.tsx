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
    <section id="book" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-slate-950">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading 
            title={
              <>Book Your <span className="text-slate-900 dark:text-white font-bold">Innovation Session</span></>
            }
            description="Strategic consultation that transforms businesses."
            className="text-slate-900 dark:text-white [&>p]:text-slate-600 dark:[&>p]:text-slate-300 max-w-3xl"
          />
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 sm:mt-20 md:mt-24"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-8 text-slate-900 dark:text-white leading-tight">
                Get Your Innovation Strategy
              </h3>
              
              <div className="space-y-4 mb-12">
                {[
                  "Identify breakthrough opportunities",
                  "Get a custom innovation roadmap",
                  "Receive proven growth strategies",
                  "60 minutes + follow-up materials"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full mr-4"></div>
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              
              {/* Client testimonial */}
              <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4">
                  "The strategy session with Pete provided more value than months of internal discussions. His ability to quickly understand our business and identify AI opportunities was remarkable."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Recent client</p>
              </div>
            </div>
            
            <div className="md:col-span-3 relative">
              <h4 className="text-2xl font-light mb-8 flex items-center text-slate-900 dark:text-white">
                <Calendar className="h-6 w-6 mr-3 text-gray-900 dark:text-white" />
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
                  <Loader2 className="h-10 w-10 animate-spin text-gray-900 dark:text-white mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">Loading available slots...</p>
                </motion.div>
              ) : slots.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-3" />
                  <p className="text-gray-600 dark:text-gray-300 mb-2">No available slots at the moment.</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm">Please check back later or contact directly.</p>
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
                            <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-900 dark:text-white" />
                            <p className="text-sm text-gray-700 dark:text-gray-200">{firstTime}</p>
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
                          <FormLabel className="text-gray-900 dark:text-white font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white bg-white dark:bg-gray-950" 
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
                          <FormLabel className="text-gray-900 dark:text-white font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              {...field} 
                              className="border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white bg-white dark:bg-gray-950" 
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
                        <FormLabel className="text-gray-900 dark:text-white font-medium flex items-center">
                          <Building className="h-4 w-4 mr-1.5 text-gray-900 dark:text-white" />
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            {...field} 
                            className="border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white bg-white dark:bg-gray-950" 
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
                        <FormLabel className="text-gray-900 dark:text-white font-medium flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1.5 text-gray-900 dark:text-white" />
                          What challenges are you looking to address?
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals and challenges"
                            className="resize-none border-gray-200 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white bg-white dark:bg-gray-950"
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
                      className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
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
