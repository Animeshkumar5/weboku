import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      // Smoothly follow the mouse (linear interpolation)
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const onMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move(); // Start the animation loop

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gray-950">
      {/* 1. Static/Floating Background Gradients (The Pattern) */}
      <svg className="absolute w-full h-full opacity-30">
        <defs>
          <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      
      {/* Animated Orb 1 (Top Left) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      
      {/* Animated Orb 2 (Top Right) */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      {/* Animated Orb 3 (Bottom Left) */}
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-indigo-900/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* 2. The Interactive Mouse Blob */}
      <div 
        ref={interactiveRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-100 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform"
        style={{ marginTop: '-300px', marginLeft: '-300px' }} // Center the blob on cursor
      ></div>
      
      {/* Noise Texture Overlay (Optional for that premium grain look) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};

export default InteractiveBackground;