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
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 w-2 h-32 bg-black dark:bg-white"></div>
          <div className="pl-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
              MY <span className="text-ultra-thin">PURPOSE</span>
            </h2>
            <p className="text-xl md:text-2xl text-black dark:text-white font-light">
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
            <h3 className="text-4xl md:text-5xl font-bold mb-12 text-black dark:text-white leading-tight tracking-tight">
              WHY I DO WHAT I DO
            </h3>
            <div className="space-y-8 text-xl md:text-2xl text-black dark:text-white leading-relaxed font-light">
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
              className="bg-white dark:bg-black p-8 border-stark transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="w-20 h-20 bg-black dark:bg-white flex items-center justify-center mb-8 transition-all duration-300 group-hover:rotate-12">
                <div className="text-white dark:text-black">
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