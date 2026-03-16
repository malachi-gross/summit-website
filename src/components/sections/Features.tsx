'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { FEATURES, HISTORY_STATS } from '@/lib/constants';

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for the{' '}
            <span className="text-[#00D47B]">climb</span>
          </h2>
          <p className="text-lg text-[#8E8E93] max-w-2xl mx-auto">
            Summit&apos;s unique approach turns habit tracking into a daily achievement.
            Start in debt, complete your habits, and reach your summit.
          </p>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="w-12 h-12 rounded-xl bg-[#00D47B]/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="w-6 h-6 text-[#00D47B]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[#8E8E93] text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </StaggerChildren>

        {/* Insights showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          <FadeIn direction="left" className="flex justify-center lg:justify-start">
            <DeviceMockup
              floating={false}
              screenshots={[
                '/images/screenshot-history.png',
                '/images/screenshot-insights-1.png',
                '/images/screenshot-insights-2.png',
              ]}
              carouselInterval={5500}
            />
          </FadeIn>

          <div>
            <FadeIn>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center lg:text-left">
                {HISTORY_STATS.title.split(' ').map((word, i) => (
                  <span key={i}>
                    {word === 'Journey' ? (
                      <span className="text-[#00D47B]">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                ))}
              </h3>
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
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {stat.title}
                  </h4>
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
