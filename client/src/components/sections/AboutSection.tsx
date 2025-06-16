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
    <section id="about" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-slate-950">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>Meet <span className="text-slate-900 dark:text-white font-bold">Pete Helms</span></>}
          description="Strategic innovation that transforms businesses."
        />
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-slate-900 dark:text-white leading-tight">Innovation That Scales</h3>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              Turning vision into reality through strategic innovation.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <p className="text-4xl font-light text-slate-900 dark:text-white mb-2">15+</p>
                <p className="text-slate-600 dark:text-slate-400">Years</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-slate-900 dark:text-white mb-2">$500M+</p>
                <p className="text-slate-600 dark:text-slate-400">Value Created</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-light text-slate-900 dark:text-white mb-2">50+</p>
                <p className="text-slate-600 dark:text-slate-400">Projects</p>
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
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gradient-start group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
