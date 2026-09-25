import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Database, CheckSquare, Layers, LineChart, FileText } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { JourneyLine } from '../../components/ui/JourneyLine';

export const SystemsOperationsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const pipelineStages = [
    {
      num: '01',
      title: 'Raw Inputs',
      desc: 'Participants, Google Forms, attendance sheets, documents, and messy initial submissions.',
      icon: <FileText className="w-4 h-4 text-[#C98259]" />,
    },
    {
      num: '02',
      title: 'Validation',
      desc: 'Automated formulas, type checking, and boundary rules preventing broken records before ingestion.',
      icon: <CheckSquare className="w-4 h-4 text-[#718878]" />,
    },
    {
      num: '03',
      title: 'Structured Hub',
      desc: 'Centralized master registry acting as a protected single source of truth for all teams.',
      icon: <Database className="w-4 h-4 text-[#3157D5]" />,
    },
    {
      num: '04',
      title: 'Live Recaps',
      desc: 'Dynamic status summaries, check-in rosters, and operational monitoring feeds for on-ground coordinators.',
      icon: <LineChart className="w-4 h-4 text-[#7696E8]" />,
    },
    {
      num: '05',
      title: 'Output & Action',
      desc: 'Accurate badges, attendance certificates, verified participant lists, and transparent event audits.',
      icon: <Layers className="w-4 h-4 text-[#15181D]" />,
    },
  ];

  return (
    <section className="py-20 md:py-32 border-b border-hairline bg-[#EBE8DF]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
              08. Operating Architecture
            </span>
            <span aria-hidden="true" className="w-6 h-px bg-[#3157D5]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#15181D] tracking-tight">
            Turning complexity into structure.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed text-pretty">
            Large initiatives frequently struggle not from a lack of goodwill, but from scattered inputs and broken communication. This is the recurring architecture I use to bring order to operational data.
          </p>
        </div>

        {/* Visual Transformation: Unstructured -> Structured Flow */}
        <div className="mb-12 rounded-2xl border border-hairline bg-[#F3F1EB] p-8 sm:p-10 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-hairline text-xs font-mono text-[#697078]">
            <span className="uppercase text-[#3157D5] font-semibold">
              Operational Pipeline Architecture
            </span>
            <span>From Raw Submissions to Verified Handoffs</span>
          </div>

          {/* 5-Stage Horizontal Flow on Desktop, Vertical Stack on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-8">
            {pipelineStages.map((stage, idx) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: shouldReduceMotion ? 0 : idx * 0.08 }}
                className="relative rounded-xl border border-hairline bg-white/70 p-5 flex flex-col justify-between space-y-3 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#3157D5] font-bold">
                      {stage.num}
                    </span>
                    <div className="p-1.5 rounded-md bg-[#EBE8DF] border border-hairline">
                      {stage.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-medium text-[#15181D] mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#697078] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* Subtle connector indicator for mobile/tablet */}
                {idx < pipelineStages.length - 1 && (
                  <div className="md:hidden flex justify-center pt-2 text-[#697078]/40">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Operational Takeaway Bar */}
          <div className="mt-8 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#697078] max-w-xl">
              <span className="font-semibold text-[#15181D]">Applied in:</span>{' '}
              PKKMB ITS Camp data operations and ASFERA registry for 2,800+ participants across 40 branches.
            </div>

            <Link
              to="/projects/operational-data-systems"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shrink-0 shadow-xs"
            >
              <span>View Data Systems Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* Systems Flow Motif */}
        <JourneyLine variant="systems" />

      </div>
    </section>
  );
};
