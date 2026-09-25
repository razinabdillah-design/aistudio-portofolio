import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-4 py-2 gap-2',
    lg: 'text-sm px-5 py-2.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary: 'bg-[#15181D] text-white hover:bg-[#3157D5] border-transparent shadow-xs',
    secondary: 'bg-[#EBE8DF] text-[#15181D] hover:bg-[#15181D] hover:text-white border-transparent',
    outline: 'bg-transparent text-[#15181D] border border-hairline hover:border-[#15181D]',
    ghost: 'bg-transparent text-[#697078] hover:text-[#15181D]',
  }[variant];

  const baseStyles = `inline-flex items-center justify-center font-medium rounded-md transition-all whitespace-nowrap ${sizeStyles} ${variantStyles} ${className}`;

  const arrowIcon = showArrow ? (
    external ? (
      <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
    ) : (
      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
    )
  ) : null;

  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        <span>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseStyles}
      >
        <span>{children}</span>
        {arrowIcon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseStyles}>
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
};
