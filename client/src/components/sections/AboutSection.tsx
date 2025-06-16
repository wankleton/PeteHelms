import { motion } from "framer-motion";
import { Heart, Users, Target, Check, LightbulbIcon } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";

export default function AboutSection() {
  const purposeItems = [
    {
      icon: <Heart className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Faith & Family",
      description: "Grounded in Christian values, committed to serving God and leading my family with integrity."
    },
    {
      icon: <Users className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Community Impact",
      description: "Building solutions that create lasting value for businesses and the communities they serve."
    },
    {
      icon: <Target className="h-6 w-6 text-gray-900 dark:text-white" />,
      title: "Purpose-Driven",
      description: "Using business as a platform for service, transformation, and meaningful impact."
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
              <p>
                My life is grounded in purpose. As a Christian, I'm called to love and serve God in everything I do. As a husband and father, I'm committed to leading and serving my family with integrity.
              </p>
              <p>
                Professionally, I'm here to create innovative solutions, build impactful communities, and serve business leaders with the knowledge, clarity, and creativity I've been blessed with.
              </p>
              <p>
                I believe business is a powerful platform for service and transformation. When we help businesses operate more efficiently, reduce costs, and unlock new possibilities, we're not just improving bottom lines—we're creating space for leaders to focus on what matters most.
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