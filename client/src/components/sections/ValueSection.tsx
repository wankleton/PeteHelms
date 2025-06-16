import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function ValueSection() {
  const valueItems = [
    {
      icon: <Eye className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Curiosity & Intention",
      description: "I approach every project with genuine curiosity about your unique challenges and clear intention to create meaningful impact."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Simplify Operations",
      description: "I help you streamline five tools into one unified platform, eliminating redundancy and reducing operational complexity."
    },
    {
      icon: <Target className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Cut Costs",
      description: "Through strategic automation and custom solutions, I help reduce marketing costs by 30-50% while maintaining or improving results."
    },
    {
      icon: <Users className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Custom Innovation",
      description: "I build AI-powered systems and custom solutions tailored to your specific needs, bringing strategy, execution, and valuable experience together."
    }
  ];

  return (
    <section id="value" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>How I <span className="text-black dark:text-white font-bold">Bring Value</span></>}
          description="My approach to helping businesses simplify, automate, and innovate."
          className="max-w-3xl"
        />
        
        {/* Personal Value Statement */}
        <div className="mb-20 mt-12">
          <motion.div 
            className="w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white dark:bg-black p-8 md:p-12 border border-black dark:border-white">
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I approach every project with curiosity and intention. I don't just help clients build custom solutions—I help them rethink how they operate.
                </p>
                <p>
                  Together, we simplify, automate, and innovate. Whether it's streamlining five tools into one unified platform, reducing marketing costs by 30–50%, or launching custom AI-powered systems, I bring strategy, execution, and valuable experience to the table.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {valueItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-black p-8 border border-black dark:border-white transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900 flex items-center justify-center mb-6 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-light mb-4 text-black dark:text-white">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}