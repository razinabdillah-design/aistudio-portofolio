import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { professionalExperiences } from '../../data/professional';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const ProfessionalExperienceSection: React.FC = () => {
  const aither = professionalExperiences.find((e) => e.slug === 'aither') || professionalExperiences[0];

  return (
    <section className="py-20 md:py-32 border-b border-hairline bg-[#EBE8DF]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#718878]">
              04. Work Experience
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#718878]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
            Learning how ideas survive outside the classroom.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
            Early-stage clean-air venture experience focused on market research, strategic partnership proposals, and the practical challenges of transitioning engineering concepts into market solutions.
          </p>
        </div>

        {/* Experience Composition: Editorial Experience Panel + Supporting Visual/Media Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Editorial Experience Panel (~7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-hairline bg-[#F3F1EB] p-8 sm:p-10 shadow-xs">
            <div>
              {/* Header metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#697078] mb-4">
                <span className="font-mono text-[#718878] font-semibold tracking-wider uppercase">
                  Venture Experience
                </span>
                <span className="font-mono">{aither.period} · {aither.location}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                  {aither.organization}
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#718878]">
                  {aither.role}
                </p>
              </div>

              <p className="mt-5 text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
                {aither.summary}
              </p>

              {/* 3-4 Concise Responsibility Areas */}
              <div className="mt-6 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697078]">
                  Areas of Responsibility
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#15181D]/85">
                  {aither.responsibilities.slice(0, 4).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#718878] mt-1.5 shrink-0" />
                      <span className="leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operating Domains - Clean unboxed text */}
              <div className="mt-6 pt-5 border-t border-hairline">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697078] mb-2">
                  Operating Domains
                </div>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#697078]">
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
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
              <Link
                to={`/experience/${aither.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#718878] transition-colors shadow-xs group"
              >
                <span>Explore the experience</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                to="/projects/air-purifier"
                className="text-xs font-medium text-[#697078] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1"
              >
                <span>View related CAD model</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Supporting Media & Context Column (~5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Supporting Media Slot: [ AITHER WORK EXPERIENCE MEDIA ] */}
            <div className="rounded-2xl border border-hairline bg-[#F3F1EB] p-6 shadow-xs">
              <div className="mb-4">
                <MediaPlaceholder
                  type="experience"
                  label="[ AITHER WORK EXPERIENCE MEDIA ]"
                  sublabel="Market research, strategic partnership proposals, and stakeholder communications"
                  aspectRatio="4:3"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#EBE8DF]/60 border border-hairline space-y-2">
                <div className="text-xs font-mono uppercase text-[#718878] font-medium">
                  Venture Context
                </div>
                <p className="text-xs text-[#697078] leading-relaxed">
                  {aither.orgContext}
                </p>
              </div>
            </div>

            {/* Personal Reflection Area (unfabricated placeholder) */}
            <div className="rounded-2xl border border-hairline bg-[#EBE8DF]/50 p-6 flex flex-col justify-center space-y-2">
              <span className="text-xs font-mono uppercase text-[#697078] font-medium">
                Venture Reflection
              </span>
              <p className="text-xs font-mono text-[#697078]/80 italic">
                [ PERSONAL REFLECTION TO BE ADDED BY RAZIN ]
              </p>
            </div>

          </div>

        </div>

        {/* Transition Motif */}
        <div className="pt-10">
          <JourneyLine variant="experience" />
        </div>

      </div>
    </section>
  );
};
