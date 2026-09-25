import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { journeyExperiences } from '../../data/journey';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const OrganizationsSection: React.FC = () => {
  const ieee = journeyExperiences.find((j) => j.slug === 'ieee-sb-its')!;
  const tdc = journeyExperiences.find((j) => j.slug === 'tdc-its')!;

  const orgs = [ieee, tdc].filter(Boolean);

  return (
    <section className="py-20 md:py-32 border-b border-hairline bg-[#EBE8DF]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
                06. Organizations & Communities
              </span>
              <span aria-hidden="true" className="w-6 h-px bg-[#3157D5]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
              Learning with people.
            </h2>
            <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
              Engaging in student engineering chapters and campus technopreneurship programs to collaborate with peers, facilitate onboarding, and build shared knowledge.
            </p>
          </div>

          <Link
            to="/journey?category=organization"
            className="text-xs font-semibold text-[#3157D5] hover:text-[#15181D] transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore all organizations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Column Clean Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {orgs.map((org, index) => {
            const photoLabel =
              org.slug === 'ieee-sb-its'
                ? '[ IEEE / ORGANIZATION PHOTO ]'
                : '[ TDC / ORGANIZATION PHOTO ]';

            return (
              <article
                key={org.slug}
                className="rounded-2xl border border-hairline bg-[#F3F1EB] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#3157D5]/40 transition-colors"
              >
                <div>
                  {/* Photo / Activity Slot */}
                  <div className="mb-6">
                    <MediaPlaceholder
                      type="activity"
                      label={photoLabel}
                      sublabel={`${org.organization} community activities and peer collaboration`}
                      aspectRatio="16:9"
                    />
                  </div>

                  {/* Clean Metadata */}
                  <div className="flex items-center justify-between text-xs text-[#697078] mb-3">
                    <span className="font-mono text-[#3157D5] font-semibold">
                      0{index + 1}. {org.organization}
                    </span>
                    <span className="font-mono">{org.period}</span>
                  </div>

                  {/* Title and Role */}
                  <div className="space-y-1 mb-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#15181D] tracking-tight">
                      {org.title}
                    </h3>
                    <div className="text-xs font-mono text-[#718878]">
                      Role: {org.role}
                    </div>
                  </div>

                  <p className="text-sm text-[#15181D]/80 leading-relaxed mb-6">
                    {org.summary}
                  </p>

                  {/* Grounded Involvement Statement */}
                  {org.whatActuallyDid && org.whatActuallyDid.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#EBE8DF]/50 border border-hairline space-y-1.5 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#3157D5] font-medium">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Key Involvement</span>
                      </div>
                      <p className="text-xs text-[#15181D]/90 leading-relaxed">
                        {org.whatActuallyDid[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Link */}
                <div className="mt-8 pt-4 border-t border-hairline flex items-center justify-between">
                  <Link
                    to={`/journey/${org.slug}`}
                    className="text-xs font-semibold text-[#15181D] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Read Full Journey Detail</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#697078]">
                    Surabaya, ID
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Network Motif */}
        <JourneyLine variant="organization" />

      </div>
    </section>
  );
};
