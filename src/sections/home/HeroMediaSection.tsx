import React, { useRef } from 'react';
import { ArrowDown, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const HeroMediaSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-linked transforms for layered depth
  const razinX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -40]
  );
  const abdillahX = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 40]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -30]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1, 1.06]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between py-6 sm:py-10 md:py-14 border-b border-hairline bg-[#F3F1EB] overflow-hidden"
    >
      {/* 1. Large Slide Background Media Layer */}
      <motion.div
        style={{ scale: bgScale }}
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      >
        <div className="w-full h-full relative">
          <MediaPlaceholder
            type="portrait"
            aspectRatio="auto"
            label="Razin Abdillah — Full Slide Identity Photo"
            slotLabel="[ HERO / IDENTITY MEDIA ]"
            sublabel="Full slide visual layer. Designed for high-clarity background portrait/activity documentation."
            className="w-full h-full opacity-35 object-cover"
          />
          {/* Subtle gradient scrim ensuring maximum legibility & visual clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F1EB]/95 via-[#F3F1EB]/75 to-[#F3F1EB]/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F1EB]/60 via-transparent to-[#F3F1EB]/90" />
        </div>
      </motion.div>

      {/* 2. Top Bar:
          - Tablet & Laptop (md+): KIRI ATAS ("RAZIN") & KANAN ATAS (Metadata)
          - Mobile (<md): Clean Metadata Bar (RAZIN moved to bottom alongside ABDILLAH)
      */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6">
        
        {/* DESKTOP & TABLET TOP BAR (md and above) */}
        <div className="hidden md:flex items-start justify-between gap-4 pb-3 sm:pb-4 border-b border-hairline/80">
          {/* KIRI ATAS: "RAZIN" */}
          <div className="text-left overflow-hidden">
            <motion.h1
              style={{ x: razinX }}
              initial={shouldReduceMotion ? {} : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              className="text-[clamp(4.5rem,11.5vw,11rem)] font-serif text-[#15181D] tracking-tighter leading-none select-none"
            >
              RAZIN
            </motion.h1>
          </div>

          {/* Kanan Atas Metadata */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-right text-xs font-mono uppercase tracking-widest text-[#697078] space-y-0.5 pt-3 shrink-0"
          >
            <div className="text-[#15181D] font-semibold">Portfolio · 2026</div>
            <div className="text-[#3157D5]">ITS Surabaya</div>
          </motion.div>
        </div>

        {/* MOBILE TOP BAR (< md) */}
        <div className="md:hidden flex items-center justify-between pb-3 border-b border-hairline/80 text-[11px] font-mono uppercase tracking-widest">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#15181D] font-semibold"
          >
            Razin Abdillah · Portfolio
          </motion.div>
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#3157D5] font-medium"
          >
            ITS Surabaya
          </motion.div>
        </div>

      </div>

      {/* 3. Middle Section: Penjelasan & Context */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 my-auto py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content Block */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6 max-w-xl"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] animate-pulse" />
                <span>Institut Teknologi Sepuluh Nopember (ITS)</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#15181D] tracking-tight">
                Electrical Engineering Student
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#15181D]/85 leading-relaxed font-sans">
              Selected projects, roles, and experiences across engineering, organizations, and professional environments.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#activity-reel"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider bg-[#15181D] text-white hover:bg-[#3157D5] transition-colors min-h-[44px]"
              >
                <span>Explore artifacts</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#697078]">
                <MapPin className="w-3.5 h-3.5 text-[#3157D5]" />
                <span>Surabaya, Indonesia</span>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

        </div>
      </div>

      {/* 4. Bottom Row:
          - Tablet & Laptop (md+): KIRI BAWAH (Metadata) & KANAN BAWAH ("ABDILLAH")
          - Mobile (<md): RAZIN & ABDILLAH DUA-DUANYA DI BAWAH SETARA (LEVEL ON SAME BASELINE)
      */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6">
        
        {/* DESKTOP & TABLET BOTTOM ROW (md and above) */}
        <div className="hidden md:flex items-end justify-between gap-4 pt-4 border-t border-hairline/80">
          {/* Bottom Left Note */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs font-mono text-[#697078] max-w-xs pb-2"
          >
            <span className="text-[#3157D5] font-semibold block uppercase tracking-wider text-[11px] mb-0.5">
              Identity Layer
            </span>
            <span>Technical Modeling · Operations · Partnerships</span>
          </motion.div>

          {/* KANAN BAWAH: "ABDILLAH" */}
          <div className="text-right overflow-hidden">
            <motion.h1
              style={{ x: abdillahX }}
              initial={shouldReduceMotion ? {} : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[clamp(4.5rem,11.5vw,11rem)] font-serif text-[#15181D] tracking-tighter leading-none select-none"
            >
              ABDILLAH
            </motion.h1>
          </div>
        </div>

        {/* MOBILE BOTTOM ROW (< md):
            "RAZIN" dan "ABDILLAH" DI BAWAH SETARA (LEVEL BERSAMA DI BARIS YANG SAMA)
        */}
        <div className="md:hidden pt-3 border-t border-hairline/80 space-y-1">
          {/* Subtle identity tag */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#697078] uppercase tracking-wider">
            <span>Identity Layer</span>
            <span>Surabaya · 2026</span>
          </div>

          {/* RAZIN & ABDILLAH setara berdampingan di bawah */}
          <div className="flex items-baseline justify-between gap-2 overflow-hidden">
            <motion.h1
              style={{ x: razinX }}
              initial={shouldReduceMotion ? {} : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-[clamp(2.2rem,9.8vw,4.2rem)] font-serif text-[#15181D] tracking-tighter leading-none select-none"
            >
              RAZIN
            </motion.h1>

            <motion.h1
              style={{ x: abdillahX }}
              initial={shouldReduceMotion ? {} : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="text-[clamp(2.2rem,9.8vw,4.2rem)] font-serif text-[#15181D] tracking-tighter leading-none select-none text-right"
            >
              ABDILLAH
            </motion.h1>
          </div>
        </div>

      </div>

    </section>
  );
};
