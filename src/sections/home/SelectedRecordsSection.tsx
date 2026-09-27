import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, Award } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

interface DirectoryBlock {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  cursor: string;
  delay: number;
}

const DIRECTORY_BLOCKS: DirectoryBlock[] = [
  {
    id: 'roles',
    number: '01',
    category: 'POSITIONS',
    title: 'ROLES',
    description: 'Long-term professional & organizational positions',
    href: '/roles',
    cursor: 'ROLES',
    delay: 0.1,
  },
  {
    id: 'experiences',
    number: '02',
    category: 'FIELDWORK',
    title: 'EXPERIENCES',
    description: 'Committees, programs, volunteering & international exposure',
    href: '/experiences',
    cursor: 'EXPERIENCES',
    delay: 0.24,
  },
  {
    id: 'projects',
    number: '03',
    category: 'ARTIFACTS',
    title: 'PROJECTS',
    description: 'Things I built, analyzed, researched or designed',
    href: '/projects',
    cursor: 'PROJECTS',
    delay: 0.38,
  },
  {
    id: 'about',
    number: '04',
    category: 'TRAJECTORY',
    title: 'ABOUT',
    description: 'Who I am, my background & current interests',
    href: '/about',
    cursor: 'ABOUT',
    delay: 0.52,
  },
];

export const SelectedRecordsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const aitherRef = useRef<HTMLElement>(null);
  const iflRef = useRef<HTMLElement>(null);

  // Scroll parallax for Aither
  const { scrollYProgress: aitherProgress } = useScroll({
    target: aitherRef,
    offset: ['start end', 'end start'],
  });
  const aitherMediaY = useTransform(
    aitherProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-20, 20]
  );
  const aitherTextY = useTransform(
    aitherProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [15, -15]
  );

  // Scroll parallax for International Future Leaders
  const { scrollYProgress: iflProgress } = useScroll({
    target: iflRef,
    offset: ['start end', 'end start'],
  });
  const iflPhoto1Y = useTransform(
    iflProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-15, 15]
  );
  const iflPhoto2Y = useTransform(
    iflProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [20, -20]
  );

  return (
    <section id="selected-records" className="w-full">
      
      {/* ============================================================== */}
      {/* 2x2 ASYMMETRIC OPEN EDITORIAL DESTINATION GATEWAY              */}
      {/* ============================================================== */}
      <div className="py-14 sm:py-20 md:py-24 border-b border-hairline bg-[#F3F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
          
          {/* Section Header Topline */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-hairline/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                  04. Selected Records
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight">
                Selected work & experience.
              </h2>
            </div>
            <p className="text-xs font-mono text-[#697078] max-w-sm sm:text-right">
              Direct exploration gateway across verified positions, programs, technical builds & personal trajectory.
            </p>
          </div>

          {/* 2x2 Asymmetric Layout:
              LEFT TOP: ROLES          | RIGHT TOP: EXPERIENCES
              LEFT BOTTOM: PROJECTS    | RIGHT BOTTOM: ABOUT
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {DIRECTORY_BLOCKS.map((item) => (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.55,
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full"
              >
                <Link
                  to={item.href}
                  data-cursor={item.cursor}
                  className="group relative flex flex-col justify-between p-6 sm:p-8 md:p-10 border border-hairline bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] transition-all duration-300 min-h-[170px] sm:min-h-[200px] overflow-hidden"
                >
                  {/* Subtle top indicator line that extends on hover */}
                  <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#3157D5] group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Top: Category Annotation & Directional Cue */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#697078] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#3157D5] font-semibold">{item.number}</span>
                      <span className="text-[#697078]/40">/</span>
                      <span className="uppercase tracking-widest text-[10px] sm:text-[11px] font-medium">
                        {item.category}
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-hairline/80 flex items-center justify-center text-[#697078] group-hover:text-white group-hover:bg-[#3157D5] group-hover:border-[#3157D5] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Center & Bottom: Large Title (shifts 6–10px on hover) & 1-line Description */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight leading-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-[#15181D]/75 group-hover:text-[#15181D] transition-all duration-300 opacity-75 group-hover:opacity-100">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* SECTION-TO-NEXT TRANSITION CUE:
              Appears only AFTER all four items have finished their entrance animation (delay: 1.1s).
              Does NOT auto-scroll. User remains in control.
          */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#697078] border-t border-hairline/80"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
              <span className="uppercase tracking-wider text-[11px] text-[#15181D] font-medium">
                Featured Case Stories
              </span>
              <span className="text-[#697078]/60">· Detailed Narrative Records</span>
            </div>

            <div className="flex items-center gap-2 text-[#3157D5]">
              <span>Scroll down to explore Aither & IFL</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* 01. AITHER (Role / Professional Experience)                     */}
      {/* ============================================================== */}
      <article
        ref={aitherRef}
        className="py-14 sm:py-20 md:py-24 border-b border-hairline bg-[#FAF7F2] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          
          {/* Metadata Topline */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 sm:pb-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#C98259]">01 / ROLE</span>
              <span className="text-xs font-mono text-[#697078]">· Professional Experience</span>
            </div>
            <div className="text-xs font-mono text-[#697078]">
              Aug 2025 — Jan 2026
            </div>
          </div>

          {/* Composition: Mobile stacks media first, desktop 60% media / 40% text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
            
            {/* Wide Media Frame (~7 cols, 60%) */}
            <motion.div
              style={{ y: aitherMediaY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, clipPath: 'inset(8% 0% 8% 0%)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-2 will-change-transform"
            >
              <Link to="/roles/aither" data-cursor="VIEW" className="block group">
                <div className="border border-hairline bg-[#EBE8DF] overflow-hidden shadow-xs">
                  <MediaPlaceholder
                    type="experience"
                    aspectRatio="16:9"
                    label="Aither Clean-Air Commercial Proposal & Strategy"
                    slotLabel="[ AITHER PHOTO / DOCUMENTATION ]"
                    sublabel="Market evaluation, positioning dossiers, and venture partnership outlines."
                    className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
              </Link>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#697078] block">
                Documentation: Partnership deck, external stakeholder communication, and clean-air positioning
              </span>
            </motion.div>

            {/* Organization, Role & 1 Concise Contribution Line (~5 cols, 40%) */}
            <motion.div
              style={{ y: aitherTextY }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-4 sm:space-y-5 will-change-transform"
            >
              <div className="space-y-1 sm:space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#C98259] font-semibold sm:hidden">
                  Role Record
                </div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#15181D] tracking-tight leading-none">
                  AITHER
                </h3>
                <p className="text-xs sm:text-sm font-mono uppercase text-[#C98259] font-semibold tracking-wider">
                  Project & Partnership Development
                </p>
                <div className="text-xs font-mono text-[#697078]">
                  Early-Stage Clean-Air Technology Venture · Aug 2025 — Jan 2026
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#15181D]/80 font-sans leading-relaxed">
                Formulated market research, partnership proposals, external stakeholder communication, and product positioning for an early-stage clean-air venture.
              </p>

              <div className="pt-1">
                <Link
                  to="/roles/aither"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#C98259] transition-colors min-h-[44px]"
                >
                  <span>View Role →</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </article>

      {/* ============================================================== */}
      {/* 02. INTERNATIONAL FUTURE LEADERS (Experience)                  */}
      {/* ============================================================== */}
      <article
        ref={iflRef}
        className="py-14 sm:py-20 md:py-24 border-b border-hairline bg-[#15181D] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          
          {/* Metadata Topline */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 sm:pb-6 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#7696E8]">02 / EXPERIENCE</span>
              <span className="text-xs font-mono text-[#F3F1EB]/60">· International Delegation</span>
            </div>
            <div className="text-xs font-mono text-[#F3F1EB]/60">
              Singapore & Malaysia · 2024
            </div>
          </div>

          {/* Photographic Composition: Title + Dual Photos + Concise Evidence */}
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
              <div className="lg:col-span-8 space-y-1.5 sm:space-y-2">
                <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
                  INTERNATIONAL<br />FUTURE LEADERS
                </h3>
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#7696E8] font-semibold">
                  Student Delegate · Singapore & Malaysia · 2024
                </p>
              </div>

              {/* Recognition Annotation */}
              <div className="lg:col-span-4 lg:text-right">
                <motion.div
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#7696E8] bg-white/10 px-3.5 py-2"
                >
                  <Award className="w-4 h-4 text-[#7696E8]" />
                  <span>1st Best Presentation & 2nd Best Paper</span>
                </motion.div>
              </div>
            </div>

            {/* Photographic Media Frames with Dual Parallax */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
              {/* Primary Photo Frame */}
              <motion.div
                style={{ y: iflPhoto1Y }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6 }}
                className="sm:col-span-7 space-y-1.5 will-change-transform"
              >
                <Link to="/experiences/international-future-leaders" data-cursor="VIEW" className="block group">
                  <div className="border border-white/20 bg-[#22262E] overflow-hidden">
                    <MediaPlaceholder
                      type="delegation"
                      aspectRatio="16:10"
                      label="NUS Presentation Session"
                      slotLabel="[ IFL PHOTO 01 ]"
                      sublabel="Environmental technology research defense before international evaluation panels."
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </Link>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#F3F1EB]/60 block">
                  Photo 01: Presentation session at National University of Singapore (NUS)
                </span>
              </motion.div>

              {/* Secondary Photo Frame */}
              <motion.div
                style={{ y: iflPhoto2Y }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="hidden sm:block sm:col-span-5 space-y-1.5 will-change-transform"
              >
                <Link to="/experiences/international-future-leaders" data-cursor="VIEW" className="block group">
                  <div className="border border-white/20 bg-[#22262E] overflow-hidden">
                    <MediaPlaceholder
                      type="photo"
                      aspectRatio="16:10"
                      label="IIUM Bilateral Exchange"
                      slotLabel="[ IFL PHOTO 02 ]"
                      sublabel="Delegation workshop and cross-campus academic exchange."
                      className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </Link>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#F3F1EB]/60 block">
                  Photo 02: Academic symposium at IIUM Malaysia
                </span>
              </motion.div>
            </div>

            <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
              <p className="text-sm text-[#F3F1EB]/80 font-sans max-w-xl leading-relaxed">
                Presented environmental technology research before international evaluation panels at NUS and IIUM. Awarded 1st Best Presentation and 2nd Best Research Paper.
              </p>

              <Link
                to="/experiences/international-future-leaders"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-mono uppercase tracking-wider text-[#15181D] bg-[#F3F1EB] hover:bg-[#7696E8] hover:text-white transition-colors shrink-0 min-h-[44px]"
              >
                <span>View Experience →</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </article>

    </section>
  );
};
