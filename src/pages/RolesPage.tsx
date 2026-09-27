import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { professionalExperiences } from '../data/professional';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const RolesPage: React.FC = () => {
  const roles = [
    {
      slug: 'aither',
      organization: 'Aither Clean-Air Tech',
      role: 'Project & Partnership Development',
      type: 'Venture & Professional Experience',
      period: 'Aug 2025 — Jan 2026',
      location: 'Surabaya, Indonesia',
      summary: 'Formulated market research, partnership proposals, solution positioning, and stakeholder communication for an early-stage clean-air technology venture.',
      scope: 'Commercial proposal drafting, stakeholder alignment, market mapping, and presentation decks.',
      mediaLabel: 'Aither — Commercial Strategy & Positioning',
      mediaSublabel: 'Venture proposals and partnership documentation.',
      mediaType: 'experience' as const,
      detailUrl: '/roles/aither',
    },
    {
      slug: 'ieee-student-branch-its',
      organization: 'IEEE Student Branch ITS',
      role: 'Active Member · Student Technical Community',
      type: 'Long-Term Organization',
      period: '2024 — Present',
      location: 'Surabaya, Indonesia',
      summary: 'Active involvement in engineering student branch technical initiatives, seminars, and undergraduate student community workshops.',
      scope: 'Technical seminar participation, student engineering community events, and cross-discipline collaboration.',
      mediaLabel: 'IEEE Student Branch ITS — Technical Community',
      mediaSublabel: 'Undergraduate student branch engineering activities.',
      mediaType: 'activity' as const,
      detailUrl: '/experiences/ieee-student-branch-its',
    },
    {
      slug: 'tdc-its',
      organization: 'TDC ITS (Technology Development Community)',
      role: 'Active Contributor · Student Initiative',
      type: 'Long-Term Community',
      period: '2024 — Present',
      location: 'Surabaya, Indonesia',
      summary: 'Technology and project collaboration community exploring innovative technical initiatives and peer knowledge sharing.',
      scope: 'Community discussions, project ideation, and collaborative technical exploration.',
      mediaLabel: 'TDC ITS — Community Initiatives',
      mediaSublabel: 'Student technology development discussions.',
      mediaType: 'systems' as const,
      detailUrl: '/experiences/tdc-its',
    },
  ];

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
          Sustained Positions
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          ROLES
        </h1>
        <p className="text-base sm:text-lg text-[#697078] leading-relaxed">
          Long-term positions across professional ventures, student organizations, and academic engineering communities.
        </p>
      </div>

      {/* Cardless Roles List */}
      <div className="divide-y divide-hairline border-y border-hairline">
        {roles.map((item, idx) => (
          <article
            key={item.slug}
            className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* Left Column: Role Details & Scope (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#697078]">
                <span className="text-[#3157D5] font-semibold uppercase">
                  0{idx + 1} · {item.type}
                </span>
                <span aria-hidden="true">·</span>
                <span>{item.period}</span>
                <span aria-hidden="true">·</span>
                <span>{item.location}</span>
              </div>

              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                  <Link to={item.detailUrl} className="hover:text-[#3157D5] transition-colors">
                    {item.organization}
                  </Link>
                </h2>
                <p className="text-base font-medium text-[#3157D5]">
                  {item.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed font-sans">
                {item.summary}
              </p>

              <div className="pt-2 text-xs font-mono text-[#697078] space-y-1">
                <span className="text-[#15181D] font-medium uppercase block">Contribution Scope:</span>
                <span>{item.scope}</span>
              </div>

              <div className="pt-3">
                <Link
                  to={item.detailUrl}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#3157D5] transition-colors"
                >
                  <span>Inspect Role Record</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Media Placeholder (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type={item.mediaType}
                  aspectRatio="16:10"
                  label={item.mediaLabel}
                  slotLabel="[ ROLE DOCUMENTATION ]"
                  sublabel={item.mediaSublabel}
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#697078] px-1">
                <span>{item.organization}</span>
                <span>{item.period}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
