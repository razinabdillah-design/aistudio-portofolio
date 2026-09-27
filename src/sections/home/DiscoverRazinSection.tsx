import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { DISCOVERY_LENSES, getItemsByLens, type DiscoveryLensConfig } from '../../utils/discovery';
import type { DiscoveryLens } from '../../types';

export const DiscoverRazinSection: React.FC = () => {
  const [selectedLens, setSelectedLens] = useState<DiscoveryLens>('technical-projects');

  const activeLensConfig = DISCOVERY_LENSES.find((l) => l.id === selectedLens) || DISCOVERY_LENSES[0];
  const matchingItems = getItemsByLens(selectedLens);

  return (
    <section id="discover" className="py-16 md:py-24 border-b border-hairline bg-[#F3F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header: Orientation Layer (Zero code comments) */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
              02. Discover Razin
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight">
            Find the side of my work that matters to you.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed">
            Different visitors look for different evidence. Select a lens below to inspect corresponding engineering models, operational systems, commercial partnerships, or academic presentations.
          </p>
        </div>

        {/* 5 Discovery Lenses Navigation (Cardless editorial ledger layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Typographic Lens Index (5 of 12 columns) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-[#697078] uppercase tracking-wider pb-2 border-b border-hairline">
              Select Lens (5 Perspectives)
            </div>

            <nav className="divide-y divide-hairline border-b border-hairline" aria-label="Discovery lenses">
              {DISCOVERY_LENSES.map((lens: DiscoveryLensConfig, idx) => {
                const isActive = lens.id === selectedLens;
                return (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`w-full text-left py-4 px-2 transition-all flex items-start justify-between gap-4 ${
                      isActive
                        ? 'border-l-2 border-[#3157D5] bg-[#EAE6DD]/60 pl-4'
                        : 'border-l-2 border-transparent hover:bg-[#EAE6DD]/30 pl-2'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#697078]">
                          0{idx + 1}.
                        </span>
                        <span className={`text-sm sm:text-base ${isActive ? 'font-serif text-[#15181D] font-semibold' : 'text-[#15181D]/80'}`}>
                          {lens.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#697078] pl-6 font-sans line-clamp-1">
                        {lens.tagline}
                      </p>
                    </div>

                    {isActive && (
                      <span className="text-xs font-mono text-[#3157D5] shrink-0 pt-1">
                        Active
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="pt-2">
              <Link
                to="/journey"
                className="inline-flex items-center gap-1.5 text-xs text-[#697078] hover:text-[#15181D] transition-colors font-mono"
              >
                <span>Or inspect the complete uncompressed archive</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column: Cardless Open Specimen Ledger (7 of 12 columns) */}
          <div className="lg:col-span-7 space-y-6 pt-1">
            
            {/* Active Lens Header */}
            <div className="space-y-2 pb-4 border-b border-hairline">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
                  Lens Overview
                </span>
                <span className="text-xs font-mono text-[#697078]">
                  {matchingItems.length} Verified Entries
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#15181D]">
                {activeLensConfig.title}
              </h3>
              <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans">
                {activeLensConfig.description}
              </p>
            </div>

            {/* Open Records List (Zero cards, clean hairline divided rows) */}
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#697078] pb-2">
                Highlighted Records:
              </div>

              <div className="divide-y divide-hairline border-y border-hairline">
                {matchingItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={item.route}
                    className="group block py-4 px-2 hover:bg-[#EAE6DD]/40 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="text-base font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs font-mono text-[#697078] shrink-0">
                        <span className="capitalize">{item.claimLevel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:text-[#3157D5] transition-opacity" />
                      </div>
                    </div>

                    <p className="text-xs text-[#697078] mt-1.5 line-clamp-2 leading-relaxed font-sans">
                      {item.summary}
                    </p>

                    {/* Metadata rendered as clean unboxed text with typographic separators (Zero pills) */}
                    <div className="mt-2.5 flex items-center gap-2 text-[11px] font-mono text-[#697078]">
                      {item.topics.slice(0, 3).map((topic, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span>{topic}</span>
                          {tIdx < Math.min(item.topics.length, 3) - 1 && (
                            <span aria-hidden="true" className="text-[#697078]/40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Primary Action Button to Dive Deeper into this Lens */}
            <div className="pt-2">
              <Link
                to={activeLensConfig.primaryRoute}
                className="inline-flex items-center justify-between w-full py-3 px-4 text-xs sm:text-sm font-medium text-white bg-[#15181D] hover:bg-[#3157D5] rounded-none transition-colors"
              >
                <span>{activeLensConfig.routeLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
