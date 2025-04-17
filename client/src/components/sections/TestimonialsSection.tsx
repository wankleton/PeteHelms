import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";
import SectionHeading from "@/components/ui/section-heading";
import { Star } from "lucide-react";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Client Success Stories" 
          description="What business leaders say about working with me."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={fadeIn}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="inline-block h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="mb-6 italic text-secondary-600">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-secondary-200">
                  {/* In production, this would be an actual photo */}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
