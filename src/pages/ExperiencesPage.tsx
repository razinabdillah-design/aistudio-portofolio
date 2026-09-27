import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { journeyExperiences } from '../data/journey';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const ExperiencesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const categories = [
    { id: 'all', label: 'All Records' },
    { id: 'international', label: 'International & Delegation' },
    { id: 'committee', label: 'Committees & Operations' },
    { id: 'organization', label: 'Student Activities' },
    { id: 'volunteer', label: 'Volunteer Programs' },
  ];

  const handleSelectCategory = (catId: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', catId);
    }
    setSearchParams(nextParams);
  };

  // Filter experiences: Exclude sustained roles (like Aither) - only short-term activities
  const filteredItems = useMemo(() => {
    return journeyExperiences.filter((item) => {
      if (currentCategory === 'all') return true;
      return item.categories.includes(currentCategory as any);
    });
  }, [currentCategory]);

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
          Activity Records
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          EXPERIENCES
        </h1>
        <p className="text-base sm:text-lg text-[#697078] leading-relaxed">
          Short-term activities, international delegations, campus operations, and committee leadership roles.
        </p>
      </div>

      {/* Filter Tabs (Unboxed text with active indicators) */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-hairline pb-4">
        {categories.map((cat) => {
          const isSelected = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                isSelected
                  ? 'bg-[#15181D] text-white font-medium'
                  : 'text-[#697078] hover:text-[#15181D] hover:bg-[#EBE8DF]/60'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Cardless Experiences List */}
      <div className="divide-y divide-hairline border-y border-hairline">
        {filteredItems.map((item, index) => {
          const scaleMetric = item.scaleMetric;

          return (
            <article
              key={item.slug}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
            >
              {/* Left Column: Metadata & Details (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#697078]">
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

                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight group-hover:text-[#3157D5] transition-colors">
                    <Link to={`/experiences/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-xs font-mono text-[#3157D5] font-medium">
                    Role: {item.role}
                  </p>
                </div>

                <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans">
                  {item.summary}
                </p>

                {scaleMetric && (
                  <div className="pt-1 text-xs font-mono text-[#697078] flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#3157D5]">Scale:</span>
                    <span>
                      {scaleMetric.value} — {scaleMetric.label}
                      {scaleMetric.context ? ` (${scaleMetric.context})` : ''}
                    </span>
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    to={`/experiences/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] transition-colors font-medium"
                  >
                    <span>View Experience Record</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                  <MediaPlaceholder
                    type={
                      item.categories.includes('international')
                        ? 'delegation'
                        : item.categories.includes('committee')
                        ? 'activity'
                        : 'experience'
                    }
                    aspectRatio="16:10"
                    label={item.title}
                    slotLabel="[ EXPERIENCE PHOTO ]"
                    sublabel={`${item.organization || item.title} · ${item.period}`}
                    className="w-full"
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
