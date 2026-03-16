'use client';

import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { HOW_IT_WORKS } from '@/lib/constants';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-[#0C0C0E] to-black">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How it <span className="text-[#00D47B]">works</span>
          </h2>
          <p className="text-lg text-[#8E8E93] max-w-2xl mx-auto">
            Every day is a journey from debt to victory. Here&apos;s how Summit transforms your habits.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.15}>
              <div className="relative">
                {/* Connector line with gradient */}
                {index < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px]"
                    style={{
                      background: `linear-gradient(to right, ${item.color}, ${HOW_IT_WORKS[index + 1].color})`,
                      opacity: 0.6,
                    }}
                  />
                )}

                <div className="text-center">
                  {/* Step number with dynamic color */}
                  <div
                    className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#8E8E93] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
