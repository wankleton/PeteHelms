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
        <div className="relative mb-16">
          <div className="absolute right-0 top-0 w-2 h-32 bg-black dark:bg-white"></div>
          <div className="pr-8 text-right">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              HOW I <span className="text-ultra-thin">BRING VALUE</span>
            </h2>
            <p className="text-xl md:text-2xl text-black dark:text-white font-light">
              My approach to helping businesses simplify, automate, and innovate.
            </p>
          </div>
        </div>
        
        {/* Personal Value Statement */}
        <div className="mb-20 mt-12">
          <motion.div 
            className="w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white dark:bg-black p-12 md:p-16 border-stark relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-black dark:bg-white"></div>
              <div className="space-y-8 text-2xl md:text-3xl text-black dark:text-white leading-relaxed font-light">
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
              className="bg-white dark:bg-black p-10 border-stark transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-24 h-24 bg-black dark:bg-white flex items-center justify-center mb-8 transition-all duration-300 group-hover:-rotate-12">
                <div className="text-white dark:text-black text-xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white tracking-wide">{item.title.toUpperCase()}</h3>
              <p className="text-lg text-black dark:text-white leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}