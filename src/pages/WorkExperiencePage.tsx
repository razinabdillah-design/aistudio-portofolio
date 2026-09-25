import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Building2, Wind } from 'lucide-react';
import { professionalExperiences } from '../data/professional';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const WorkExperiencePage: React.FC = () => {
  const aither = professionalExperiences.find((e) => e.slug === 'aither') || professionalExperiences[0];

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
            Professional & Venture Track
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          Work Experience
        </h1>
        <p className="mt-4 text-lg text-[#697078] leading-relaxed text-balance">
          Professional working environments where engineering concepts meet practical market realities, stakeholder collaboration, and commercial strategy.
        </p>
      </div>

      {/* Featured Venture Card — Generous Editorial Space */}
      <div className="rounded-2xl border border-hairline bg-[#F3F1EB] p-8 sm:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Role Details and Scope (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#697078] mb-3 font-mono">
                <span className="text-[#3157D5] font-semibold uppercase">
                  Venture Track
                </span>
                <span aria-hidden="true">·</span>
                <span>{aither.period}</span>
                <span aria-hidden="true">·</span>
                <span>{aither.location}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                <Link to={`/experience/${aither.slug}`} className="hover:text-[#3157D5] transition-colors">
                  {aither.organization}
                </Link>
              </h2>

              <p className="text-base sm:text-lg font-medium text-[#3157D5] mt-1">
                {aither.role}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {aither.summary}
            </p>

            {/* Scope and Responsibilities */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#697078]">
                Key Areas of Contribution
              </div>
              <ul className="space-y-2 text-sm text-[#15181D]/80">
                {aither.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] mt-2 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operating Areas */}
            <div className="pt-4 border-t border-hairline">
              <div className="text-xs font-mono uppercase tracking-wider text-[#697078] mb-2">
                Operating Domains
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-[#697078]">
                {aither.areas.map((area, aIdx) => (
                  <React.Fragment key={area}>
                    <span className="text-[#15181D] font-medium">{area}</span>
                    {aIdx < aither.areas.length - 1 && (
                      <span aria-hidden="true" className="text-[#697078]/40">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
              <Link
                to={`/experience/${aither.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shadow-xs group"
              >
                <span>Explore Full Experience</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projects/air-purifier"
                className="text-xs font-medium text-[#697078] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1"
              >
                <span>Related CAD Project →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Artifact Placeholder (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <MediaPlaceholder
              type="experience"
              label={`${aither.organization} — Venture Architecture`}
              sublabel="Market research, strategic partnership proposals, and clean-air technology positioning"
              aspectRatio="4:3"
            />

            <div className="p-5 rounded-xl bg-[#EBE8DF]/50 border border-hairline space-y-2">
              <div className="text-xs font-mono uppercase text-[#3157D5] font-medium">
                Context
              </div>
              <p className="text-xs text-[#697078] leading-relaxed">
                {aither.orgContext}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
