import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Weboku</h3>
            <p className="text-gray-400">Transforming businesses through innovative digital solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">SEO</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-600" />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Weboku. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;