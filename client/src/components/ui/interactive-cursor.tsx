import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsMoving(true);
      
      // Reset moving state after a short delay
      setTimeout(() => setIsMoving(false), 150);
    };

    const isInteractiveElement = (element: Element): element is HTMLElement => {
      if (!element || typeof element.tagName !== 'string') return false;
      
      const tagName = element.tagName.toLowerCase();
      const hasDataCursor = element.hasAttribute && element.hasAttribute('data-cursor');
      const isButton = tagName === 'button';
      const isLink = tagName === 'a';
      const hasClickable = element.getAttribute && element.getAttribute('role') === 'button';
      
      return isButton || isLink || hasDataCursor || hasClickable;
    };

    let hoverTimeout: NodeJS.Timeout | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      
      // Clear any pending reset
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
      
      // Find the closest interactive element (handles nested elements)
      let closestInteractive = target;
      while (closestInteractive && !isInteractiveElement(closestInteractive)) {
        closestInteractive = closestInteractive.parentElement;
      }
      
      if (closestInteractive && isInteractiveElement(closestInteractive)) {
        setIsHovering(true);
        const text = closestInteractive.getAttribute('data-cursor') || '';
        setCursorText(text);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      // Use a small delay before resetting to prevent flickering on nested elements
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      
      hoverTimeout = setTimeout(() => {
        const target = e.relatedTarget as Element;
        
        // Check if we're moving to another interactive element
        let closestInteractive = target;
        while (closestInteractive && !isInteractiveElement(closestInteractive)) {
          closestInteractive = closestInteractive.parentElement;
        }
        
        // Only reset if we're not moving to another interactive element
        if (!closestInteractive || !isInteractiveElement(closestInteractive)) {
          setIsHovering(false);
          setCursorText('');
        }
      }, 50);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Flashlight outer glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-48 h-48 rounded-full"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 248, 200, 0.08) 0%,
              rgba(255, 248, 200, 0.04) 30%,
              rgba(255, 235, 120, 0.02) 60%,
              transparent 80%
            )`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 2.4 : isMoving ? 1.8 : 1.5,
            opacity: isHovering ? 0.9 : isMoving ? 0.7 : 0.5,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      </motion.div>

      {/* Flashlight inner glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-28 h-28 rounded-full"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 248, 200, 0.12) 25%,
              rgba(255, 235, 120, 0.08) 50%,
              rgba(255, 235, 120, 0.04) 75%,
              transparent 100%
            )`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 2.0 : isMoving ? 1.6 : 1.3,
            opacity: isHovering ? 0.9 : isMoving ? 0.7 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 25 }}
        />
      </motion.div>

      {/* Main flashlight cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full border"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 248, 200, 0.9) 30%,
              rgba(255, 235, 120, 0.7) 70%,
              rgba(255, 235, 120, 0.4) 100%
            )`,
            borderColor: 'rgba(255, 235, 120, 0.8)',
            boxShadow: `
              0 0 6px rgba(255, 248, 200, 0.8),
              0 0 12px rgba(255, 235, 120, 0.6),
              0 0 18px rgba(255, 235, 120, 0.4),
              0 0 24px rgba(255, 235, 120, 0.2)
            `,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 3.0 : isMoving ? 2.2 : 1.5,
            opacity: isHovering ? 1 : isMoving ? 0.9 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
      </motion.div>
      
      {/* Flashlight cursor text */}
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none z-[9999] px-3 py-1.5 text-xs font-bold rounded-full border"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            background: `linear-gradient(135deg, 
              rgba(255, 248, 200, 0.95) 0%,
              rgba(255, 255, 255, 0.95) 50%,
              rgba(255, 248, 200, 0.9) 100%
            )`,
            color: 'rgba(30, 30, 30, 0.9)',
            borderColor: 'rgba(255, 235, 120, 0.7)',
            boxShadow: `
              0 0 8px rgba(255, 248, 200, 0.6),
              0 0 16px rgba(255, 235, 120, 0.3),
              0 4px 12px rgba(0, 0, 0, 0.1)
            `,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: -40 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
}