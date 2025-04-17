import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function ServicesSection() {
  // Handles smooth scrolling to booking section
  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 ai-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={<>Services & <span className="gradient-text">Expertise</span></>}
          description="Strategic offerings designed to help your business leverage AI for maximum impact."
          className="max-w-2xl"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 group border border-secondary-100 hover:border-accent-highlight"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-midnight-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-accent-gradient-start group-hover:to-accent-gradient-end transition-colors duration-300">
                <service.icon className="h-6 w-6 text-midnight group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6 text-base">{service.description}</p>
              <a 
                href="#book" 
                onClick={scrollToBooking}
                className="inline-flex items-center text-midnight hover:text-accent-gradient-end font-medium transition-colors group/link"
              >
                Learn more 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-accent-highlight/20 blur-3xl -z-10"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-accent-gradient-start/10 blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
