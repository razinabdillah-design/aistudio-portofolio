import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { journeyExperiences } from '../data/journey';
import { professionalExperiences } from '../data/professional';
import { journeyCategories } from '../data/categories';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const JourneyPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const currentLens = searchParams.get('lens');

  const lensLabels: Record<string, string> = {
    'events-operations': 'Events & Operations',
    'data-systems': 'Data & Systems',
    'international-communication': 'International & Communication',
    'professional-partnership': 'Professional & Partnership',
    'technical-projects': 'Technical & Projects',
  };

  const handleSelectCategory = (catId: string) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('lens');
    if (catId === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', catId);
    }
    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setSearchParams({});
  };

  // Build unified journey list including Aither as Professional Experience
  const allJourneyItems = useMemo(() => {
    const aitherExp = professionalExperiences.find((p) => p.slug === 'aither');
    const aitherAsJourney = aitherExp
      ? {
          slug: aitherExp.slug,
          title: `${aitherExp.organization} — ${aitherExp.role}`,
          organization: aitherExp.organization,
          role: aitherExp.role,
          categories: ['professional' as const, 'systems' as const],
          location: aitherExp.location,
          period: aitherExp.period,
          summary: aitherExp.summary,
          highlights: aitherExp.responsibilities,
          isProfessionalExperience: true,
          cover: 'experience/aither-overview',
          discovery: aitherExp.discovery,
        }
      : null;

    const list = aitherAsJourney
      ? [aitherAsJourney, ...journeyExperiences.map((j) => ({ ...j, isProfessionalExperience: false }))]
      : journeyExperiences.map((j) => ({ ...j, isProfessionalExperience: false }));

    if (currentLens) {
      return list.filter((item) => {
        if (currentLens === 'events-operations') {
          return item.discovery?.lenses?.includes('events-operations') ||
            item.categories.some((c) => ['committee', 'volunteer', 'organization'].includes(c));
        }
        if (currentLens === 'data-systems') {
          return item.discovery?.lenses?.includes('data-systems') ||
            item.categories.includes('systems' as any) ||
            item.slug === 'pkkmb-its' || item.slug === 'asfera';
        }
        if (currentLens === 'international-communication') {
          return item.discovery?.lenses?.includes('international-communication') ||
            item.categories.includes('international' as any);
        }
        return item.discovery?.lenses?.includes(currentLens as any);
      });
    }

    if (currentCategory === 'all') {
      return list;
    }

    return list.filter((item) =>
      item.categories.includes(currentCategory as any)
    );
  }, [currentCategory, currentLens]);

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
            Experience & Formative Environments
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          Journey Archive
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#697078] leading-relaxed text-balance">
          A chronological, comprehensive record across university committees, operational data roles, clean-air venture initiatives, and international delegations.
        </p>
      </div>

      {/* Lens Alert if filtering by Discovery Lens */}
      {currentLens && (
        <div className="mb-8 pb-4 border-b border-hairline flex items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[#697078]">Filtered by Lens:</span>
            <span className="text-[#15181D] font-bold">
              {lensLabels[currentLens] || currentLens}
            </span>
          </div>
          <button
            onClick={handleClearFilters}
            className="text-[#3157D5] hover:underline"
          >
            Clear lens filter
          </button>
        </div>
      )}

      {/* Category Navigation (Cardless horizontal text bar) */}
      <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-3 border-b border-hairline pb-2 w-max text-xs font-mono">
          {journeyCategories.map((cat) => {
            const isSelected = currentCategory === cat.id && !currentLens;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`py-1.5 transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'border-b-2 border-[#15181D] text-[#15181D] font-bold'
                    : 'text-[#697078] hover:text-[#15181D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cardless Chronological Architectural Stream */}
      <div className="divide-y divide-hairline border-y border-hairline">
        {allJourneyItems.map((item, index) => {
          const targetUrl = item.isProfessionalExperience
            ? `/experience/${item.slug}`
            : `/journey/${item.slug}`;

          const scaleMetric = (item as any).scaleMetric;

          return (
            <article
              key={item.slug}
              className="py-10 sm:py-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Visual Artifact Preview Frame (4 cols) */}
                <div className="lg:col-span-4">
                  <div className="border border-hairline bg-[#EBE8DF]/40 overflow-hidden">
                    <MediaPlaceholder
                      type={item.isProfessionalExperience ? 'experience' : 'journey'}
                      label={item.title}
                      aspectRatio="16:9"
                    />
                  </div>
                </div>

                {/* Information Ledger (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Meta: Index, Period, Location */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#697078]">
                    <span className="text-[#3157D5] font-semibold">
                      0{index + 1}.
                    </span>
                    <span className="font-medium text-[#15181D]">
                      {item.organization || item.title}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.period}</span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>

                  {/* Title & Role */}
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight group-hover:text-[#3157D5] transition-colors">
                      <Link to={targetUrl}>
                        {item.title}
                      </Link>
                    </h2>
                    <p className="text-xs font-mono text-[#3157D5] font-medium">
                      Role: {item.role}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans">
                    {item.summary}
                  </p>

                  {/* Scale Metric if present */}
                  {scaleMetric && (
                    <div className="pt-1 text-xs font-mono text-[#697078] flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#3157D5]">Scale:</span>
                      <span>
                        {typeof scaleMetric === 'string'
                          ? scaleMetric
                          : `${scaleMetric.value} — ${scaleMetric.label}${scaleMetric.context ? ` (${scaleMetric.context})` : ''}`}
                      </span>
                    </div>
                  )}

                  {/* Deep Link Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <Link
                      to={targetUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] transition-colors"
                    >
                      <span>{item.isProfessionalExperience ? 'Inspect Venture Role' : 'Read Full Journey Record'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#697078]">
                      {item.categories.map((c) => (
                        <span key={c} className="capitalize">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
