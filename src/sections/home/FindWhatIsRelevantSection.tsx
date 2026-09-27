import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const FindWhatIsRelevantSection: React.FC = () => {
  const lenses = [
    {
      title: 'Technical & Projects',
      summary: 'Power grid simulation, CAD modeling, and AI agent workflows.',
      path: '/projects',
      actionLabel: 'Browse projects',
    },
    {
      title: 'Events & Operations',
      summary: 'Division leadership, tenant commercial regulations, and campus orientation.',
      path: '/journey?lens=events-operations',
      actionLabel: 'View event operations',
    },
    {
      title: 'Data & Systems',
      summary: 'Centralized participant registries, validation formulas, and live recap dashboards.',
      path: '/journey?lens=data-systems',
      actionLabel: 'View data work',
    },
    {
      title: 'Professional & Partnership',
      summary: 'Market research, proposal development, and product positioning at Aither.',
      path: '/experience',
      actionLabel: 'View work experience',
    },
    {
      title: 'International & Communication',
      summary: 'Academic exchange visits in Singapore & Malaysia and research presentation defense.',
      path: '/journey?lens=international-communication',
      actionLabel: 'View international journey',
    },
  ];

  return (
    <section className="py-14 md:py-20 border-b border-hairline bg-[#F3F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
            03 // FIND WHAT IS RELEVANT
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight">
            Looking for something specific?
          </h2>
          <p className="text-xs sm:text-sm text-[#697078] leading-relaxed">
            Explore by what you are looking for. These lenses help you jump straight into the part of my experience that matters to you.
          </p>
        </div>

        {/* 5 Discovery Lens Links (Open layout, not bulky cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lenses.map((lens) => (
            <Link
              key={lens.title}
              to={lens.path}
              className="group p-5 rounded-lg border border-hairline bg-white hover:border-[#3157D5] hover:shadow-xs transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                  {lens.title}
                </h3>
                <p className="text-xs text-[#697078] mt-1 leading-relaxed font-sans">
                  {lens.summary}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-[#3157D5]">
                <span>{lens.actionLabel}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Direct link to browse entire catalog */}
          <Link
            to="/journey"
            className="p-5 rounded-lg border border-dashed border-[#15181D]/20 hover:border-[#15181D] bg-transparent hover:bg-white/40 transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#697078]">
                <Compass className="w-3.5 h-3.5 text-[#3157D5]" />
                <span>UNFILTERED TIMELINE</span>
              </div>
              <h3 className="text-sm font-semibold text-[#15181D] mt-1">
                Explore Everything
              </h3>
              <p className="text-xs text-[#697078] mt-1 leading-relaxed font-sans">
                Prefer to view all projects, organizational roles, and operational records together?
              </p>
            </div>

            <div className="pt-2 flex items-center gap-1.5 text-xs font-medium text-[#15181D]">
              <span>Open full journey</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
