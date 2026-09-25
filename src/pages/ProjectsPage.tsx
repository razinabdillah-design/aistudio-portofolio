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
        <p className="mt-4 text-lg text-[#697078] leading-relaxed text-balance">
          A collection of things I have researched, modeled, designed, built, or experimented with. Each project outlines the context, approach, and practical learnings.
        </p>
      </div>

      {/* Primary Category Filters */}
      <div className="mb-12 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 p-1 bg-[#EBE8DF]/60 rounded-lg border border-hairline w-max">
          {projectCategories.map((cat) => {
            const isSelected = currentCategory.toLowerCase() === cat.id.toLowerCase();
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              className="rounded-xl border border-hairline bg-[#F3F1EB] p-6 sm:p-8 flex flex-col justify-between hover:border-[#3157D5]/40 transition-colors shadow-xs"
            >
              <div>
                <div className="mb-6">
                  <MediaPlaceholder
                    type={placeholderType}
                    label={project.title}
                    sublabel={project.subtitle}
                    aspectRatio="16:9"
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#697078] mb-2 font-mono">
                  <span className="text-[#3157D5] font-semibold">
                    0{idx + 1}. {project.categories.join(' · ')}
                  </span>
                  {project.status && <span>{project.status}</span>}
                </div>

                <h3 className="text-xl font-serif text-[#15181D] tracking-tight mb-2">
                  <Link to={`/projects/${project.slug}`} className="hover:text-[#3157D5] transition-colors">
                    {project.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#15181D]/80 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Verified tool tags */}
                {project.tools && project.tools.length > 0 && (
                  <div className="pt-3 border-t border-hairline text-[11px] font-mono text-[#697078] flex flex-wrap items-center gap-1.5">
                    <span className="uppercase text-[#15181D]/80">Tools:</span>
                    {project.tools.map((t, i) => (
                      <span key={t}>
                        {t}
                        {i < project.tools!.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-[#3157D5] hover:text-[#15181D] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
