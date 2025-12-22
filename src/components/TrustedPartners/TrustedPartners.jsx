import React from 'react';
import { motion } from 'framer-motion';

const TrustedPartners = () => {
  // Logos from your public folder
  const partnerLogos = [
    "/trustedpartnerslogo/digiborr.png", 
    "/trustedpartnerslogo/leatherkart_1.png",
    "/trustedpartnerslogo/limegreen.webp",
    "/trustedpartnerslogo/paisasolution.webp",
    "/trustedpartnerslogo/skillincome.png",
    "/trustedpartnerslogo/sthulas.png"
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-12 bg-gray-950 border-b border-white/5 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        {/* Modern Heading Style */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-400 font-tech uppercase tracking-widest mb-2">
          Trusted By Industry Leaders
        </h3>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for fading effect on sides */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Animation */}
        <motion.div
          className="flex items-center gap-16 md:gap-24 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-110 cursor-pointer"
            >
              <img 
                src={logo} 
                alt={`Partner Logo ${index}`} 
                className="h-10 md:h-14 object-contain w-auto max-w-[140px]" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;