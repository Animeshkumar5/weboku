import React, { useState } from 'react';
import { Mail, X, Send, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMail = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // UPDATED POSITION: bottom-28 (to sit above scroll button) and right-8
    <div className="fixed bottom-28 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* 1. The Mini Contact Form (Popup) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            // UPDATED ORIGIN: origin-bottom-right so it expands from the right
            className="w-[350px] bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right mb-2"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold">
                <MessageSquare size={18} className="text-blue-400" />
                <span>Quick Message</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form Fields */}
            <form className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1 ml-1">Message</label>
                <textarea 
                  rows="3"
                  placeholder="How can we help?"
                  className="w-full px-3 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 group"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. The Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-2xl hover:border-blue-500/50 transition-all duration-300"
      >
        {/* Spinning Gradient Border on Hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.blue.400)_360deg)] animate-spin-slow"></div>
        </div>
        
        {/* Inner Mask */}
        <div className="absolute inset-[2px] bg-gray-900 rounded-full z-10"></div>

        {/* Icon */}
        <motion.div 
          className="relative z-20 text-blue-400 group-hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Mail size={24} />}
        </motion.div>

        {/* Pulse Effect (Only when closed) */}
        {!isOpen && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default FloatingMail;