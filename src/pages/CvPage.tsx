import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Printer, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { professionalExperiences } from '../data/professional';

export const CvPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const aither = professionalExperiences.find((p) => p.slug === 'aither')!;

  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-4 sm:px-6">
      
      {/* Top Action Bar (hidden on print) */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#697078] hover:text-[#3157D5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-[#15181D] bg-[#EBE8DF] hover:bg-[#15181D] hover:text-white rounded-md transition-all shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Formal Restrained CV Document Container */}
      <div className="bg-white p-8 sm:p-12 border border-hairline print:border-0 print:shadow-none print:p-0 text-[#15181D] space-y-8 font-sans">
        
        {/* CV Header */}
        <header className="border-b border-[#15181D]/15 pb-6 space-y-2">
          <h1 className="text-3xl font-serif tracking-tight text-[#15181D]">
            {profile.name}
          </h1>
          <p className="text-sm font-medium text-[#3157D5]">
            Electrical Engineering Undergraduate · Institut Teknologi Sepuluh Nopember (ITS)
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#697078] pt-1">
            <span>Surabaya, Indonesia</span>
            <span>·</span>
            <a href={`mailto:${profile.email}`} className="hover:underline text-[#15181D]">
              {profile.email}
            </a>
            <span>·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-[#15181D]">
              linkedin.com/in/razin-abdillah
            </a>
          </div>
        </header>

        {/* 01. Education */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Education
          </h2>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                Institut Teknologi Sepuluh Nopember (ITS)
              </h3>
              <span className="text-xs font-mono text-[#697078]">Surabaya, Indonesia</span>
            </div>
            <div className="flex justify-between items-baseline text-xs text-[#697078] mt-0.5">
              <span>Bachelor of Engineering in Electrical Engineering (Undergraduate)</span>
              <span className="font-mono">Expected 2027</span>
            </div>
            <p className="text-xs text-[#697078] mt-1.5 leading-relaxed">
              Focus: Electrical Power Systems, Numerical Network Analysis, Hardware & CAD Modeling, Multi-Agent Workflows, and Operational Data Systems.
            </p>
          </div>
        </section>

        {/* 02. Professional Experience */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Professional Experience
          </h2>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                {aither.organization}
              </h3>
              <span className="text-xs font-mono text-[#697078]">{aither.location}</span>
            </div>
            <div className="flex justify-between items-baseline text-xs text-[#3157D5] mt-0.5 font-medium">
              <span>{aither.role}</span>
              <span className="font-mono text-[#697078]">{aither.period}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-xs text-[#15181D]/85 list-disc list-outside pl-4 leading-relaxed">
              {aither.responsibilities.map((resp, rIdx) => (
                <li key={rIdx}>{resp}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 03. Organizations & Student Leadership */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Organizations & Student Leadership
          </h2>
          
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                IEEE Student Branch ITS
              </h3>
              <span className="text-xs font-mono text-[#697078]">November 2025 – Present</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">Member Delegate & Member</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Active member delegate within the IEEE Student Branch at ITS, participating in technical discussions, professional engineering community initiatives, and collaborative knowledge-sharing.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                TDC ITS (Technopreneurship Development Center)
              </h3>
              <span className="text-xs font-mono text-[#697078]">October 2025 – Present</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">AMDA (Associate Member Development Assistant)</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Supported associate member development, onboarding workflows, and campus-wide technopreneurship community sessions for early-stage student technology ventures.
            </p>
          </div>
        </section>

        {/* 04. Selected Operations & Committees */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Selected Operations & Committees
          </h2>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                J-Fest 37 (Japan Festival ITS)
              </h3>
              <span className="text-xs font-mono text-[#697078]">July 2026 – Present</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">Head of Fundraise</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Leading the festival fundraising division, managing commercial tenant regulations, vendor registration systems, procurement workflows, merchandise operations, and diversified revenue channels.
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                PKKMB ITS Camp — University Student Orientation
              </h3>
              <span className="text-xs font-mono text-[#697078]">June 2026 – August 2026</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">Staff Data Center</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Managed centralized student administrative data records, task collection validation forms, automated registration recaps, and real-time operational roster distribution for field committees.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                GG Beraksi (Gerakan Mengajar Beraksi)
              </h3>
              <span className="text-xs font-mono text-[#697078]">December 2025 – January 2026</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">Divisi Humas & Pembina Kelompok</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Led institutional communications with Dinas Lingkungan Hidup (DLH), participant registration data, event publications, donation tracking, and mentored ±200 participants across community programs.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-semibold text-[#15181D]">
                ASFERA (As-Syifa Festival Raya)
              </h3>
              <span className="text-xs font-mono text-[#697078]">June 2023 – March 2024</span>
            </div>
            <div className="text-xs text-[#3157D5] mb-1 font-medium">Administrative & Data Management Lead</div>
            <p className="text-xs text-[#15181D]/85 leading-relaxed">
              Architected centralized registration database, automated recap dashboards, and certificate verification workflows for 2,800+ participants across 40 competition categories.
            </p>
          </div>
        </section>

        {/* 05. Selected Honors & Awards */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Honors & Awards
          </h2>
          <ul className="space-y-2 text-xs text-[#15181D]/85">
            <li className="flex justify-between items-baseline">
              <span>
                <strong>1st Best Presentation</strong> — International Future Leaders (Sustainable Technology Track), Singapore & Malaysia
              </span>
              <span className="font-mono text-[#697078]">October 2024</span>
            </li>
            <li className="flex justify-between items-baseline">
              <span>
                <strong>2nd Best Research Paper Award</strong> — International Future Leaders Academic Symposium
              </span>
              <span className="font-mono text-[#697078]">October 2024</span>
            </li>
          </ul>
        </section>

        {/* 06. Technical & Operational Competencies */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#3157D5] font-semibold border-b border-hairline pb-1">
            Technical & Methodological Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#15181D]/85">
            <div>
              <span className="font-semibold text-[#15181D]">Electrical & Power:</span> ETAP, MATLAB, Newton-Raphson Load Flow Analysis, Bus Admittance Formulations
            </div>
            <div>
              <span className="font-semibold text-[#15181D]">Hardware & CAD:</span> Autodesk Fusion 360 (Parametric 3D Modeling), KiCad (Schematic Capture & PCB Layout)
            </div>
            <div>
              <span className="font-semibold text-[#15181D]">AI & Computational:</span> CrewAI (Multi-Agent Task Orchestration), Python
            </div>
            <div>
              <span className="font-semibold text-[#15181D]">Systems & Operations:</span> Google Workspace (Data Validation, Formulas, Recap Dashboards), Microsoft Excel
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};
