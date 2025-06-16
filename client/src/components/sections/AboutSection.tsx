import { motion } from "framer-motion";
import { Star, Target, Check, LightbulbIcon, Plus } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  const purposeItems = [
    {
      icon: (
        <svg className="h-6 w-6 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C11.17 2 10.5 2.67 10.5 3.5V9.5H4.5C3.67 9.5 3 10.17 3 11V13C3 13.83 3.67 14.5 4.5 14.5H10.5V20.5C10.5 21.33 11.17 22 12 22C12.83 22 13.5 21.33 13.5 20.5V14.5H19.5C20.33 14.5 21 13.83 21 13V11C21 10.17 20.33 9.5 19.5 9.5H13.5V3.5C13.5 2.67 12.83 2 12 2Z"/>
        </svg>
      ),
      title: "Faith",
      description: "Grounded in Christian values, committed to serving the business community with integrity and excellence."
    },
    {
      icon: <Star className="h-6 w-6 text-white dark:text-black" />,
      title: "Purpose",
      description: "Using business as a platform for service, transformation, and meaningful impact that creates lasting value."
    },
    {
      icon: <Target className="h-6 w-6 text-white dark:text-black" />,
      title: "Impact",
      description: "Building innovative solutions that create lasting value for businesses and the communities they serve."
    }
  ];

  return (
    <section id="purpose" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-20 md:mb-24">
          <div className="absolute left-0 top-0 w-2 h-32 bg-black dark:bg-white rounded-full"></div>
          <div className="pl-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              MY <span className="text-ultra-thin">PURPOSE</span>
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white mb-6"></div>
            <p className="text-xl md:text-2xl text-black dark:text-white font-light leading-relaxed max-w-2xl">
              The values and beliefs that drive everything I do.
            </p>
          </div>
        </div>
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-16 text-black dark:text-white leading-[0.9] tracking-tight relative">
              WHY I DO WHAT I DO
              <div className="absolute -bottom-4 left-0 w-20 h-1 bg-black dark:bg-white"></div>
            </h3>
            <div className="space-y-10 text-xl md:text-2xl text-black dark:text-white leading-[1.6] font-light">
              <p>My purpose is to create with intention, build what matters, and serve with integrity.</p>
              <p>I believe business is a powerful platform for service and transformation. When we help clients operate more efficiently, reduce costs, and achieve milestones, we're not just improving bottom lines—we're creating space for leaders to focus on what matters most.</p>
              <p>I'm here to serve the business community with the knowledge, clarity, and creativity I've been blessed with.</p>
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
          {purposeItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-black p-10 md:p-12 border-stark transition-smooth hover:shadow-2xl relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-24 h-24 bg-black dark:bg-white flex items-center justify-center mb-10 transition-bounce group-hover:rotate-12 shadow-lg">
                <div className="text-white dark:text-black text-xl">
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