import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionConfig = {
    duration: shouldReduceMotion ? 0 : 0.45,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionConfig,
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-8 pb-12 md:py-16 border-b border-hairline overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 my-auto">
        
        {/* Asymmetrical 2-Column Split Composition (58% text / 42% portrait) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          
          {/* Left Column: Narrative Identity (~58%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* 1. Small Identity Metadata */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#697078]">
                Electrical Engineering · ITS Surabaya
              </span>
            </motion.div>

            {/* 2. Name */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#15181D] tracking-tight leading-[1.08] text-balance">
                Razin Abdillah
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[#697078] leading-snug">
                Engineering, clean technology, and operational structure.
              </p>
            </motion.div>

            {/* 3. Concise Introduction (approx 3-4 lines max, factual, no manifesto) */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#15181D]/80 leading-relaxed max-w-xl text-pretty"
            >
              Electrical Engineering student at Institut Teknologi Sepuluh Nopember (ITS). Focused on technical exploration, clean-air hardware, and operational coordination—turning unstructured problems into reliable, verifiable systems.
            </motion.p>

            {/* 4. Quiet Unboxed Identity Signals */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#697078] pt-1"
            >
              <span className="text-[#15181D] font-medium">Electrical Engineering · ITS</span>
              <span aria-hidden="true" className="text-[#697078]/40">·</span>
              <span>Technology & Research</span>
              <span aria-hidden="true" className="text-[#697078]/40">·</span>
              <span>Professional Experience</span>
              <span aria-hidden="true" className="text-[#697078]/40">·</span>
              <span>International Exposure</span>
              <span aria-hidden="true" className="text-[#697078]/40">·</span>
              <span>Systems & People</span>
            </motion.div>

            {/* 5. Primary and Secondary CTAs */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shadow-xs group"
              >
                <span>Explore the journey</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-[#15181D] bg-[#EBE8DF] border border-hairline rounded-md hover:bg-white transition-colors"
              >
                <span>View projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#697078]" />
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Real 4:5 Portrait Slot (~42%) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 max-w-sm sm:max-w-md mx-auto w-full lg:max-w-none"
          >
            <div className="relative">
              {/* Subtle background technical motif behind portrait (does not compete with person) */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#3157D5]/10 via-transparent to-[#718878]/10 blur-xs pointer-events-none"
              />

              {/* Natural 4:5 Portrait Slot */}
              <MediaPlaceholder
                type="portrait"
                label="[ RAZIN HERO PORTRAIT ]"
                sublabel="Natural editorial portrait of Razin Abdillah. Preserves intended 4:5 aspect ratio."
                aspectRatio="4:5"
                className="shadow-sm"
                priority={true}
              />
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* 6. Subtle Continuous Trajectory Motif at Section Bottom */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-8">
        <JourneyLine variant="hero" />
      </div>
    </section>
  );
};
