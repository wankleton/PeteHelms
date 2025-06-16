import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function ValueSection() {
  const valueItems = [
    {
      icon: <Eye className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Pattern Recognition",
      description: "I help you see connections and opportunities that aren't immediately obvious, drawing insights from diverse experiences across industries."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Strategic Clarity",
      description: "I cut through complexity to help you focus on what truly matters, turning overwhelming decisions into clear action plans."
    },
    {
      icon: <Target className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Practical Solutions",
      description: "I bridge the gap between vision and execution, ensuring strategies are not just brilliant on paper but actually work in practice."
    },
    {
      icon: <Users className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Objective Perspective",
      description: "As an outside advisor, I bring fresh eyes to your challenges without internal politics or assumptions clouding judgment."
    }
  ];

  return (
    <section id="value" className="py-20 sm:py-24 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>How I <span className="text-slate-900 dark:text-white font-bold">Add Value</span></>}
          description="The unique perspective and approach I bring to complex challenges."
          className="max-w-3xl"
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {valueItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-slate-950 p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
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