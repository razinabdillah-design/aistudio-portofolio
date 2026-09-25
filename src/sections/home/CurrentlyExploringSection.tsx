import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const CurrentlyExploringSection: React.FC = () => {
  const explorationThemes = [
    {
      index: '01',
      title: 'Electrical Engineering',
      curiosity: 'Foundations of power distribution, circuit behaviors, and electromagnetic fundamentals through undergraduate coursework at ITS.',
      tag: 'Academic Core',
    },
    {
      index: '02',
      title: 'Energy Systems',
      curiosity: 'Load flow calculations, grid stability modeling, and how renewable sources interface with existing municipal electrical networks.',
      tag: 'Power & Grid',
    },
    {
      index: '03',
      title: 'AI Systems',
      curiosity: 'Multi-agent coordination frameworks and computational tools that structure research workflows and automate complex task chains.',
      tag: 'Computational',
    },
    {
      index: '04',
      title: 'Climate Technology',
      curiosity: 'Air quality filtration mechanics, hardware CAD assemblies, and low-cost environmental engineering for densely populated urban spaces.',
      tag: 'Environment',
    },
    {
      index: '05',
      title: 'Software & Scripting',
      curiosity: 'Developing reliable data validation scripts, web tools, and automated pipelines that replace chaotic spreadsheets with clean workflows.',
      tag: 'Tooling',
    },
    {
      index: '06',
      title: 'Systems Thinking',
      curiosity: 'Understanding how physical hardware, mathematical constraints, human protocols, and organizations interact as an integrated whole.',
      tag: 'Synthesis',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#13161B] text-[#F3F1EB] relative overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#3157D5]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Open Typographic Layout */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#7696E8]">
              09. Trajectory
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#7696E8]/40" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white">
            Still exploring.
          </h2>
          
          <p className="text-base sm:text-lg text-[#F3F1EB]/70 leading-relaxed max-w-xl text-pretty">
            I do not claim settled specialization. These are the active domains of curiosity, reading, and experimentation currently shaping my learning.
          </p>
        </div>

        {/* 2-Column Open Thematic Exploration List (No Boxed Cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-white/10 pt-12">
          {explorationThemes.map((item) => (
            <div
              key={item.index}
              className="space-y-3 pb-8 border-b border-white/10 group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#F3F1EB]/50">
                <span className="text-[#7696E8] font-semibold">{item.index}</span>
                <span className="uppercase tracking-wider">{item.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight group-hover:text-[#7696E8] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#F3F1EB]/70 leading-relaxed">
                {item.curiosity}
              </p>
            </div>
          ))}
        </div>

        {/* Exploration Line Motif Continuing Beyond Viewport */}
        <div className="pt-12">
          <JourneyLine variant="exploring" />
        </div>

      </div>
    </section>
  );
};
