import { Button } from "@/components/ui/button";
import { motion, useAnimate, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Star, ExternalLink, MousePointer2, LightbulbIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import peteProfile from "@/assets/pete-profile.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

// Type animation component for dynamic text
const TypeAnimation = ({ phrases }: { phrases: string[] }) => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Current phrase being typed
      const phrase = phrases[currentPhrase];
      
      // Handle typing/deleting animation
      if (!isDeleting) {
        // Typing
        setCurrentText(phrase.substring(0, currentText.length + 1));
        
        // When done typing, wait before deleting
        if (currentText.length === phrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setCurrentText(phrase.substring(0, currentText.length - 1));
        
        // When done deleting, move to next phrase
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timer);
  }, [currentText, currentPhrase, isDeleting, phrases]);
  
  return (
    <span className="inline-block min-w-[160px] sm:min-w-[200px]">
      <span className="gradient-text relative font-semibold">
        {currentText}
        <span className="absolute right-[-4px] h-full w-[2px] bg-accent-gradient-start animate-blink" />
      </span>
    </span>
  );
};

// 3D card tilt effect
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform mouse position into rotation values
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden shadow-2xl"
      style={{ 
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
      
      {/* Shine effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-70 mix-blend-overlay pointer-events-none"
          style={{
            transform: "translateZ(20px)",
          }}
        />
      )}
    </motion.div>
  );
};

// FeatureBadge Component
const FeatureBadge = ({ icon, text, position, delay }: {
  icon: React.ReactNode;
  text: string;
  position: string;
  delay: number;
}) => (
  <motion.div 
    className={`hidden md:flex absolute ${position} py-2 px-3 bg-white dark:bg-midnight-800 border border-secondary-200 dark:border-secondary-700 rounded-lg shadow-lg z-20 items-center gap-2`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end flex items-center justify-center text-white">
      {icon}
    </div>
    <p className="text-xs sm:text-sm font-medium text-midnight dark:text-white whitespace-nowrap">{text}</p>
  </motion.div>
);

export default function HeroSection() {
  const isMobile = useIsMobile();
  const [scope, animate] = useAnimate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Handles smooth scrolling to sections
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Company logos data
  const companyLogos = [
    {
      name: "OpenAI",
      logo: (
        <svg className="h-6" viewBox="0 0 120 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.6789 9.1718C19.5491 5.87598 23.1489 3.66953 26.5052 4.48449C29.8615 5.29945 31.7931 8.67653 30.923 12.0087C30.052 15.3409 26.4522 17.5257 23.0959 16.7108C19.7396 15.8958 17.8079 12.5187 18.6781 9.18699M14.9389 28.9122C11.5834 28.0972 9.65172 24.7201 10.5219 21.388C11.392 18.0558 14.991 15.8493 18.348 16.6643C21.7043 17.4793 23.636 20.8564 22.7659 24.1885C21.8958 27.5207 18.2969 29.7272 14.9397 28.9122M3.75863 17.1302C0.402373 16.3153 -1.52936 12.9382 0.340709 9.60608C1.21103 6.27392 4.81081 4.06748 8.16617 4.88244C11.5224 5.6974 13.4542 9.07449 12.5842 12.4066C11.7149 15.738 8.11478 17.9452 3.75863 17.1302M7.10656 19.5667C8.0247 16.0635 5.84766 12.5661 2.30527 11.6678C-1.23712 10.7695 -4.77334 12.9005 -5.69148 16.4037C-6.60917 19.9061 -4.43213 23.4035 -0.88974 24.3018C3.56931 25.2539 6.19887 23.0699 7.10656 19.5667M15.6441 3.65652C16.5138 0.239911 20.0232 -1.9038 23.4515 -0.993277C26.8789 -0.0819749 29.0675 3.33756 28.1978 6.75417C27.3282 10.1708 23.8187 12.3145 20.3905 11.4039C16.9631 10.4926 14.7744 7.07313 15.6441 3.65652ZM22.2303 31.3481C18.8038 30.4368 16.6152 27.0173 17.4848 23.6007C18.3545 20.1841 21.864 18.0404 25.2922 18.951C28.7196 19.8624 30.9082 23.2819 30.0385 26.6985C29.1689 30.1151 25.6594 32.2588 22.2303 31.3481Z"/>
        </svg>
      ),
    },
    {
      name: "Microsoft",
      logo: (
        <svg className="h-6" viewBox="0 0 23 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h10.931v10.931H0zM12.069 0H23v10.931H12.069zM0 12.069h10.931V23H0zM12.069 12.069H23V23H12.069z"/>
        </svg>
      ),
    },
    {
      name: "Google",
      logo: (
        <svg className="h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"/>
          <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853"/>
          <path d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1975 5.50253 9.70716V6.61621H1.51649C-0.18551 10.0056 -0.18551 14.0017 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC04"/>
          <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61621L5.50264 9.70716C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: "Roam",
      logo: (
        <svg className="h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2.5a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-7 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-3 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-8 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 2c-2.5 0-4 3-4 3h8s-1.5-3-4-3zm-7 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-7 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-3 3a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm6 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative flex items-center"
      onMouseMove={handleMouseMove}
      ref={scope}
    >
      {/* Background patterns and effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-full h-full -z-10 bg-data-grid opacity-5"></div>
        
        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-gradient-start/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-gradient-end/10 blur-3xl rounded-full"></div>
        
        {/* Particles effect - animated dots */}
        <div className="hidden md:block">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-accent-highlight/50 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 10, 
                y: Math.random() * 100 + 10,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * 100 + 200, Math.random() * 100 + 10], 
                opacity: [null, Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: Math.random() * 10 + 20,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <motion.div 
            className="lg:w-1/2 space-y-6 md:space-y-8 order-2 lg:order-1 mt-8 lg:mt-0 z-10"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center rounded-full bg-accent-highlight/10 px-3 py-1.5 gap-1.5 backdrop-blur-sm border border-accent-highlight/20"
              variants={item}
            >
              <Star className="h-3.5 w-3.5 text-accent-highlight fill-accent-highlight" />
              <span className="text-xs font-semibold tracking-wide text-midnight dark:text-white">AI STRATEGIST</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] font-display"
              variants={item}
            >
              Dominate Markets <span className="md:hidden">With</span>
              <span className="hidden md:inline">Through</span><br className="hidden md:block" /> 
              <span className="relative">
                <span className="relative z-10 gradient-text">AI Strategy</span>
                <motion.span 
                  className="absolute bottom-1 md:bottom-2 left-0 h-3 md:h-4 w-full bg-accent-highlight/20 -z-10 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </span>
            </motion.h1>
            
            {/* Description with animated text */}
            <motion.div 
              className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed max-w-xl"
              variants={item}
            >
              <p>
                AI solutions that{" "}
                <TypeAnimation 
                  phrases={[
                    "outperform competitors by 300%+",
                    "slash costs by 65%",
                    "create market advantage",
                    "generate millions in revenue",
                    "transform industries"
                  ]} 
                />
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={item}
            >
              {/* Primary CTA */}
              <Button 
                asChild 
                size="lg" 
                className="relative bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:brightness-110 text-white transition-all duration-300 shadow-lg group overflow-hidden"
              >
                <a 
                  href="#book" 
                  onClick={scrollToSection('book')} 
                  className="flex items-center"
                >
                  {/* Animated light effect */}
                  <motion.div 
                    className="absolute w-40 h-40 bg-white/30 rounded-full blur-xl pointer-events-none"
                    animate={{
                      x: [30, -30, 30],
                      y: [-30, 30, -30],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear"
                    }}
                  />
                  
                  Book Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              {/* Secondary CTA */}
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-secondary-200 dark:border-secondary-700 text-midnight dark:text-white hover:border-midnight/70 dark:hover:border-white/70 transition-colors"
              >
                <a href="#services" onClick={scrollToSection('services')} className="flex items-center">
                  Learn More
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </a>
              </Button>
            </motion.div>
            
            {/* Trusted by logos */}
            <motion.div 
              className="pt-4"
              variants={item}
            >
              <p className="text-xs uppercase tracking-wide font-semibold mb-5 text-secondary-500 dark:text-secondary-400">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                {companyLogos.map((company, i) => (
                  <motion.div 
                    key={company.name}
                    className="h-14 px-4 bg-white dark:bg-secondary-900/80 backdrop-blur-sm shadow-sm border border-secondary-200 dark:border-secondary-700 rounded-xl flex items-center justify-center text-secondary-800 dark:text-secondary-300 hover:text-midnight hover:dark:text-white hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.7 + (i * 0.1), 
                        type: "spring",
                        stiffness: 100
                      } 
                    }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" 
                    }}
                  >
                    {company.logo}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile Image */}
          <motion.div 
            className="lg:w-1/2 relative order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] z-0"
            variants={fadeInScale}
            initial="hidden"
            animate="show"
          >
            {/* Profile image with 3D tilt effect */}
            {!isMobile ? (
              <TiltCard>
                <img 
                  src={peteProfile} 
                  alt="Pete Helms - AI Strategy Expert" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/80"></div>
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>
                      <h2 className="text-white font-bold text-lg md:text-xl">Pete Helms</h2>
                      <p className="text-white/90 text-sm">AI & Business Transformation Expert</p>
                    </div>
                    <motion.a 
                      href="#book" 
                      onClick={scrollToSection('book')}
                      className="group flex items-center gap-1 text-sm text-white font-medium bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full px-3 py-1.5 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book a Call <ExternalLink className="h-3.5 w-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </TiltCard>
            ) : (
              // Mobile version without tilt effect
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={peteProfile} 
                  alt="Pete Helms - AI Strategy Expert" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/80"></div>
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-col items-start justify-between gap-2">
                    <div>
                      <h2 className="text-white font-bold text-lg">Pete Helms</h2>
                      <p className="text-white/90 text-sm">AI & Business Transformation Expert</p>
                    </div>
                    <a 
                      href="#book" 
                      onClick={scrollToSection('book')}
                      className="flex items-center gap-1 text-sm text-white font-medium bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5"
                    >
                      Book a Call <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Feature badges - positioned around the image */}
            <FeatureBadge 
              icon={<Star className="h-3 w-3" />}
              text="10+ Years Experience"
              position="top-0 right-1/4 transform -translate-y-1/2"
              delay={0.9}
            />
            <FeatureBadge 
              icon={<LightbulbIcon className="h-3 w-3" />}
              text="AI Strategy Expert"
              position="bottom-1/3 -right-2 transform translate-x-1/2"
              delay={1.1}
            />
            <FeatureBadge 
              icon={<MousePointer2 className="h-3 w-3" />}
              text="Click to Learn More"
              position="bottom-0 left-1/4 transform translate-y-1/2"
              delay={1.3}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}