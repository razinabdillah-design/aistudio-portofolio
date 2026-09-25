import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const AtAGlanceSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-hairline bg-[#EBE8DF]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
            02. Razin at a Glance
          </span>
          <span aria-hidden="true" className="w-8 h-px bg-[#3157D5]/40" />
        </div>

        {/* Compact Editorial Statement Block */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] leading-[1.38] tracking-tight">
          <p>
            An electrical engineering undergraduate exploring technology through{' '}
            <Link
              to="/projects"
              className="inline-flex items-baseline gap-1 text-[#3157D5] underline decoration-[#3157D5]/40 underline-offset-8 hover:decoration-[#3157D5] transition-all group font-normal"
            >
              <span>power simulation, CAD, and AI workflows</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-[#3157D5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            . He has tested ideas inside an{' '}
            <Link
              to="/experience/aither"
              className="inline-flex items-baseline gap-1 text-[#718878] underline decoration-[#718878]/40 underline-offset-8 hover:decoration-[#718878] transition-all group font-normal"
            >
              <span>early clean-air hardware venture</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-[#718878] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            , presented environmental research at{' '}
            <Link
              to="/journey/international-future-leaders"
              className="inline-flex items-baseline gap-1 text-[#C98259] underline decoration-[#C98259]/40 underline-offset-8 hover:decoration-[#C98259] transition-all group font-normal"
            >
              <span>international student symposia in Singapore & Malaysia</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-[#C98259] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            , organized community initiatives in{' '}
            <Link
              to="/journey?category=organization"
              className="inline-flex items-baseline gap-1 text-[#3157D5] underline decoration-[#3157D5]/40 underline-offset-8 hover:decoration-[#3157D5] transition-all group font-normal"
            >
              <span>student engineering chapters</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-[#3157D5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            , and architected{' '}
            <Link
              to="/projects/operational-data-systems"
              className="inline-flex items-baseline gap-1 text-[#15181D] underline decoration-[#15181D]/40 underline-offset-8 hover:decoration-[#15181D] transition-all group font-normal"
            >
              <span>operational participant data systems</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 inline-block text-[#15181D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
            {' '}behind campus-wide events.
          </p>
        </div>

        {/* Quiet, unboxed contextual footer */}
        <div className="mt-10 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#697078]">
          <span>ORIENTATION SUMMARY</span>
          <span className="text-[#3157D5]">CLICK ANY UNDERLINED PHRASE TO GO DEEPER</span>
        </div>

      </div>
    </section>
  );
};
