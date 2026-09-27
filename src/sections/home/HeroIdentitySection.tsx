import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const HeroIdentitySection: React.FC = () => {
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
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 md:py-20 border-b border-hairline bg-[#F3F1EB]">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6">
        
        {/* Asymmetrical 2-Column Split Composition (62% text / 38% portrait) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left Column: Identity & Breadth (~62%) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Identity Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] shrink-0" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#697078]">
                Institut Teknologi Sepuluh Nopember (ITS)
              </span>
            </motion.div>

            {/* Factual Name & Primary Title */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#15181D] tracking-tight leading-[1.08]">
                Razin Abdillah
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#3157D5]">
                Electrical Engineering student at ITS.
              </p>
            </motion.div>

            {/* Concise Supporting Statement (2-3 lines max) */}
            <motion.div variants={itemVariants} className="max-w-xl">
              <p className="text-base sm:text-lg text-[#15181D]/80 leading-relaxed font-sans">
                My experience spans technical projects, data and event operations, professional partnership work, and international presentation.
              </p>
            </motion.div>

            {/* Action Decisions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#selected-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium bg-[#15181D] text-white hover:bg-[#3157D5] rounded-md transition-colors shadow-xs"
              >
                <span>Explore my work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/journey"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-[#15181D] border border-hairline hover:border-[#15181D] rounded-md transition-colors bg-white/60"
              >
                <span>View full journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Minimal Location Context */}
            <motion.div variants={itemVariants} className="pt-4 border-t border-hairline flex items-center gap-2 text-xs text-[#697078] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#3157D5]" />
              <span>Surabaya, Indonesia</span>
            </motion.div>

          </div>

          {/* Right Column: Visual Portrait (~38%) */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="relative overflow-hidden border border-hairline bg-[#EBE8E0]">
                <MediaPlaceholder
                  type="portrait"
                  aspectRatio="4:5"
                  label="Razin Abdillah"
                  sublabel="Electrical Engineering Undergraduate at Institut Teknologi Sepuluh Nopember (ITS)"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
