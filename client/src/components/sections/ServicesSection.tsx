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
    <section id="services" className="py-16 md:py-24 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Services & Expertise" 
          description="Strategic offerings designed to help your business leverage AI for maximum impact."
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
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 group"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="text-xl text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-secondary-600 mb-6">{service.description}</p>
              <a 
                href="#book" 
                onClick={scrollToBooking}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
