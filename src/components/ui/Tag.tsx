import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'warm' | 'green' | 'dark';
  className?: string;
  size?: 'sm' | 'md';
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  className = '',
  size = 'sm',
}) => {
  const variantStyles = {
    default: 'bg-[#EBE8DF] text-[#15181D]',
    accent: 'bg-[#3157D5]/10 text-[#3157D5]',
    warm: 'bg-[#C98259]/10 text-[#C98259]',
    green: 'bg-[#718878]/10 text-[#718878]',
    dark: 'bg-white/10 text-white',
  }[variant];

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
