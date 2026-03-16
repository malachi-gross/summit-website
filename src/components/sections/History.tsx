'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { HISTORY_STATS } from '@/lib/constants';

export function History() {
  return (
    <section id="history" className="py-20 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Device Mockup */}
          <FadeIn direction="left" className="flex justify-center lg:justify-start order-2 lg:order-1">
            <DeviceMockup floating screenshotSrc="/images/screenshot-history.png" />
          </FadeIn>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left">
                {HISTORY_STATS.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {word === 'Journey' ? (
                      <span className="text-[#00D47B]">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                ))}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg text-[#8E8E93] mb-8 text-center lg:text-left">
                {HISTORY_STATS.description}
              </p>
            </FadeIn>

            <StaggerChildren className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {HISTORY_STATS.stats.map((stat) => (
                <Card key={stat.title} className="p-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00D47B]/10 flex items-center justify-center mb-3">
                    <Icon name={stat.icon} className="w-5 h-5 text-[#00D47B]" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-[#8E8E93] text-xs leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </section>
  );
}
