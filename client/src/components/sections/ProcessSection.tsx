import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { processSteps } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-highlight/5 -z-10"></div>
      <div className="absolute top-1/4 left-0 w-full h-1/2 ai-pattern opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title={<>My Proven <span className="gradient-text">Process</span></>}
          description="A structured approach from assessment to implementation."
          centered={false}
          className="lg:max-w-lg mb-12"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-16">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex gap-6 group"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index * 0.15}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-midnight transition-colors">{step.title}</h3>
                  <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:col-span-2 lg:sticky lg:top-32 self-start">
            <motion.div 
              className="relative"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="rounded-xl shadow-intense overflow-hidden premium-hover">
                <div className="aspect-[4/5] bg-gradient-to-br from-midnight to-secondary-700 relative">
                  {/* Visual representation of AI process */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full relative">
                      {/* Connected nodes visualization */}
                      <div className="absolute w-3 h-3 bg-white rounded-full top-[20%] left-[30%] shadow-glow animate-pulse"></div>
                      <div className="absolute w-2 h-2 bg-accent-gradient-start rounded-full top-[40%] left-[70%] shadow-glow animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute w-4 h-4 bg-accent-gradient-end rounded-full top-[70%] left-[20%] shadow-glow animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute w-3 h-3 bg-accent-highlight rounded-full top-[60%] left-[60%] shadow-glow animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <div className="absolute w-2 h-2 bg-white rounded-full top-[30%] left-[50%] shadow-glow animate-pulse" style={{ animationDelay: '2s' }}></div>
                      
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30,20 L70,40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                        <path d="M70,40 L20,70" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                        <path d="M20,70 L60,60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                        <path d="M60,60 L50,30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                        <path d="M50,30 L30,20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Subtle grid overlay */}
                  <div className="absolute inset-0 bg-data-grid opacity-30"></div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
                <p className="text-base sm:text-lg text-secondary-600 italic">
                  "Pete's structured approach brought clarity and measurable results in record time."
                </p>
                <p className="text-base sm:text-lg font-medium mt-2">— Client Testimonial</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
