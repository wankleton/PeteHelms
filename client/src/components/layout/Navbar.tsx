import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Home, Users, Award, Calendar, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigationItems } from '@/lib/constants';

import peteProfile from '@/assets/pete-profile.jpg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-premium border-b border-slate-200/30 dark:border-slate-800/30' 
          : 'py-5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-20 relative">
            <motion.div 
              className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-200 border-2 border-white dark:border-black flex items-center justify-center shadow-premium"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img 
                src={peteProfile} 
                alt="Pete Helms" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            
          </Link>
          
          
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button 
                asChild
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-500 group shadow-intense hover:shadow-premium relative overflow-hidden"
                size="sm"
              >
                <a href="https://calendly.com/pete-helms/intro-call" target="_blank" rel="noopener noreferrer" className="flex items-center relative z-10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black dark:from-gray-100 dark:to-white opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="mr-1.5 h-4 w-4 relative z-10" />
                  <span className="relative z-10">Let's Connect</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile CTA Button */}
          <div className="md:hidden z-20">
            <motion.a 
              href="https://calendly.com/pete-helms/intro-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium flex items-center whitespace-nowrap min-h-[44px] shadow-intense relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black dark:from-gray-100 dark:to-white opacity-0 hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <Calendar className="mr-1.5 h-3.5 w-3.5 relative z-10" />
              <span className="relative z-10">Let's Connect</span>
            </motion.a>
          </div>
        </div>
        

      </div>
    </header>
  );
}
