import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'wide' | 'narrow' | 'full';
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className = '',
  as: Component = 'div',
}) => {
  const sizeStyles = {
    narrow: 'max-w-3xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    full: 'w-full',
  }[size];

  return (
    <Component className={`mx-auto px-4 sm:px-6 md:px-8 ${sizeStyles} ${className}`}>
      {children}
    </Component>
  );
};
