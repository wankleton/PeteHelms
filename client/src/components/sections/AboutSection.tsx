import { motion } from "framer-motion";
import { BrainCircuit, ChartLine, Rocket, Check } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  const expertiseItems = [
    {
      icon: <BrainCircuit className="text-xl text-primary" />,
      title: "AI Expertise",
      description: "With over a decade in artificial intelligence, I've helped countless organizations implement AI solutions that deliver tangible business results."
    },
    {
      icon: <ChartLine className="text-xl text-primary" />,
      title: "Business Strategy",
      description: "I combine deep technical knowledge with business acumen to craft strategies that position companies for sustainable growth and market leadership."
    },
    {
      icon: <Rocket className="text-xl text-primary" />,
      title: "Tech Founder",
      description: "Having founded and scaled technology companies, I understand the challenges of building products and teams that can compete in rapidly evolving markets."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">About Pete Helms</h2>
          <p className="text-lg text-secondary-600">AI expert, business strategist, and tech founder with a passion for transformational technology.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-secondary-50 p-8 rounded-xl"
              variants={fadeIn}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-secondary-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-secondary-600 mb-4">
              I believe that the most effective AI strategies are built on a foundation of business understanding, technical expertise, and human-centered design. My process combines these elements to create solutions that are not only technically sound but also ethically responsible and commercially viable.
            </p>
            <p className="text-secondary-600 mb-6">
              By focusing on the intersection of what's possible with what's practical, I help organizations navigate the complexity of AI adoption and emerge with a competitive advantage.
            </p>
            
            <div className="flex items-center mt-8">
              <div className="flex -space-x-2 mr-4">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-medium text-sm border-2 border-white">
                  <Check size={16} />
                </span>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-500 text-white font-medium text-sm border-2 border-white">
                  <Check size={16} />
                </span>
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-medium text-sm border-2 border-white">
                  <Check size={16} />
                </span>
              </div>
              <div>
                <p className="font-medium">Proven results across industries</p>
                <p className="text-sm text-secondary-500">From startups to Fortune 500 companies</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="aspect-square rounded-xl overflow-hidden bg-secondary-200"
              variants={fadeIn}
            >
              {/* In production, this would be an actual photo */}
            </motion.div>
            <motion.div 
              className="aspect-square rounded-xl overflow-hidden bg-secondary-200" 
              variants={fadeIn}
            >
              {/* In production, this would be an actual photo */}
            </motion.div>
            <motion.div 
              className="aspect-square rounded-xl overflow-hidden col-span-2 bg-secondary-200"
              variants={fadeIn}
            >
              {/* In production, this would be an actual photo */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
