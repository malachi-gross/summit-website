'use client';

import { Container } from '@/components/ui/Container';
import { Accordion } from '@/components/ui/Accordion';
import { FadeIn } from '@/components/animations/FadeIn';
import { FAQ as FAQ_DATA } from '@/lib/constants';

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <Container size="md">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently asked <span className="text-[#00D47B]">questions</span>
          </h2>
          <p className="text-lg text-[#8E8E93]">
            Got questions? We&apos;ve got answers.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-[#1C1C1E] rounded-[16px] border border-[#2C2C2E] p-6 md:p-8">
            <Accordion items={FAQ_DATA} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
