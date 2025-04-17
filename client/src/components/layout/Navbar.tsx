import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight, ChevronRight, Home, Users, Award, Calendar, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/lib/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import peteProfile from '@/assets/pete-profile.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Find active section for highlighting
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 200 && sectionTop >= -200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu item click
  const handleMobileItemClick = () => {
    setIsOpen(false);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };
  
  // Map icons to navigation items
  const getNavIcon = (id: string) => {
    switch(id) {
      case 'home': return <Home size={16} />;
      case 'about': return <Users size={16} />;
      case 'services': return <Award size={16} />;
      case 'testimonials': return <MessageSquare size={16} />;
      case 'contact': return <MessageSquare size={16} />;
      default: return <ChevronRight size={16} />;
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/95 dark:bg-midnight/95 backdrop-blur-xl shadow-lg border-b border-secondary-100/50 dark:border-secondary-800/50' 
          : 'py-4 bg-white/90 dark:bg-midnight/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-20 relative">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end border-2 border-white dark:border-midnight-700">
              <img 
                src={peteProfile} 
                alt="Pete Helms" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-display font-bold text-midnight dark:text-white tracking-tight">
              Pete Helms
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2 bg-secondary-50/80 dark:bg-secondary-900/50 backdrop-blur-md rounded-full px-2 py-1.5">
            {navigationItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-200 flex items-center gap-1.5 ${
                  activeSection === item.id 
                    ? 'bg-white dark:bg-midnight shadow-sm text-midnight dark:text-white' 
                    : 'text-secondary-700 dark:text-secondary-300 hover:bg-white/80 dark:hover:bg-secondary-800/80'
                }`}
              >
                {getNavIcon(item.id)}
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end hover:brightness-110 text-white transition-all duration-300 group shadow-lg"
              size="sm"
            >
              <a href="#book" onClick={scrollToSection('book')} className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4" />
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-20 flex gap-3 items-center">
            <a 
              href="#book" 
              onClick={scrollToSection('book')}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white text-sm font-medium flex items-center whitespace-nowrap"
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Book
            </a>
            
            <button 
              type="button" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-50 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:text-midnight dark:hover:text-white focus:outline-none transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu - fullscreen overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                className="fixed inset-0 bg-midnight/90 backdrop-blur-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Menu Content */}
              <motion.div 
                className="fixed inset-0 z-10 flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <nav className="flex flex-col items-center space-y-6 p-8">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                    >
                      <a 
                        href={`#${item.id}`}
                        onClick={(e) => {
                          scrollToSection(item.id)(e);
                          handleMobileItemClick();
                        }}
                        className={`text-2xl font-bold flex items-center ${
                          activeSection === item.id 
                            ? 'text-white' 
                            : 'text-secondary-300 hover:text-white'
                        }`}
                      >
                        <span className="mr-3 opacity-70">{getNavIcon(item.id)}</span>
                        {item.name}
                        {activeSection === item.id && (
                          <motion.div
                            className="w-2 h-2 rounded-full bg-accent-gradient-start ml-3"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            layoutId="activeIndicator"
                          />
                        )}
                      </a>
                    </motion.div>
                  ))}
                </nav>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="absolute bottom-16 flex flex-col items-center"
                >
                  <a 
                    href="#book" 
                    onClick={(e) => {
                      scrollToSection('book')(e);
                      handleMobileItemClick();
                    }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white font-medium flex items-center"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book a Strategy Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <button
                    onClick={handleMobileItemClick}
                    className="mt-8 text-secondary-400 hover:text-white transition-colors"
                  >
                    Close Menu
                  </button>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
