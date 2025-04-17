import { motion } from "framer-motion";
import { BrainCircuit, ChartLine, Rocket, Check, LightbulbIcon } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/section-heading";
import peteProfile from "@/assets/pete-profile.jpg";

export default function AboutSection() {
  const expertiseItems = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-midnight" />,
      title: "AI Expertise",
      description: "With over a decade in artificial intelligence, I've helped countless organizations implement AI solutions that deliver tangible business results."
    },
    {
      icon: <ChartLine className="h-6 w-6 text-midnight" />,
      title: "Business Strategy",
      description: "I combine deep technical knowledge with business acumen to craft strategies that position companies for sustainable growth and market leadership."
    },
    {
      icon: <Rocket className="h-6 w-6 text-midnight" />,
      title: "Tech Founder",
      description: "Having founded and scaled technology companies, I understand the challenges of building products and teams that can compete in rapidly evolving markets."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-highlight/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-gradient-start/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={<>About <span className="gradient-text">Pete Helms</span></>}
          description="AI expert, business strategist, and tech founder with a passion for transformational technology."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-secondary-100 hover:border-accent-highlight transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-midnight-50 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-secondary-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="md:w-1/2 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl relative z-10"
              variants={fadeIn}
            >
              <img 
                src={peteProfile} 
                alt="Pete Helms - AI Expert" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/20 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-2/3 h-full border-2 border-accent-highlight/30 rounded-xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center rounded-full bg-accent-highlight/20 px-3 py-1 text-sm font-medium text-midnight mb-6">
              <LightbulbIcon className="h-4 w-4 mr-1" /> My Philosophy
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Strategic AI Implementation for Business Growth</h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              I believe that the most effective AI strategies are built on a foundation of business understanding, technical expertise, and human-centered design. My process combines these elements to create solutions that are not only technically sound but also ethically responsible and commercially viable.
            </p>
            <p className="text-secondary-600 mb-8 leading-relaxed">
              By focusing on the intersection of what's possible with what's practical, I help organizations navigate the complexity of AI adoption and emerge with a competitive advantage.
            </p>
            
            <div className="p-6 bg-midnight-50 rounded-xl border border-accent-highlight/30">
              <div className="flex items-center">
                <div className="flex -space-x-3 mr-4">
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full shadow-md bg-midnight text-white font-medium text-sm border-2 border-white">
                    <Check size={16} />
                  </span>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full shadow-md bg-accent-gradient-start text-white font-medium text-sm border-2 border-white">
                    <Check size={16} />
                  </span>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full shadow-md bg-accent-gradient-end text-white font-medium text-sm border-2 border-white">
                    <Check size={16} />
                  </span>
                </div>
                <div>
                  <p className="font-medium text-midnight">Proven results across industries</p>
                  <p className="text-sm text-secondary-600">From startups to Fortune 500 companies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
