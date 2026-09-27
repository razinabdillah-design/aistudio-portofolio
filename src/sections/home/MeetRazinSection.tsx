import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const MeetRazinSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-25, 25]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [15, -15]
  );

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28 border-b border-hairline bg-[#F3F1EB] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Rebirth-Inspired Open Personal Intro Composition (Image 55%, Text 45%) */}
        {/* Desktop: Image LEFT, Text RIGHT. Mobile: Image FIRST (order-1), Text AFTER (order-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Column on Desktop / First on Mobile: Large Personal Photo Area (~7 cols, 55%) */}
          <motion.div
            style={{ y: imageY }}
            initial={shouldReduceMotion ? {} : { opacity: 0, clipPath: 'inset(10% 0% 10% 0%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:col-span-7 space-y-2 will-change-transform"
          >
            <Link to="/about" data-cursor="ABOUT" className="block group">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden shadow-xs">
                <MediaPlaceholder
                  type="portrait"
                  aspectRatio="16:10"
                  label="Razin Abdillah — Personal Activity Portrait"
                  slotLabel="[ RAZIN PERSONAL PHOTO ]"
                  sublabel="Natural personal portrait. Preserves intentional open framing."
                  className="w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#697078] px-1">
              <span>Undergraduate Candidate · ITS Surabaya</span>
              <span>Layer 03: Personal Overview</span>
            </div>
          </motion.div>

          {/* Right Column on Desktop / Second on Mobile: Personal Introduction Typography (~5 cols, 45%) */}
          <motion.div
            style={{ y: textY }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-2 lg:col-span-5 space-y-5 sm:space-y-6 will-change-transform"
          >
            <div className="space-y-1">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                03. Meet Razin
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight leading-tight">
                ABOUT ME
              </h2>
            </div>

            {/* Grounded Human Hook (Zero buzzwords) */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl font-serif text-[#15181D] italic leading-snug"
            >
              "I've never learned from only one kind of room."
            </motion.div>

            {/* Concise First-Person Statement (~65 words) */}
            <div className="space-y-3.5 text-sm sm:text-base text-[#15181D]/85 font-sans leading-relaxed">
              <p>
                Hi, I'm Razin.
              </p>
              <p>
                I'm an Electrical Engineering student at Institut Teknologi Sepuluh Nopember (ITS), and most of what you'll find here comes from moving between technical projects, student organizations, event operations, international programs, and early professional work.
              </p>
              <p className="text-xs sm:text-sm text-[#697078]">
                I use this portfolio to keep an evidence-led record of what I've built, contributed to, and learned through those environments.
              </p>
            </div>

            <div className="pt-1 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#3157D5] transition-colors min-h-[44px]"
              >
                <span>Read Background & Trajectory</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
