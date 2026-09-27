import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export const GoDeeperSection: React.FC = () => {
  const primaryNav = [
    { number: '01', label: 'Work Experience', path: '/experience', desc: 'Venture development, commercial proposals, and stakeholder alignment at Aither' },
    { number: '02', label: 'Projects', path: '/projects', desc: 'Power grid simulation, KiCad hardware designs, and automated agent workflows' },
    { number: '03', label: 'Journey', path: '/journey', desc: 'Chronological timeline across university committees, operational data, and international events' },
    { number: '04', label: 'About', path: '/about', desc: 'Background, education at ITS, engineering principles, and working approach' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#15181D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header: Editorial Orientation */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-white/15">
          <div className="space-y-1">
            <span className="text-xs font-mono tracking-widest uppercase text-[#7696E8] font-semibold">
              06. Go Deeper
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Continue through the catalog.
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 text-[#7696E8] hover:text-white transition-colors"
            >
              <span>Curriculum Vitae</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Cardless Editorial Masthead: 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {primaryNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group space-y-3 pt-4 border-t border-white/15 hover:border-[#7696E8] transition-colors block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#F3F1EB]/50">
                <span>{item.number}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#7696E8] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-serif text-white group-hover:text-[#7696E8] transition-colors">
                {item.label}
              </h3>
              <p className="text-xs text-[#F3F1EB]/70 font-sans leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* Explore Everything Dedicated Banner: Cardless Architectural Strip */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#7696E8]">
              Uncompressed Catalog
            </div>
            <p className="text-sm text-white/80 font-sans leading-relaxed">
              Prefer to see everything without lens filters? View the comprehensive chronological timeline spanning every committee, technical simulation, and international symposium.
            </p>
          </div>

          <Link
            to="/journey"
            className="inline-flex items-center gap-2 py-3 px-5 text-xs font-mono uppercase tracking-wider text-[#15181D] bg-white hover:bg-[#7696E8] hover:text-white transition-colors shrink-0 font-medium"
          >
            <span>Explore Everything</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Footer Contact Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#F3F1EB]/50">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#7696E8]" />
            <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
              {profile.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span>·</span>
            <span>Surabaya, Indonesia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
