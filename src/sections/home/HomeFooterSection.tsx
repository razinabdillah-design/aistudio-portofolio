import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

export const HomeFooterSection: React.FC = () => {
  return (
    <footer className="py-12 md:py-16 bg-[#15181D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Minimal Strip */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 pb-6 border-b border-white/15">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
              Razin Abdillah
            </h3>
            <p className="text-xs font-mono text-[#F3F1EB]/60 mt-0.5">
              Electrical Engineering Student · ITS Surabaya
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href={`mailto:${profile.email}`}
              className="text-[#F3F1EB]/80 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>{profile.email}</span>
              <ArrowUpRight className="w-3 h-3 text-[#7696E8]" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#F3F1EB]/80 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#7696E8]" />
            </a>

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#F3F1EB]/80 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#7696E8]" />
              </a>
            )}

            {profile.instagram && (
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-[#F3F1EB]/80 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-[#7696E8]" />
              </a>
            )}

            <Link
              to="/cv"
              className="text-[#7696E8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Minimal Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#F3F1EB]/40">
          <span>Surabaya, Indonesia</span>
          <span>© 2026 Razin Abdillah</span>
        </div>

      </div>
    </footer>
  );
};
