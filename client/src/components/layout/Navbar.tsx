import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <header 
      className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/95 shadow-lg' 
          : 'py-5 bg-white/90 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-midnight tracking-tight">
              Pete Helms
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-10">
            {navigationItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={scrollToSection(item.id)}
                className={`font-medium relative transition-colors duration-200 after:absolute after:w-full after:h-[2px] after:bottom-[-4px] after:left-0 after:scale-x-0 after:transition-transform after:duration-300 ${
                  activeSection === item.id 
                    ? 'text-midnight font-semibold after:bg-midnight after:scale-x-100' 
                    : 'text-secondary-700 hover:text-midnight hover:after:scale-x-100 hover:after:bg-accent-highlight'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-midnight hover:bg-midnight-800 transition-all duration-300 group shadow"
              size="sm"
            >
              <a href="#book" onClick={scrollToSection('book')} className="flex items-center">
                Book a Session
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <button 
            type="button" 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-secondary-600 hover:text-midnight hover:bg-secondary-100 focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden absolute left-0 right-0 bg-white shadow-xl mt-2 rounded-b-xl border-t border-secondary-100 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-3 space-y-2 divide-y divide-secondary-100">
                {navigationItems.map(item => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      scrollToSection(item.id)(e);
                      handleMobileItemClick();
                    }}
                    className="block py-3 text-base font-medium text-secondary-900 hover:text-midnight"
                  >
                    {item.name}
                  </a>
                ))}
                <a 
                  href="#book" 
                  onClick={(e) => {
                    scrollToSection('book')(e);
                    handleMobileItemClick();
                  }}
                  className="block py-4 mt-2 text-base font-medium text-midnight hover:text-secondary-900 flex items-center justify-center"
                >
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
