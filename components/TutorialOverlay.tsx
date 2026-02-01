import React, { useState, useEffect } from 'react';
import { MousePointer2, Power } from 'lucide-react';

interface TutorialOverlayProps {
  onComplete: () => void;
}

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    // Add a small delay for the exit animation
    setTimeout(onComplete, 500);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/95 backdrop-blur-md transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="max-w-5xl w-full mx-4 relative">
        {/* Decoration lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="bg-surface/50 border border-white/10 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            
            <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono mb-4 tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    System Protocol
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">Navigation Controls</h2>
                <p className="text-gray-400">Master the interface to explore the portfolio.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
                
                {/* Left Click Instruction */}
                <div className="flex flex-col items-center gap-6 group">
                    <div className="relative w-32 h-48 bg-gray-800 rounded-[3rem] border-2 border-gray-600 p-2 shadow-2xl transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        {/* Scroll Wheel */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-6 bg-gray-700 rounded-full"></div>
                        
                        {/* Left Button Highlight - Animated */}
                        <div className="absolute top-2 left-2 w-[calc(50%-4px)] h-20 bg-primary/80 rounded-tl-[2.5rem] rounded-tr-sm opacity-0 animate-[pulse_2s_infinite]"></div>
                        
                        {/* Separator line */}
                        <div className="absolute top-2 left-1/2 -translate-x-[1px] w-[2px] h-24 bg-gray-800"></div>
                        
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                            L-Click
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1">Next Page</h3>
                        <p className="text-sm text-primary font-mono">Execute: Advance</p>
                    </div>
                </div>

                {/* Right Click Instruction */}
                <div className="flex flex-col items-center gap-6 group">
                    <div className="relative w-32 h-48 bg-gray-800 rounded-[3rem] border-2 border-gray-600 p-2 shadow-2xl transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                         {/* Scroll Wheel */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-6 bg-gray-700 rounded-full"></div>
                        
                        {/* Right Button Highlight - Animated */}
                        <div className="absolute top-2 right-2 w-[calc(50%-4px)] h-20 bg-accent/80 rounded-tr-[2.5rem] rounded-tl-sm opacity-0 animate-[pulse_2s_infinite] delay-1000"></div>
                         
                        {/* Separator line */}
                        <div className="absolute top-2 left-1/2 -translate-x-[1px] w-[2px] h-24 bg-gray-800"></div>

                         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                            R-Click
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1">Previous Page</h3>
                        <p className="text-sm text-accent font-mono">Execute: Return</p>
                    </div>
                </div>

                {/* Scroll Instruction */}
                <div className="flex flex-col items-center gap-6 group">
                    <div className="relative w-32 h-48 bg-gray-800 rounded-[3rem] border-2 border-gray-600 p-2 shadow-2xl transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                        {/* Scroll Wheel - Animated */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-6 bg-purple-500 rounded-full animate-bounce"></div>
                        
                        {/* Separator line */}
                        <div className="absolute top-2 left-1/2 -translate-x-[1px] w-[2px] h-24 bg-gray-800"></div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-xs font-mono uppercase tracking-widest">
                            Scroll
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1">Scroll</h3>
                        <p className="text-sm text-purple-400 font-mono">Up: Prev / Down: Next</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center relative z-10">
                <button 
                    onClick={handleDismiss}
                    className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-primary/50 hover:border-primary transition-all duration-300"
                >
                    <div className="absolute inset-0 w-0 bg-primary/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative flex items-center gap-3 text-white font-bold tracking-wider">
                        <Power size={20} className="group-hover:text-primary transition-colors" />
                        INITIALIZE SYSTEM
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;