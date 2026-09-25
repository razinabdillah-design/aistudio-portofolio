import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Journey', href: '/journey' },
    { label: 'Work Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F3F1EB]/95 backdrop-blur-xs border-b border-hairline transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text wordmark */}
        <Link
          to="/"
          className="text-lg font-serif tracking-tight text-[#15181D] hover:text-[#3157D5] transition-colors"
        >
          Razin Abdillah
        </Link>

        {/* Zone 2: 4 clean text links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#697078]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative py-1 transition-colors hover:text-[#15181D] ${
                  active ? 'text-[#15181D] font-semibold' : ''
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#3157D5] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors shadow-xs whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#15181D] hover:bg-[#EBE8DF] rounded-md transition-colors"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-hairline bg-[#F3F1EB] px-4 pt-2 pb-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-base font-medium py-1.5 border-b border-hairline/40 transition-colors ${
                    active ? 'text-[#3157D5] font-semibold' : 'text-[#697078]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to="/cv"
              className="text-base font-medium py-1.5 border-b border-hairline/40 text-[#697078] hover:text-[#3157D5] transition-colors"
            >
              Curriculum Vitae (CV)
            </Link>
          </nav>
          <div className="pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-white bg-[#15181D] rounded-md hover:bg-[#3157D5] transition-colors"
            >
              <span>{profile.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
