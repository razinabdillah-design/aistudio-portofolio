import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { projectCategories } from '../data/categories';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const ProjectsPage: React.FC = () => {
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

  const filteredProjects = useMemo(() => {
    if (currentCategory === 'all') return projects;
    return projects.filter((p) =>
      p.categories.some((c) => c.toLowerCase() === currentCategory.toLowerCase())
    );
  }, [currentCategory]);

  return (
    <div className="py-12 md:py-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
            Engineering & Technical Work
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#697078] leading-relaxed text-balance">
          A collection of things I have researched, modeled, designed, built, or experimented with. Each project outlines the context, computational approach, and practical learnings.
        </p>
      </div>

      {/* Primary Category Filters (Cardless horizontal segmented row) */}
      <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 border-b border-hairline pb-2 w-max">
          {projectCategories.map((cat) => {
            const isSelected = currentCategory.toLowerCase() === cat.id.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors whitespace-nowrap ${
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

      {/* Cardless Architectural Projects Catalogue */}
      <div className="divide-y divide-hairline border-y border-hairline">
        {filteredProjects.map((project, idx) => {
          const placeholderType =
            project.slug === 'air-purifier'
              ? 'cad'
              : project.slug === 'load-flow-analysis'
              ? 'grid'
              : project.slug === 'kicad-schematic-pcb'
              ? 'circuit'
              : project.slug === 'operational-data-systems'
              ? 'systems'
              : 'work';

          return (
            <article
              key={project.slug}
              className="py-10 sm:py-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Visual Technical Specimen Frame (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="border border-hairline bg-[#EBE8DF]/40 overflow-hidden">
                    <MediaPlaceholder
                      type={placeholderType}
                      label={project.title}
                      sublabel={project.subtitle}
                      aspectRatio="16:9"
                    />
                  </div>
                </div>

                {/* Information & Details (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#697078]">
                    <span className="text-[#3157D5] font-semibold">
                      0{idx + 1}. {project.categories.join(' · ')}
                    </span>
                    {project.status && (
                      <span className="text-[#15181D] font-medium">{project.status}</span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight group-hover:text-[#3157D5] transition-colors">
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h2>
                    {project.subtitle && (
                      <p className="text-sm font-sans text-[#697078]">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans">
                    {project.summary}
                  </p>

                  {/* Tools Metadata: Clean text with typographic separators (Zero pills) */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="pt-2 text-xs font-mono text-[#697078] flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="uppercase text-[#15181D] font-medium">Tools:</span>
                      {project.tools.map((t, i) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {i < project.tools!.length - 1 && (
                            <span aria-hidden="true" className="text-[#697078]/40">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {/* Deep Link Action */}
                  <div className="pt-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] transition-colors"
                    >
                      <span>Inspect technical details & approach</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
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
