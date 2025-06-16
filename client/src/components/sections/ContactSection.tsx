import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function ContactSection() {
  return (
    <section id="book" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative mb-20 md:mb-24">
            <div className="absolute left-0 top-0 w-2 h-32 bg-black dark:bg-white rounded-full"></div>
            <div className="pl-12">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                BOOK A CALL
              </h2>
              <div className="w-16 h-1 bg-black dark:bg-white mb-6"></div>
              <p className="text-xl md:text-2xl text-black dark:text-white font-light leading-relaxed max-w-2xl">Would you like to explore this further?</p>
            </div>
          </div>
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
              <h3 className="text-4xl md:text-5xl font-bold mb-16 text-black dark:text-white leading-[0.9] tracking-tight relative">
                LET'S START SIMPLE
                <div className="absolute -bottom-4 left-0 w-20 h-1 bg-black dark:bg-white"></div>
              </h3>
              
              <div className="space-y-10 mb-20 text-xl md:text-2xl text-black dark:text-white leading-[1.6] font-light">
                <p>The best way to explore working together is to start with a conversation. No commitment, no pressure—just an opportunity to see if there's a fit.</p>
                <p>
                  During our call, I'll listen to your challenges, ask clarifying questions, and share my perspective on potential approaches. You'll walk away with at least one new way of thinking about your situation.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-bold mb-16 text-black dark:text-white tracking-tight relative">
                SCHEDULE YOUR CALL
                <div className="absolute -bottom-4 left-0 w-16 h-1 bg-black dark:bg-white"></div>
              </h4>
              
              <div className="space-y-10">
                <div className="p-10 bg-gray-50 dark:bg-gray-900 border-stark relative overflow-hidden group shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-black dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-black dark:text-white mb-1">Duration</h5>
                        <p className="text-gray-700 dark:text-gray-300">45 minutes - enough time for meaningful conversation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-black dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-black dark:text-white mb-1">Format</h5>
                        <p className="text-gray-700 dark:text-gray-300">Video call where we can share screens and collaborate</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-black dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-black dark:text-white mb-1">Investment</h5>
                        <p className="text-gray-700 dark:text-gray-300">Complimentary for first-time conversations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="text-center">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-14 py-8 text-lg font-bold tracking-wider w-full border-stark transform hover:scale-105 transition-smooth shadow-xl"
                    >
                      <a href="https://calendly.com/petehelms" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Clock className="h-6 w-6 mr-4" />
                        SCHEDULE ON CALENDLY
                      </a>
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg text-black dark:text-white mb-4 font-light">Prefer to email first?</p>
                    <Button 
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-stark border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-14 py-8 text-lg font-bold tracking-wider transform hover:scale-105 transition-smooth shadow-lg"
                    >
                      <a href="mailto:hello@petehelms.com" className="flex items-center justify-center">
                        <Mail className="h-6 w-6 mr-4" />
                        SEND ME AN EMAIL
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}