import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn(
        centered ? "text-center mx-auto" : "",
        "max-w-3xl mb-16", 
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-secondary-600 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
