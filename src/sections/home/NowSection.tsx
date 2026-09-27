import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const NowSection: React.FC = () => {
  const activeItems = [
    {
      entity: 'IEEE Student Branch ITS',
      role: 'Student Member',
      status: 'Active',
      detail: 'Technical seminars and undergraduate community participation',
    },
    {
      entity: 'Power Grid Dynamics & ETAP',
      role: 'Undergraduate Coursework',
      status: 'In Progress',
      detail: 'Numerical load flow, fault analysis, and bus admittance calculations',
    },
    {
      entity: 'Portfolio Architecture V2',
      role: 'Independent Work',
      status: 'Active Iteration',
      detail: 'Visual reset, media-first composition, and verifiable evidence catalog',
    },
  ];

  return (
    <section className="py-20 md:py-24 border-b border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
          <div className="flex items-baseline gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              07. Now
            </span>
            <span className="text-xl sm:text-2xl font-serif text-[#15181D]">
              Current Academic & Engineering Focus
            </span>
          </div>

          <div className="text-xs font-mono text-[#697078]">
            Status As Of September 2026
          </div>
        </div>

        {/* Cardless Editorial Status List */}
        <div className="divide-y divide-hairline border-y border-hairline" role="list">
          {activeItems.map((item) => (
            <div
              key={item.entity}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
              role="listitem"
            >
              {/* Entity Name (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <div className="text-lg sm:text-xl font-serif text-[#15181D]">
                  {item.entity}
                </div>
                <div className="text-xs font-mono text-[#697078]">
                  {item.role}
                </div>
              </div>

              {/* Status Indicator (3 cols) */}
              <div className="md:col-span-3 flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#3157D5] shrink-0 animate-pulse" />
                <span className="text-[#15181D] font-medium uppercase tracking-wider">
                  {item.status}
                </span>
              </div>

              {/* Detail Context (5 cols) */}
              <div className="md:col-span-5 text-xs sm:text-sm text-[#697078] font-sans leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#697078] pt-2">
          <span>Institut Teknologi Sepuluh Nopember · Surabaya, Indonesia</span>
          <Link to="/about" className="text-[#15181D] hover:text-[#3157D5] inline-flex items-center gap-1 transition-colors">
            <span>Read background & academic focus</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
