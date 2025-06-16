import { motion } from "framer-motion";
import { Eye, Lightbulb, Target, Users } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function ValueSection() {
  const valueItems = [
    {
      icon: <Eye className="h-6 w-6 text-white dark:text-black" />,
      title: "Curiosity",
      description: "Deep understanding of your challenges drives meaningful solutions."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white dark:text-black" />,
      title: "Strategic",
      description: "Comprehensive planning that aligns technology with business goals."
    },
    {
      icon: <Target className="h-6 w-6 text-white dark:text-black" />,
      title: "Creative",
      description: "Innovative approaches to complex business challenges."
    },
    {
      icon: <Users className="h-6 w-6 text-white dark:text-black" />,
      title: "Insightful",
      description: "Data-driven perspectives that reveal new opportunities."
    }
  ];

  return (
    <section id="value" className="py-20 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-20 md:mb-24">
          <div className="absolute right-0 top-0 w-2 h-32 bg-black dark:bg-white rounded-full"></div>
          <div className="pr-12 text-right">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-ultra-thin">HOW I</span> BRING VALUE
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white mb-6 ml-auto"></div>
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
            <div className="bg-white dark:bg-black p-12 md:p-16 border-stark relative overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 w-full h-3 bg-black dark:bg-white"></div>
              <div className="text-2xl md:text-3xl text-black dark:text-white leading-[1.5] font-light italic">
                <p>
                  "I approach every project with curiosity and intention. I don't just help clients build custom solutions—I help them rethink how they operate."
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
              className="bg-white dark:bg-black p-12 md:p-14 border-stark transition-smooth hover:shadow-2xl relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 right-0 w-full h-2 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-28 h-28 bg-black dark:bg-white flex items-center justify-center mb-12 transition-bounce group-hover:-rotate-12 shadow-lg">
                <div className="text-white dark:text-black text-2xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-black dark:text-white tracking-wider leading-tight">{item.title.toUpperCase()}</h3>
              <p className="text-lg text-black dark:text-white leading-[1.7] font-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}