import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  className = '',
  align = 'left',
  dark = false,
}) => {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-mono tracking-widest uppercase ${
            dark ? 'text-[#7696E8]' : 'text-[#3157D5]'
          }`}
        >
          {label}
        </span>
      </div>

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-serif font-normal tracking-tight leading-[1.15] text-balance ${
          dark ? 'text-[#F3F1EB]' : 'text-[#15181D]'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-[#F3F1EB]/70' : 'text-[#697078]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
