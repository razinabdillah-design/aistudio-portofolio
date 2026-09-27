import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {
  const selectedEntries = [
    {
      id: 'aither',
      name: 'Aither',
      roleContext: 'Project & Partnership Development · Clean-Air Venture',
      contribution: 'Worked on market research, partnership proposals, product positioning, and external communication for an early-stage clean-air venture.',
      scaleResult: 'Formulated institutional partnership proposals and solution positioning',
      deepLink: '/experience/aither',
      linkText: 'Inspect Aither role',
    },
    {
      id: 'asfera',
      name: 'ASFERA',
      roleContext: 'Administrative & Data Management Lead · Academic Festival',
      contribution: 'Managed centralized administration and participant registration data across 40 competition branches.',
      scaleResult: '2,800+ participants managed with automated verification and zero lost records',
      deepLink: '/journey/asfera',
      linkText: 'Inspect ASFERA role',
    },
    {
      id: 'international-future-leaders',
      name: 'International Future Leaders',
      roleContext: 'Student Delegate · Singapore & Malaysia',
      contribution: 'Presented environmental technology research before international academic evaluation panels during visits at NUS and IIUM.',
      scaleResult: 'Awarded 1st Best Presentation and 2nd Best Research Paper',
      deepLink: '/journey/international-future-leaders',
      linkText: 'Inspect IFL delegation',
    },
    {
      id: 'load-flow-analysis',
      name: 'Multi-Bus Power Grid Load Flow Analysis',
      roleContext: 'Electrical Engineering Study · ITS',
      contribution: 'Formulated bus admittance matrices and executed iterative Newton-Raphson simulations to calculate voltage profiles and power losses.',
      scaleResult: 'Validated through analytical MATLAB scripts and ETAP simulation models',
      deepLink: '/projects/load-flow-analysis',
      linkText: 'Inspect load flow project',
    },
  ];

  return (
    <section id="selected-work" className="py-16 md:py-24 border-b border-hairline bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
              02 // SELECTED WORK & EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight">
              What I have actually worked on.
            </h2>
          </div>

          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#697078] hover:text-[#15181D] transition-colors"
          >
            <span>View complete timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Representative Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {selectedEntries.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-xl border border-hairline bg-[#F3F1EB]/50 hover:bg-[#F3F1EB] transition-colors flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-serif text-[#15181D]">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-[#3157D5] mt-1 font-medium">
                    {item.roleContext}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#15181D]/80 leading-relaxed font-sans">
                  {item.contribution}
                </p>

                {item.scaleResult && (
                  <div className="pt-2 text-[11px] font-mono text-[#697078]">
                    <span className="text-[#15181D] font-medium">Result:</span> {item.scaleResult}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-hairline">
                <Link
                  to={item.deepLink}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15181D] hover:text-[#3157D5] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
