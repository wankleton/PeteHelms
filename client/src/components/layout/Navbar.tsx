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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm border-b border-slate-200/20 dark:border-slate-800/20' 
          : 'py-5 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-20 relative">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end border-2 border-white dark:border-midnight-700 flex items-center justify-center">
              <img 
                src={peteProfile} 
                alt="Pete Helms" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
          </Link>
          
          
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group shadow-lg"
              size="sm"
            >
              <a href="https://calendly.com/pete-helms/intro-call" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4" />
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          {/* Mobile CTA Button */}
          <div className="md:hidden z-20">
            <a 
              href="https://calendly.com/pete-helms/intro-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium flex items-center whitespace-nowrap min-h-[44px]"
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Let's Connect
            </a>
          </div>
        </div>
        

      </div>
    </header>
  );
}
