import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { processSteps } from "@/lib/constants";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">My Proven Process</h2>
            <p className="text-lg text-secondary-600 mb-10">
              I follow a structured approach to help businesses navigate their AI journey, from initial assessment to implementation and beyond.
            </p>
            
            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={index * 0.1}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="rounded-xl shadow-xl aspect-video bg-secondary-200">
              {/* In production, this would be an actual photo */}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-100 w-3/4 h-2/3 -z-10 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
