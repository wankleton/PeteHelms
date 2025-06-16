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
        <SectionHeading 
          title={<>My <span className="text-black dark:text-white font-bold">Purpose</span></>}
          description="The values and beliefs that drive everything I do."
        />
        
        <div className="mb-20">
          <motion.div 
            className="w-full max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl md:text-4xl font-light mb-8 text-black dark:text-white leading-tight">Why I Do What I Do</h3>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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