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
        // Container Animation (Pulsing Effect for both Logo and Text)
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
        className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
      >
        {/* Logo Image */}
        <img 
          src="/favicon/favicon-96x96.png" 
          alt="Weboku Logo" 
          className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.5)]" 
        />

        {/* Text with Matching Brand Gradient */}
        <div className="text-4xl md:text-6xl font-bold tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 drop-shadow-2xl">
          WEBOKU
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;