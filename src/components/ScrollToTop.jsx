import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 1. Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 2. Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          {/* Outer Glow Ring (Pulse Animation) */}
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-40 animate-pulse"></div>

          <button
            onClick={scrollToTop}
            className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Spinning Gradient Border on Hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.blue.400)_360deg)] animate-spin-slow"></div>
            </div>
            
            {/* Inner Mask to keep the center dark */}
            <div className="absolute inset-[2px] bg-gray-900 rounded-full z-10"></div>

            {/* The Arrow Icon */}
            <motion.div 
              className="relative z-20 text-blue-400 group-hover:text-white transition-colors"
              whileHover={{ y: -3 }} // Little upward bounce on hover
            >
              <ArrowUp size={24} strokeWidth={3} />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;