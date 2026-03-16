'use client';

import { cn } from '@/lib/cn';
import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  hover?: boolean;
  gradient?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, gradient = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-[16px] bg-[#1C1C1E] border border-[#2C2C2E] p-6',
          gradient && 'bg-gradient-to-br from-[#1C1C1E] to-[#0C0C0E]',
          className
        )}
        whileHover={hover ? {
          y: -4,
          boxShadow: '0 20px 40px rgba(0, 212, 123, 0.1)'
        } : undefined}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
