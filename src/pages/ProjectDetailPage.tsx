import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { projects } from '../data/projects';
import { professionalExperiences } from '../data/professional';
import { journeyExperiences } from '../data/journey';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif text-[#15181D]">Project Not Found</h1>
        <p className="mt-3 text-sm text-[#697078]">
          The project case study you requested does not exist or has been moved.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Projects</span>
        </Link>
      </div>
    );
  }

  // Cross-linked items
  const relatedExps = project.relatedExperience
    ? professionalExperiences.filter((e) => project.relatedExperience?.includes(e.slug))
    : [];

  const relatedJourneys = project.relatedJourney
    ? journeyExperiences.filter((j) => project.relatedJourney?.includes(j.slug))
    : [];

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
    <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#697078] hover:text-[#3157D5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Project Hero Header */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#697078]">
          <span className="text-[#3157D5] font-semibold uppercase">
            {project.categories.join(' · ')}
          </span>
          {project.status && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-[#718878]">{project.status}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight leading-[1.12]">
          {project.title}
        </h1>

        {project.subtitle && (
          <p className="text-base sm:text-lg text-[#697078] font-sans">
            {project.subtitle}
          </p>
        )}

        {project.tools && project.tools.length > 0 && (
          <div className="pt-2 text-xs font-mono text-[#15181D]">
            <span className="uppercase text-[#697078]">Tools & Methods:</span> {project.tools.join(' · ')}
          </div>
        )}
      </header>

      {/* Hero Media Artifact */}
      <div className="mb-14">
        <MediaPlaceholder
          type={placeholderType}
          label={project.title}
          sublabel={project.subtitle}
          aspectRatio="16:9"
        />
      </div>

      {/* Technical Narrative Sections */}
      <div className="space-y-12 text-[#15181D]">
        
        {/* Context & Problem */}
        <section className="space-y-4 pt-6 border-t border-hairline">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
            01. Background & Context
          </h2>
          <h3 className="text-2xl font-serif tracking-tight">The Problem</h3>
          {project.context && (
            <p className="text-sm sm:text-base text-[#697078] leading-relaxed italic">
              {project.context}
            </p>
          )}
          {project.problem && (
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {project.problem}
            </p>
          )}
          {project.objective && (
            <div className="p-4 rounded-lg bg-[#EBE8DF]/50 border border-hairline mt-3">
              <span className="text-xs font-mono uppercase text-[#3157D5] block mb-1">
                Objective:
              </span>
              <p className="text-xs sm:text-sm text-[#15181D]/90 leading-relaxed">
                {project.objective}
              </p>
            </div>
          )}
        </section>

        {/* Constraints */}
        {project.constraints && project.constraints.length > 0 && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              02. Considerations
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Design Constraints</h3>
            <ul className="space-y-2 text-sm text-[#15181D]/80">
              {project.constraints.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] mt-2 shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Investigation & Approach */}
        {(project.investigation || project.approach) && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              03. Methodology
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Investigation & Approach</h3>
            {project.investigation && (
              <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
                {project.investigation}
              </p>
            )}
            {project.approach && (
              <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
                {project.approach}
              </p>
            )}
          </section>
        )}

        {/* Important Decisions */}
        {project.importantDecisions && project.importantDecisions.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              04. Technical Decisions
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Key Trade-Offs</h3>
            <div className="space-y-3">
              {project.importantDecisions.map((dec, dIdx) => (
                <div key={dIdx} className="p-4 rounded-lg bg-white border border-hairline shadow-xs">
                  <div className="text-xs font-mono text-[#3157D5] mb-1">
                    Decision 0{dIdx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#15181D]/85 leading-relaxed">
                    {dec}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What Was Built & Evidence */}
        <section className="space-y-4 pt-6 border-t border-hairline">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#718878]">
            05. Deliverables
          </h2>
          <h3 className="text-2xl font-serif tracking-tight">What Was Developed</h3>
          {project.whatBuilt && (
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {project.whatBuilt}
            </p>
          )}

          {project.evidence && project.evidence.length > 0 && (
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase text-[#697078]">
                Verification Records:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#15181D]/80">
                {project.evidence.map((ev, eIdx) => (
                  <li key={eIdx} className="flex items-start gap-2.5 p-3 rounded bg-[#EBE8DF]/40 border border-hairline">
                    <CheckCircle2 className="w-4 h-4 text-[#718878] shrink-0 mt-0.5" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Results & Limitations */}
        <section className="space-y-4 pt-6 border-t border-hairline">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
            06. Results & Observations
          </h2>
          <h3 className="text-2xl font-serif tracking-tight">Outcomes & Limitations</h3>
          {project.results && (
            <div className="p-4 rounded-lg bg-[#F3F1EB] border border-hairline">
              <span className="text-xs font-mono uppercase text-[#718878] block mb-1">
                Findings:
              </span>
              <p className="text-sm text-[#15181D] leading-relaxed font-medium">
                {project.results}
              </p>
            </div>
          )}

          {project.limitations && (
            <div className="p-4 rounded-lg bg-[#EBE8DF]/60 border border-hairline space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#C98259]">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Known Limitations</span>
              </div>
              <p className="text-xs sm:text-sm text-[#697078] leading-relaxed">
                {project.limitations}
              </p>
            </div>
          )}
        </section>

        {/* Learnings */}
        {(project.learnings || project.whatWouldDoDifferently) && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              07. Learnings
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Retrospective Reflections</h3>
            {project.learnings && (
              <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
                {project.learnings}
              </p>
            )}
            {project.whatWouldDoDifferently && (
              <div className="pt-2 text-xs sm:text-sm text-[#697078] leading-relaxed">
                <span className="font-semibold text-[#15181D]">Future directions: </span>
                {project.whatWouldDoDifferently}
              </div>
            )}
          </section>
        )}

        {/* Cross-Linking Section */}
        {(relatedExps.length > 0 || relatedJourneys.length > 0) && (
          <section className="pt-10 border-t border-hairline space-y-4">
            <div className="text-xs font-mono uppercase text-[#3157D5] font-semibold">
              Connected Context
            </div>
            <div className="divide-y divide-hairline border-y border-hairline">
              {relatedExps.map((e) => (
                <Link
                  key={e.slug}
                  to={`/experience/${e.slug}`}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group block hover:bg-[#EAE6DD]/30 px-2 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#3157D5]">
                      Work Experience · {e.organization}
                    </div>
                    <h4 className="text-base font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                      {e.role}
                    </h4>
                    <p className="text-xs text-[#697078] max-w-xl line-clamp-1">
                      {e.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] shrink-0">
                    <span>Inspect Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}

              {relatedJourneys.map((j) => (
                <Link
                  key={j.slug}
                  to={`/journey/${j.slug}`}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group block hover:bg-[#EAE6DD]/30 px-2 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#C98259]">
                      Journey Record · {j.organization || j.title}
                    </div>
                    <h4 className="text-base font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                      {j.title}
                    </h4>
                    <p className="text-xs text-[#697078] max-w-xl line-clamp-1">
                      {j.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] shrink-0">
                    <span>Read Record</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

    </article>
  );
};
