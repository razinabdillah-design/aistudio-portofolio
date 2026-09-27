import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface ExploreDestination {
  number: string;
  title: string;
  subtitle: string;
  route: string;
  isExternal?: boolean;
  alignClass: string;
}

const DESTINATIONS: ExploreDestination[] = [
  {
    number: '01',
    title: 'ROLES',
    subtitle: 'Long-term positions & venture responsibilities',
    route: '/experience',
    alignClass: 'lg:pr-12',
  },
  {
    number: '02',
    title: 'EXPERIENCES',
    subtitle: 'Short-term activities, international delegations & events',
    route: '/journey',
    alignClass: 'lg:pl-16',
  },
  {
    number: '03',
    title: 'PROJECTS',
    subtitle: 'Things I have engineered, simulated, and built',
    route: '/projects',
    alignClass: 'lg:pr-8',
  },
  {
    number: '04',
    title: 'ABOUT',
    subtitle: 'Academic background, trajectory & personal context',
    route: '/about',
    alignClass: 'lg:pl-20',
  },
];

export const ExploreMoreSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 md:py-32 bg-[#F3F1EB] border-b border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              05. Explore More
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight">
              Primary Archives & Complete Records
            </h2>
          </div>
          
          <Link
            to="/cv"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#15181D] hover:text-[#3157D5] transition-colors border-b border-hairline pb-0.5"
          >
            <span>Curriculum Vitae (PDF Archive)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Navigation Links (Zero Cards, Large Directional Rows) */}
        <div className="divide-y divide-hairline border-y border-hairline" role="list">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.number}
              to={dest.route}
              className={`py-8 sm:py-12 group block transition-colors hover:bg-white/60 px-2 sm:px-6 ${dest.alignClass}`}
              role="listitem"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#3157D5] font-semibold">
                    {dest.number}
                  </div>
                  
                  <motion.h3
                    whileHover={shouldReduceMotion ? {} : { x: 12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#15181D] tracking-tight leading-none group-hover:text-[#3157D5] transition-colors inline-flex items-center gap-4"
                  >
                    <span>{dest.title}</span>
                    <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#3157D5]" />
                  </motion.h3>
                </div>

                <div className="text-xs sm:text-sm font-mono text-[#697078] max-w-sm sm:text-right group-hover:text-[#15181D] transition-colors">
                  {dest.subtitle}
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Resume Anchor */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#697078]">
          <span>Verified Engineering & Operational Portfolio</span>
          <Link
            to="/cv"
            className="text-[#3157D5] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span>View Full Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
