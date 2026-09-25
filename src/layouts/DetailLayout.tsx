import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DetailLayoutProps {
  children: React.ReactNode;
  backTo: string;
  backLabel: string;
  className?: string;
  maxWidth?: 'narrow' | 'default' | 'wide';
}

export const DetailLayout: React.FC<DetailLayoutProps> = ({
  children,
  backTo,
  backLabel,
  className = '',
  maxWidth = 'default',
}) => {
  const widthStyles = {
    narrow: 'max-w-3xl',
    default: 'max-w-4xl',
    wide: 'max-w-5xl',
  }[maxWidth];

  return (
    <div className={`py-12 md:py-20 mx-auto px-4 sm:px-6 ${widthStyles} ${className}`}>
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#697078] hover:text-[#3157D5] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Main Content Area */}
      {children}
    </div>
  );
};
