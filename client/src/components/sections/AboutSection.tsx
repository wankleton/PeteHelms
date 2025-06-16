import { motion } from "framer-motion";
import { BrainCircuit, ChartLine, Rocket, Check, LightbulbIcon } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  const experienceItems = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Builder at Heart",
      description: "I've started companies, built teams, and learned from both successes and failures along the way."
    },
    {
      icon: <ChartLine className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Strategic Perspective",
      description: "Years of working with diverse industries taught me to see patterns and connections across different contexts."
    },
    {
      icon: <Rocket className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Practical Approach",
      description: "I focus on what actually works in the real world, not just what sounds good in theory."
    }
  ];

  return (
    <section id="purpose" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-slate-950">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>My <span className="text-slate-900 dark:text-white font-bold">Purpose</span></>}
          description="Why I'm passionate about helping leaders navigate complexity and uncertainty."
        />
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-slate-900 dark:text-white leading-tight">What Drives Me</h3>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I believe that great leaders are made in moments of uncertainty. When the path forward isn't clear, when the stakes are high, when conventional wisdom doesn't apply—that's when real leadership emerges.
              </p>
              <p>
                I've been fascinated by these moments my entire career. How do some leaders see opportunities where others see obstacles? How do they make confident decisions with incomplete information? How do they inspire teams to pursue ambitious goals when the outcome is uncertain?
              </p>
              <p>
                This curiosity led me to start companies, study successful leaders, and work alongside teams navigating complex challenges. I discovered that breakthrough results come not from having all the answers, but from asking better questions and seeing patterns that others miss.
              </p>
              <p>
                Today, I'm passionate about sharing these insights with leaders who are ready to think differently and act boldly.
              </p>
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
          {experienceItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-light mb-4 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
