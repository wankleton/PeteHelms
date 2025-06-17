import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Clock, Calendar } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight, scaleInSpring, buttonPulse } from "@/lib/animations";
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
          <motion.div 
            className="relative mb-20 md:mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="absolute left-0 top-0 w-2 bg-black dark:bg-white rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            />
            <motion.div 
              className="pl-12"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  LET'S CONNECT
                </motion.span>
              </h2>
              <motion.div 
                className="w-16 h-1 bg-black dark:bg-white mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
              />
              
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-16 sm:mt-20 md:mt-24 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 sm:mb-16 text-xl md:text-2xl text-black dark:text-white leading-[1.6] font-light">
            <p>The best way to explore working together is to start with a conversation. No commitment, no pressure—just an opportunity to see if there's a fit.</p>
            <p className="mt-6">
              During our call, I'll listen to your challenges, ask clarifying questions, and share my perspective on potential approaches. You'll walk away with at least one new way of thinking about your situation.
            </p>
          </div>
          
          <div className="space-y-8">
            <Button 
              asChild
              size="lg"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-12 py-6 text-lg font-bold tracking-wider transform hover:scale-105 transition-smooth shadow-xl"
            >
              <a href="https://calendly.com/pete-helms/intro-call" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Clock className="h-6 w-6 mr-3" />
                BOOK A CALL
              </a>
            </Button>
            
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              45 minutes • Video call • Complimentary
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}