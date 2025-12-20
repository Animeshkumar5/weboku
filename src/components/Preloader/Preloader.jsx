import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      // 1. Initial State (Visible)
      initial={{ opacity: 1 }}
      // 2. Exit State (Fade Out when removed)
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      // Full screen, z-index very high to sit on top of everything
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950"
    >
      <motion.div
        // Logo Animation (Pulsing Effect)
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
        className="text-white text-5xl md:text-7xl font-bold tracking-widest"
      >
        WEBOKU
      </motion.div>
    </motion.div>
  );
};

export default Preloader;