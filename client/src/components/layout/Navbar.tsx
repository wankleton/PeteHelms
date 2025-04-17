import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
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
    <header className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Pete Helms</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-secondary-900 hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button asChild>
              <a href="#book" onClick={scrollToSection('book')}>
                Book a Strategy Session
              </a>
            </Button>
          </div>
          
          <button 
            type="button" 
            className="md:hidden text-secondary-500 hover:text-secondary-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigationItems.map(item => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      scrollToSection(item.id)(e);
                      handleMobileItemClick();
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-secondary-900 hover:bg-primary-50 hover:text-primary"
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
                  className="block px-3 py-3 mt-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90 text-center"
                >
                  Book a Strategy Session
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
