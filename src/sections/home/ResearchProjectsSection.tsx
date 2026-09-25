import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const ResearchProjectsSection: React.FC = () => {
  // Select real, verified featured technical projects (Aither is strictly excluded)
  const featuredProjects = projects
    .filter((p) => p.featured || p.homepage)
    .slice(0, 3);

  return (
    <section className="py-20 md:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Sticky Editorial Composition on Desktop / Natural Flow on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Narrative Area (~40%) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
                    03. Projects
                  </span>
                  <span aria-hidden="true" className="w-6 h-px bg-[#3157D5]/40" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                  Things I tried to understand.
                </h2>
                
                <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
                  Selected technical investigations across power grid simulation, physical CAD modeling, and multi-agent AI workflows.
                </p>
              </div>

              {/* Quiet Methodological Note */}
              <div className="p-4 rounded-xl bg-[#EBE8DF]/50 border border-hairline space-y-2">
                <div className="text-xs font-mono uppercase text-[#3157D5] font-medium">
                  Technical Artifacts
                </div>
                <p className="text-xs text-[#697078] leading-relaxed">
                  Each project focuses on a real physical question or operational constraint, documenting the design choices and empirical observations.
                </p>
              </div>

              {/* CTA to Discovery */}
              <div className="pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shadow-xs group"
                >
                  <span>Explore all projects</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Technical connector journey motif */}
              <div className="pt-4 hidden lg:block">
                <JourneyLine variant="projects" />
              </div>

            </div>
          </div>

          {/* Right Column: Featured Projects Progression (~60%) */}
          <div className="lg:col-span-7 space-y-12">
            {featuredProjects.map((project, index) => {
              const placeholderType =
                project.slug === 'air-purifier'
                  ? 'cad'
                  : project.slug === 'load-flow-analysis'
                  ? 'grid'
                  : 'work';

              const mediaLabel =
                project.slug === 'air-purifier'
                  ? '[ AIR PURIFIER / FEATURED PROJECT MEDIA ]'
                  : `[ ${project.title.toUpperCase()} ]`;

              return (
                <article
                  key={project.slug}
                  className="group rounded-2xl border border-hairline bg-[#F3F1EB] p-6 sm:p-8 hover:border-[#3157D5]/40 transition-colors shadow-xs"
                >
                  {/* Real Project Representative Artifact Slot */}
                  <div className="mb-6">
                    <MediaPlaceholder
                      type={placeholderType}
                      label={mediaLabel}
                      sublabel={project.subtitle}
                      aspectRatio="16:9"
                    />
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#697078] mb-3">
                    <span className="font-mono text-[#3157D5] font-medium">
                      0{index + 1}.
                    </span>
                    <span className="font-medium text-[#15181D]">
                      {project.categories.join(' · ')}
                    </span>
                    {project.status && (
                      <>
                        <span aria-hidden="true" className="text-[#697078]/40">·</span>
                        <span className="font-mono text-[#718878]">{project.status}</span>
                      </>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#15181D] tracking-tight group-hover:text-[#3157D5] transition-colors">
                    <Link to={`/projects/${project.slug}`} className="flex items-start justify-between gap-3">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#697078] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </h3>

                  {/* Summary / Problem Explored */}
                  <p className="mt-3 text-sm text-[#15181D]/80 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Verified Tool Tags */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-hairline flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#697078]">
                      <span className="font-mono uppercase text-[#15181D]/70 text-[11px]">Tools:</span>
                      {project.tools.map((tool, tIdx) => (
                        <span key={tool}>
                          {tool}
                          {tIdx < project.tools!.length - 1 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link */}
                  <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-[#3157D5] hover:text-[#15181D] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <span className="text-[11px] font-mono text-[#697078]">
                      Case Study
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
