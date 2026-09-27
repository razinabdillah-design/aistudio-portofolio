import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MediaPlaceholder } from '../../components/ui/MediaPlaceholder';

export const FeaturedProjectSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-b border-hairline bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Top Editorial Kicker & Large Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between pb-8 border-b border-hairline">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold">
                03. Featured Project
              </span>
              <span className="text-xs font-mono text-[#697078]">· Electrical & Power Systems</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#15181D] tracking-tight leading-[0.98]">
              LOAD FLOW<br />ANALYSIS
            </h2>

            <p className="text-base sm:text-lg text-[#15181D]/80 max-w-2xl font-sans leading-relaxed pt-1">
              A numerical power-system study developing single-line modeling, admittance matrix formulation, and iterative Newton-Raphson simulations to quantify voltage profiles and losses.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-3">
            <div className="text-xs font-mono text-[#697078] space-y-1">
              <div>Environment: MATLAB & ETAP</div>
              <div>Scope: Multi-Bus Distribution Network</div>
            </div>

            <Link
              to="/projects/load-flow-analysis"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-wider text-white bg-[#15181D] hover:bg-[#3157D5] transition-colors"
            >
              <span>View full study & calculations</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Dominant Multi-Artifact Composition (55–65% Visual Presence) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Large Visual Artifact Frame (8 cols) */}
          <div className="lg:col-span-8 space-y-2">
            <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
              <MediaPlaceholder
                type="grid"
                aspectRatio="16:10"
                label="Multi-Bus Grid Admittance & Load Flow Topology"
                slotLabel="[ LARGE ARTIFACT PLACEHOLDER ]"
                sublabel="Single-line diagram network representation and numerical bus admittance model."
                className="w-full"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-[#697078] px-1">
              <span>Artifact 01: IEEE Standard Bus Interconnection</span>
              <span>Admittance Matrix Formulation</span>
            </div>
          </div>

          {/* Secondary Paired Artifact Frames (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Artifact 02: SLD / Schematic Frame */}
            <div className="space-y-1.5">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type="grid"
                  aspectRatio="16:10"
                  label="Single-Line Diagram (SLD)"
                  slotLabel="[ SLD PLACEHOLDER ]"
                  sublabel="Distribution node layout and branch impedance annotations."
                  className="w-full"
                />
              </div>
              <div className="text-[11px] font-mono text-[#697078] px-1">
                Artifact 02: Single-Line Diagram
              </div>
            </div>

            {/* Artifact 03: Simulation Convergence Result Frame */}
            <div className="space-y-1.5">
              <div className="border border-hairline bg-[#EBE8DF] overflow-hidden">
                <MediaPlaceholder
                  type="systems"
                  aspectRatio="16:10"
                  label="Convergence Profile & Line Loss Output"
                  slotLabel="[ RESULT PLACEHOLDER ]"
                  sublabel="Newton-Raphson iteration matrix and reactive power distribution chart."
                  className="w-full"
                />
              </div>
              <div className="text-[11px] font-mono text-[#697078] px-1">
                Artifact 03: Numerical Iteration Result
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
