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
                {/* OpenAI Logo */}
                <div className="h-12 px-6 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-secondary-800 hover:text-midnight">
                  <svg className="h-6" viewBox="0 0 120 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6789 9.1718C19.5491 5.87598 23.1489 3.66953 26.5052 4.48449C29.8615 5.29945 31.7931 8.67653 30.923 12.0087C30.052 15.3409 26.4522 17.5257 23.0959 16.7108C19.7396 15.8958 17.8079 12.5187 18.6781 9.18699M14.9389 28.9122C11.5834 28.0972 9.65172 24.7201 10.5219 21.388C11.392 18.0558 14.991 15.8493 18.348 16.6643C21.7043 17.4793 23.636 20.8564 22.7659 24.1885C21.8958 27.5207 18.2969 29.7272 14.9397 28.9122M3.75863 17.1302C0.402373 16.3153 -1.52936 12.9382 0.340709 9.60608C1.21103 6.27392 4.81081 4.06748 8.16617 4.88244C11.5224 5.6974 13.4542 9.07449 12.5842 12.4066C11.7149 15.738 8.11478 17.9452 3.75863 17.1302M7.10656 19.5667C8.0247 16.0635 5.84766 12.5661 2.30527 11.6678C-1.23712 10.7695 -4.77334 12.9005 -5.69148 16.4037C-6.60917 19.9061 -4.43213 23.4035 -0.88974 24.3018C3.56931 25.2539 6.19887 23.0699 7.10656 19.5667M15.6441 3.65652C16.5138 0.239911 20.0232 -1.9038 23.4515 -0.993277C26.8789 -0.0819749 29.0675 3.33756 28.1978 6.75417C27.3282 10.1708 23.8187 12.3145 20.3905 11.4039C16.9631 10.4926 14.7744 7.07313 15.6441 3.65652ZM22.2303 31.3481C18.8038 30.4368 16.6152 27.0173 17.4848 23.6007C18.3545 20.1841 21.864 18.0404 25.2922 18.951C28.7196 19.8624 30.9082 23.2819 30.0385 26.6985C29.1689 30.1151 25.6594 32.2588 22.2303 31.3481Z"/>
                  </svg>
                </div>
                {/* Microsoft Logo */}
                <div className="h-12 px-6 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-secondary-800 hover:text-midnight">
                  <svg className="h-6" viewBox="0 0 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h10.931v10.931H0zM12.069 0H23v10.931H12.069zM0 12.069h10.931V23H0zM12.069 12.069H23V23H12.069z"/>
                  </svg>
                </div>
                {/* Google Logo */}
                <div className="h-12 px-6 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-secondary-800 hover:text-midnight">
                  <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"/>
                    <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/>
                    <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1975 5.50253 9.70716V6.61621H1.51649C-0.18551 10.0056 -0.18551 14.0017 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04"/>
                    <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61621L5.50264 9.70716C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
                  </svg>
                </div>
                {/* Roam Logo */}
                <div className="h-12 px-6 bg-secondary-100 opacity-70 hover:opacity-100 transition-all duration-300 rounded-md flex items-center justify-center text-secondary-800 hover:text-midnight">
                  <svg className="h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 2.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-7 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-3 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-8 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 2c-2.5 0-4 3-4 3h8s-1.5-3-4-3zm-7 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-7 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-3 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>
                  </svg>
                </div>
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
