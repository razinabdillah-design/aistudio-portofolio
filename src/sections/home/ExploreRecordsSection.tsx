import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface ExploreRecordItem {
  number: string;
  title: string;
  description: string;
  route: string;
  alignClass: string;
}

const RECORD_PATHS: ExploreRecordItem[] = [
  {
    number: '01',
    title: 'ROLES',
    description: 'Long-term professional and organizational positions',
    route: '/roles',
    alignClass: 'lg:pr-12',
  },
  {
    number: '02',
    title: 'EXPERIENCES',
    description: 'Committees, volunteering, programs, delegation & short-term activities',
    route: '/experiences',
    alignClass: 'lg:pl-12',
  },
  {
    number: '03',
    title: 'PROJECTS',
    description: 'Things I have produced, analyzed, simulated, and engineered',
    route: '/projects',
    alignClass: 'lg:pr-8',
  },
];

export const ExploreRecordsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-white border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              05. Full Archives
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#15181D] tracking-tight">
              EXPLORE ALL<br className="hidden sm:inline" /> MY RECORDS
            </h2>
          </div>
          
          <p className="text-xs font-mono text-[#697078] max-w-xs sm:text-right">
            Selected stories represent only a fraction. Explore complete archives across roles, experiences, and technical projects.
          </p>
        </div>

        {/* Rebirth-Inspired Editorial Navigation Rows (Zero Cards, Large Directional Links) */}
        <div className="divide-y divide-hairline border-y border-hairline" role="list">
          {RECORD_PATHS.map((item) => (
            <Link
              key={item.number}
              to={item.route}
              className={`py-8 sm:py-12 group block transition-colors hover:bg-[#F3F1EB]/60 px-2 sm:px-6 ${item.alignClass}`}
              role="listitem"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#3157D5] font-semibold">
                    {item.number}
                  </div>
                  
                  <motion.h3
                    whileHover={shouldReduceMotion ? {} : { x: 10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#15181D] tracking-tight leading-none group-hover:text-[#3157D5] transition-colors inline-flex items-center gap-4"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#3157D5]" />
                  </motion.h3>
                </div>

                <div className="text-xs sm:text-sm font-mono text-[#697078] max-w-sm sm:text-right group-hover:text-[#15181D] transition-colors">
                  {item.description}
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Navigation Anchors: About and Resume */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#697078]">
          <Link
            to="/about"
            className="text-[#15181D] hover:text-[#3157D5] inline-flex items-center gap-1 transition-colors"
          >
            <span>Read more about my background & education</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/cv"
            className="text-[#3157D5] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>Curriculum Vitae (PDF Archive)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
