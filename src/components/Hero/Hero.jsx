import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // <--- Import this

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white pt-32 pb-20 overflow-hidden">
      {/* Background styling for Clickwise Dark Theme */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-blue-500">Digital Presence</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              We help businesses grow online with cutting-edge digital marketing strategies, stunning web designs, and data-driven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </motion.button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>

          {/* Right Content with Staggered Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 blur-lg opacity-40"></div>
              <div className="relative bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700">
                <div className="space-y-4">
                  {['ROI-Focused Strategies', 'Expert Team of Professionals', '24/7 Support & Maintenance', 'Proven Track Record'].map((text, i) => (
                     <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.4 + (i * 0.1) }} // Stagger effect
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