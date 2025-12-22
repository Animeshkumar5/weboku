import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Helper function for smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative text-white pt-32 pb-20 overflow-hidden">
      
      {/* --- IMPORT MICHROMA FONT --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
          .font-tech {
            font-family: 'Michroma', sans-serif;
          }
        `}
      </style>

      {/* Optional: A very subtle gradient overlay to ensure text is readable if orbs move away */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* UPDATED FONT FOR HEADING */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-tech tracking-wide uppercase">
              Transform Your <span className="text-blue-500">Digital Presence</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We help businesses grow online with cutting-edge digital marketing strategies, stunning web designs, and data-driven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              
              {/* 1. BUTTON: Links to Contact Section */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-600/30 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </motion.button>

              {/* 2. BUTTON: Links to Projects Section WITH GRADIENT BORDER */}
              {/* We use a wrapper div with padding (p-[2px]) and a gradient background to create the border effect */}
              <div className="group p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 w-full sm:w-auto">
                <button 
                  onClick={() => scrollToSection('projects')}
                  // The inner button has a solid background to mask the center, leaving only the gradient border visible.
                  // On hover, bg becomes transparent, filling the button with the gradient.
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold bg-gray-950 text-white group-hover:bg-transparent transition-all relative z-10"
                >
                  View Our Work
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Content with Glassmorphism Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Abstract decorative blur behind the card */}
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 blur-2xl opacity-20"></div>
              
              {/* Glass Effect Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
                <div className="space-y-4">
                  {['ROI-Focused Strategies', 'Expert Team of Professionals', '24/7 Support & Maintenance', 'Proven Track Record'].map((text, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="text-blue-500" size={24} />
                        <span className="text-gray-200 font-medium">{text}</span>
                      </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;