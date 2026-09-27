import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const HeroEditorialSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Very subtle depth separation (2-4% max movement), disabled if reduced motion
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 30]
  );
  const bgAccentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -20]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[94vh] lg:min-h-[98vh] flex flex-col justify-between py-8 md:py-12 border-b border-hairline bg-[#F3F1EB] overflow-hidden select-none"
    >
      {/* Background Graphic Accents / Year Marker (Layer 0) */}
      <motion.div
        style={{ y: bgAccentY }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-between px-6 sm:px-12 opacity-[0.035] overflow-hidden"
      >
        <span className="text-[20vw] font-serif font-bold text-[#15181D] leading-none select-none">
          ITS
        </span>
        <span className="text-[18vw] font-mono font-bold text-[#15181D] leading-none select-none">
          2K26
        </span>
      </motion.div>

      {/* Top Editorial Meta Bar */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#697078] pb-4 border-b border-hairline">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
            <span className="text-[#15181D] font-semibold">Razin Abdillah</span>
            <span className="hidden sm:inline text-[#697078]/60">·</span>
            <span className="hidden sm:inline">Portfolio · 2026</span>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-right"
          >
            <span>Surabaya, Indonesia</span>
          </motion.div>
        </div>
      </div>

      {/* Center Spatial Stage: Layered Typography + Middle Portrait + Foreground Tension */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 my-auto py-6 sm:py-10">
        <div className="relative min-h-[460px] sm:min-h-[540px] md:min-h-[620px] flex flex-col justify-between">
          
          {/* TOP-LEFT: "RAZIN" (Layer 30 - Foreground Typography) */}
          <div className="relative z-30 overflow-hidden">
            <motion.h1
              initial={shouldReduceMotion ? {} : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12.5rem] font-serif text-[#15181D] tracking-tighter leading-[0.88] text-left"
            >
              RAZIN
            </motion.h1>
          </div>

          {/* MIDDLE: Spatial Intentional Portrait Area (Layer 20 - Overlapping Typography) */}
          <motion.div
            style={{ y: portraitY }}
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.18,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] aspect-[4/5] z-20 pointer-events-none"
          >
            <div className="w-full h-full relative border border-hairline bg-[#EBE8DF]/90 backdrop-blur-xs shadow-sm overflow-hidden flex flex-col justify-between p-6">
              
              {/* Subtle architectural grid */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(#15181D 1px, transparent 1px), radial-gradient(#15181D 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />

              {/* Portrait Header */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#697078]">
                <span className="flex items-center gap-1.5 uppercase font-medium text-[#3157D5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                  [ RAZIN PORTRAIT — ADD LATER ]
                </span>
                <span>4:5 Layer</span>
              </div>

              {/* Center Silhouette & Frame */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white/70 border border-hairline flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-serif text-[#15181D]/60">RA</span>
                </div>
                <div className="max-w-[240px] mx-auto">
                  <div className="text-xs font-mono text-[#15181D] font-medium">
                    Editorial Portrait Space
                  </div>
                  <p className="text-[10px] text-[#697078] leading-tight mt-0.5">
                    Reserved for full/mid-body cutout or natural portrait with depth layering.
                  </p>
                </div>
              </div>

              {/* Portrait Footnote */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#697078] pt-2 border-t border-hairline/60">
                <span>ITS Electrical Eng.</span>
                <span>Depth Layer 02</span>
              </div>
            </div>
          </motion.div>

          {/* LOWER-RIGHT: "ABDILLAH" (Layer 30 - Foreground Typography) */}
          <div className="relative z-30 overflow-hidden text-right mt-auto pt-6 sm:pt-10">
            <motion.h1
              initial={shouldReduceMotion ? {} : { y: '110%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.28,
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12.5rem] font-serif text-[#15181D] tracking-tighter leading-[0.88]"
            >
              ABDILLAH
            </motion.h1>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Content & Single Prominent CTA */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="pt-6 border-t border-hairline flex flex-col md:flex-row md:items-end justify-between gap-6">
          
          {/* Identity & 1 Short Sentence (18–25 words max) */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-1.5 max-w-lg"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
              Electrical Engineering Student · Institut Teknologi Sepuluh Nopember
            </p>
            <p className="text-sm sm:text-base text-[#15181D]/80 leading-relaxed font-sans">
              Selected projects, roles, and experiences across engineering, organizations, and professional environments.
            </p>
          </motion.div>

          {/* Single Prominent CTA */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="shrink-0"
          >
            <a
              href="#activity-reel"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#3157D5] transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
