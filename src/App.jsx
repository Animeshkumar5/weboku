import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
// 1. IMPORT CLIENTS
import Clients from './components/Clients/Clients'; 
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollToTop from './components/ScrollToTop'; 
import FloatingMail from './components/FloatingMail'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 2500);
    const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative"> 
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={isLoading ? "hidden" : "block"}>
        <InteractiveBackground />
        
        <Header isScrolled={isScrolled} />
        <Hero />
        
        {/* 2. ADD CLIENTS COMPONENT HERE */}
        <Clients />

        <Home />
        <Contact />
        <Footer />
        
        <ScrollToTop />
        <FloatingMail />
        
      </div>
    </div>
  );
}

export default App;