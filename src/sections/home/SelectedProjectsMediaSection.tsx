import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const SelectedProjectsMediaSection: React.FC = () => {
  const secondaryProjects = [
    {
      slug: 'air-purifier',
      title: 'Air Purifier Engineering & CAD Study',
      category: 'Mechanical Modeling · Clean-Air Tech',
      sentence: '3D enclosure modeling and airflow channel design developed for early-stage clean-air filtration hardware.',
      placeholderType: 'cad' as const,
      placeholderLabel: '3D Enclosure CAD Modeling & Component Assembly',
      tools: 'SolidWorks · Flow Simulation',
    },
    {
      slug: 'kicad-schematic-pcb',
      title: 'KiCad Schematic Capture & PCB Layout',
      category: 'Circuit Design · EDA Hardware',
      sentence: 'Schematic capture and two-layer printed circuit board routing exercises evaluating trace clearance and component layout.',
      placeholderType: 'circuit' as const,
      placeholderLabel: 'Two-Layer PCB Layout & Gerber Fabrication Output',
      tools: 'KiCad EDA · Circuit Simulation',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-hairline bg-[#F3F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              04. Selected Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
              Hardware & Systems Research
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors"
          >
            <span>View complete project catalogue</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2-Project Media-First Grid (Artifact first, then title, then context) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {secondaryProjects.map((p) => (
            <article key={p.slug} className="space-y-5 group">
              
              {/* 1. Large Artifact Frame */}
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type={p.placeholderType}
                  aspectRatio="16:10"
                  label={p.placeholderLabel}
                  slotLabel="[ PROJECT ARTIFACT ]"
                  sublabel={`${p.title} · Design Artifact`}
                  className="w-full"
                />
              </div>

              {/* 2. Metadata & Title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#697078]">
                  <span className="text-[#3157D5] font-semibold uppercase">{p.category}</span>
                  <span>{p.tools}</span>
                </div>

                <h3 className="text-2xl font-serif text-[#15181D] group-hover:text-[#3157D5] transition-colors">
                  <Link to={`/projects/${p.slug}`}>
                    {p.title}
                  </Link>
                </h3>

                {/* 3. One Short Context Sentence */}
                <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans">
                  {p.sentence}
                </p>
              </div>

              {/* 4. Single CTA */}
              <div className="pt-2">
                <Link
                  to={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] group-hover:text-[#3157D5] transition-colors"
                >
                  <span>View project details & artifacts</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
