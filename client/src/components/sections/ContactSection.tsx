import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function ContactSection() {
  return (
    <section id="book" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading 
            title={
              <>Let's <span className="text-slate-900 dark:text-white font-bold">Connect</span></>
            }
            description="I'm always interested in hearing about interesting challenges and meeting thoughtful people."
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
                What to Expect
              </h3>
              
              <div className="space-y-6 mb-12 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I typically work best with leaders who are facing complex decisions or navigating uncertain territory. 
                </p>
                <p>
                  Whether you're thinking through a strategic challenge, exploring new possibilities, or just want to bounce ideas around with someone who's been there before, I'm happy to listen and share what I've learned.
                </p>
                <p>
                  No agenda, no pitch. Just a conversation between people who care about building something meaningful.
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-light mb-8 text-slate-900 dark:text-white">
                Get In Touch
              </h4>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Email</h5>
                        <p className="text-slate-600 dark:text-slate-300">hello@petehelms.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Response Time</h5>
                        <p className="text-slate-600 dark:text-slate-300">I typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MessageSquare className="h-5 w-5 text-gray-900 dark:text-white mt-1 mr-3" />
                      <div>
                        <h5 className="font-medium text-slate-900 dark:text-white mb-1">Best For</h5>
                        <p className="text-slate-600 dark:text-slate-300">Strategic challenges, innovation questions, or just an interesting conversation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 font-normal"
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
        </motion.div>
      </div>
    </section>
  );
}