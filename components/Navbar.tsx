import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  sections: string[];
}

const Navbar: React.FC<NavbarProps> = ({ currentSlide, setCurrentSlide, sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Hide Navbar on the first page (slide 0)
  if (currentSlide === 0) {
    return null;
  }

  const navLinks = [
    { name: 'Home', index: 0 },
    { name: 'Experience', index: 1 },
    { name: 'Skills', index: 2 },
    { name: 'Education', index: 3 },
    { name: 'Contact', index: 4 },
  ];

  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick(0)}>
            <span className="text-2xl font-bold text-white tracking-tighter hover:text-primary transition-colors">
              dbstwn<span className="text-primary">.</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentSlide === link.index 
                      ? 'text-primary' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="bg-primary hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <Download size={16} /> Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-surface border-b border-gray-700 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.index)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentSlide === link.index ? 'text-primary bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;