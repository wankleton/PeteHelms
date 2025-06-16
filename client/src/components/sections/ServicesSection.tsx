import { motion, useInView } from "framer-motion";
import { services } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { ArrowRight, ExternalLink, Check } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Service card with enhanced interactions
const ServiceCard = ({ 
  service, index, isActive, onActive, onClick 
}: { 
  service: typeof services[0]; 
  index: number;
  isActive: boolean;
  onActive: () => void;
  onClick: () => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      ref={cardRef}
      key={service.id} 
      className={`
        relative bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer
        ${isActive 
          ? 'border-2 border-accent-gradient-start shadow-xl scale-[1.02] z-10' 
          : 'border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
        }
        transition-all duration-300 group
      `}
      variants={fadeIn}
      custom={index * 0.1}
      whileHover={{ y: -5, boxShadow: "0 10px 40px -15px rgba(0, 0, 0, 0.2)" }}
      onClick={onActive}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView 
          ? `translateY(0) scale(${isActive ? 1.03 : 1})` 
          : `translateY(30px) scale(${isActive ? 1.03 : 1})`,
        transition: "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }}
    >
      {/* Top decorative bar */}
      <div 
        className={`h-1.5 w-full ${isActive ? 'bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end' : 'bg-secondary-200 dark:bg-secondary-700'} transition-colors duration-300`}
      />
      
      <div className="p-6 md:p-8">
        {/* Service icon with animated background */}
        <div 
          className={`
            w-16 h-16 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden
            ${isActive 
              ? 'bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end shadow-lg' 
              : 'bg-secondary-100 dark:bg-secondary-800 group-hover:bg-gradient-to-r group-hover:from-accent-gradient-start/90 group-hover:to-accent-gradient-end/90'
            }
            transition-colors duration-500
          `}
        >
          {/* Animated background effect */}
          <motion.div 
            className="absolute inset-0 bg-circuit-pattern opacity-10"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
          />
          
          <service.icon 
            className={`
              h-7 w-7 relative z-10
              ${isActive ? 'text-white' : 'text-midnight dark:text-white group-hover:text-white'}
              transition-colors duration-300
            `} 
          />
        </div>
        
        {/* Service content */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className={`text-xl font-black mb-3 ${isActive ? 'text-accent-gradient-end' : 'text-slate-900 dark:text-white'} transition-colors`}>
              {service.title}
            </h3>
            
            {/* Number indicator */}
            <span className={`
              text-xs font-bold py-1 px-2 rounded-full
              ${isActive 
                ? 'bg-white text-accent-gradient-end border border-accent-gradient-end' 
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-700'
              }
              transition-all duration-300
            `}>
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-base leading-relaxed font-medium">
            {service.description}
          </p>
          
          {/* Key features with check marks */}
          <div className="mb-6 space-y-2">
            {service.features?.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <div className={`
                  flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2
                  ${isActive 
                    ? 'bg-accent-gradient-start text-white' 
                    : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-300'
                  }
                  transition-colors
                `}>
                  <Check className="h-3 w-3" />
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-300">{feature}</p>
              </div>
            ))}
          </div>
          
          {/* Action button */}
          <Button
            size="sm"
            className={`
              w-full group/btn flex items-center justify-center
              ${isActive 
                ? 'bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white hover:brightness-110' 
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }
              transition-all duration-300
            `}
            onClick={onClick}
          >
            Learn More
            <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Handles smooth scrolling to booking section
  const scrollToBooking = (e?: React.MouseEvent) => {
    e?.preventDefault();
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Handle service selection
  const handleServiceClick = (index: number) => {
    setActiveService(index === activeService ? null : index);
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-secondary-50 dark:bg-midnight-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 ai-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-noise-subtle"></div>
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-accent-highlight/20 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: 'reverse',
        }}
      />
      
      <motion.div 
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-accent-gradient-start/10 blur-3xl -z-10"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: 'reverse',
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={<>Innovation <span className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent font-black">Services</span></>}
          description="Strategic solutions that drive breakthrough growth and competitive advantage."
          className="max-w-3xl"
        />
        
        {/* Service cards with interactive layout */}
        <div ref={containerRef} className="mt-10 md:mt-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                service={service} 
                index={index}
                isActive={activeService === index}
                onActive={() => handleServiceClick(index)}
                onClick={scrollToBooking}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Call-to-action section */}
        <motion.div 
          className="mt-16 md:mt-24 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-midnight dark:bg-midnight-800 text-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background circuit pattern */}
            <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for results-driven AI?</h3>
                  <p className="text-secondary-200 mb-6 md:mb-0">Transform your business. Book now.</p>
                </div>
                
                <Button
                  size="lg"
                  className="whitespace-nowrap bg-white text-midnight hover:bg-accent-highlight transition-colors duration-300 shadow-lg font-medium group"
                  onClick={scrollToBooking}
                >
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-highlight/30 rounded-full blur-md -z-10"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-gradient-start/30 rounded-full blur-md -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
