import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { Linkedin, Mail, MapPin, Hexagon, Component, Settings, Microscope, Network } from 'lucide-react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  infinite?: boolean;
  onDelete?: () => void;
  onFinish?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100, infinite = false, onDelete, onFinish }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, delay / 2);
      } else {
        setIsDeleting(false);
        if (onDelete) onDelete();
      }
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
      } else {
        if (infinite) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (onFinish) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, delay, infinite, onDelete, onFinish]);

  return <span>{currentText}</span>;
};

const Hero: React.FC = () => {
  const jobTitles = [
    "Process Quality Engineer",
    "Mineral Process Engineer",
    "Materials Engineer",
    "Research Engineer",
    "System Architect"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);

  const handleNextTitle = () => {
    setTitleIndex((prev) => (prev + 1) % jobTitles.length);
  };

  const VisualModel = ({ index }: { index: number }) => {
     switch(index) {
       case 0: // Process Quality - Spinning Gears
         return (
           <div className="relative w-80 h-80 flex items-center justify-center text-primary">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <Settings size={160} className="animate-[spin_10s_linear_infinite]" strokeWidth={1} />
              <div className="absolute top-4 right-4 text-cyan-500 opacity-70">
                 <Settings size={60} className="animate-[spin_5s_linear_infinite_reverse]" />
              </div>
           </div>
         );
       case 1: // Mineral Process - Abstract Structure
         return (
            <div className="relative w-80 h-80 flex items-center justify-center text-amber-500">
               <div className="absolute inset-0 border-2 border-dashed border-amber-500/30 rounded-full animate-[spin_30s_linear_infinite]"></div>
               <Hexagon size={160} className="animate-pulse drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" strokeWidth={1} />
               <div className="absolute inset-0 flex items-center justify-center">
                 <Hexagon size={100} className="text-amber-300 animate-[spin_12s_linear_infinite_reverse]" strokeWidth={2} />
               </div>
            </div>
         );
       case 2: // Materials - Molecular
         return (
            <div className="relative w-80 h-80 flex items-center justify-center text-accent">
               <Component size={160} className="animate-[spin_8s_linear_infinite_reverse] text-accent/80" />
               <div className="absolute w-[120%] h-[120%] border border-accent/20 rounded-full animate-ping"></div>
               <div className="absolute w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            </div>
         );
       case 3: // Research - Scanner/Microscope
         return (
            <div className="relative w-80 h-80 flex items-center justify-center text-rose-500">
               <div className="absolute inset-0 border border-rose-500/30 rounded-full animate-pulse-slow"></div>
               <Microscope size={160} className="animate-bounce" strokeWidth={1.5} />
               <div className="absolute bottom-0 w-48 h-1 bg-rose-500/50 rounded-full blur-lg animate-pulse"></div>
            </div>
         );
       case 4: // System Architect - Network
         return (
            <div className="relative w-80 h-80 flex items-center justify-center text-emerald-400">
               <Network size={160} strokeWidth={1.5} />
               <div className="absolute w-[110%] h-[110%] border-t-2 border-b-2 border-emerald-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute w-full h-1 bg-emerald-400/50 top-1/2 -z-10 animate-pulse"></div>
            </div>
         );
       default:
         return null;
     }
  };

  return (
    <section className="h-full min-h-[600px] flex items-center justify-center relative px-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Left Side (Visual Models) */}
        <div className="flex-1 order-2 md:order-1 flex justify-center items-center relative">
          <div className="relative">
             {/* Circulating/Ripple Animation */}
             <div className="absolute inset-0 -m-28 border border-white/5 rounded-full animate-[ripple_4s_linear_infinite]"></div>
             <div className="absolute inset-0 -m-14 border border-white/10 rounded-full animate-[ripple_4s_linear_infinite]" style={{ animationDelay: '1s' }}></div>
             <div className="absolute inset-0 border border-white/15 rounded-full animate-[ripple_4s_linear_infinite]" style={{ animationDelay: '2s' }}></div>
             
             {/* Dynamic Icon Model */}
             <div className="transition-all duration-700 transform hover:scale-105 filter drop-shadow-[0_0_40px_rgba(6,182,212,0.15)]">
               <VisualModel index={titleIndex} />
             </div>
          </div>
        </div>

        {/* Right Side (Text Content) */}
        <div className="flex-1 order-1 md:order-2 text-center md:text-left">
          
          <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
               {PERSONAL_INFO.name.replace("Dimas Bagus Setiawan", "Dimas B. Setiawan")}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-primary mb-6 font-mono h-[40px] flex items-center justify-center md:justify-start">
             <TypewriterText 
                key={titleIndex} 
                text={jobTitles[titleIndex]} 
                delay={50} 
                onDelete={handleNextTitle}
                onFinish={handleNextTitle}
             />
             <span className="animate-blink ml-1">|</span>
          </h2>
          
          <p className="text-gray-400 max-w-lg mb-10 mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
             <div className="flex items-center gap-4">
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                 <Linkedin size={24} />
               </a>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all duration-300">
                 <Mail size={24} />
               </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 border-l border-gray-700 pl-4 ml-2">
                <MapPin size={16} className="text-primary" />
                <span className="tracking-wide uppercase">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;