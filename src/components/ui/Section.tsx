import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
  theme?: 'light' | 'dark' | 'subtle';
  as?: React.ElementType;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  bleed = false,
  theme = 'light',
  as: Component = 'section',
}) => {
  const themeStyles = {
    light: 'bg-[#F3F1EB] text-[#15181D]',
    subtle: 'bg-[#EBE8E0] text-[#15181D]',
    dark: 'bg-[#15181D] text-[#F3F1EB]',
  }[theme];

  return (
    <Component
      id={id}
      className={`py-16 sm:py-20 md:py-28 relative ${themeStyles} ${bleed ? 'w-full' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};
