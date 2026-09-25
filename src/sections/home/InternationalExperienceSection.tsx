import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { journeyExperiences } from '../../data/journey';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const InternationalExperienceSection: React.FC = () => {
  const ifl = journeyExperiences.find((j) => j.slug === 'international-future-leaders')!;
  const shouldReduceMotion = useReducedMotion();

  const photoVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#C98259]">
              05. International Experience
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#C98259]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
            Taking ideas outside the room.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
            Presenting sustainable technology research before academic evaluation panels, participating in symposium discussions, and visiting university campuses in Singapore and Malaysia.
          </p>
        </div>

        {/* Photography-Led Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Primary Photographic Slots (~7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary International Hero Photo Slot (16:10) */}
            <motion.div
              variants={photoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <MediaPlaceholder
                type="delegation"
                label="[ INTERNATIONAL EXPERIENCE HERO PHOTO ]"
                sublabel="International Future Leaders delegation at National University of Singapore (NUS) & International Islamic University Malaysia (IIUM)"
                aspectRatio="16:10"
                className="shadow-xs"
              />
            </motion.div>

            {/* Supporting 2-Photo Row (4:3 each) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={photoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <MediaPlaceholder
                  type="photo"
                  label="[ INTERNATIONAL PRESENTATION PHOTO ]"
                  sublabel="Delivering sustainable technology paper during the research symposium"
                  aspectRatio="4:3"
                />
              </motion.div>

              <motion.div
                variants={photoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                <MediaPlaceholder
                  type="delegation"
                  label="[ ACADEMIC VISIT / DELEGATION PHOTO ]"
                  sublabel="Campus facility tour and cross-border delegate peer discussions"
                  aspectRatio="4:3"
                />
              </motion.div>
            </div>

          </div>

          {/* Right Column: Editorial & Factual Evidence (~5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 rounded-2xl border border-hairline bg-[#F3F1EB] p-8 sm:p-10 shadow-xs">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between text-xs font-mono text-[#697078]">
                <span className="flex items-center gap-1.5 text-[#C98259] font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  Singapore & Malaysia
                </span>
                <span>{ifl.period}</span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-serif text-[#15181D] tracking-tight">
                  {ifl.title}
                </h3>
                <p className="text-xs font-mono text-[#697078]">
                  Role: {ifl.role} · Student Delegation
                </p>
              </div>

              <p className="text-sm text-[#15181D]/80 leading-relaxed">
                {ifl.summary}
              </p>

              {/* Factual Symposium Outcomes */}
              <div className="pt-4 border-t border-hairline space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697078]">
                  Symposium Outcomes
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-[#15181D]">
                    <Award className="w-4 h-4 text-[#C98259] shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight">
                      1st Best Presentation — Sustainable Technology Track
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#15181D]">
                    <Award className="w-4 h-4 text-[#7696E8] shrink-0 mt-0.5" />
                    <span className="font-medium leading-tight">
                      2nd Best Research Paper Award
                    </span>
                  </div>
                </div>
              </div>

              {/* Concise Activities */}
              <div className="pt-4 border-t border-hairline space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#697078]">
                  Activities & Focus
                </div>
                <ul className="space-y-1.5 text-xs text-[#15181D]/80">
                  {ifl.whatActuallyDid?.slice(0, 3).map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C98259] font-bold">›</span>
                      <span className="leading-snug">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action */}
            <div className="pt-6 border-t border-hairline flex items-center justify-between">
              <Link
                to={`/journey/${ifl.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#C98259] transition-colors shadow-xs group"
              >
                <span>Read the journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projects/air-purifier"
                className="text-xs font-medium text-[#697078] hover:text-[#3157D5] transition-colors"
              >
                Related CAD Study →
              </Link>
            </div>

          </div>

        </div>

        {/* International Route Journey Line */}
        <JourneyLine variant="international" />

      </div>
    </section>
  );
};
