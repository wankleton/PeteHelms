import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { Star, Quote } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full ai-pattern opacity-5 -z-10"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-accent-gradient-end/10 blur-3xl -z-10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-accent-gradient-start/10 blur-3xl -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title={<>Client <span className="gradient-text">Success Stories</span></>} 
          description="What business leaders say about working with me."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 group relative"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end flex items-center justify-center text-white">
                <Quote className="h-4 w-4" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="text-accent-gradient-start">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="inline-block h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="mb-6 text-secondary-600 leading-relaxed group-hover:text-secondary-800 transition-colors">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-secondary-100 border-2 border-secondary-200 flex items-center justify-center text-secondary-400">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-midnight-900">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500 font-medium">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-accent-highlight/10 rounded-tl-xl"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional promotional element */}
        <motion.div 
          className="mt-16 bg-midnight rounded-xl shadow-xl p-8 md:p-12 text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to transform your business with AI?</h3>
              <p className="text-secondary-200 mb-6 md:mb-0">Book a strategy session today and discover how AI can drive growth for your organization.</p>
            </div>
            <div className="md:text-right">
              <a 
                href="#book" 
                className="inline-flex items-center bg-white text-midnight px-6 py-3 rounded-lg font-medium hover:bg-accent-highlight transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('book');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Book Now
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
