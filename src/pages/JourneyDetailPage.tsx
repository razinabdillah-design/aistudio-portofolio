import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { journeyExperiences } from '../data/journey';
import { projects } from '../data/projects';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const JourneyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // If user navigated to /journey/aither, redirect to /experience/aither
  if (slug === 'aither') {
    return <Navigate to="/experience/aither" replace />;
  }

  const exp = journeyExperiences.find((j) => j.slug === slug);

  if (!exp) {
    return (
      <div className="py-24 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-serif text-[#15181D]">Experience Not Found</h1>
        <p className="mt-3 text-sm text-[#697078]">
          The journey record you requested does not exist or has been moved.
        </p>
        <Link
          to="/journey"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Journey</span>
        </Link>
      </div>
    );
  }

  // Related work projects
  const relatedProjects = exp.relatedWork
    ? projects.filter((p) => exp.relatedWork?.includes(p.slug))
    : [];

  return (
    <article className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/journey"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#697078] hover:text-[#3157D5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journey</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#697078]">
          <span className="text-[#3157D5] font-semibold uppercase">
            {exp.categories.join(' · ')}
          </span>
          <span aria-hidden="true">·</span>
          <span>{exp.period}</span>
          {exp.location && (
            <>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight leading-[1.12]">
          {exp.title}
        </h1>

        <div className="text-sm font-medium text-[#718878]">
          Role: {exp.role} {exp.organization && `· ${exp.organization}`}
        </div>

        <p className="text-base sm:text-lg text-[#15181D]/80 leading-relaxed pt-2">
          {exp.summary}
        </p>
      </header>

      {/* Hero Media Artifact */}
      <div className="mb-14">
        <MediaPlaceholder
          type="journey"
          label={exp.title}
          sublabel={exp.summary}
          aspectRatio="16:9"
        />
      </div>

      {/* Editorial Content Sections */}
      <div className="space-y-12 text-[#15181D]">
        
        {/* What was this? */}
        {exp.whatWasThis && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              01. Context & Environment
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">What was this?</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.whatWasThis}
            </p>
          </section>
        )}

        {/* Why I joined */}
        {exp.whyJoined && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              02. Motivation
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Why I joined</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.whyJoined}
            </p>
          </section>
        )}

        {/* What I actually did */}
        {exp.whatActuallyDid && exp.whatActuallyDid.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
              03. Execution
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">What I actually did</h3>
            <div className="space-y-3">
              {exp.whatActuallyDid.map((item, idx) => (
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

        {/* Challenges */}
        {exp.challenges && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#C98259]">
              04. Challenges
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Challenges Encountered</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.challenges}
            </p>
          </section>
        )}

        {/* Outcome & Evidence */}
        {exp.outcome && (
          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#718878]">
              05. Outcome & Results
            </h2>
            <h3 className="text-2xl font-serif tracking-tight">Results</h3>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed">
              {exp.outcome}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <div className="mt-4 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="p-3.5 rounded-lg bg-white border border-hairline flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#718878] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#15181D] font-medium leading-snug">{hl}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="pt-10 border-t border-hairline space-y-4">
            <div className="text-xs font-mono uppercase text-[#3157D5]">
              Connected Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="p-4 rounded-xl border border-hairline bg-[#EBE8DF]/40 hover:bg-white transition-all group"
                >
                  <div className="text-xs font-mono text-[#697078] mb-1">
                    Technical Project
                  </div>
                  <h4 className="text-base font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors flex items-center justify-between">
                    <span>{p.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </h4>
                  <p className="mt-1 text-xs text-[#697078] line-clamp-2">
                    {p.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

    </article>
  );
};
