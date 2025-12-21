import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // ✅ UPDATED: Added 'Projects' to the list
  const navLinks = ['Home', 'Process', 'Projects', 'Team', 'Contact'];

  // Smooth Scroll Handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.toLowerCase());
    
    if (element) {
      // Offset for fixed header height
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveTab(targetId);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? 'bg-gray-950/70 backdrop-blur-md border-white/10 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={(e) => handleScroll(e, 'Home')}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Weboku
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item)}
                onMouseEnter={() => setActiveTab(item)}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {activeTab === item && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={isScrolled ? 'text-gray-200' : 'text-white'}>
                  {item}
                </span>
              </a>
            ))}

            {/* CTA Button -> Jumps to 'get-started' section */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleScroll(e, 'get-started')}
              className="ml-4 bg-white text-gray-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-white' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all font-medium"
                  onClick={(e) => handleScroll(e, item)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                 <button 
                   onClick={(e) => handleScroll(e, 'get-started')}
                   className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
                 >
                    Get Started
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;