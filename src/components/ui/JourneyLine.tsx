import React from 'react';

interface JourneyLineProps {
  variant: 'hero' | 'projects' | 'experience' | 'international' | 'organization' | 'committee' | 'systems' | 'exploring';
  className?: string;
}

export const JourneyLine: React.FC<JourneyLineProps> = ({ variant, className = '' }) => {
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      {variant === 'hero' && (
        <svg className="w-full h-8 overflow-visible" viewBox="0 0 800 32" fill="none">
          <path
            d="M0 16 H600 C640 16 660 28 700 28 H800"
            stroke="#15181D"
            strokeWidth="1"
            strokeOpacity="0.12"
          />
          <circle cx="20" cy="16" r="3" fill="#3157D5" />
          <circle cx="20" cy="16" r="6" stroke="#3157D5" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="600" cy="16" r="2.5" fill="#15181D" fillOpacity="0.3" />
        </svg>
      )}

      {variant === 'projects' && (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 800 48" fill="none">
          <path
            d="M0 24 H300 C340 24 360 8 400 8 H800"
            stroke="#3157D5"
            strokeWidth="1"
            strokeOpacity="0.18"
            strokeDasharray="4 4"
          />
          <rect x="296" y="20" width="8" height="8" rx="1.5" fill="#3157D5" fillOpacity="0.6" />
          <rect x="396" y="4" width="8" height="8" rx="1.5" fill="#3157D5" fillOpacity="0.6" />
        </svg>
      )}

      {variant === 'experience' && (
        <svg className="w-full h-10 overflow-visible" viewBox="0 0 800 40" fill="none">
          <path
            d="M0 20 H380 C410 20 420 32 450 32 H800"
            stroke="#718878"
            strokeWidth="1"
            strokeOpacity="0.25"
          />
          <circle cx="380" cy="20" r="3" fill="#718878" />
          <circle cx="450" cy="32" r="3" fill="#718878" />
        </svg>
      )}

      {variant === 'international' && (
        <svg className="w-full h-10 overflow-visible" viewBox="0 0 800 40" fill="none">
          {/* Curving flight/route path */}
          <path
            d="M0 20 Q 200 6, 400 20 T 800 20"
            stroke="#C98259"
            strokeWidth="1"
            strokeOpacity="0.25"
            strokeDasharray="6 4"
          />
          <circle cx="200" cy="13" r="3" fill="#C98259" />
          <circle cx="600" cy="27" r="3" fill="#C98259" />
        </svg>
      )}

      {variant === 'organization' && (
        <svg className="w-full h-10 overflow-visible" viewBox="0 0 800 40" fill="none">
          <path
            d="M0 20 H800"
            stroke="#15181D"
            strokeWidth="1"
            strokeOpacity="0.12"
          />
          <circle cx="250" cy="20" r="2.5" fill="#3157D5" />
          <circle cx="550" cy="20" r="2.5" fill="#7696E8" />
          <line x1="250" y1="8" x2="250" y2="32" stroke="#3157D5" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="550" y1="8" x2="550" y2="32" stroke="#7696E8" strokeWidth="1" strokeOpacity="0.2" />
        </svg>
      )}

      {variant === 'committee' && (
        <svg className="w-full h-8 overflow-visible" viewBox="0 0 800 32" fill="none">
          <path
            d="M0 16 H800"
            stroke="#15181D"
            strokeWidth="1"
            strokeOpacity="0.1"
          />
          <circle cx="200" cy="16" r="2" fill="#15181D" fillOpacity="0.3" />
          <circle cx="400" cy="16" r="2" fill="#15181D" fillOpacity="0.3" />
          <circle cx="600" cy="16" r="2" fill="#15181D" fillOpacity="0.3" />
        </svg>
      )}

      {variant === 'systems' && (
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 800 48" fill="none">
          <path
            d="M0 12 H260 C300 12 320 36 360 36 H800"
            stroke="#3157D5"
            strokeWidth="1.2"
            strokeOpacity="0.25"
          />
          <path
            d="M0 36 H260 C300 36 320 12 360 12 H800"
            stroke="#718878"
            strokeWidth="1.2"
            strokeOpacity="0.2"
          />
          <circle cx="310" cy="24" r="3" fill="#3157D5" />
        </svg>
      )}

      {variant === 'exploring' && (
        <svg className="w-full h-10 overflow-visible" viewBox="0 0 800 40" fill="none">
          <path
            d="M0 20 H700 C740 20 770 10 820 10"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.2"
            strokeDasharray="4 6"
          />
          <circle cx="700" cy="20" r="3" fill="#FFFFFF" fillOpacity="0.4" />
        </svg>
      )}
    </div>
  );
};
