import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface TextLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  variant?: 'primary' | 'muted' | 'subtle';
  showArrow?: boolean;
}

export const TextLink: React.FC<TextLinkProps> = ({
  to,
  href,
  children,
  external = false,
  className = '',
  variant = 'primary',
  showArrow = false,
}) => {
  const variantStyles = {
    primary: 'text-[#15181D] hover:text-[#3157D5]',
    muted: 'text-[#697078] hover:text-[#15181D]',
    subtle: 'text-[#3157D5] hover:text-[#15181D]',
  }[variant];

  const baseStyles = `inline-flex items-center gap-1.5 transition-colors underline-offset-4 ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-3.5 h-3.5" />}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={baseStyles}
    >
      <span>{children}</span>
      {showArrow && (external ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />)}
    </a>
  );
};
