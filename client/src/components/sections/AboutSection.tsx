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
          title={<>Meet <span className="bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end bg-clip-text text-transparent font-black">Pete Helms</span></>}
          description="AI strategist delivering 10x ROI for Fortune 500 companies."
        />
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-8 border border-slate-200 dark:border-slate-700">
              <div className="w-2 h-2 rounded-full bg-accent-gradient-start mr-2"></div>
              Philosophy
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight">AI That Actually Works</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">
              I turn AI complexity into competitive advantage. Proven strategies that deliver measurable ROI, not just tech buzzwords.
            </p>
            
            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">500+</p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Companies Transformed</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">$2B+</p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Value Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">10+</p>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Experience</p>
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
