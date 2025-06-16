import { motion } from "framer-motion";
import { BrainCircuit, ChartLine, Rocket, Check, LightbulbIcon } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  const expertiseItems = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-white" />,
      title: "AI Expertise",
      description: "10+ years building AI solutions with measurable ROI."
    },
    {
      icon: <ChartLine className="h-6 w-6 text-white" />,
      title: "Business Strategy",
      description: "Technical knowledge with business acumen for market leadership."
    },
    {
      icon: <Rocket className="h-6 w-6 text-white" />,
      title: "Tech Founder",
      description: "Built successful products and teams in competitive markets."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white dark:bg-midnight-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-highlight/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-gradient-start/10 blur-3xl -z-10"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-data-grid opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>About <span className="gradient-text">Pete Helms</span></>}
          description="AI expert driving business transformation."
        />
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center rounded-full bg-accent-highlight/20 px-3 py-1 text-sm font-medium text-midnight dark:text-white mb-6">
              <LightbulbIcon className="h-4 w-4 mr-1" /> My Philosophy
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">AI That Delivers Real Results</h3>
            <p className="text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              I create AI strategies that blend business insight with technical expertise. My approach delivers competitive advantage through practical, ethical implementation.
            </p>
            
            <div className="p-6 bg-gradient-to-br from-midnight-50 to-secondary-100 dark:from-midnight-800 dark:to-midnight-900 rounded-xl border border-accent-highlight/30 backdrop-blur-sm shadow-lg">
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-4">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-midnight text-white font-medium text-sm border-2 border-white dark:border-midnight-700">
                    <Check size={18} />
                  </span>
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-accent-gradient-start text-white font-medium text-sm border-2 border-white dark:border-midnight-700">
                    <Check size={18} />
                  </span>
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-accent-gradient-end text-white font-medium text-sm border-2 border-white dark:border-midnight-700">
                    <Check size={18} />
                  </span>
                </div>
                <div>
                  <p className="font-medium text-midnight dark:text-white">Proven industry results</p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Startups to Fortune 500</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-midnight-800 to-midnight-950 p-6 sm:p-8 rounded-xl shadow-xl border border-secondary-700/30 hover:border-accent-highlight transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end rounded-lg flex items-center justify-center mb-6 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-secondary-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
