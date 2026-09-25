import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, Github, ExternalLink, FileText } from 'lucide-react';
import { profile } from '../data/profile';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
      
      {/* Header / Intro */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono tracking-widest uppercase text-[#3157D5]">
            Background & Perspective
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#15181D] tracking-tight">
          About Razin
        </h1>
        <p className="text-lg sm:text-xl font-serif text-[#697078] leading-relaxed max-w-2xl text-balance">
          Electrical engineering undergraduate at ITS exploring engineering, clean technology, and operational structure.
        </p>
      </section>

      {/* 01. Background */}
      <section className="pt-8 border-t border-hairline space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
          01. Background & Education
        </h2>
        <h3 className="text-2xl font-serif text-[#15181D]">Who I Am</h3>
        <div className="space-y-4 text-sm sm:text-base text-[#15181D]/85 leading-relaxed">
          <p>
            I am currently an Electrical Engineering undergraduate at Institut Teknologi Sepuluh Nopember (ITS) in Surabaya, Indonesia. My academic coursework centers on electrical power distribution, circuit analysis, and computational engineering methods.
          </p>
          <p>
            Beyond coursework, my learning has grown through direct experimentation: modeling power network load flows, designing parametric 3D CAD assemblies for indoor air purifiers, and exploring multi-agent software architectures.
          </p>
          <p>
            I am particularly interested in environments where technical engineering principles connect with operational coordination—translating messy problems into structured, verifiable solutions.
          </p>
        </div>
      </section>

      {/* 02. Experience & Environments */}
      <section className="pt-8 border-t border-hairline space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
          02. Formative Environments
        </h2>
        <h3 className="text-2xl font-serif text-[#15181D]">Where I Have Learned</h3>
        <div className="space-y-4 text-sm sm:text-base text-[#15181D]/85 leading-relaxed">
          <p>
            Different environments have demanded different ways of thinking:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-hairline bg-[#F3F1EB]">
              <div className="text-xs font-mono text-[#3157D5] mb-1 uppercase">Venture Development</div>
              <h4 className="text-base font-serif font-medium text-[#15181D] mb-1">
                Aither Clean-Air
              </h4>
              <p className="text-xs text-[#697078] leading-relaxed">
                Formulating strategic partnership proposals, conducting market research, and understanding the challenges of positioning clean-air hardware solutions.
              </p>
              <Link to="/experience/aither" className="mt-3 text-xs font-medium text-[#3157D5] inline-flex items-center gap-1 hover:underline">
                <span>Inspect role</span> →
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-hairline bg-[#F3F1EB]">
              <div className="text-xs font-mono text-[#C98259] mb-1 uppercase">Academic Presentation</div>
              <h4 className="text-base font-serif font-medium text-[#15181D] mb-1">
                International Future Leaders
              </h4>
              <p className="text-xs text-[#697078] leading-relaxed">
                Presenting environmental technology research at academic venues in Singapore and Malaysia, receiving 1st Best Presentation and 2nd Best Paper.
              </p>
              <Link to="/journey/international-future-leaders" className="mt-3 text-xs font-medium text-[#3157D5] inline-flex items-center gap-1 hover:underline">
                <span>Read journey</span> →
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-hairline bg-[#F3F1EB]">
              <div className="text-xs font-mono text-[#718878] mb-1 uppercase">Campus Operations</div>
              <h4 className="text-base font-serif font-medium text-[#15181D] mb-1">
                PKKMB ITS & J-Fest 37
              </h4>
              <p className="text-xs text-[#697078] leading-relaxed">
                Managing centralized student data recaps and fundraising commercial operations behind large campus-wide initiatives.
              </p>
              <Link to="/journey/pkkmb-its" className="mt-3 text-xs font-medium text-[#3157D5] inline-flex items-center gap-1 hover:underline">
                <span>View operational scope</span> →
              </Link>
            </div>

            <div className="p-5 rounded-xl border border-hairline bg-[#F3F1EB]">
              <div className="text-xs font-mono text-[#7696E8] mb-1 uppercase">Student Communities</div>
              <h4 className="text-base font-serif font-medium text-[#15181D] mb-1">
                IEEE & TDC ITS
              </h4>
              <p className="text-xs text-[#697078] leading-relaxed">
                Participating in technical student chapters and supporting associate member development within campus entrepreneurship programs.
              </p>
              <Link to="/journey?category=organization" className="mt-3 text-xs font-medium text-[#3157D5] inline-flex items-center gap-1 hover:underline">
                <span>Explore organizations</span> →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03. How I Approach Problems */}
      <section className="pt-8 border-t border-hairline space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
          03. Working Approach
        </h2>
        <h3 className="text-2xl font-serif text-[#15181D]">How I Tend to Work</h3>
        <div className="space-y-4 text-sm sm:text-base text-[#15181D]/85 leading-relaxed">
          <p>
            When approaching an unfamiliar challenge, I generally follow an iterative cycle:
          </p>
          <ul className="space-y-2.5 text-sm text-[#15181D]/85 list-disc list-outside pl-5">
            <li>
              <strong>Explore & Map:</strong> Understand the context and constraints before proposing tools or solutions.
            </li>
            <li>
              <strong>Break Down Complexity:</strong> Separate ambiguous problems into smaller, verifiable components.
            </li>
            <li>
              <strong>Structure the Data:</strong> Establish reliable data records or mathematical equations rather than relying on guesswork.
            </li>
            <li>
              <strong>Test & Validate:</strong> Use simulation, prototypes, or operational pilots to see where assumptions break down.
            </li>
            <li>
              <strong>Communicate Clearly:</strong> Document limitations and share findings with team members in clear, accessible language.
            </li>
          </ul>
        </div>
      </section>

      {/* 04. What I Am Exploring Now */}
      <section id="now" className="pt-8 border-t border-hairline space-y-6 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
            04. Active Exploration
          </h2>
          <h3 className="text-2xl font-serif text-[#15181D]">Currently Exploring</h3>
          <p className="text-sm text-[#697078] leading-relaxed">
            Topics and technical domains of active study:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {profile.statusExploring.map((area, idx) => (
            <div key={idx} className="flex items-center justify-between p-3.5 rounded-lg bg-[#EBE8DF]/40 border border-hairline">
              <span className="text-sm font-medium text-[#15181D]">{area}</span>
              <span className="text-xs font-mono text-[#3157D5]">Exploring</span>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Contact */}
      <section id="contact" className="pt-8 border-t border-hairline space-y-6 scroll-mt-24">
        <div className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#3157D5]">
            05. Contact
          </h2>
          <h3 className="text-2xl font-serif text-[#15181D]">Get in Touch</h3>
          <p className="text-sm text-[#697078] leading-relaxed">
            Feel free to reach out for questions regarding electrical engineering coursework, project collaborations, or student initiatives.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-hairline bg-white shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase text-[#697078]">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="text-base sm:text-lg font-serif text-[#15181D] hover:text-[#3157D5] transition-colors"
              >
                {profile.email}
              </a>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="pt-4 border-t border-hairline flex flex-wrap items-center gap-6 text-xs">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#15181D] hover:text-[#3157D5] transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#697078]" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-[#697078]" />
            </a>

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#15181D] hover:text-[#3157D5] transition-colors"
              >
                <Github className="w-4 h-4 text-[#697078]" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#697078]" />
              </a>
            )}

            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 text-[#3157D5] hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae (CV)</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
