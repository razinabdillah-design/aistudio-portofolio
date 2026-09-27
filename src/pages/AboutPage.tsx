import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import { MediaPlaceholder } from '../components/ui/MediaPlaceholder';

export const AboutPage: React.FC = () => {
  const fieldsOfInterest = [
    {
      title: 'Electrical & Energy Systems',
      description: 'Power flow simulations, admittance matrices, distribution network modeling, and protection studies.',
    },
    {
      title: 'Environmental & Clean Technology',
      description: 'Clean-air filtration mechanics, CAD prototyping, airflow modeling, and venture positioning.',
    },
    {
      title: 'AI & Digital Tools',
      description: 'Exploring multi-agent workflows, data structuring, and computational tools for technical problems.',
    },
    {
      title: 'Technical Project Development',
      description: 'Circuit schematic capture, two-layer PCB routing, and end-to-end prototyping methodologies.',
    },
    {
      title: 'Organizations & Event Operations',
      description: 'Centralized participant databases, automated verification schemas, and multi-branch coordination.',
    },
  ];

  const developingCapabilities = [
    'Stronger technical engineering foundations across power dynamics and circuit layout',
    'Building more complete technical project artifacts from concept to verified documentation',
    'Better project and organizational systems management with transparent data recaps',
    'Working fluently across technical engineering and non-technical stakeholder environments',
    'Clearer, more concise professional communication and presentation defense',
  ];

  return (
    <div className="w-full bg-[#F3F1EB] text-[#15181D]">
      
      {/* ============================================================== */}
      {/* 01. ABOUT HERO / WHO I AM                                      */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-20 md:py-24 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
            
            {/* Portrait / Personal Photo Space (Order 1 on mobile, 6 cols on desktop) */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden shadow-xs">
                <MediaPlaceholder
                  type="portrait"
                  aspectRatio="4:5"
                  label="Razin Abdillah — About Portrait"
                  slotLabel="[ RAZIN ABOUT PHOTO ]"
                  sublabel="Natural personal portrait space. Preserves intentional open framing."
                  className="w-full"
                />
              </div>
            </div>

            {/* Oversized Editorial Typography & Identity (Order 2 on mobile, 6 cols on desktop) */}
            <div className="order-2 lg:order-1 lg:col-span-6 space-y-5 sm:space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                  Personal Record
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#15181D] tracking-tight leading-[0.92]">
                  ABOUT<br />RAZIN
                </h1>
              </div>

              <div className="space-y-3.5 sm:space-y-4 text-sm sm:text-base md:text-lg text-[#15181D]/85 font-sans leading-relaxed">
                <p>
                  I'm Razin Abdillah, an Electrical Engineering student at Institut Teknologi Sepuluh Nopember (ITS) in Surabaya, Indonesia.
                </p>
                <p>
                  Most of my experience so far has come from moving between technical projects, student organizations, event operations, international delegation programs, and early professional venture work.
                </p>
              </div>

              <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#697078]">
                <span>Surabaya, Indonesia</span>
                <span>·</span>
                <span>ITS Electrical Engineering</span>
                <span>·</span>
                <Link to="/cv" className="text-[#3157D5] hover:underline inline-flex items-center gap-1 font-semibold min-h-[44px] items-center">
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 02. BACKGROUND & EDUCATION                                     */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 border-b border-hairline bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                02. Academic Context
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                Background & Education
              </h2>
            </div>
            <span className="text-xs font-mono text-[#697078]">
              Verified Academic Institution
            </span>
          </div>

          <div className="divide-y divide-hairline border-y border-hairline">
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-3 text-xs font-mono text-[#3157D5] font-semibold">
                2023 — Present
              </div>
              <div className="md:col-span-5 space-y-1">
                <div className="text-xl sm:text-2xl font-serif text-[#15181D]">
                  Institut Teknologi Sepuluh Nopember (ITS)
                </div>
                <div className="text-sm font-sans text-[#697078]">
                  Undergraduate Program in Electrical Engineering
                </div>
              </div>
              <div className="md:col-span-4 text-xs font-mono text-[#697078] leading-relaxed">
                Coursework focus: Power systems analysis, grid simulation, basic circuit hardware, and mathematics. Surabaya, East Java, Indonesia.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 03. FIELDS OF INTEREST                                         */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 border-b border-hairline bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                03. Trajectory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                Fields of Interest
              </h2>
            </div>
            <p className="text-xs font-mono text-[#697078] max-w-sm sm:text-right">
              Current intellectual and technical interests supported by coursework, projects, and initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldsOfInterest.map((field, idx) => (
              <div key={idx} className="space-y-2 pb-6 border-b border-hairline">
                <div className="text-xs font-mono text-[#3157D5] font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-serif text-[#15181D]">
                  {field.title}
                </h3>
                <p className="text-sm text-[#15181D]/75 font-sans leading-relaxed">
                  {field.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 04. WHAT I'M BUILDING / DEVELOPING                             */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 border-b border-hairline bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                04. Growth Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
                What I'm Currently Developing
              </h2>
            </div>
            <span className="text-xs font-mono text-[#697078]">
              Active Skill Foundations
            </span>
          </div>

          <div className="divide-y divide-hairline border-y border-hairline">
            {developingCapabilities.map((item, idx) => (
              <div key={idx} className="py-4 sm:py-5 flex items-start gap-4">
                <span className="text-xs font-mono text-[#3157D5] font-semibold mt-0.5">
                  0{idx + 1}.
                </span>
                <span className="text-sm sm:text-base text-[#15181D]/85 font-sans leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 05. CONNECT                                                    */}
      {/* ============================================================== */}
      <section className="py-16 md:py-24 bg-[#15181D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/15">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7696E8] font-semibold">
                05. Inquiries & Socials
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                Connect With Razin
              </h2>
            </div>
            <span className="text-xs font-mono text-[#F3F1EB]/60">
              Direct Channels & Verified Profiles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="p-6 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group block space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#7696E8]">
                <span>Email</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm font-serif text-white truncate">
                {profile.email}
              </div>
              <div className="text-[11px] font-mono text-[#F3F1EB]/50">
                Direct Inquiries
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-6 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group block space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#7696E8]">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm font-serif text-white">
                Razin Abdillah
              </div>
              <div className="text-[11px] font-mono text-[#F3F1EB]/50">
                Professional Network
              </div>
            </a>

            {/* GitHub */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-6 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group block space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#7696E8]">
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm font-serif text-white">
                  @razinabdillah
                </div>
                <div className="text-[11px] font-mono text-[#F3F1EB]/50">
                  Code Repositories
                </div>
              </a>
            )}

            {/* Instagram */}
            {profile.instagram && (
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-6 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group block space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#7696E8]">
                  <span>Instagram</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm font-serif text-white">
                  @razin.abdillah
                </div>
                <div className="text-[11px] font-mono text-[#F3F1EB]/50">
                  Social & Activity
                </div>
              </a>
            )}

          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#F3F1EB]/50">
            <Link to="/cv" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#7696E8]" />
              <span>Download / View Curriculum Vitae</span>
            </Link>
            <span>Surabaya, Indonesia · © 2026</span>
          </div>

        </div>
      </section>

    </div>
  );
};
