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
          <SectionHeading 
            title={
              <>Book a <span className="text-slate-900 dark:text-white font-bold">Call</span></>
            }
            description="Ready to explore how we can work together? Let's start with a conversation."
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
                Let's Start Simple
              </h3>
              
              <div className="space-y-6 mb-12 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
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
              <h4 className="text-2xl font-light mb-8 text-slate-900 dark:text-white">
                Schedule Your Call
              </h4>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Duration</h5>
                        <p className="text-slate-600 dark:text-slate-300">45 minutes - enough time for meaningful conversation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Format</h5>
                        <p className="text-slate-600 dark:text-slate-300">Video call where we can share screens and collaborate</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Investment</h5>
                        <p className="text-slate-600 dark:text-slate-300">Complimentary for first-time conversations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 font-normal w-full"
                    >
                      <a href="https://calendly.com/petehelms" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule on Calendly
                      </a>
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Prefer to email first?</p>
                    <Button 
                      asChild
                      size="lg"
                      variant="ghost"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white px-8 py-3 font-normal"
                    >
                      <a href="mailto:hello@petehelms.com" className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Me an Email
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