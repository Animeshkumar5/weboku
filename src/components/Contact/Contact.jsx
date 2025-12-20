import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">Have a project in mind? Let's talk about how we can help you succeed.</p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg"><Mail className="text-blue-600" size={24} /></div>
                <div><h4 className="font-semibold text-gray-900">Email</h4><p className="text-gray-600">info@weboku.com</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg"><Phone className="text-blue-600" size={24} /></div>
                <div><h4 className="font-semibold text-gray-900">Phone</h4><p className="text-gray-600">+1 (555) 123-4567</p></div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg"><MapPin className="text-blue-600" size={24} /></div>
                <div><h4 className="font-semibold text-gray-900">Office</h4><p className="text-gray-600">123 Business Ave, Suite 100<br/>Digital City, DC 12345</p></div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200"><Facebook className="text-blue-600" size={24} /></a>
                <a href="#" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200"><Twitter className="text-blue-600" size={24} /></a>
                <a href="#" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200"><Linkedin className="text-blue-600" size={24} /></a>
                <a href="#" className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200"><Instagram className="text-blue-600" size={24} /></a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <form className="space-y-6">
              <div><label className="block text-gray-700 font-medium mb-2">Name</label><input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" placeholder="Your name" /></div>
              <div><label className="block text-gray-700 font-medium mb-2">Email</label><input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" placeholder="your@email.com" /></div>
              <div><label className="block text-gray-700 font-medium mb-2">Message</label><textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" rows="4" placeholder="Tell us about your project"></textarea></div>
              <button type="submit" className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;