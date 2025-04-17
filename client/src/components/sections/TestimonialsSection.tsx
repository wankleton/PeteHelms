import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { testimonials } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { Star, Quote, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Modern testimonial card component with 3D tilt effect
const TestimonialCard = ({ testimonial, index, active, total }: { 
  testimonial: typeof testimonials[0]; 
  index: number;
  active: boolean;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // 3D tilt effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse movement into rotation
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  // Handle mouse movement for desktop 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className={`
        relative w-full max-w-md mx-auto perspective-1000
        ${active ? 'block' : 'hidden md:block'}
      `}
      style={{
        scale: active ? 1 : 0.85,
        opacity: active ? 1 : 0.5,
        filter: active ? 'none' : 'blur(1px)',
        transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        zIndex: active ? 10 : 5 - Math.abs(index % total),
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 50,
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.175, 0.885, 0.32, 1.275]
      }}
    >
      <motion.div
        className="
          relative bg-white dark:bg-midnight-800 p-8 rounded-2xl
          border border-secondary-200 dark:border-secondary-700 
          shadow-card-hover
          preserve-3d transform-gpu
          overflow-hidden
        "
        style={{
          rotateX: active ? rotateX : 0,
          rotateY: active ? rotateY : 0,
        }}
        whileHover={{ scale: active ? 1.03 : 1 }}
        transition={{ duration: 0.3 }}
        onMouseMove={active ? handleMouseMove : undefined}
        onMouseLeave={active ? handleMouseLeave : undefined}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-noise-subtle opacity-10"></div>
        <motion.div 
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-accent-highlight/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        
        {/* Quote decoration */}
        <div className="
          absolute -top-4 -left-4 w-10 h-10 rounded-full
          bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end
          flex items-center justify-center text-white shadow-glow translate-z-20
        ">
          <Quote className="h-5 w-5" />
        </div>
        
        {/* Content wrapper with 3D effects */}
        <div className="relative z-10">
          {/* Star rating */}
          <div className="flex items-center mb-6 translate-z-10">
            <div className="flex space-x-1">
              {Array(5).fill(0).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Quote text with gradient underline */}
          <blockquote className="mb-8 text-secondary-700 dark:text-secondary-200 leading-relaxed translate-z-10 relative">
            <span className="text-xl font-medium">"{testimonial.quote}"</span>
            <motion.div 
              className="absolute -bottom-4 left-0 h-0.5 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end"
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </blockquote>
          
          {/* Author info with modern design */}
          <div className="flex items-center mt-6 translate-z-10">
            {/* Avatar with gradient border */}
            <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 shadow-lg bg-gradient-to-r p-[2px] from-accent-gradient-start to-accent-gradient-end">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center text-secondary-400">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            {/* Author details with highlighting */}
            <div>
              <p className="font-bold text-midnight-900 dark:text-white">{testimonial.name}</p>
              <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 font-medium">
                <span>{testimonial.title}</span>
                <span className="mx-2 text-secondary-300 dark:text-secondary-600">•</span>
                <span className="text-accent-gradient-end">{testimonial.company}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-accent-highlight/10 rounded-tl-3xl"></div>
      </motion.div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMobile) return; // Don't auto-rotate on desktop
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);
  
  // Scroll to booking section
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-secondary-50 dark:bg-midnight-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-50 to-secondary-100 dark:from-midnight-900 dark:to-midnight-800 opacity-80"></div>
      <div className="absolute inset-0 ai-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-subtle opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-accent-gradient-end/10 blur-3xl -z-10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 20, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-accent-gradient-start/10 blur-3xl -z-10 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -20, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          repeatType: 'reverse',
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Client <span className="gradient-text font-bold">Success Stories</span>
            </motion.div>
          } 
          description="Real results from industry leaders using AI strategies."
          className="max-w-3xl"
        />
        
        {/* Testimonials carousel with 3D effects */}
        <div className="relative mt-12 md:mt-20">
          {/* Testimonial cards */}
          <div 
            ref={containerRef}
            className="relative z-10 px-4 flex flex-col md:flex-row items-center justify-center md:space-x-8"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                index={index}
                active={index === activeIndex}
                total={testimonials.length}
              />
            ))}
          </div>
          
          {/* Mobile navigation indicators */}
          <div className="mt-8 flex justify-center items-center md:hidden">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-accent-gradient-end w-8'
                      : 'bg-secondary-300 dark:bg-secondary-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Desktop navigation arrows */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-4 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              className="
                bg-white/80 dark:bg-midnight-800/80 backdrop-blur-sm
                border-secondary-200 dark:border-secondary-700
                text-secondary-700 dark:text-secondary-300
                hover:bg-secondary-100 dark:hover:bg-midnight-700
                shadow-lg hover:shadow-xl
                rounded-full w-12 h-12
                pointer-events-auto
                transition-all duration-300
              "
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="
                bg-white/80 dark:bg-midnight-800/80 backdrop-blur-sm
                border-secondary-200 dark:border-secondary-700
                text-secondary-700 dark:text-secondary-300
                hover:bg-secondary-100 dark:hover:bg-midnight-700
                shadow-lg hover:shadow-xl
                rounded-full w-12 h-12
                pointer-events-auto
                transition-all duration-300
              "
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Enhanced CTA section with glass-morphism */}
        <motion.div 
          className="mt-20 md:mt-28 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden border border-secondary-200 dark:border-secondary-700 shadow-xl">
            <div className="relative p-8 md:p-12 overflow-hidden">
              {/* Background elements */}
              <div className="absolute inset-0 bg-circuit-pattern opacity-[0.03]"></div>
              
              {/* Content with grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 relative z-10">
                <div className="md:col-span-3">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-midnight-900 dark:text-white">
                    Ready for AI-powered results?
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-6 md:mb-8">
                    Book a strategy session to unlock growth and competitive advantage.
                  </p>
                  
                  {/* Benefits list */}
                  <div className="space-y-3 mb-8 md:mb-0">
                    {[
                      "Custom strategy",
                      "Implementation roadmap",
                      "ROI analysis"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-accent-gradient-start text-white flex items-center justify-center mt-0.5 mr-3">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-secondary-600 dark:text-secondary-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA card with 3D effect */}
                <div className="md:col-span-2">
                  <motion.div 
                    className="
                      bg-gradient-to-br from-midnight to-midnight-800 
                      rounded-xl shadow-3d p-6 transform-gpu
                    "
                    whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-accent-gradient-start mr-3" />
                      <h4 className="text-lg font-bold text-white">Schedule Now</h4>
                    </div>
                    
                    <p className="text-secondary-200 mb-6 text-sm">
                      Limited spots available. Book now.
                    </p>
                    
                    <Button
                      size="lg"
                      className="
                        w-full bg-white text-midnight hover:bg-accent-highlight 
                        transition-colors duration-300 shadow-lg font-medium
                        flex items-center justify-center group
                      "
                      onClick={scrollToBooking}
                    >
                      Book Strategy Session
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatType: 'loop',
                          ease: "easeInOut"
                        }}
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-highlight/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-gradient-start/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
