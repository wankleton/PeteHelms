import { motion } from "framer-motion";
import { Star, Target, Check, LightbulbIcon, Plus } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer, slideInLeft, scaleInSpring } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  const purposeItems = [
    {
      icon: (
        <svg className="h-8 w-8 text-white dark:text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6V2z"/>
        </svg>
      ),
      title: "Faith",
      description: "Christian values guide every business decision."
    },
    {
      icon: <Star className="h-6 w-6 text-white dark:text-black" />,
      title: "Purpose",
      description: "Technology as a platform for meaningful transformation."
    },
    {
      icon: <Target className="h-6 w-6 text-white dark:text-black" />,
      title: "Impact",
      description: "Solutions that create lasting business value."
    }
  ];

  return (
    <section id="purpose" className="py-20 sm:py-24 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="relative mb-20 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute left-0 top-0 w-2 bg-black dark:bg-white rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          />
          <motion.div 
            className="pl-12"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <motion.span 
                className="text-ultra-thin"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >MY</motion.span> 
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >PURPOSE</motion.span>
            </h2>
            <motion.div 
              className="w-16 h-1 bg-black dark:bg-white mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            />
            <motion.p 
              className="text-xl md:text-2xl text-black dark:text-white font-light leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              The foundation of my work and approach.
            </motion.p>
          </motion.div>
        </motion.div>
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-black dark:text-white leading-[0.9] tracking-tight relative">
              WHY I DO WHAT I DO
              <div className="absolute -bottom-4 left-0 w-16 sm:w-20 h-1 bg-black dark:bg-white"></div>
            </h3>
            <div className="space-y-6 sm:space-y-8 md:space-y-10 text-lg sm:text-xl md:text-2xl text-black dark:text-white leading-[1.6] font-light">
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
              className="bg-white dark:bg-black p-6 sm:p-8 md:p-10 lg:p-12 border-stark transition-smooth hover:shadow-2xl relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-black dark:bg-white flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-bounce group-hover:rotate-12 shadow-lg">
                <div className="text-white dark:text-black text-lg sm:text-xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-black dark:text-white tracking-wider leading-tight">{item.title.toUpperCase()}</h3>
              <p className="text-base sm:text-lg text-black dark:text-white leading-[1.7] font-light">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}