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
        relative bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 p-8 cursor-pointer
        ${isActive 
          ? 'border-slate-900 dark:border-white' 
          : 'hover:border-slate-300 dark:hover:border-slate-600'
        }
        transition-all duration-300
      `}
      variants={fadeIn}
      custom={index * 0.1}
      whileHover={{ y: -2 }}
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
          <h3 className={`text-xl font-black mb-3 ${isActive ? 'text-accent-gradient-end' : 'text-slate-900 dark:text-white'} transition-colors`}>
            {service.title}
          </h3>
          
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
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-20 md:mb-24">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-ultra-thin">WHAT I CAN</span> OFFER
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white mb-6 mx-auto"></div>
            <p className="text-xl md:text-2xl text-black dark:text-white font-light leading-relaxed max-w-3xl mx-auto">Here are three ways I can help...</p>
          </div>
        </div>
        
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
        
        
      </div>
    </section>
  );
}
