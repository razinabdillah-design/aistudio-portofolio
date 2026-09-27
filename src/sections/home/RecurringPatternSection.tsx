import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RecurringPatternSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand the problem',
      description: 'Identify what actually needs resolving—whether an unbalanced distribution bus, a messy registration database, or an ambiguous venture proposal.',
      domainExample: 'Grid constraints · Client needs · Clear boundaries',
    },
    {
      number: '02',
      title: 'Organize information',
      description: 'Sort scattered inputs, eliminate redundant entries, and structure the parameters that truly govern the outcome.',
      domainExample: 'Admittance matrices · Spreadsheet normalization · Market research tables',
    },
    {
      number: '03',
      title: 'Build structure',
      description: 'Draft the analytical calculation, the validated database schema, or the product narrative that holds the solution together.',
      domainExample: 'Newton-Raphson scripts · Automated formulas · Commercial frameworks',
    },
    {
      number: '04',
      title: 'Coordinate execution',
      description: 'Work alongside team members, committee divisions, or engineering peers to ensure the system functions smoothly in practice.',
      domainExample: 'Campus field rosters · Tenant onboarding · Cross-division syncs',
    },
    {
      number: '05',
      title: 'Communicate clearly',
      description: 'Present the findings, numerical models, and recommendations in language that decision-makers and non-technical stakeholders can trust.',
      domainExample: 'Symposium presentations · Executive pitch decks · Operational recaps',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-hairline bg-[#F3F1EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5] font-semibold">
            04. The Recurring Pattern
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#15181D] tracking-tight">
            Turning complexity into structure.
          </h2>
          <p className="text-sm sm:text-base text-[#697078] leading-relaxed">
            My experiences span different environments—from power system labs to high-volume campus events and early-stage ventures. They are distinct disciplines, but the underlying working method is consistent:
          </p>
        </div>

        {/* 5-Step Cardless Continuum: Architectural Step Process with Hairline Separators */}
        <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-hairline border-y border-hairline py-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-6 md:py-0 md:px-5 first:pl-0 last:pr-0 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold text-[#3157D5]">
                  Step {step.number}
                </span>
                <h3 className="text-base font-serif font-semibold text-[#15181D]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#697078] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-hairline text-[11px] font-mono text-[#697078]">
                <span className="text-[#15181D] font-medium block mb-0.5">Applied in:</span>
                <span>{step.domainExample}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grounded Summary Callout: Open Editorial Statement (Zero card enclosures) */}
        <div className="border-l-2 border-[#15181D] pl-6 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#15181D]/80 max-w-2xl leading-relaxed">
            This pattern explains why the work appears diverse without claiming false generalist mastery. Engineering demands technical rigor; operations demand disciplined execution. Both require structure.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#3157D5] hover:underline shrink-0 font-mono"
          >
            <span>Read background philosophy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
