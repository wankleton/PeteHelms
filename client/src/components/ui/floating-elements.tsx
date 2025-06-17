import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, Circle } from 'lucide-react';

export const FloatingElements = () => {
  const elements = [
    { Icon: Sparkles, x: '10%', y: '20%', delay: 0 },
    { Icon: Zap, x: '80%', y: '30%', delay: 2 },
    { Icon: Star, x: '15%', y: '70%', delay: 4 },
    { Icon: Circle, x: '85%', y: '80%', delay: 6 },
    { Icon: Sparkles, x: '45%', y: '15%', delay: 1 },
    { Icon: Star, x: '60%', y: '85%', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-10 dark:opacity-5"
          style={{ left: x, top: y }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-4 h-4 text-black dark:text-white" />
        </motion.div>
      ))}
    </div>
  );
};

export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string; 
}) => {
  return (
    <motion.div
      className={className}
      style={{
        y: `${speed * 100}%`,
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};