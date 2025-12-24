import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, ArrowRight, Smartphone, Zap } from 'lucide-react';

const ComparisonSection = () => {
  // Data for the comparison lists
  const otherAgencies = [
    "Outsource your project to interns or freelancers",
    "Focus only on design, not conversions",
    "Slow delivery & poor communication",
    "No clarity on performance or results",
    "Treat your website like a one-time project",
    "Disappear after the site is live"
  ];

  const weboku = [
    "Expert in-house team with business mindset",
    "Conversion-focused website strategy",
    "Clear timelines & proactive communication",
    "Built for leads, sales & scalability",
    "We work as your growth partner, not just a vendor",
    "Post-launch support & optimisation"
  ];

  return (
    <div className="relative bg-[#050505] text-white py-24 px-4 overflow-hidden font-sans">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-md text-sm font-medium text-gray-300 mb-6"
          >
            🔥 Conversion-Focused Website Development
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            Other Agencies <span className="text-gray-600 font-serif italic">v/s</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Weboku</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Most websites look good. Ours are built to generate inquiries, bookings & revenue 24×7.
            <br />
            <span className="text-white font-semibold block mt-2">At Weboku, if your website doesn’t help your business grow, we don’t consider the job done.</span>
          </motion.p>
        </div>

        {/* --- COMPARISON GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          
          {/* Left: Other Agencies */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 pl-4 lg:pl-12"
          >
            <h3 className="text-2xl font-bold text-gray-500 flex items-center gap-2">
              <X className="text-red-500/50" /> Other Agencies
            </h3>
            <ul className="space-y-6">
              {otherAgencies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-500 group">
                  <X className="w-6 h-6 shrink-0 text-gray-700 group-hover:text-red-500 transition-colors" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Weboku Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-cyan-500/5 rounded-3xl blur-xl transform scale-95" />
            <div className="relative bg-[#0F1115] border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                 {/* Logo Icon Placeholder */}
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-black fill-current" size={20} />
                </div>
                <h3 className="text-3xl font-bold text-white">Weboku</h3>
              </div>

              <ul className="space-y-6 relative z-10">
                {weboku.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-emerald-500/10 p-1 rounded-full">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3px]" />
                    </div>
                    <span className="text-lg font-medium text-gray-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- CTA CARD SECTION --- */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Card Glow */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-[50px] rounded-[3rem] transform scale-95 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0F1115] border border-gray-800 rounded-[2rem] p-8 md:p-16 text-center overflow-hidden"
          >
            {/* Top Shine */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 border border-gray-700 text-gray-300 text-sm mb-8">
                    <Smartphone size={14} className="text-emerald-400" /> Book a free strategy call
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                    Let’s Fix Your Website Before You<br className="hidden md:block" /> Waste Money on Ads.
                </h2>

                <p className="text-gray-400 mb-2 text-lg">We work only with businesses that want real results — not just a pretty website.</p>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-8" />

                <div className="grid md:grid-cols-3 gap-6 mb-10 text-left md:text-center">
                    <div className="flex flex-col items-center">
                        <Check className="text-emerald-400 mb-2" />
                        <span className="text-gray-300 font-medium">Conversion-first websites</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Check className="text-emerald-400 mb-2" />
                        <span className="text-gray-300 font-medium">Business-focused execution</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Check className="text-emerald-400 mb-2" />
                        <span className="text-gray-300 font-medium">Long-term growth partner</span>
                    </div>
                </div>

                <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm bg-gray-900/50 py-3 px-6 rounded-lg border border-gray-800">
                    ⚠️ If we don’t deliver a website that generates real leads, you don’t pay a single rupee.
                </p>

                <div className="text-emerald-400 font-medium mb-8 text-sm md:text-base">
                    Minimum business size required to apply: <span className="font-bold text-white">₹1 Lakh+ monthly revenue</span>
                </div>

                <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-12 rounded-xl text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-10 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2">
                        Apply To Work With Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
                </button>

                {/* Social Proof */}
                <div className="flex flex-col items-center gap-3">
                    <div className="flex text-amber-400 gap-1">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-sm text-gray-400">Rated 4.8/5 by growing businesses</p>
                    <div className="flex gap-4 mt-2 opacity-60 text-xs uppercase tracking-widest font-semibold text-gray-500">
                        <span>Startups</span> • <span>Service Brands</span> • <span>Agencies</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonSection;