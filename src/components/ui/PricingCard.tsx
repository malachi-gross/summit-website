'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import { Button } from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  cta: string;
  highlighted?: boolean;
  savings?: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
  savings,
}: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-[16px] p-6 md:p-8 flex flex-col',
        highlighted
          ? 'bg-gradient-to-b from-[#00D47B]/10 to-transparent border-2 border-[#00D47B]'
          : 'bg-[#1C1C1E] border border-[#2C2C2E]'
      )}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00D47B] text-black text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-[#8E8E93] text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-[#8E8E93]">{period}</span>
        </div>
        {savings && (
          <span className="inline-block mt-2 text-[#00D47B] text-sm font-medium">
            {savings}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className={cn(
                'w-5 h-5 flex-shrink-0 mt-0.5',
                highlighted ? 'text-[#00D47B]' : 'text-[#8E8E93]'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'primary' : 'secondary'}
        className="w-full"
        href="#"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
