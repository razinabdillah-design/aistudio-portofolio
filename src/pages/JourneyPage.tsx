import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Compass, Award, Building2, Users2, Calendar, MapPin } from 'lucide-react';
import { journeyExperiences } from '../data/journey';
import { professionalExperiences } from '../data/professional';
import { journeyCategories } from '../data/categories';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const JourneyPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const handleSelectCategory = (catId: string) => {
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Build unified journey list including Aither as Professional Experience
  const allJourneyItems = useMemo(() => {
    // Convert Aither into a journey representation pointing to /experience/aither
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
        }
      : null;

    const list = aitherAsJourney
      ? [aitherAsJourney, ...journeyExperiences.map((j) => ({ ...j, isProfessionalExperience: false }))]
      : journeyExperiences.map((j) => ({ ...j, isProfessionalExperience: false }));

    if (currentCategory === 'all') {
      return list;
    }

    return list.filter((item) =>
      item.categories.includes(currentCategory as any)
    );
  }, [currentCategory]);

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
          My Journey
        </h1>
        <p className="mt-4 text-lg text-[#697078] leading-relaxed text-balance">
          Different environments taught me different things. Rather than a linear timeline, this feed reflects the varied contexts—from international research symposiums to commercial startup validation and large-scale operations—that shaped how I think and work.
        </p>
      </div>

      {/* Filter Tabs / Segmented Controls with URL Query State */}
      <div className="mb-14 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 p-1 bg-[#EBE8DF]/60 rounded-lg border border-hairline w-max">
          {journeyCategories.map((cat) => {
            const isSelected = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-white text-[#15181D] shadow-xs font-semibold'
                    : 'text-[#697078] hover:text-[#15181D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Editorial Varied-Hierarchy Feed (Not a uniform 3x3 card grid) */}
      <div className="space-y-12">
        {allJourneyItems.map((item, index) => {
          const isLargeFeature = index === 0;
          const targetUrl = item.isProfessionalExperience
            ? `/experience/${item.slug}`
            : `/journey/${item.slug}`;

          // First item or featured items rendered as expansive split-editorial feature
          if (isLargeFeature) {
            return (
              <article
                key={item.slug}
                className="rounded-2xl border border-hairline bg-[#F3F1EB] p-8 sm:p-10 shadow-xs hover:border-[#3157D5]/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5">
                    <MediaPlaceholder
                      type={item.isProfessionalExperience ? 'experience' : 'journey'}
                      label={item.title}
                      sublabel={item.summary}
                      aspectRatio="4:3"
                    />
                  </div>

                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#697078] mb-3">
                        <span className="font-mono text-[#3157D5] font-semibold uppercase">
                          Featured Insight
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

                      <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight">
                        <Link to={targetUrl} className="hover:text-[#3157D5] transition-colors">
                          {item.title}
                        </Link>
                      </h2>

                      <div className="mt-1 text-xs font-medium text-[#718878]">
                        {item.role}
                      </div>

                      <p className="mt-4 text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
                        {item.summary}
                      </p>

                      {item.highlights && (
                        <div className="mt-5 space-y-1.5">
                          {item.highlights.slice(0, 2).map((hl, hIdx) => (
                            <div key={hIdx} className="text-xs text-[#697078] flex items-start gap-2">
                              <span className="text-[#3157D5] font-bold">›</span>
                              <span className="leading-snug">{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-hairline flex items-center justify-between">
                      <Link
                        to={targetUrl}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#15181D] hover:text-[#3157D5] transition-colors"
                      >
                        <span>{item.isProfessionalExperience ? 'Inspect Venture Role' : 'Read Full Journey Story'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
          }

          // Medium / Number-led experiences
          const scaleMetric = (item as any).scaleMetric;

          return (
            <article
              key={item.slug}
              className="rounded-xl border border-hairline bg-[#F3F1EB] p-6 sm:p-8 hover:border-[#3157D5]/40 transition-colors shadow-xs"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left metadata & title (7 cols) */}
                <div className="md:col-span-8 space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#697078]">
                    <span className="font-mono text-[#3157D5] font-semibold">
                      0{index + 1}.
                    </span>
                    <span className="font-medium text-[#15181D]">
                      {item.organization || item.title}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{item.period}</span>
                    {item.location && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#15181D] tracking-tight">
                    <Link to={targetUrl} className="hover:text-[#3157D5] transition-colors">
                      {item.title}
                    </Link>
                  </h3>

                  <div className="text-xs font-medium text-[#718878]">
                    Role: {item.role}
                  </div>

                  <p className="text-sm text-[#15181D]/80 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={targetUrl}
                      className="text-xs font-semibold text-[#3157D5] hover:text-[#15181D] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{item.isProfessionalExperience ? 'Explore Experience' : 'Read Journey'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Contextual visual preview (4 cols) */}
                <div className="md:col-span-4">
                  <MediaPlaceholder
                    type={item.isProfessionalExperience ? 'experience' : 'journey'}
                    label={item.title}
                    aspectRatio="16:9"
                  />
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
