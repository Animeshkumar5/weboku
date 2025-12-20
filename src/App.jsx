import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
// 1. Import the Background
import InteractiveBackground from './components/InteractiveBackground'; 

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
    // 2. Remove "bg-gray-950" here because our InteractiveBackground handles the color now
    <div className="min-h-screen relative"> 
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={isLoading ? "hidden" : "block"}>
        {/* 3. Add the Background Component here */}
        <InteractiveBackground />
        
        <Header isScrolled={isScrolled} />
        <Hero />
        <Home />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;