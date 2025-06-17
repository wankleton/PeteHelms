import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
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

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && isInteractiveElement(target)) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target && isInteractiveElement(target)) {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full bg-white rounded-full flex items-center justify-center"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.9 : 0.6,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
      
      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none z-50 px-3 py-1 bg-black text-white text-xs font-bold rounded-full"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 30 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
}