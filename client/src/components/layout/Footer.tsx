import { Link } from 'wouter';
import { 
  Linkedin, 
  MessageSquare,
  Mail, 
  Phone, 
  MapPin
} from 'lucide-react';
import { SiFacebook, SiWhatsapp } from 'react-icons/si';

import { navigationItems, services, contactInfo } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState({}, '', `#${sectionId}`);
    }
  };

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Pete Helms</h3>
            <p className="text-secondary-400 mb-6">
              AI Expert, Business Strategist, and Tech Founder helping businesses leverage cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/petehelmsman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://wa.me/19545894333" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={18} />
              </a>
              <a 
                href="https://www.facebook.com/petehelmsman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigationItems.map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={scrollToSection(item.id)}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.id}>
                  <a 
                    href="#services" 
                    onClick={scrollToSection('services')}
                    className="text-secondary-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-primary mr-3 mt-1" size={16} />
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mr-3 mt-1" size={16} />
                <a 
                  href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-secondary-400 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1" size={16} />
                <span className="text-secondary-400">{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pete Helms. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-secondary-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-secondary-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
