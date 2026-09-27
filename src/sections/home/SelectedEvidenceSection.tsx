import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SELECTED_HOME_EVIDENCE } from '../../utils/discovery';

export const SelectedEvidenceSection: React.FC = () => {
  return (
    <section id="selected-work" className="py-16 md:py-24 border-b border-hairline bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header: Open Typographic Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-hairline">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
              03. Selected Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight">
              Representative artifacts across domains.
            </h2>
            <p className="text-sm sm:text-base text-[#697078] leading-relaxed">
              Six concrete anchors demonstrating different dimensions of work: engineering modeling, commercial fundraising, large-scale data registries, venture positioning, and academic presentation.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors"
            >
              <span>View all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Cardless Architectural Evidence Ledger */}
        <div className="divide-y divide-hairline border-y border-hairline" role="list">
          {SELECTED_HOME_EVIDENCE.map((item, idx) => (
            <div
              key={item.id}
              className="group py-6 sm:py-8 px-2 sm:px-4 hover:bg-[#F3F1EB]/50 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline"
              role="listitem"
            >
              {/* Column 1: Index & Category Track (3 cols) */}
              <div className="lg:col-span-3 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#697078]">
                  <span className="text-[#3157D5] font-semibold">0{idx + 1}.</span>
                  <span>{item.categoryTag}</span>
                </div>
                <div className="text-xs font-mono text-[#15181D] font-medium pt-1">
                  {item.razinRole}
                </div>
              </div>

              {/* Column 2: What It Was & Real Contribution (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-lg sm:text-xl font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors leading-snug">
                  <Link to={item.deepLink} className="hover:underline">
                    {item.whatItWas}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#15181D]/85 leading-relaxed font-sans">
                  {item.oneImportantContribution}
                </p>

                {item.factualResultScale && (
                  <div className="flex items-center gap-2 text-xs font-mono text-[#697078] pt-1">
                    <span className="uppercase text-[10px] tracking-wider text-[#3157D5]">Output:</span>
                    <span>{item.factualResultScale}</span>
                  </div>
                )}
              </div>

              {/* Column 3: Deeper Link Action (2 cols) */}
              <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-0">
                <Link
                  to={item.deepLink}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#15181D] group-hover:text-[#3157D5] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
