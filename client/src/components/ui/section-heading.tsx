import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  centered = true,
  className,
  ...props
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
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-secondary-600">{description}</p>
      )}
    </motion.div>
  );
}
