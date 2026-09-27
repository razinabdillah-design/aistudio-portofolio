import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, FileSpreadsheet, Cpu, Wind } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const SelectedHighlightsSection: React.FC = () => {
  return (
    <section id="selected-highlights" className="w-full">
      
      {/* Kicker Header */}
      <div className="py-12 border-b border-hairline bg-[#F3F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                03. Selected Highlights
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#15181D] tracking-tight">
              Four Core Demonstrations of Actual Work
            </h2>
          </div>
          <p className="text-xs font-mono text-[#697078] max-w-xs sm:text-right">
            Curated evidence spanning technical engineering, commercial role, international research, and data operations.
          </p>
        </div>
      </div>

      {/* ============================================================== */}
      {/* HIGHLIGHT 01: PROJECT — Technical & Power Grid (Cobalt Influence) */}
      {/* ============================================================== */}
      <article className="py-16 md:py-24 border-b border-hairline bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#3157D5]">01 / PROJECT</span>
              <span className="text-xs font-mono text-[#697078]">· Electrical & Power Systems</span>
            </div>
            <div className="text-xs font-mono text-[#697078]">
              Environment: MATLAB Scripts & ETAP Models
            </div>
          </div>

          {/* Project Content Composition: Asymmetric Typography + Paired Artifacts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Title & 1-sentence context (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#15181D] tracking-tight leading-[0.95]">
                  LOAD FLOW<br />ANALYSIS
                </h3>
                <p className="text-xs font-mono uppercase text-[#3157D5] font-semibold">
                  Multi-Bus Power Grid Simulation
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#15181D]/80 font-sans leading-relaxed">
                A numerical power-system study developing single-line modeling, admittance matrix formulation, and iterative Newton-Raphson simulations to quantify voltage profiles and losses.
              </p>

              <div className="pt-2">
                <Link
                  to="/projects/load-flow-analysis"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#3157D5] transition-colors"
                >
                  <span>View Project Calculations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Artifact Display (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
              
              {/* Primary Large Technical Artifact (8 cols) */}
              <div className="sm:col-span-8 space-y-1.5">
                <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                  <MediaPlaceholder
                    type="grid"
                    aspectRatio="16:10"
                    label="Bus Admittance Matrix & Topology Model"
                    slotLabel="[ LARGE TECHNICAL ARTIFACT ]"
                    sublabel="Single-line diagram network representation and iterative bus admittance."
                    className="w-full"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#697078] block">
                  Artifact 01: IEEE Standard Bus Interconnection
                </span>
              </div>

              {/* Secondary Diagram / Result Frame (4 cols) */}
              <div className="sm:col-span-4 space-y-1.5">
                <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                  <MediaPlaceholder
                    type="systems"
                    aspectRatio="16:10"
                    label="Convergence Results"
                    slotLabel="[ SMALL RESULT / DIAGRAM ]"
                    sublabel="Newton-Raphson loss calculations."
                    className="w-full"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#697078] block">
                  Artifact 02: Voltage Profile Output
                </span>
              </div>

            </div>

          </div>

        </div>
      </article>

      {/* ============================================================== */}
      {/* HIGHLIGHT 02: ROLE — Professional Venture (Warm / Coral Influence) */}
      {/* ============================================================== */}
      <article className="py-16 md:py-24 border-b border-hairline bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#C98259]">02 / ROLE</span>
              <span className="text-xs font-mono text-[#697078]">· Early-Stage Venture</span>
            </div>
            <div className="text-xs font-mono text-[#697078]">
              Period: 2025—2026
            </div>
          </div>

          {/* Role Documentary Composition: Wide Visual Media + Text Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Wide Media Frame (7 cols) */}
            <div className="lg:col-span-7 space-y-1.5">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type="experience"
                  aspectRatio="16:9"
                  label="Aither Clean-Air Commercial Proposal & Strategy"
                  slotLabel="[ WIDE MEDIA ]"
                  sublabel="Market evaluation, positioning dossiers, and venture partnership outlines."
                  className="w-full"
                />
              </div>
              <span className="text-[11px] font-mono text-[#697078] block">
                Documentation: Partnership deck and clean-air positioning framework
              </span>
            </div>

            {/* Right: Organization & Short Contribution (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-1.5">
                <h3 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight leading-none">
                  AITHER
                </h3>
                <p className="text-xs font-mono uppercase text-[#C98259] font-semibold tracking-wider">
                  Project & Partnership Development
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#15181D]/80 font-sans leading-relaxed">
                Formulated commercial proposals, solution positioning, and stakeholder communication for an early-stage clean-air technology venture.
              </p>

              <div className="pt-2">
                <Link
                  to="/experience/aither"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#C98259] transition-colors"
                >
                  <span>View Role Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </article>

      {/* ============================================================== */}
      {/* HIGHLIGHT 03: EXPERIENCE — International (Dark / High Contrast) */}
      {/* ============================================================== */}
      <article className="py-16 md:py-24 border-b border-hairline bg-[#15181D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#7696E8]">03 / EXPERIENCE</span>
              <span className="text-xs font-mono text-[#F3F1EB]/60">· Academic Exchange Delegation</span>
            </div>
            <div className="text-xs font-mono text-[#F3F1EB]/60">
              Singapore & Malaysia · 2024
            </div>
          </div>

          {/* International Photography-Led Composition */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
              <div className="lg:col-span-8 space-y-2">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-tight">
                  INTERNATIONAL<br />FUTURE LEADERS
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#7696E8] font-semibold">
                  Student Delegate · NUS & IIUM Academic Visits
                </p>
              </div>

              {/* Recognition Annotations */}
              <div className="lg:col-span-4 space-y-2 lg:text-right">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7696E8] bg-white/10 px-3 py-1.5">
                  <Award className="w-3.5 h-3.5 text-[#7696E8]" />
                  <span>1st Best Presentation & 2nd Best Paper</span>
                </div>
              </div>
            </div>

            {/* Two Distinct Photography Frames */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              
              <div className="sm:col-span-7 space-y-1.5">
                <div className="border border-white/20 bg-[#22262E] overflow-hidden">
                  <MediaPlaceholder
                    type="delegation"
                    aspectRatio="16:10"
                    label="NUS Presentation Session"
                    slotLabel="[ DELEGATION PHOTO 01 ]"
                    sublabel="Environmental technology research defense before international evaluation panels."
                    className="w-full"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#F3F1EB]/60 block">
                  Photo 01: Research paper presentation session at NUS
                </span>
              </div>

              <div className="sm:col-span-5 space-y-1.5">
                <div className="border border-white/20 bg-[#22262E] overflow-hidden">
                  <MediaPlaceholder
                    type="photo"
                    aspectRatio="16:10"
                    label="IIUM Bilateral Exchange"
                    slotLabel="[ DELEGATION PHOTO 02 ]"
                    sublabel="Delegation workshop and cross-campus symposium."
                    className="w-full"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#F3F1EB]/60 block">
                  Photo 02: Academic symposium & delegation closing
                </span>
              </div>

            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-[#F3F1EB]/80 font-sans max-w-xl">
                Presented environmental technology research before international evaluation panels at NUS and IIUM. Awarded 1st Best Presentation and 2nd Best Research Paper.
              </p>

              <Link
                to="/journey/international-future-leaders"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-[#15181D] bg-[#F3F1EB] hover:bg-[#7696E8] hover:text-white transition-colors shrink-0"
              >
                <span>View Full Experience Record</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </article>

      {/* ============================================================== */}
      {/* HIGHLIGHT 04: EXPERIENCE — Data Operations (Muted Alternative) */}
      {/* ============================================================== */}
      <article className="py-16 md:py-24 border-b border-hairline bg-[#EAE6DD]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-[#718878]">04 / EXPERIENCE</span>
              <span className="text-xs font-mono text-[#697078]">· Operations & Data Infrastructure</span>
            </div>
            <div className="text-xs font-mono text-[#697078]">
              Period: 2023–2024
            </div>
          </div>

          {/* Operations & Scale Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Big Metrics + Contribution (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1.5">
                <h3 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight leading-none">
                  ASFERA FESTIVAL
                </h3>
                <p className="text-xs font-mono uppercase text-[#718878] font-semibold tracking-wider">
                  Administrative & Data Management Lead
                </p>
              </div>

              {/* Factual Scale Grid (Unboxed, typographic hierarchy) */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-hairline">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#15181D]">
                    2,800+
                  </div>
                  <div className="text-[11px] font-mono text-[#697078] uppercase mt-0.5">
                    Participants
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#15181D]">
                    40
                  </div>
                  <div className="text-[11px] font-mono text-[#697078] uppercase mt-0.5">
                    Branches
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#718878]">
                    0
                  </div>
                  <div className="text-[11px] font-mono text-[#697078] uppercase mt-0.5">
                    Lost Records
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#15181D]/80 font-sans leading-relaxed">
                Engineered centralized participant registries, validation formulas, and real-time operational roster distribution across 40 competition branches.
              </p>

              <div className="pt-2">
                <Link
                  to="/journey/asfera"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#718878] transition-colors"
                >
                  <span>View Operations Record</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Wide Event Media (6 cols) */}
            <div className="lg:col-span-6 space-y-1.5">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type="systems"
                  aspectRatio="16:10"
                  label="ASFERA Centralized Registration & Operations"
                  slotLabel="[ WIDE EVENT MEDIA ]"
                  sublabel="Centralized participant registries and automated branch validation."
                  className="w-full"
                />
              </div>
              <span className="text-[11px] font-mono text-[#697078] block">
                Verification: Centralized registration database and live recap distribution
              </span>
            </div>

          </div>

        </div>
      </article>

    </section>
  );
};
