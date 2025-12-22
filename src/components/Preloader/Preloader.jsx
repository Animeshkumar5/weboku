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
      <div className="relative flex items-center justify-center">
        
        {/* --- 1. SPINNING RADIANT BACKGROUND --- */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 3, // Speed of rotation (seconds)
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-600 shadow-[0_0_60px_rgba(59,130,246,0.6)] opacity-90"
        />

        {/* --- 2. LOGO IMAGE (Sits on top) --- */}
        <motion.img 
          // Optional: Gentle pulse animation for the logo itself
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.05 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "reverse", 
            ease: "easeInOut" 
          }}
          src="/favicon/favicon-96x96.png" 
          alt="Weboku Logo" 
          className="relative z-10 w-24 h-24 md:w-28 md:h-28 object-contain rounded-2xl" 
        />

      </div>
    </motion.div>
  );
};

export default Preloader;