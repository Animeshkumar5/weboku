import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, ExternalLink, ZoomIn, ArrowRight } from 'lucide-react';

// ==========================================
// 1. ASSET IMPORTS
// ==========================================

// --- Digiborr ---
import digiborrLogo from '../../assets/Client/digiborr/hero.png';
import digiborrImg1 from '../../assets/Client/digiborr/services 1.png';
import digiborrImg2 from '../../assets/Client/digiborr/services 2.png';
import digiborrPdf1 from '../../assets/Client/digiborr/Home.pdf';
import digiborrPdf2 from '../../assets/Client/digiborr/Services Page 1.pdf';
import digiborrPdf3 from '../../assets/Client/digiborr/Services Page 2.pdf';

// --- Dream Drive ---
import dreamLogo from '../../assets/Client/Dream Drive/1.png'; 
import dreamImg1 from '../../assets/Client/Dream Drive/2.png';
import dreamImg2 from '../../assets/Client/Dream Drive/3.png';
import dreamImg3 from '../../assets/Client/Dream Drive/4.png';
import dreamPdf from '../../assets/Client/Dream Drive/Main page.pdf';

// --- FastPicTool ---
import fastpicLogo from '../../assets/Client/fastpictool/Hero.png';
import fastpicImg1 from '../../assets/Client/fastpictool/Service 1.png';
import fastpicImg2 from '../../assets/Client/fastpictool/Service 2.png';
import fastpicPdf from '../../assets/Client/fastpictool/home.pdf'; 

// --- Leatherkraft ---
import leatherLogo from '../../assets/Client/Leatherkraft/image.png';
import leatherImg1 from '../../assets/Client/Leatherkraft/image (1).png';
import leatherPdf from '../../assets/Client/Leatherkraft/about company.pdf';

// --- Protrexa ---
import protrexaLogo from '../../assets/Client/Protrexa/home.png';
import protrexaImg1 from '../../assets/Client/Protrexa/service 1.png';
import protrexaImg2 from '../../assets/Client/Protrexa/service 2.png';
import protrexaPdf from '../../assets/Client/Protrexa/hhome.pdf';

// --- Skill Income ---
import skillLogo from '../../assets/Client/Skill Income/hero.png';
import skillImg1 from '../../assets/Client/Skill Income/course.png';
import skillImg2 from '../../assets/Client/Skill Income/list.png';
import skillImg3 from '../../assets/Client/Skill Income/visit.png';
import skillPdf from '../../assets/Client/Skill Income/home.pdf'; 

// --- Hcvatron ---
import hcvatronLogo from '../../assets/Client/Hcvatron/1.png'; 
import hcvatronImg1 from '../../assets/Client/Hcvatron/2.png';
import hcvatronImg2 from '../../assets/Client/Hcvatron/3.png';

// --- StormDigi ---
import stormLogo from '../../assets/Client/stormdigi/4.png';
import stormImg1 from '../../assets/Client/stormdigi/1.png';
import stormImg2 from '../../assets/Client/stormdigi/2.png';
import stormImg3 from '../../assets/Client/stormdigi/3.png';

// --- UnoTrip ---
import unoLogo from '../../assets/client/UnoTrip/1.png';
import unoImg1 from '../../assets/client/UnoTrip/2.png';
import unoImg2 from '../../assets/client/UnoTrip/3.png';

// ==========================================
// 2. DATA CONFIGURATION
// ==========================================
const clientsData = [
  { 
    id: 1, 
    name: "Digiborr", 
    logo: digiborrLogo,
    description: "Comprehensive digital solutions platform specializing in ads and services.",
    gallery: [digiborrLogo, digiborrImg1, digiborrImg2],
    documents: [
      { name: "Home Overview", file: digiborrPdf1 },
      { name: "Services Page 1", file: digiborrPdf2 },
      { name: "Services Page 2", file: digiborrPdf3 }
    ]
  },
  { 
    id: 2, 
    name: "Dream Drive", 
    logo: dreamLogo,
    description: "Innovative automotive service platform.",
    gallery: [dreamLogo, dreamImg1, dreamImg2, dreamImg3],
    documents: [
      { name: "Main Page Spec", file: dreamPdf }
    ]
  },
  { 
    id: 3, 
    name: "FastPicTool", 
    logo: fastpicLogo,
    description: "Efficient image processing and optimization tools.",
    gallery: [fastpicLogo, fastpicImg1, fastpicImg2],
    documents: [
      { name: "Services Guide", file: fastpicPdf }
    ]
  },
  { 
    id: 4, 
    name: "Leatherkraft", 
    logo: leatherLogo,
    description: "Premium leather goods manufacturing and retail.",
    gallery: [leatherLogo, leatherImg1],
    documents: [
      { name: "About Company", file: leatherPdf }
    ]
  },
  { 
    id: 5, 
    name: "Protrexa", 
    logo: protrexaLogo,
    description: "Strategic business consulting and growth.",
    gallery: [protrexaLogo, protrexaImg1, protrexaImg2],
    documents: [
      { name: "Home Document", file: protrexaPdf }
    ]
  },
  { 
    id: 6, 
    name: "Skill Income", 
    logo: skillLogo,
    description: "Educational platform for monetizing skills.",
    gallery: [skillLogo, skillImg1, skillImg2, skillImg3],
    documents: [
      { name: "Full Home Page", file: skillPdf }
    ]
  },
  { 
    id: 7, 
    name: "Hcvatron", 
    logo: hcvatronLogo,
    description: "Advanced tech solutions and development.",
    gallery: [hcvatronLogo, hcvatronImg1, hcvatronImg2],
    documents: []
  },
  { 
    id: 8, 
    name: "StormDigi", 
    logo: stormLogo,
    description: "Digital agency services and branding.",
    gallery: [stormLogo, stormImg1, stormImg2, stormImg3],
    documents: []
  },
  { 
    id: 9, 
    name: "UnoTrip", 
    logo: unoLogo,
    description: "Travel planning and booking solutions.",
    gallery: [unoLogo, unoImg1, unoImg2],
    documents: []
  }
];

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  const duplicatedClients = [...clientsData, ...clientsData]; 

  return (
    <section id="projects" className="py-24 bg-gray-950 border-b border-white/5 overflow-hidden relative z-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <p className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3">Our Work</p>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore some of the groundbreaking digital experiences we've built for our partners.</p>
      </div>

      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none"></div>

      {/* Marquee Slider */}
      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8 items-center min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }} 
        >
          {duplicatedClients.map((client, index) => (
            <motion.div 
              key={`${client.id}-${index}`} 
              onClick={() => setSelectedClient(client)}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative w-[500px] h-[300px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group border border-white/5 bg-gray-900 shadow-xl"
            >
              {/* 1. Image Layer */}
              <img 
                src={client.logo} 
                alt={client.name} 
                className="w-full h-full object-cover transition-all duration-700 
                           filter grayscale opacity-50 
                           group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" 
              />
              
              {/* 2. SLIDE-UP OVERLAY (The "Border from Down" Effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/95 via-blue-900/90 to-blue-900/40 
                              translate-y-full group-hover:translate-y-0 
                              transition-transform duration-500 ease-out z-10 backdrop-blur-[2px]">
              </div>

              {/* 3. Text & Button (Reveals on Hover) */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h4 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{client.name}</h4>
                  
                  {/* Short description that appears on hover */}
                  <p className="text-blue-100 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                     {client.description}
                  </p>
                  
                  {/* Action Button */}
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 font-bold text-sm shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                    View Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- CLIENT DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedClient && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedClient(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-gray-900 border border-white/10 w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gray-900/50">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/5 rounded-lg p-2 flex items-center justify-center border border-white/10">
                    <img src={selectedClient.logo} alt="logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedClient.name}</h3>
                    <p className="text-blue-400 text-sm">{selectedClient.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedClient(null)}
                  className="bg-white/5 p-2 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                
                {/* 1. Project Gallery Grid */}
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span> Project Gallery
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {selectedClient.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(img)} // CLICK to Open Full Screen
                      className="group relative aspect-video bg-gray-800 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-colors cursor-pointer"
                    >
                      <img 
                        src={img} 
                        alt={`Gallery ${i}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <ZoomIn className="text-blue-400" size={20} />
                        <span className="text-white text-sm font-medium">View Fullscreen</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2. Documents Section */}
                {selectedClient.documents.length > 0 && (
                  <>
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-500 rounded-full"></span> Project Documents
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedClient.documents.map((doc, i) => (
                        <a 
                          key={i} 
                          href={doc.file} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-gray-800/50 border border-white/5 rounded-xl hover:bg-gray-800 hover:border-purple-500/50 transition-all group"
                        >
                          <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 mr-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <FileText size={24} />
                          </div>
                          <div className="flex-1">
                            <h5 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">{doc.name}</h5>
                            <p className="text-xs text-gray-500">Click to view document</p>
                          </div>
                          <ExternalLink size={18} className="text-gray-500 group-hover:text-white" />
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- FULL SCREEN IMAGE LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-pointer"
          >
             <button 
                onClick={() => setSelectedImage(null)}
                className="fixed top-6 right-6 z-[210] bg-white/20 p-3 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg border border-white/10"
             >
                <X size={32} />
             </button>

             <motion.img 
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.8, opacity: 0 }}
               src={selectedImage}
               alt="Full Screen"
               onClick={(e) => e.stopPropagation()} 
               className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
             />
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Clients;