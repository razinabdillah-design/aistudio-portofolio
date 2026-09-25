import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Linkedin, Github, FileText } from 'lucide-react';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-hairline bg-[#EBE8DF]/40 text-[#15181D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Identity column */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="text-xl font-serif text-[#15181D] hover:text-[#3157D5] transition-colors inline-block"
            >
              Razin Abdillah
            </Link>
            <p className="text-sm text-[#697078] max-w-sm leading-relaxed">
              Electrical Engineering undergraduate at Institut Teknologi Sepuluh Nopember (ITS).
              Exploring engineering, clean technology, and operational structure.
            </p>
            <div className="pt-2 text-xs font-mono text-[#697078]">
              Surabaya, East Java, Indonesia
            </div>
          </div>

          {/* Navigation Gateways */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#697078] block">
                Explore
              </span>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/journey"
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors"
                  >
                    Journey
                  </Link>
                </li>
                <li>
                  <Link
                    to="/experience"
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors"
                  >
                    Work Experience
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors"
                  >
                    About & Thinking
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#697078] block">
                Documents
              </span>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/cv"
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Curriculum Vitae</span>
                    <FileText className="w-3 h-3 text-[#697078]" />
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-[#15181D] hover:text-[#3157D5] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Direct Inquiries</span>
                    <ArrowUpRight className="w-3 h-3 text-[#697078]" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#697078] block">
              Connect
            </span>
            <div className="flex flex-col space-y-2.5">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-[#15181D] hover:text-[#3157D5] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#697078]" />
                <span className="truncate">{profile.email}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#15181D] hover:text-[#3157D5] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#697078]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#697078]" />
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#15181D] hover:text-[#3157D5] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#697078]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#697078]" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between text-xs text-[#697078] gap-4">
          <p>© {new Date().getFullYear()} Razin Abdillah. All rights reserved.</p>
          <p className="font-mono text-[11px]">Surabaya, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};
