import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const SelectedExperiencesSection: React.FC = () => {
  const experiences = [
    {
      slug: 'international-future-leaders',
      title: 'INTERNATIONAL FUTURE LEADERS',
      role: 'Student Delegate · Singapore & Malaysia · 2024',
      annotation: 'Presented environmental technology research before international evaluation panels at NUS and IIUM. Awarded 1st Best Presentation and 2nd Best Research Paper.',
      placeholderType: 'delegation' as const,
      placeholderLabel: 'IFL Delegation — NUS & IIUM Academic Symposium',
      placeholderSublabel: 'Research paper defense and international student delegation in Singapore & Malaysia.',
      aspectRatio: '16:10' as const,
      route: '/journey/international-future-leaders',
    },
    {
      slug: 'asfera',
      title: 'ASFERA FESTIVAL',
      role: 'Administrative & Data Management Lead · 2023–2024',
      annotation: 'Built centralized participant registries and automated verification systems managing 2,800+ participants across 40 competition branches with zero lost records.',
      placeholderType: 'systems' as const,
      placeholderLabel: 'ASFERA — Centralized Registration & Festival Operations',
      placeholderSublabel: 'Regional student festival database managing 2,800+ participants.',
      aspectRatio: '16:10' as const,
      route: '/journey/asfera',
    },
    {
      slug: 'pkkmb-its',
      title: 'PKKMB ITS ORIENTATION',
      role: 'Staff Data Center · Campus Operations · 2025–2026',
      annotation: 'Formulated live registration recaps, task verification formulas, and synchronized real-time operational rosters across field divisions.',
      placeholderType: 'activity' as const,
      placeholderLabel: 'PKKMB ITS — Data Center Operations & Field Rosters',
      placeholderSublabel: 'Live operational data coordination across campus orientation divisions.',
      aspectRatio: '16:10' as const,
      route: '/journey/pkkmb-its',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-hairline bg-[#EAE6DD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              06. Selected Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
              Documentary Evidence & Formative Events
            </h2>
          </div>

          <Link
            to="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors"
          >
            <span>View complete timeline archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Documentary Photography-Led Feed (Large image presence + crisp annotation) */}
        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <article
              key={exp.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Image Frame (7 cols) - Alternating layout for rhythm */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                  <MediaPlaceholder
                    type={exp.placeholderType}
                    aspectRatio={exp.aspectRatio}
                    label={exp.placeholderLabel}
                    slotLabel="[ EXPERIENCE PHOTO ]"
                    sublabel={exp.placeholderSublabel}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Textual Annotation (5 cols) */}
              <div className={`lg:col-span-5 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="text-xs font-mono text-[#3157D5] uppercase tracking-wider font-semibold">
                  0{idx + 1}. {exp.role}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#15181D] tracking-tight leading-snug">
                  <Link to={exp.route} className="hover:text-[#3157D5] transition-colors">
                    {exp.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#15181D]/80 leading-relaxed font-sans max-w-md">
                  {exp.annotation}
                </p>

                <div className="pt-2">
                  <Link
                    to={exp.route}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#15181D] hover:text-[#3157D5] transition-colors font-medium"
                  >
                    <span>Inspect event record</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
