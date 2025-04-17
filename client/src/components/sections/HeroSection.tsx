import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import peteProfile from "@/assets/pete-profile.jpg";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Handles smooth scrolling to sections
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 bg-data-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display"
              variants={item}
            >
              Transform Your Business With{" "}
              <span className="gradient-text font-bold">AI Strategy</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-secondary-600 leading-relaxed"
              variants={item}
            >
              I help forward-thinking businesses harness the power of artificial intelligence to drive growth, innovation, and competitive advantage.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={item}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-midnight hover:bg-midnight-800 transition-all duration-300 shadow-lg group"
              >
                <a href="#book" onClick={scrollToSection('book')} className="flex items-center">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-midnight text-midnight hover:bg-midnight-50 transition-colors"
              >
                <a href="#services" onClick={scrollToSection('services')}>
                  Learn More
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-6"
              variants={item}
            >
              <p className="text-sm text-secondary-500 font-medium mb-3 tracking-wider">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Company logos would be replaced with actual client logos */}
                <div className="h-12 px-4 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-xs font-medium text-secondary-600">Company 1</div>
                <div className="h-12 px-4 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-xs font-medium text-secondary-600">Company 2</div>
                <div className="h-12 px-4 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-xs font-medium text-secondary-600">Company 3</div>
                <div className="h-12 px-4 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-xs font-medium text-secondary-600">Company 4</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={peteProfile} 
                alt="Pete Helms - AI Strategy Expert" 
                className="w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-accent-highlight/30 rounded-2xl -z-10"></div>
            
            {/* Animated dots pattern */}
            <div className="absolute -top-10 -left-10 w-32 h-32 ai-pattern opacity-30 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
