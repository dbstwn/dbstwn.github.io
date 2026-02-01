import React, { useState } from 'react';
import { SKILLS } from '../constants';
import { ChevronDown, ChevronUp, Cpu, Monitor, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const softwareSkills = SKILLS.filter(s => s.category === 'Software');
  const officeSkills = SKILLS.filter(s => s.category === 'Office');
  const coreSkills = SKILLS.filter(s => s.category === 'Core' || s.category === 'Analysis');

  const toggleCard = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const SkillBar: React.FC<{ name: string, level: number }> = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-200">{name}</span>
        <span className="text-xs text-primary font-bold">{level}%</span>
      </div>
      <div className="w-full bg-black/30 rounded-full h-2.5 backdrop-blur-sm overflow-hidden">
        <div 
          className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 relative" 
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="h-full min-h-[600px] flex items-center justify-center bg-transparent px-4 pt-10 pb-10 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto flex flex-col h-full justify-center">
        <div className="text-center mb-12 shrink-0">
           <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Technical Proficiency</h2>
           <h3 className="text-3xl md:text-5xl font-bold text-white">Skills & Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start h-auto">
          
          {/* Engineering Software */}
          <div 
            onClick={() => toggleCard('engineering')}
            className={`cursor-pointer bg-surface/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-surface/50 ${activeCard === 'engineering' ? 'ring-1 ring-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' : 'hover:border-primary/30 hover:-translate-y-1'}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-2xl transition-colors duration-300 ${activeCard === 'engineering' ? 'bg-primary text-white' : 'bg-white/5 text-primary'}`}>
                <Cpu size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white">Engineering</h4>
                <p className="text-xs text-gray-400">CAD & Simulation</p>
              </div>
              {activeCard === 'engineering' ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCard === 'engineering' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="pt-4 border-t border-white/5">
                  {softwareSkills.map((skill, i) => <SkillBar key={i} name={skill.name} level={skill.level} />)}
               </div>
            </div>
          </div>

          {/* Office Software */}
          <div 
            onClick={() => toggleCard('office')}
            className={`cursor-pointer bg-surface/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-surface/50 ${activeCard === 'office' ? 'ring-1 ring-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' : 'hover:border-primary/30 hover:-translate-y-1'}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-2xl transition-colors duration-300 ${activeCard === 'office' ? 'bg-primary text-white' : 'bg-white/5 text-primary'}`}>
                <Monitor size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white">Office Suite</h4>
                <p className="text-xs text-gray-400">Productivity & OS</p>
              </div>
               {activeCard === 'office' ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCard === 'office' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="pt-4 border-t border-white/5">
                  {officeSkills.map((skill, i) => <SkillBar key={i} name={skill.name} level={skill.level} />)}
               </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div 
            onClick={() => toggleCard('core')}
            className={`cursor-pointer bg-surface/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:bg-surface/50 ${activeCard === 'core' ? 'ring-1 ring-primary/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' : 'hover:border-primary/30 hover:-translate-y-1'}`}
          >
            <div className="flex items-center gap-4 mb-4">
               <div className={`p-3 rounded-2xl transition-colors duration-300 ${activeCard === 'core' ? 'bg-primary text-white' : 'bg-white/5 text-primary'}`}>
                <Layers size={28} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white">Competencies</h4>
                <p className="text-xs text-gray-400">Core Engineering Skills</p>
              </div>
               {activeCard === 'core' ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeCard === 'core' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
               <div className="pt-4 border-t border-white/5">
                  {coreSkills.map((skill, i) => <SkillBar key={i} name={skill.name} level={skill.level} />)}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;