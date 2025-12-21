import React from 'react';
import { ArrowRight, Twitter, Linkedin, Github, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 1. Modern Glass Background
    <footer className="relative z-10 bg-gray-950/60 backdrop-blur-xl border-t border-white/5 pt-20 pb-10 overflow-hidden">
      
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            {/* LOGO ADDED HERE */}
            <div className="flex items-center gap-3">
              <img 
                src="/favicon/favicon-96x96.png" 
                alt="Weboku Logo" 
                className="w-10 h-10 object-contain rounded-lg shadow-blue-500/20 shadow-lg" 
              />
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-shine">
                Weboku
              </h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions. We build experiences that matter.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 hover:text-white text-gray-400 transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Design', 'SEO Optimization', 'Digital Marketing', 'App Development', 'Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Subscribe to our newsletter for the latest tech trends and updates.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-white placeholder-gray-600 transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bg-blue-600 p-1.5 rounded-md text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Weboku. All rights reserved.</p>
          <div className="flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span>in Lucknow, India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;