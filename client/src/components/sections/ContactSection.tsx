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
          <div className="relative mb-16">
            <div className="absolute left-0 top-0 w-2 h-32 bg-black dark:bg-white"></div>
            <div className="pl-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
                BOOK A <span className="text-ultra-thin">CALL</span>
              </h2>
              <p className="text-xl md:text-2xl text-black dark:text-white font-light">
                Ready to explore how we can work together? Let's start with a conversation.
              </p>
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
              <h3 className="text-4xl md:text-5xl font-bold mb-12 text-black dark:text-white leading-tight tracking-tight">
                LET'S START SIMPLE
              </h3>
              
              <div className="space-y-8 mb-16 text-xl md:text-2xl text-black dark:text-white leading-relaxed font-light">
                <p>
                  The best way to explore working together is to start with a conversation. No commitment, no pressure—just an opportunity to share what you're working on and see if there's a fit.
                </p>
                <p>
                  During our call, I'll listen to your challenges, ask clarifying questions, and share my perspective on potential approaches. You'll walk away with at least one new way of thinking about your situation.
                </p>
                <p>
                  If it feels like we should work together more formally, we can discuss what that might look like. If not, you'll still have gained value from our conversation.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-3xl font-bold mb-12 text-black dark:text-white tracking-tight">
                SCHEDULE YOUR CALL
              </h4>
              
              <div className="space-y-8">
                <div className="p-8 bg-gray-50 dark:bg-gray-900 border-stark relative overflow-hidden group">
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
                      className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-12 py-6 text-lg font-bold tracking-wide w-full border-stark transform hover:scale-105 transition-all duration-200"
                    >
                      <a href="https://calendly.com/petehelms" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Clock className="h-5 w-5 mr-3" />
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
                      className="border-stark border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-12 py-6 text-lg font-bold tracking-wide transform hover:scale-105 transition-all duration-200"
                    >
                      <a href="mailto:hello@petehelms.com" className="flex items-center justify-center">
                        <Mail className="h-5 w-5 mr-3" />
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