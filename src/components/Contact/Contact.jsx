import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      
      {/* --- IMPORT MICHROMA FONT --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Michroma&display=swap');
          .font-tech {
            font-family: 'Michroma', sans-serif;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* UPDATED: Added font-tech to 'Get In Touch' Heading */}
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.gray.100),theme(colors.sky.300),theme(colors.gray.100),theme(colors.gray.200))] bg-[length:200%_auto] animate-shine font-tech uppercase tracking-wide">
              Get In Touch
            </h2>
            
            <p className="text-lg text-gray-300 mb-8">
              Have a project in mind? Let's talk about how we can help you succeed.
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-gray-400">info@weboku.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 border border-blue-500/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg text-blue-400 border border-blue-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Office</h4>
                  <p className="text-gray-400">123 Business Ave, Suite 100<br/>Digital City, DC 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 hover:text-white text-gray-400 transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form with Glass Effect */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all" 
                  placeholder="Your name" 
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all" 
                  placeholder="your@email.com" 
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 transition-all" 
                  rows="4" 
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-700 transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-600/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;