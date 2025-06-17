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
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black dark:text-white mb-6 leading-[0.9] tracking-tight">{title}</h2>
      {description && (
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">{description}</p>
      )}
    </motion.div>
  );
}
