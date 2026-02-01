import React from 'react';
import { EDUCATION, ACHIEVEMENTS } from '../constants';
import { GraduationCap, Award, ExternalLink, Link, Calculator, Languages } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="h-full min-h-[600px] flex items-center justify-center bg-transparent px-4 pt-20 pb-10">
      <div className="max-w-[90vw] w-full mx-auto flex flex-col gap-10">
        
        {/* Education Card Section - Full Width */}
        <div className="w-full">
           <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 backdrop-blur-sm">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500 w-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-4">
                  <div className="flex-1">
                    <h4 className="text-3xl font-serif font-bold text-white mb-2 leading-tight tracking-wide">{EDUCATION.school}</h4>
                    <div className="space-y-1 mt-3">
                      <p className="text-primary font-bold text-xl">{EDUCATION.degree}</p>
                      <p className="text-gray-300 font-medium font-sans text-lg">{EDUCATION.degreeLevel}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex-shrink-0">
                    <span className="inline-block px-5 py-2 bg-black/30 rounded-full text-base font-mono text-gray-200 border border-white/10 shadow-lg">
                      {EDUCATION.period}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* GPA Card */}
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                     <div className="p-2 bg-primary/20 text-primary rounded-lg">
                        <Calculator size={24} />
                     </div>
                     <div>
                       <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">GPA Score</span>
                       <span className="text-white font-bold text-2xl">{EDUCATION.gpa}</span>
                     </div>
                  </div>

                  {/* English Level Card */}
                  <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 hover:bg-white/10 transition-colors relative group/card">
                     <div className="p-2 bg-accent/20 text-accent rounded-lg">
                        <Languages size={24} />
                     </div>
                     <div className="flex-1">
                       <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">English Level</span>
                       <span className="text-white font-bold text-2xl">C1 Advanced</span>
                     </div>
                     <a href="https://cert.efset.org/WMA5mp" target="_blank" rel="noreferrer" className="absolute top-2 right-2 text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded hover:bg-accent hover:text-white transition-colors">
                        Credential
                     </a>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                     <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Final Project</h5>
                     <div className="flex gap-2">
                        <a href="https://doi.org/10.12962/j23373539.v9i1.50322" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:text-white transition-colors bg-accent/10 px-3 py-1.5 rounded-lg border border-accent/20">
                            DOI <ExternalLink size={12} />
                        </a>
                        <a href="https://garuda.kemdiktisaintek.go.id/documents/detail/1992880" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-white transition-colors bg-green-500/10 px-3 py-1.5 rounded-lg border border-green-500/20">
                            eJournal <Link size={12} />
                        </a>
                     </div>
                  </div>
                  <p className="text-gray-400 text-sm italic leading-relaxed pl-4 border-l-2 border-primary/30 max-w-3xl">
                    "{EDUCATION.details[0].replace('Final Project: ', '')}"
                  </p>
                </div>
              </div>
            </div>
        </div>

        {/* Achievements Section - Horizontal Below */}
        <div className="w-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/20 backdrop-blur-sm">
                <Award size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="group flex flex-col gap-3 bg-surface/30 backdrop-blur-md border border-white/5 p-5 rounded-2xl transition-all hover:bg-surface/50 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg h-full">
                  <div className="flex justify-between items-start">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
                      ${achievement.award.includes('Gold') ? 'bg-yellow-500/10 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 
                        achievement.award.includes('Bronze') ? 'bg-orange-700/10 text-orange-500 shadow-[0_0_15px_rgba(194,65,12,0.2)]' : 
                        'bg-gray-500/10 text-gray-400'}
                    `}>
                      <Award size={20} />
                    </div>
                    <span className="text-xs text-gray-400 font-mono bg-black/20 px-2 py-1 rounded whitespace-nowrap">{achievement.year}</span>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold group-hover:text-accent transition-colors leading-tight mb-2 text-sm md:text-base">{achievement.title}</h5>
                    <p className="text-xs text-gray-400 line-clamp-2">{achievement.event}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;