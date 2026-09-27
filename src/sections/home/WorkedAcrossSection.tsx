import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface DomainRow {
  number: string;
  label: string;
  examples: string[];
  route: string;
}

const DOMAIN_ROWS: DomainRow[] = [
  {
    number: '01',
    label: 'Technical & Engineering',
    examples: ['Load Flow', 'CAD', 'Research'],
    route: '/projects',
  },
  {
    number: '02',
    label: 'Data & Operations',
    examples: ['PKKMB', 'ASFERA', 'J-Fest'],
    route: '/experiences',
  },
  {
    number: '03',
    label: 'Partnership & External',
    examples: ['Aither', 'J-Fest'],
    route: '/roles',
  },
  {
    number: '04',
    label: 'Events & Organizations',
    examples: ['IEEE', 'TDC', 'Evolution', 'GG Beraksi'],
    route: '/experiences',
  },
  {
    number: '05',
    label: 'International',
    examples: ['International Future Leaders'],
    route: '/experiences/international-future-leaders',
  },
];

export const WorkedAcrossSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [20, -20]
  );

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 md:py-24 bg-[#15181D] text-white border-b border-white/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-5 sm:pb-6 border-b border-white/15">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#7696E8] font-semibold">
              05. Exposure Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F3F1EB] tracking-tight">
              WHAT I'VE WORKED ACROSS
            </h2>
          </div>
          <p className="text-xs font-mono text-[#F3F1EB]/60 max-w-sm sm:text-right">
            Verified exposure areas across engineering, operations, and organizational initiatives.
          </p>
        </div>

        {/* Clean Indexed List (Desktop: horizontal split; Mobile: stacked row per area) */}
        <motion.div
          style={{ y: contentY }}
          className="divide-y divide-white/15 border-y border-white/15 will-change-transform"
          role="list"
        >
          {DOMAIN_ROWS.map((row, idx) => (
            <motion.div
              key={row.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { x: 6 }}
              className="py-5 sm:py-6 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline group hover:bg-white/[0.03] transition-colors px-1 sm:px-3"
              role="listitem"
            >
              {/* Number & Domain Label (sm: 5 cols) */}
              <div className="sm:col-span-5 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#7696E8] font-semibold">
                  {row.number}
                </span>
                <Link
                  to={row.route}
                  className="text-base sm:text-lg font-serif text-white/95 group-hover:text-[#7696E8] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{row.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#7696E8] hidden sm:inline" />
                </Link>
              </div>

              {/* Supporting Examples (sm: 7 cols) */}
              <div className="sm:col-span-7 flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-sans text-[#F3F1EB]/70 pl-7 sm:pl-0">
                {row.examples.map((ex, exIdx) => (
                  <React.Fragment key={ex}>
                    <span className="group-hover:text-white transition-colors">
                      {ex}
                    </span>
                    {exIdx < row.examples.length - 1 && (
                      <span aria-hidden="true" className="text-white/20 select-none">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#F3F1EB]/40">
          <span>Non-hierarchical domain exposure · Institut Teknologi Sepuluh Nopember</span>
          <Link to="/about" className="hover:text-white transition-colors text-[11px] sm:text-xs">
            About academic background & trajectory →
          </Link>
        </div>

      </div>
    </section>
  );
};
