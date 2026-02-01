import React, { useState, useEffect, useCallback } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import TutorialOverlay from './components/TutorialOverlay';
import { ChevronDown } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const sections = [
    { id: 'home', component: <Hero /> },
    { id: 'experience', component: <Timeline /> },
    { id: 'skills', component: <Skills /> },
    { id: 'education', component: <Education /> },
    { id: 'contact', component: <Contact /> }
  ];

  const handleScroll = useCallback((e: WheelEvent) => {
    // Disable scroll navigation if tutorial is active
    if (showTutorial) return;

    const now = new Date().getTime();
    if (now - lastScrollTime < 1000) return; // Debounce scroll (1 second cooldown)

    if (e.deltaY > 0) {
      if (currentSlide < sections.length - 1) {
        setCurrentSlide(prev => prev + 1);
        setLastScrollTime(now);
      }
    } else {
      if (currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        setLastScrollTime(now);
      }
    }
  }, [currentSlide, lastScrollTime, sections.length, showTutorial]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (showTutorial) return;
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showTutorial) return;
    const touchEnd = e.changedTouches[0].clientY;
    if (touchStart - touchEnd > 50) {
      if (currentSlide < sections.length - 1) setCurrentSlide(prev => prev + 1);
    } else if (touchStart - touchEnd < -50) {
      if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Disable navigation if tutorial is showing
    if (showTutorial) return;

    // Ignore navigation if clicking on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('a, button, input, textarea, [role="button"]')) {
      return;
    }
    
    // Left click moves to next slide
    if (currentSlide < sections.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Disable default context menu
    
    // Disable navigation if tutorial is showing
    if (showTutorial) return;

    // Right click moves to previous slide
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  return (
    <div 
      className="h-screen w-screen bg-background text-slate-100 overflow-hidden relative selection:bg-none select-none cursor-default"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      {/* Tutorial Overlay */}
      {showTutorial && (
        <TutorialOverlay onComplete={() => setShowTutorial(false)} />
      )}

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>
      
      {/* Slider Container */}
      <div 
        className="h-full w-full transition-transform duration-700 ease-in-out relative z-10"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {sections.map((section, index) => (
          <div key={section.id} className="h-full w-full relative overflow-hidden">
            {/* Internal scrollable container for content that overflows */}
            <div className="h-full w-full overflow-y-auto scrollbar-hide">
              {section.component}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 pointer-events-none">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Hint Arrow (Hidden during tutorial) */}
      {!showTutorial && currentSlide < sections.length - 1 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce text-gray-500 hidden md:block pointer-events-none">
          <ChevronDown size={24} />
        </div>
      )}
    </div>
  );
}

export default App;