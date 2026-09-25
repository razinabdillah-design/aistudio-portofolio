import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { journeyExperiences } from '../../data/journey';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const CommitteeVolunteerSection: React.FC = () => {
  const jfest = journeyExperiences.find((j) => j.slug === 'j-fest-its')!;
  const pkkmb = journeyExperiences.find((j) => j.slug === 'pkkmb-its')!;
  const gg = journeyExperiences.find((j) => j.slug === 'gg-beraksi')!;

  const experiences = [
    { exp: jfest, photoLabel: '[ J-FEST / COMMITTEE PHOTO ]' },
    { exp: pkkmb, photoLabel: '[ PKKMB / OPERATIONS PHOTO ]' },
    { exp: gg, photoLabel: '[ GG BERAKSI / SOCIAL ACTION PHOTO ]' },
  ].filter((item) => item.exp);

  return (
    <section className="py-20 md:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
              07. Committee & Volunteer
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#3157D5]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
            Making things happen.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
            Operational and field execution behind campus festivals, orientation data management, and community education programs in East Java.
          </p>
        </div>

        {/* 3-Column Execution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {experiences.map(({ exp, photoLabel }, idx) => (
            <article
              key={exp.slug}
              className="rounded-2xl border border-hairline bg-[#F3F1EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#3157D5]/40 transition-colors shadow-xs"
            >
              <div>
                {/* Media Slot */}
                <div className="mb-5">
                  <MediaPlaceholder
                    type="activity"
                    label={photoLabel}
                    sublabel={`${exp.title} on-ground execution`}
                    aspectRatio="16:9"
                  />
                </div>

                {/* Clean Top Header */}
                <div className="flex items-center justify-between text-xs text-[#697078] mb-2 font-mono">
                  <span className="text-[#3157D5] font-semibold">
                    0{idx + 1}.
                  </span>
                  <span>{exp.period}</span>
                </div>

                <h3 className="text-xl font-serif text-[#15181D] tracking-tight mb-1">
                  {exp.title}
                </h3>

                <div className="text-xs font-mono text-[#718878] mb-3">
                  Role: {exp.role}
                </div>

                <p className="text-xs sm:text-sm text-[#15181D]/80 leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Factual scale indicator */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-hairline text-xs text-[#15181D]/80">
                    <div className="text-[11px] font-mono uppercase text-[#697078]">
                      Scope:
                    </div>
                    <p className="leading-snug">
                      {exp.highlights[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                <Link
                  to={`/journey/${exp.slug}`}
                  className="text-xs font-semibold text-[#15181D] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[11px] font-mono text-[#697078]">
                  Surabaya, ID
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Ground Execution Motif */}
        <JourneyLine variant="committee" />

      </div>
    </section>
  );
};
