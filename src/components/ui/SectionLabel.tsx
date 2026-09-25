import React from 'react';

interface SectionLabelProps {
  number?: string;
  label: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${
        isDark ? 'text-[#7696E8]' : 'text-[#3157D5]'
      } ${className}`}
    >
      {number && (
        <span className={isDark ? 'text-[#7696E8]/70' : 'text-[#3157D5]/70'}>
          {number}
        </span>
      )}
      {number && <span aria-hidden="true">·</span>}
      <span className="font-semibold">{label}</span>
    </div>
  );
};
