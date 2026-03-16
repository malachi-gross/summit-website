'use client';

import { cn } from '@/lib/cn';
import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  href?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#00D47B] text-black hover:bg-[#00B868] shadow-lg shadow-[#00D47B]/20',
  secondary: 'bg-[#1C1C1E] text-white border border-[#2C2C2E] hover:bg-[#2C2C2E]',
  ghost: 'bg-transparent text-white hover:bg-[#1C1C1E]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2 font-semibold rounded-[14px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00D47B] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <motion.a
          href={href}
          className={baseClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={baseClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
