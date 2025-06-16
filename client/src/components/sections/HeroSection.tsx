import { Button } from "@/components/ui/button";
import { motion, useAnimate, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown, Star, ExternalLink, MousePointer2, LightbulbIcon, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import peteProfile from "@/assets/pete-profile.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { slideInLeft, slideInRight, scaleInSpring, buttonPulse, floatingElement, revealUp } from "@/lib/animations";

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
    <span className="inline-block min-w-[140px] sm:min-w-[160px] md:min-w-[200px]">
      <span className="text-gray-900 dark:text-white relative font-semibold">
        {currentText}
        <span className="absolute right-[-4px] h-full w-[2px] bg-gray-900 dark:bg-white animate-blink" />
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
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-black">
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
          <path d="M0 0H10.9524V10.9524H0V0Z"/>
          <path d="M12.0476 0H23V10.9524H12.0476V0Z"/>
          <path d="M0 12.0476H10.9524V23H0V12.0476Z"/>
          <path d="M12.0476 12.0476H23V23H12.0476V12.0476Z"/>
        </svg>
      ),
    },
    {
      name: "IBM",
      logo: (
        <svg className="h-6" viewBox="0 0 34 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.604 12.723H33.368V13.927H0.604V12.723ZM0.604 0H33.368V1.204H0.604V0ZM8.013 6.361V6.365H16.626V7.565H8.013V7.569C7.616 7.569 7.293 7.241 7.293 6.837C7.293 6.434 7.616 6.106 8.013 6.106V6.11H8.013V6.361ZM25.379 7.569H16.626V6.365H25.379C25.776 6.365 26.099 6.694 26.099 7.097C26.099 7.501 25.776 7.569 25.379 7.569ZM8.013 9.979V9.983H16.626V11.183H8.013V11.187C7.616 11.187 7.293 10.859 7.293 10.456C7.293 10.052 7.616 9.724 8.013 9.724V9.728H8.013V9.979ZM25.379 11.187H16.626V9.983H25.379C25.776 9.983 26.099 10.312 26.099 10.715C26.099 11.119 25.776 11.187 25.379 11.187ZM8.013 2.74V2.744H16.626V3.944H8.013V3.948C7.616 3.948 7.293 3.62 7.293 3.217C7.293 2.813 7.616 2.485 8.013 2.485V2.489H8.013V2.74ZM25.379 3.948H16.626V2.744H25.379C25.776 2.744 26.099 3.072 26.099 3.476C26.099 3.88 25.776 3.948 25.379 3.948ZM30.39 7.569V6.365H31.829C32.226 6.365 32.548 6.694 32.548 7.097C32.548 7.501 32.226 7.569 31.829 7.569H30.39ZM30.39 11.187V9.983H31.829C32.226 9.983 32.548 10.312 32.548 10.715C32.548 11.119 32.226 11.187 31.829 11.187H30.39ZM30.39 3.948V2.744H31.829C32.226 2.744 32.548 3.072 32.548 3.476C32.548 3.88 32.226 3.948 31.829 3.948H30.39ZM3.58 7.569V6.365H2.142C1.744 6.365 1.422 6.694 1.422 7.097C1.422 7.501 1.744 7.569 2.142 7.569H3.58ZM3.58 11.187V9.983H2.142C1.744 9.983 1.422 10.312 1.422 10.715C1.422 11.119 1.744 11.187 2.142 11.187H3.58ZM3.58 3.948V2.744H2.142C1.744 2.744 1.422 3.072 1.422 3.476C1.422 3.88 1.744 3.948 2.142 3.948H3.58ZM22.36 7.569V6.365H27.818C28.215 6.365 28.538 6.694 28.538 7.097C28.538 7.501 28.215 7.569 27.818 7.569H22.36ZM22.36 11.187V9.983H27.818C28.215 9.983 28.538 10.312 28.538 10.715C28.538 11.119 28.215 11.187 27.818 11.187H22.36ZM22.36 3.948V2.744H27.818C28.215 2.744 28.538 3.072 28.538 3.476C28.538 3.88 28.215 3.948 27.818 3.948H22.36ZM5.553 7.569V6.365H10.872C11.27 6.365 11.592 6.694 11.592 7.097C11.592 7.501 11.27 7.569 10.872 7.569H5.553ZM5.553 11.187V9.983H10.872C11.27 9.983 11.592 10.312 11.592 10.715C11.592 11.119 11.27 11.187 10.872 11.187H5.553ZM5.553 3.948V2.744H10.872C11.27 2.744 11.592 3.072 11.592 3.476C11.592 3.88 11.27 3.948 10.872 3.948H5.553Z"/>
        </svg>
      ),
    },
    {
      name: "Google",
      logo: (
        <svg className="h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 12.2331C22.5 11.3698 22.4295 10.7399 22.2804 10.0851H12.2027V13.983H18.127C18.0096 14.9514 17.3522 16.4097 15.9668 17.3893L15.9496 17.4997L19.0704 19.8724L19.2882 19.894C21.2435 17.9366 22.5 15.3059 22.5 12.2331Z"/>
          <path d="M12.2027 22.5C15.1872 22.5 17.7076 21.5826 19.2882 19.8943L15.9668 17.3893C15.0386 18.0501 13.8003 18.4932 12.2027 18.4932C9.27093 18.4932 6.7802 16.578 5.90406 13.9003L5.79819 13.9099L2.5344 16.3696L2.5 16.4585C4.0707 20.1144 7.8582 22.5 12.2027 22.5Z"/>
          <path d="M5.90391 13.9003C5.67063 13.2455 5.51588 12.5376 5.51588 11.8C5.51588 11.0627 5.67063 10.3548 5.90391 9.69971L5.90391 9.58189L2.61379 7.07995L2.50071 7.14124C1.8767 8.58301 1.50156 10.1549 1.50156 11.8C1.50156 13.4451 1.8767 15.0173 2.50071 16.4585L5.90391 13.9003Z"/>
          <path d="M12.2027 5.10682C14.1269 5.10682 15.4673 6.04027 16.2236 6.75182L19.1841 3.86491C17.6996 2.50697 15.1872 1.5 12.2027 1.5C7.8582 1.5 4.0707 3.88531 2.5 7.54125L5.90427 9.9997C6.7802 7.32202 9.27093 5.10682 12.2027 5.10682Z"/>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Scroll down animation for chevron
    animate(
      scope.current, 
      { y: [0, 15, 0] }, 
      { duration: 2, repeat: Infinity, ease: "easeInOut" }
    );
  }, []);

  return (
    <section 
      id="home" 
      className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-4">
        {/* 3D Floating brand logos - desktop only */}
        {!isMobile && (
          <>
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                className="absolute text-secondary-400 dark:text-secondary-600 hidden xl:block"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + index, 
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${10 + index * 20}%`,
                  top: `${20 + (index % 3) * 15}%`,
                  filter: "blur(1px)",
                  transform: "scale(0.9)",
                  zIndex: 0,
                }}
              >
                {company.logo}
              </motion.div>
            ))}
          </>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="z-10 text-center lg:text-left"
          >

            
            {/* Brief Introduction */}
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-16 md:mb-20 relative overflow-hidden"
              variants={revealUp}
            >
              <motion.span 
                className="block text-ultra-bold text-black dark:text-white relative geometric-accent"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.5
                }}
              >
                PETE HELMS
              </motion.span>
              <motion.div 
                className="absolute -bottom-4 left-0 h-1 bg-black dark:bg-white"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ 
                  duration: 0.8,
                  delay: 1.5,
                  ease: [0.33, 1, 0.68, 1]
                }}
              />
              
              {/* Sparkle effects */}
              <motion.div
                className="absolute top-4 right-12 text-black dark:text-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </motion.h1>
            
            {/* Brief Description */}
            <motion.div 
              className="text-2xl md:text-3xl font-light leading-[1.4] max-w-2xl mx-auto lg:mx-0 mb-20 md:mb-24 relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <motion.div 
                className="absolute -left-6 top-0 w-2 bg-black dark:bg-white rounded-full"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
              />
              <motion.p 
                className="text-black dark:text-white pl-12 leading-[1.5]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                I'm a <motion.span 
                  className="font-semibold bg-black dark:bg-white text-white dark:text-black px-2 py-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >purpose-driven</motion.span> technology consultant. 
                I lead a boutique consultancy focused on <motion.span 
                  className="font-semibold bg-black dark:bg-white text-white dark:text-black px-2 py-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.1 }}
                >innovative solutions</motion.span> 
                <br />
                that have a lasting impact.
              </motion.p>
            </motion.div>
            
            {/* Bold CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 md:gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.33, 1, 0.68, 1] }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-black hover:bg-gray-900 text-white px-14 py-8 text-lg font-bold tracking-wider border-stark shadow-xl hover:shadow-2xl focus-ring relative overflow-hidden"
                >
                  <a 
                    href="#purpose" 
                    onClick={scrollToSection('purpose')} 
                    className="flex items-center justify-center group relative z-10"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">EXPLORE MY STORY</span>
                    <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-1 relative z-10" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -4,
                  transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-stark border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-14 py-8 text-lg font-bold tracking-wider shadow-xl hover:shadow-2xl focus-ring relative overflow-hidden"
                >
                  <a 
                    href="#book" 
                    onClick={scrollToSection('book')}
                    className="flex items-center justify-center group relative z-10"
                  >
                    <motion.div
                      className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">START A CONVERSATION</span>
                    <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-1 relative z-10" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="hidden md:flex items-center gap-4 mt-20 lg:mt-24 text-black dark:text-white"
              variants={item}
            >
              <motion.div 
                ref={scope}
                className="flex items-center justify-center w-12 h-12 border-stark bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-smooth cursor-pointer"
              >
                <ChevronDown size={20} />
              </motion.div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Scroll to explore</span>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image and Badges */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={fadeInScale}
            initial="hidden"
            animate="show"
          >
            {/* Feature Badges */}

            

            
            <FeatureBadge 
              icon={<MousePointer2 size={12} />}
              text="Valuable Insights"
              position="bottom-16 -right-6"
              delay={0.9}
            />
            
            {/* Profile Image with 3D tilt effect on desktop */}
            <motion.div 
              className="relative z-10 w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[500px] mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!isMobile ? (
              <TiltCard>
                <img 
                  src={peteProfile} 
                  alt="Pete Helms - AI Strategy Expert" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </TiltCard>
              ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={peteProfile} 
                  alt="Pete Helms - AI Strategy Expert" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
              )}
              

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
