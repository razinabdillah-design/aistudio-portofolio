import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

interface RoleItem {
  number: string;
  organization: string;
  role: string;
  period: string;
  summary: string;
  route: string;
  mediaLabel: string;
  mediaSublabel: string;
}

const ROLES: RoleItem[] = [
  {
    number: '01',
    organization: 'AITHER',
    role: 'Project & Partnership Development',
    period: '2025—2026',
    summary: 'Partnership research, institutional proposals, venture positioning, and clean-air technology communication.',
    route: '/experience/aither',
    mediaLabel: 'Aither — Commercial Strategy & Positioning',
    mediaSublabel: 'Venture proposals, institutional pitch documentation, and stakeholder outreach.',
  },
  {
    number: '02',
    organization: 'IEEE STUDENT BRANCH ITS',
    role: 'Active Member · Student Community',
    period: '2024—Present',
    summary: 'Active involvement in engineering student branch technical initiatives and student community workshops.',
    route: '/journey',
    mediaLabel: 'IEEE Student Branch ITS — Community Engagement',
    mediaSublabel: 'Undergraduate student branch engineering activities and technical seminars.',
  },
  {
    number: '03',
    organization: 'PKKMB ITS & ASFERA',
    role: 'Data Center & Systems Lead',
    period: '2024—2026',
    summary: 'Centralized registration databases, automated verification formulas, and operational roster distribution.',
    route: '/journey/pkkmb-its',
    mediaLabel: 'Campus Operations — Centralized Data Rosters',
    mediaSublabel: 'Multi-category participant verification schemas and live field committee rosters.',
  },
];

export const SelectedRolesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeRole = ROLES[activeIdx];

  return (
    <section className="py-20 md:py-28 border-b border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              05. Selected Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
              Organizational & Professional Responsibilities
            </h2>
          </div>

          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors"
          >
            <span>View work experience dossiers</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cardless Split Composition: Large Editorial Role List + Shared Contextual Media Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Large Editorial Role List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-hairline border-y border-hairline">
            {ROLES.map((r, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={r.organization}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`py-8 px-2 sm:px-4 transition-colors cursor-pointer block ${
                    isActive ? 'bg-[#F3F1EB]/80' : 'hover:bg-[#F3F1EB]/40'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 text-xs font-mono text-[#697078] mb-2">
                    <span className="text-[#3157D5] font-semibold">{r.number}</span>
                    <span>{r.period}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight mb-1">
                    {r.organization}
                  </h3>

                  <div className="text-xs font-mono uppercase tracking-wider text-[#3157D5] font-medium mb-3">
                    {r.role}
                  </div>

                  <p className="text-sm text-[#15181D]/80 font-sans leading-relaxed mb-4 max-w-xl">
                    {r.summary}
                  </p>

                  <Link
                    to={r.route}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors font-medium"
                  >
                    <span>Inspect role documentation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right: Shared Contextual Media Placeholder (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-3">
            <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
              <MediaPlaceholder
                type="experience"
                aspectRatio="4:5"
                label={activeRole.mediaLabel}
                slotLabel="[ ROLE DOCUMENTATION ]"
                sublabel={activeRole.mediaSublabel}
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#697078] px-1">
              <span>Active Context: {activeRole.organization}</span>
              <span>{activeRole.period}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
