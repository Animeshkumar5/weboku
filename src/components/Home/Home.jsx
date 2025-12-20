import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Card Component for Stacking Effect ---
const Card = ({ title, desc, icon, index, total }) => {
  return (
    <div 
      className="sticky top-0 h-screen flex items-center justify-center"
      style={{ 
        // This calculates the stacking offset so they don't hide each other completely
        top: `calc(10% + ${index * 30}px)`, 
        zIndex: index + 1 
      }}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        // Dark card design matching ClickWise
        className="relative w-full max-w-3xl h-[400px] rounded-3xl bg-gray-800 border border-gray-700 shadow-2xl p-10 flex flex-col justify-center overflow-hidden"
      >
        {/* Background Gradient for visual pop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

        <div className="relative z-10 flex items-start gap-8">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-5xl shadow-lg shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-lg">
              {desc}
            </p>
            <button className="flex items-center text-blue-400 font-bold text-lg hover:text-white transition-colors group">
              Learn How We Do It 
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Step Number Background */}
        <div className="absolute bottom-4 right-8 text-9xl font-bold text-white/5">
          0{index + 1}
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  const services = [
    { title: "Strategic Web Design", desc: "We don't just design pretty sites. We build conversion machines that turn visitors into paying customers.", icon: "🎨" },
    { title: "SEO Domination", desc: "Stop chasing algorithms. We implement proven strategies to rank you #1 for keywords that actually matter.", icon: "🚀" },
    { title: "Performance Marketing", desc: "Data-driven paid campaigns that maximize your ROI. Every dollar spent is tracked and optimized.", icon: "💰" },
    { title: "Brand Identity", desc: "Stand out in a crowded market. We craft memorable brand stories that resonate with your target audience.", icon: "✨" },
    { title: "Custom Development", desc: "Scalable, secure, and lightning-fast code. We build robust solutions for complex business problems.", icon: "💻" }
  ];

  const stats = [
    { number: "500+", label: "Projects" },
    { number: "98%", label: "Satisfaction" },
    { number: "10+", label: "Years Exp" },
    { number: "50+", label: "Experts" }
  ];

  return (
    <div className="bg-gray-950"> {/* Overall Dark Background */}
      
      {/* 1. Stats Section */}
      <section className="py-20 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STACKING CARDS SECTION */}
      <section className="bg-gray-950 text-white pb-32">
        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-400">Scroll down to see how we deliver results.</p>
          </div>

          {/* This container holds all the stacking cards */}
          <div className="relative">
            {services.map((service, index) => (
              <Card 
                key={index} 
                {...service} 
                index={index} 
                total={services.length} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 bg-blue-600 text-white text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Scale Your Business?</h2>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-transform hover:scale-105 inline-flex items-center shadow-xl">
            Start Your Project <ArrowRight className="ml-2" size={24} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;