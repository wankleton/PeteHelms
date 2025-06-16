import { motion, useInView } from "framer-motion";
import { services } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { ArrowRight, ExternalLink, Check, Users, Lightbulb, Code, Target } from "lucide-react";
import { fadeIn, staggerContainer, scaleInSpring, cardHover, slideInLeft } from "@/lib/animations";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

// Monochrome service card with premium animations
const ServiceCard = ({ 
  service, index 
}: { 
  service: typeof services[0]; 
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  // Define consistent icons for monochrome design
  const getServiceIcon = (serviceId: string) => {
    switch(serviceId) {
      case 'workshops': return <Users className="h-8 w-8" />;
      case 'advisory': return <Target className="h-8 w-8" />;
      case 'development': return <Code className="h-8 w-8" />;
      default: return <Lightbulb className="h-8 w-8" />;
    }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.33, 1, 0.68, 1]
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
      }}
    >
      {/* Main card container */}
      <div className="relative bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 p-6 sm:p-8 md:p-10 group-hover:border-black dark:group-hover:border-white transition-all duration-500 shadow-lg group-hover:shadow-2xl">
        
        {/* Top accent line */}
        <motion.div 
          className="absolute top-0 left-0 h-1 bg-black dark:bg-white"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2 + 0.5,
            ease: [0.33, 1, 0.68, 1]
          }}
        />
        
        {/* Service icon */}
        <motion.div 
          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-black dark:bg-white rounded-full flex items-center justify-center mb-6 sm:mb-8 text-white dark:text-black group-hover:scale-110 transition-transform duration-300"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          {getServiceIcon(service.id)}
        </motion.div>
        
        {/* Service title */}
        <motion.h3 
          className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-black dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.4
          }}
        >
          {service.title}
        </motion.h3>
        
        {/* Service description */}
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.6
          }}
        >
          {service.description}
        </motion.p>
        
        {/* Key features */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.8
          }}
        >
          {service.features?.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.2 + 0.9 + idx * 0.1
              }}
            >
              <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Check className="h-3 w-3 text-white dark:text-black" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Hover effect overlay */}
        <motion.div 
          className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
          initial={false}
        />
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with animations */}
        <motion.div 
          className="relative mb-20 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                <motion.span 
                  className="text-ultra-thin"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  WHAT I CAN
                </motion.span>{" "}
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  OFFER
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-16 h-1 bg-black dark:bg-white mb-6 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-black dark:text-white font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Here are three ways I can help...
            </motion.p>
          </div>
        </motion.div>
        
        {/* Service cards grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service} 
              index={index}
            />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
