import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export interface ActivityReelItem {
  id: string;
  title: string;
  role: string;
  period: string;
  aspectRatio: '4:5' | '4:3' | '16:10' | '1:1';
  type: 'photo' | 'activity' | 'delegation' | 'experience' | 'systems';
  href: string;
  alt: string;
}

export const activityReelItems: ActivityReelItem[] = [
  {
    id: 'ifl',
    title: 'International Future Leaders',
    role: 'Student Delegate',
    period: '2024',
    aspectRatio: '4:5',
    type: 'delegation',
    href: '/experiences/international-future-leaders',
    alt: 'International Future Leaders delegation presentation in Singapore and Malaysia',
  },
  {
    id: 'aither',
    title: 'Aither Clean-Air Tech',
    role: 'Project & Partnership Development',
    period: '2025–2026',
    aspectRatio: '16:10',
    type: 'experience',
    href: '/roles/aither',
    alt: 'Aither early-stage clean-air venture commercial proposals and positioning',
  },
  {
    id: 'pkkmb',
    title: 'PKKMB ITS Camp',
    role: 'Staff Data Center',
    period: '2026',
    aspectRatio: '1:1',
    type: 'systems',
    href: '/experiences/pkkmb-its',
    alt: 'PKKMB ITS Camp data center operations and automated student rosters',
  },
  {
    id: 'jfest',
    title: 'J-Fest 37 Cultural Festival',
    role: 'Head of Fundraise',
    period: '2026',
    aspectRatio: '4:3',
    type: 'activity',
    href: '/experiences/j-fest-its',
    alt: 'J-Fest 37 commercial tenant regulations and merchandise operations',
  },
  {
    id: 'asfera',
    title: 'ASFERA Festival',
    role: 'Administrative & Data Lead',
    period: '2023–2024',
    aspectRatio: '4:5',
    type: 'photo',
    href: '/experiences/asfera',
    alt: 'ASFERA festival centralized registration database managing 2,800+ participants',
  },
  {
    id: 'ieee',
    title: 'IEEE Student Branch ITS',
    role: 'Member Delegate & Member',
    period: '2024–Present',
    aspectRatio: '16:10',
    type: 'activity',
    href: '/experiences/ieee-sb-its',
    alt: 'IEEE Student Branch ITS engineering community activities and seminars',
  },
  {
    id: 'tdc',
    title: 'TDC ITS',
    role: 'AMDA Development Assistant',
    period: '2025–Present',
    aspectRatio: '4:3',
    type: 'systems',
    href: '/experiences/tdc-its',
    alt: 'TDC ITS student technopreneurship community onboarding and development',
  },
  {
    id: 'gg-beraksi',
    title: 'GG Beraksi',
    role: 'Humas & Pembina Kelompok',
    period: '2025–2026',
    aspectRatio: '1:1',
    type: 'activity',
    href: '/experiences/gg-beraksi',
    alt: 'GG Beraksi community service mentoring and environmental education',
  },
];

export const ActivityReelSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollRange, setScrollRange] = useState(0);

  // Measure dynamic horizontal scroll range
  useEffect(() => {
    const calculateRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total distance needed to translate track until the final item rests in full view ("mentok")
        const distance = Math.max(0, trackWidth - viewportWidth + 64);
        setScrollRange(distance);
      }
    };

    calculateRange();
    window.addEventListener('resize', calculateRange);
    return () => window.removeEventListener('resize', calculateRange);
  }, []);

  // Track vertical scroll progress inside the pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Vertical scroll translates the horizontal track from 0 to -scrollRange
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const progressPercent = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  if (shouldReduceMotion) {
    return (
      <section id="activity-reel" className="py-16 border-b border-hairline bg-[#EAE6DD]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
          <h2 className="text-2xl font-serif text-[#15181D]">Documented Environments & Real Activities</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto px-4 sm:px-6 pb-6">
          {activityReelItems.map((act) => (
            <Link key={act.id} to={act.href} className="shrink-0 w-[300px]">
              <MediaPlaceholder type={act.type} aspectRatio={act.aspectRatio} label={act.title} className="w-full" />
              <div className="mt-2 text-xs font-mono font-semibold">{act.title}</div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div
      ref={sectionRef}
      id="activity-reel"
      className="relative h-[250vh] sm:h-[300vh] lg:h-[340vh] bg-[#EAE6DD]/40"
    >
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 md:py-10 border-b border-hairline overflow-hidden select-none">
        
        {/* 1. Header Strip */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4 pb-3 border-b border-hairline/80">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                  02. Activity Reel · Horizontal Stage
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight">
                Documented Environments & Real Activities
              </h2>
            </div>

            {/* Scroll Indicator & Progress */}
            <div className="hidden sm:flex flex-col items-end gap-1.5 text-xs font-mono text-[#697078]">
              <div className="flex items-center gap-2">
                <span>Scroll down to advance</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3157D5]" />
              </div>
              <div className="w-32 h-1 bg-[#15181D]/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: progressPercent }}
                  className="h-full bg-[#3157D5]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Horizontal Scroll Rail (Driven by Downward Scroll) */}
        <div className="w-full my-auto overflow-hidden py-4" data-cursor="DRAG">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 items-center will-change-transform"
          >
            {activityReelItems.map((act, index) => (
              <Link
                key={act.id}
                to={act.href}
                data-cursor="VIEW"
                className="shrink-0 w-[78vw] sm:w-[360px] md:w-[420px] lg:w-[460px] space-y-3 group cursor-pointer block"
              >
                {/* Visual Media Frame with Aspect Ratio */}
                <motion.div
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-hairline bg-[#EBE8DF] overflow-hidden shadow-xs relative"
                >
                  <MediaPlaceholder
                    type={act.type}
                    aspectRatio={act.aspectRatio}
                    label={act.title}
                    slotLabel="[ ACTIVITY PHOTO ]"
                    sublabel={`${act.role} · ${act.period}`}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Item Index Badge */}
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono">
                    0{index + 1} / 0{activityReelItems.length}
                  </div>
                </motion.div>

                {/* Minimalist Footnote (Zero paragraph copy) */}
                <div className="space-y-1 px-1">
                  <div className="flex items-baseline justify-between text-xs font-mono">
                    <span className="font-serif text-base sm:text-lg font-semibold text-[#15181D] truncate pr-2 group-hover:text-[#3157D5] transition-colors">
                      {act.title}
                    </span>
                    <span className="text-[#697078] shrink-0 text-[11px]">
                      {act.period}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#3157D5]">
                    <span className="truncate opacity-90">{act.role}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Ending Sentinel Frame ("Mentok" marker) */}
            <div className="shrink-0 w-[240px] sm:w-[280px] p-6 border border-dashed border-[#15181D]/30 flex flex-col justify-center items-center text-center space-y-3 bg-[#EBE8DF]/50">
              <div className="w-10 h-10 rounded-full bg-[#15181D] text-white flex items-center justify-center">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <div className="text-xs font-mono text-[#15181D] font-semibold uppercase tracking-wider">
                Reel Complete
              </div>
              <p className="text-[11px] font-mono text-[#697078] leading-tight">
                Continue scrolling down to explore Layer 03: Meet Razin.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3. Bottom Information & Mobile Progress Bar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-hairline/80 text-[11px] font-mono text-[#697078]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3157D5]" />
              <span>Layer 02: Pinned Horizontal Reel ({activityReelItems.length} records)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="sm:hidden">Scroll down to slide right →</span>
              <div className="sm:hidden w-24 h-1 bg-[#15181D]/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: progressPercent }}
                  className="h-full bg-[#3157D5]"
                />
              </div>
              <span className="hidden sm:inline">Reaching the end will transition down to Layer 03 ↓</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
