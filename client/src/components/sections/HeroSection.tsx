import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-secondary-900"
              variants={item}
            >
              Transform Your Business With AI Strategy
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
              <Button asChild size="lg">
                <a href="#book" onClick={scrollToSection('book')}>
                  Book a Strategy Session
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="#services" onClick={scrollToSection('services')}>
                  Learn More
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="pt-6"
              variants={item}
            >
              <p className="text-sm text-secondary-500 font-medium mb-3">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap gap-6 items-center">
                {/* Company logos would be replaced with actual client logos */}
                <div className="h-8 w-24 bg-secondary-200 opacity-70 hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center text-xs text-secondary-600">Company 1</div>
                <div className="h-8 w-24 bg-secondary-200 opacity-70 hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center text-xs text-secondary-600">Company 2</div>
                <div className="h-8 w-24 bg-secondary-200 opacity-70 hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center text-xs text-secondary-600">Company 3</div>
                <div className="h-8 w-24 bg-secondary-200 opacity-70 hover:opacity-100 transition-all duration-300 rounded flex items-center justify-center text-xs text-secondary-600">Company 4</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              {/* In production, this would be an actual photo of Pete Helms */}
              <div className="aspect-[4/3] bg-secondary-200 w-full"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary-100 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
