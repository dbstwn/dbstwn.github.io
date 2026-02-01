import React from 'react';
import { EXPERIENCES } from '../constants';
import { MapPin } from 'lucide-react';

const Timeline: React.FC = () => {
  const getIconName = (id: string) => {
    switch(id) {
      case 'vivo': return 'devices_wearables';
      case 'gesits': return 'electric_bike';
      case 'gec': return 'factory';
      case 'agc': return 'construction';
      case 'its': return 'account_balance';
      default: return 'work';
    }
  };

  return (
    <section className="h-full min-h-[600px] flex items-center justify-center bg-transparent px-4 pt-20 pb-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Professional Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Experience</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between h-full min-h-[250px] shadow-lg"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 group-hover:text-primary transition-colors text-gray-300">
                     {/* Google Material Symbol */}
                     <span className="material-symbols-outlined text-[32px]">
                        {getIconName(exp.id)}
                     </span>
                   </div>
                   <span className="text-xs font-mono text-gray-400 border border-gray-700/50 bg-black/20 px-3 py-1.5 rounded-full">
                     {exp.period}
                   </span>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors leading-tight">{exp.company}</h4>
                <p className="text-base text-gray-300 mb-4 font-medium">{exp.role}</p>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-6 border-t border-white/5">
                <MapPin size={14} />
                {exp.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;