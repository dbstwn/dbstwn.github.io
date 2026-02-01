import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Linkedin, Copy, Check, Github, Box } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="h-full min-h-[600px] flex items-center justify-center bg-transparent px-4 relative">
      <div className="max-w-5xl w-full mx-auto text-center z-10">
        
        <div className="mb-12">
           <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Need to check <span className="text-primary">detail portfolio</span> ?</h3>
           <p className="text-gray-400 max-w-lg mx-auto text-lg">
              Check these cards below
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {/* Email Card - Changed to direct Mailto link */}
          <a 
             href={`mailto:${PERSONAL_INFO.email}`}
             className="bg-surface/30 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all group flex flex-col items-center"
          >
             <div className="p-3 bg-white/5 rounded-full text-primary mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
               <Mail size={24} />
             </div>
             <h4 className="text-white font-semibold mb-1">Email</h4>
             <span className="text-gray-400 text-xs">Send Mails</span>
          </a>

           {/* LinkedIn Card */}
           <a 
             href={PERSONAL_INFO.linkedin}
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-surface/30 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group flex flex-col items-center"
           >
             <div className="p-3 bg-white/5 rounded-full text-blue-500 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
               <Linkedin size={24} />
             </div>
             <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
             <span className="text-gray-400 text-xs">Professional Profile</span>
           </a>

           {/* GitHub Card */}
           <a 
             href={PERSONAL_INFO.github || "#"}
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-surface/30 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-white/50 transition-all group flex flex-col items-center"
           >
             <div className="p-3 bg-white/5 rounded-full text-white mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.1)]">
               <Github size={24} />
             </div>
             <h4 className="text-white font-semibold mb-1">GitHub</h4>
             <span className="text-gray-400 text-xs">Code Repositories</span>
           </a>

           {/* GrabCAD Card */}
           <a 
             href={PERSONAL_INFO.grabcad}
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-surface/30 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-red-500/50 transition-all group flex flex-col items-center"
           >
             <div className="p-3 bg-white/5 rounded-full text-red-500 mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.1)]">
               <Box size={24} />
             </div>
             <h4 className="text-white font-semibold mb-1">GrabCAD</h4>
             <span className="text-gray-400 text-xs">3D Models</span>
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;