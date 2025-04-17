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
import { ArrowRight, Check, Loader2 } from "lucide-react";
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
  const { data: slotsData, isLoading: slotsLoading } = useQuery({
    queryKey: ['/api/booking-slots'],
  });
  
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
    <section id="book" className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Book a Strategy Session" 
          description="Take the first step toward transforming your business with AI. Schedule a one-on-one strategy session to discuss your challenges and opportunities."
          className="text-white [&>p]:text-primary-100"
        />
        
        <motion.div 
          className="bg-white rounded-xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <div className="space-y-4 mb-8">
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
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-100 flex items-center justify-center mr-3 mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-secondary-600">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-secondary-600">
                  "The strategy session with Pete provided more value than months of internal discussions. His ability to quickly understand our business and identify AI opportunities was remarkable."
                </p>
                <p className="text-sm font-medium mt-2">— Recent client</p>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-xl font-semibold mb-6">Select a Date & Time</h4>
              
              {slotsLoading ? (
                <div className="flex justify-center items-center py-10">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : slots.length === 0 ? (
                <div className="text-center py-6 border border-dashed border-secondary-300 rounded-lg">
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
                        className={`text-center p-4 border rounded cursor-pointer transition-colors ${
                          isSelected 
                            ? 'border-primary bg-primary-50' 
                            : 'border-secondary-200 hover:border-primary hover:bg-primary-50'
                        }`}
                        onClick={() => selectTimeSlot(slot.date, firstTime)}
                      >
                        <p className="font-medium mb-2">{slot.date}</p>
                        <p className="text-sm text-secondary-500">{firstTime}</p>
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
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
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
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
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
                        <FormLabel>What challenges are you looking to address?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your goals and challenges"
                            className="resize-none"
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
                    className="w-full" 
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                        Processing
                      </>
                    ) : (
                      <>
                        Confirm Booking <ArrowRight className="ml-2 h-4 w-4" />
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
