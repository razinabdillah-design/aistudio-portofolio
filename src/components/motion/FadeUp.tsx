import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { motionTokens } from './tokens';

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  className = '',
  delay = 0,
  duration = motionTokens.duration.normal,
  offset = 20,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: motionTokens.ease.standard,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
