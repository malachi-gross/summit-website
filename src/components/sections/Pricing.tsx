'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { PricingCard } from '@/components/ui/PricingCard';
import { FadeIn } from '@/components/animations/FadeIn';
import { PRICING } from '@/lib/constants';
import { cn } from '@/lib/cn';

type BillingCycle = 'monthly' | 'annual' | 'lifetime';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  const proPrice = PRICING.pro[billingCycle];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-black to-[#0C0C0E]">
      <Container>
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, <span className="text-[#00D47B]">transparent</span> pricing
          </h2>
          <p className="text-lg text-[#8E8E93] max-w-2xl mx-auto">
            Start for free, upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </FadeIn>

        {/* Billing Toggle */}
        <FadeIn delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-[#1C1C1E] rounded-full p-1">
            {(['monthly', 'annual', 'lifetime'] as BillingCycle[]).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                  billingCycle === cycle
                    ? 'text-black'
                    : 'text-[#8E8E93] hover:text-white'
                )}
              >
                {billingCycle === cycle && (
                  <motion.div
                    layoutId="billing-indicator"
                    className="absolute inset-0 bg-[#00D47B] rounded-full"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 capitalize">{cycle}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <PricingCard
              name={PRICING.free.name}
              price={PRICING.free.price}
              period={PRICING.free.period}
              description={PRICING.free.description}
              features={PRICING.free.features}
              cta={PRICING.free.cta}
              highlighted={false}
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <PricingCard
              name={PRICING.pro.name}
              price={proPrice.price}
              period={proPrice.period}
              description={PRICING.pro.description}
              features={PRICING.pro.features}
              cta={PRICING.pro.cta}
              highlighted={true}
              savings={'savings' in proPrice ? proPrice.savings : undefined}
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
