import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Animated Text Reveal
export const TextReveal = ({ text, className = '' }) => {
  const characters = text.split('');
  
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03 } },
        hidden: {}
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Scroll Reveal
export const ScrollReveal = ({ children, className = '', delay = 0, yOffset = 50 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Fade In
export const FadeIn = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Hover Card
export const HoverCard = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
