// Premium easing curves for high-quality animations
const easeOutCubic = [0.33, 1, 0.68, 1];
const easeOutQuart = [0.25, 1, 0.5, 1];
const easeInOutCubic = [0.645, 0.045, 0.355, 1];

// Enhanced stagger containers
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
      ease: easeOutCubic
    }
  }
};

export const fastStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.08
    }
  }
};

// Premium fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: easeOutCubic
    }
  })
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic
    }
  }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOutCubic
    }
  }
};

// Advanced scale animations
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOutQuart
    }
  }
};

export const scaleInSpring = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      mass: 0.8
    }
  }
};

// Button interactions
export const buttonHover = {
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.3,
      ease: easeOutCubic
    }
  },
  tap: {
    scale: 0.98,
    y: 0
  }
};

export const buttonPulse = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: easeOutCubic
    }
  },
  tap: {
    scale: 0.95
  }
};

// Text animations
export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easeOutCubic
    }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easeOutCubic
    }
  }
};

// Image animations
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easeOutCubic
    }
  }
};

// Card animations
export const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
      ease: easeOutCubic
    }
  }
};

// Floating animations
export const floatingElement = {
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Typewriter effect
export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

// Reveal animation
export const revealUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: {
      duration: 1,
      ease: easeOutCubic
    }
  }
};
