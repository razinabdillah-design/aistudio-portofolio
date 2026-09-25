import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export const FinalGatewaySection: React.FC = () => {
  const pathways = [
    {
      label: 'Journey',
      question: 'Where has Razin been?',
      desc: 'Chronological and thematic overview across student delegations, campus leadership, and community action.',
      to: '/journey',
      color: 'hover:text-[#3157D5]',
      borderAccent: 'group-hover:border-[#3157D5]/40',
    },
    {
      label: 'Work Experience',
      question: 'How has Razin worked professionally?',
      desc: 'Venture exploration at Aither clean-air, focusing on market research, partnerships, and product positioning.',
      to: '/experience',
      color: 'hover:text-[#718878]',
      borderAccent: 'group-hover:border-[#718878]/40',
    },
    {
      label: 'Projects',
      question: 'What has Razin built or investigated?',
      desc: 'Technical case studies in power system load flows, CAD hardware prototypes, and multi-agent AI scripts.',
      to: '/projects',
      color: 'hover:text-[#3157D5]',
      borderAccent: 'group-hover:border-[#3157D5]/40',
    },
    {
      label: 'About Razin',
      question: 'How does Razin tend to think and work?',
      desc: 'Personal background, engineering philosophy, and how I approach complex, unfamiliar problems.',
      to: '/about',
      color: 'hover:text-[#C98259]',
      borderAccent: 'group-hover:border-[#C98259]/40',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#EBE8DF]/50 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
              10. Pathways
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#3157D5]/40" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
            Want to go deeper?
          </h2>
          
          <p className="text-base sm:text-lg text-[#697078] leading-relaxed max-w-xl text-pretty">
            Choose a path to explore detailed technical case studies, verified journey milestones, or personal background.
          </p>
        </div>

        {/* Large Directional Editorial Navigation Links (Not Generic Feature Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pathways.map((pathway, index) => (
            <Link
              key={pathway.to}
              to={pathway.to}
              className={`group p-8 rounded-2xl border border-hairline bg-[#F3F1EB] hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-2xs ${pathway.borderAccent}`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#697078] mb-4">
                  <span className="text-[#3157D5] font-semibold">0{index + 1}</span>
                  <span className="uppercase tracking-wider">Directory Pathway</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#718878] font-medium">
                    {pathway.question}
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight flex items-baseline justify-between transition-colors ${pathway.color}`}>
                    <span>{pathway.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#697078] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-[#15181D]/75 leading-relaxed">
                  {pathway.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between text-xs font-medium text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                <span>Explore {pathway.label}</span>
                <span className="font-mono">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quiet Secondary Documents & Direct Contact Bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-[#697078]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono uppercase text-[#15181D]/60 text-[11px]">Formal Record:</span>
            <Link
              to="/cv"
              className="font-medium text-[#15181D] hover:text-[#3157D5] transition-colors underline decoration-hairline inline-flex items-center gap-1.5 py-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#3157D5]" />
              <span>Curriculum Vitae (CV)</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 font-mono text-[#15181D] hover:text-[#3157D5] transition-colors py-1"
            >
              <Mail className="w-3.5 h-3.5 text-[#697078]" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
