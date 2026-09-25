import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { professionalExperiences } from '../data/professional';
import { projects } from '../data/projects';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const ProfessionalExperiencePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const exp = professionalExperiences.find((e) => e.slug === slug) || professionalExperiences[0];

  if (!exp) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif text-[#15181D]">Record Not Found</h1>
        <p className="mt-3 text-sm text-[#697078]">
          The professional experience detail you requested is unavailable.
        </p>
        <Link
          to="/experience"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Work Experience</span>
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/experience"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#697078] hover:text-[#3157D5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Work Experience</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#697078]">
          <span className="text-[#3157D5] font-semibold uppercase">
            Work Experience
          </span>
          <span aria-hidden="true">·</span>
          <span>{exp.period}</span>
          {exp.location && (
            <>
              <span aria-hidden="true">·</span>
              <span>{exp.location}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight leading-[1.1]">
          {exp.organization}
        </h1>

        <div className="text-base sm:text-lg font-medium text-[#3157D5]">
          {exp.role}
        </div>

        <p className="text-base sm:text-lg text-[#15181D]/80 leading-relaxed pt-1">
          {exp.summary}
        </p>
      </header>

      {/* Hero Media Artifact */}
      <div className="mb-14">
        <MediaPlaceholder
          type="experience"
          label={`${exp.organization} — Venture Architecture`}
          sublabel="Market research, strategic partnership proposals, and clean-air technology positioning"
          aspectRatio="16:9"
        />
      </div>

      {/* Narrative Editorial Sections */}
      <div className="space-y-12 text-[#15181D]">
        
        {/* Organization Context */}
        {exp.orgContext && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              01. The Venture
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Organization Context</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.orgContext}
            </p>
          </section>
        )}

        {/* Scope of Responsibility */}
        {exp.scopeOfResponsibility && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              02. Role Definition
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Scope of Responsibility</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.scopeOfResponsibility}
            </p>

            <div className="mt-4 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#697078] mb-2">
                Operational Areas
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#15181D] font-medium">
                {exp.areas.map((area, aIdx) => (
                  <React.Fragment key={area}>
                    <span>{area}</span>
                    {aIdx < exp.areas.length - 1 && (
                      <span aria-hidden="true" className="text-[#697078]/40">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What I Worked On */}
        {exp.whatWorkedOn && exp.whatWorkedOn.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              03. Execution Focus
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">What I Worked On</h3>
            <div className="space-y-3">
              {exp.whatWorkedOn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-[#EBE8DF]/40 border border-hairline">
                  <span className="font-mono text-xs text-[#3157D5] font-semibold mt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-sm text-[#15181D]/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problems Encountered & How Contributed */}
        {(exp.problemsEncountered || exp.howContributed) && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#C98259]">
              04. Challenges & Contributions
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Problems Encountered & Contributions</h3>
            
            {exp.problemsEncountered && (
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase text-[#697078]">Friction Points:</div>
                <ul className="space-y-2 text-sm text-[#15181D]/80">
                  {exp.problemsEncountered.map((prob, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C98259] mt-2 shrink-0" />
                      <span className="leading-relaxed">{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.howContributed && (
              <div className="p-4 rounded-lg bg-white border border-hairline mt-3">
                <span className="text-xs font-mono uppercase text-[#3157D5] block mb-1">
                  Individual Contribution:
                </span>
                <p className="text-sm text-[#15181D]/85 leading-relaxed">
                  {exp.howContributed}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Stakeholders & Collaboration */}
        {exp.stakeholdersCollaboration && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              05. Stakeholder Communication
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Cross-Disciplinary Collaboration</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.stakeholdersCollaboration}
            </p>
          </section>
        )}

        {/* Selected Work Produced & Cross-Linking */}
        {exp.selectedWork && exp.selectedWork.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#718878]">
              06. Connected Technical Work
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Selected Projects</h3>
            <div className="space-y-3">
              {exp.selectedWork.map((work, wIdx) => (
                <div
                  key={wIdx}
                  className="p-5 rounded-xl border border-hairline bg-white shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <h4 className="text-base font-serif text-[#15181D] font-medium">
                      {work.title}
                    </h4>
                    <p className="text-xs text-[#697078] max-w-lg leading-relaxed">
                      {work.description}
                    </p>
                  </div>

                  {work.slug && (
                    <Link
                      to={`/projects/${work.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shrink-0"
                    >
                      <span>View Technical Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes */}
        {exp.outcomes && exp.outcomes.length > 0 && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#718878]">
              07. Progress & Results
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Venture Contributions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exp.outcomes.map((out, oIdx) => (
                <div key={oIdx} className="p-4 rounded-lg bg-[#EBE8DF]/40 border border-hairline flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#718878] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#15181D] leading-snug">{out}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Learnings */}
        {exp.learnings && exp.learnings.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              08. Professional Learnings
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Key Takeaways</h3>
            <ul className="space-y-2 text-sm text-[#15181D]/80">
              {exp.learnings.map((lrn, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] mt-2 shrink-0" />
                  <span className="leading-relaxed">{lrn}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

      </div>

    </article>
  );
};
