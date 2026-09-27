import React from 'react';

export const CurrentDirectionSection: React.FC = () => {
  const learningTopics = [
    { title: 'Power System Modeling', detail: 'Admittance matrices, load flow calculation, and fault analysis' },
    { title: 'Circuit & PCB Layout', detail: 'Schematic capture and board routing in KiCad' },
    { title: 'Workflow Automation', detail: 'Python scripting and multi-agent coordination with CrewAI' },
  ];

  const inquiryAreas = [
    'Energy Systems',
    'Clean-Air Technology',
    'AI Systems',
    'Technology + Management',
    'Systems Thinking',
  ];

  return (
    <section className="py-16 md:py-20 border-b border-hairline bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Section Framing (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
              05. Current Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight">
              Where I am focusing my learning.
            </h2>
            <p className="text-xs sm:text-sm text-[#697078] leading-relaxed">
              Active undergraduate coursework, deliberate tool practice, and future exploratory interests—kept distinct from completed professional work.
            </p>
          </div>

          {/* Cardless Columns: Coursework & Inquiries (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            
            {/* Active Learning & Practice */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#15181D] font-semibold block">
                Coursework & Tool Practice:
              </span>
              <ul className="space-y-3">
                {learningTopics.map((topic) => (
                  <li key={topic.title} className="space-y-0.5">
                    <div className="text-sm font-serif font-medium text-[#15181D]">
                      {topic.title}
                    </div>
                    <div className="text-xs text-[#697078] font-sans">
                      {topic.detail}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exploratory Fields of Interest (Unboxed text with typographic separators, zero pills) */}
            <div className="space-y-4 pt-6 sm:pt-0 sm:pl-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#15181D] font-semibold block">
                Fields of Interest:
              </span>
              <p className="text-xs text-[#697078] leading-relaxed">
                Areas I follow closely through academic papers, industry developments, and personal reading:
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#15181D]">
                {inquiryAreas.map((area, idx) => (
                  <React.Fragment key={area}>
                    <span className="text-[#15181D] font-medium">{area}</span>
                    {idx < inquiryAreas.length - 1 && (
                      <span aria-hidden="true" className="text-[#697078]/40">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
