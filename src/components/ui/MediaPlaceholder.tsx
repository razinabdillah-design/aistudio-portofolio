import React, { useState } from 'react';
import { Layers, Cpu, Wind, Globe2, Users, FileSpreadsheet, Activity, Building2, User, Camera } from 'lucide-react';

interface MediaPlaceholderProps {
  type: 'portrait' | 'photo' | 'work' | 'experience' | 'journey' | 'systems' | 'cad' | 'circuit' | 'grid' | 'delegation' | 'activity';
  label: string;
  sublabel?: string;
  slotLabel?: string;
  aspectRatio?: '4:5' | '16:10' | '3:2' | '16:9' | '4:3' | '3:4' | '1:1' | 'auto';
  className?: string;
  src?: string;
  priority?: boolean;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type,
  label,
  sublabel,
  slotLabel,
  aspectRatio = '16:9',
  className = '',
  src,
  priority = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectClasses: Record<string, string> = {
    '4:5': 'aspect-[4/5]',
    '16:10': 'aspect-[16/10]',
    '3:2': 'aspect-[3/2]',
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
    'auto': 'h-full min-h-[220px]',
  };

  const selectedAspectClass = aspectClasses[aspectRatio] || 'aspect-[16/9]';

  const getIcon = () => {
    switch (type) {
      case 'portrait':
        return <User className="w-10 h-10 text-[#15181D]/60" strokeWidth={1.25} />;
      case 'photo':
      case 'activity':
        return <Camera className="w-8 h-8 text-[#C98259]/80" strokeWidth={1.5} />;
      case 'delegation':
      case 'journey':
        return <Globe2 className="w-8 h-8 text-[#C98259]" strokeWidth={1.5} />;
      case 'work':
      case 'circuit':
        return <Cpu className="w-8 h-8 text-[#3157D5]/70" strokeWidth={1.5} />;
      case 'cad':
        return <Layers className="w-8 h-8 text-[#3157D5]/70" strokeWidth={1.5} />;
      case 'grid':
        return <Activity className="w-8 h-8 text-[#7696E8]" strokeWidth={1.5} />;
      case 'experience':
        return <Wind className="w-8 h-8 text-[#718878]" strokeWidth={1.5} />;
      case 'systems':
        return <FileSpreadsheet className="w-8 h-8 text-[#3157D5]" strokeWidth={1.5} />;
      default:
        return <Users className="w-8 h-8 text-[#15181D]/40" strokeWidth={1.5} />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'portrait':
        return 'Portrait Slot';
      case 'photo':
      case 'activity':
        return 'Activity Photography';
      case 'delegation':
        return 'Delegation Photo';
      case 'cad':
        return 'CAD Assembly';
      case 'grid':
        return 'System Modeling';
      case 'circuit':
        return 'Circuit Layout';
      case 'experience':
        return 'Venture Overview';
      case 'journey':
        return 'Experience Record';
      case 'systems':
        return 'Systems Architecture';
      default:
        return 'Visual Record';
    }
  };

  // If a valid image source exists and hasn't errored
  if (src && !imageError) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-[#EBE8DF] ${selectedAspectClass} ${className}`}>
        <img
          src={src}
          alt={label}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>
    );
  }

  // Hero portrait special treatment
  if (type === 'portrait') {
    return (
      <div
        className={`relative overflow-hidden border border-hairline bg-[#EBE8DF]/80 p-8 flex flex-col justify-between select-none ${selectedAspectClass} ${className}`}
        aria-label={`Media placeholder: ${label}`}
      >
        {/* Soft studio lighting gradient backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: 'radial-gradient(ellipse at 50% 30%, #FFFFFF 0%, #DED9CC 100%)',
          }}
        />

        {/* Subtle geometric framing */}
        <div
          className="absolute inset-4 border border-dashed border-[#15181D]/15 pointer-events-none"
        />

        {/* Top clean marker */}
        <div className="relative z-10 flex items-center justify-between text-xs tracking-wider text-[#697078] font-mono">
          <span className="flex items-center gap-1.5 uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
            {slotLabel || '[ HERO / IDENTITY MEDIA ]'}
          </span>
          <span className="text-[11px] text-[#697078]/70">4:5 Editorial</span>
        </div>

        {/* Center Human Portrait Placeholder Silhouette */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center py-6 text-center">
          <div className="w-20 h-20 rounded-full bg-white/80 border border-hairline flex items-center justify-center mb-4">
            {getIcon()}
          </div>
          <div className="max-w-[280px]">
            <h4 className="text-base font-serif font-medium tracking-tight text-[#15181D] leading-snug">
              {label}
            </h4>
            <p className="mt-1.5 text-xs text-[#697078] leading-relaxed">
              {sublabel || 'Natural editorial portrait of Razin Abdillah. Preserves intended 4:5 aspect ratio.'}
            </p>
          </div>
        </div>

        {/* Bottom context */}
        <div className="relative z-10 flex items-center justify-between pt-3 border-t border-hairline/60 text-[11px] text-[#697078] font-mono">
          <span>Surabaya, Indonesia</span>
          <span>ITS Electrical Engineering</span>
        </div>
      </div>
    );
  }

  // Calm, designed editorial visual placeholder
  return (
    <div
      className={`relative overflow-hidden border border-hairline bg-[#EBE8DF]/70 p-6 flex flex-col justify-between select-none ${selectedAspectClass} ${className}`}
      aria-label={`Visual preview: ${label}`}
    >
      {/* Subtle blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#15181D 1px, transparent 1px), radial-gradient(#15181D 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* Top clean marker */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-wider text-[#697078] font-mono">
        <span className="flex items-center gap-1.5 uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
          {slotLabel || `[ ${getTypeLabel().toUpperCase()} ]`}
        </span>
        <span className="text-[11px] text-[#697078]/70">Visual Record</span>
      </div>

      {/* Center conceptual graphic */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4 text-center">
        <div className="p-3 bg-[#F3F1EB] border border-hairline shadow-xs mb-3">
          {getIcon()}
        </div>
        <div className="max-w-[320px]">
          <h4 className="text-sm font-semibold tracking-tight text-[#15181D] leading-snug">
            {label}
          </h4>
          {sublabel && (
            <p className="mt-1 text-xs text-[#697078] line-clamp-2 leading-relaxed">
              {sublabel}
            </p>
          )}
        </div>
      </div>

      {/* Bottom context */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-hairline/60 text-[11px] text-[#697078] font-mono">
        <span>Intentional Media Slot</span>
        <span>Documentation</span>
      </div>
    </div>
  );
};
