'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { FadeIn } from '@/components/animations/FadeIn';
import { APP_TAGLINE, APP_DESCRIPTION, APP_STORE_URL } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00D47B]/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D47B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#007AFF]/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {APP_TAGLINE.split(' ').map((word, i) => (
                  <span key={i}>
                    {word === 'higher' ? (
                      <span className="text-[#00D47B]">{word}</span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                ))}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-[#8E8E93] mb-8 max-w-lg mx-auto lg:mx-0">
                {APP_DESCRIPTION}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" href={APP_STORE_URL}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download for iOS
                </Button>
                <Button variant="secondary" size="lg" href="#features">
                  Learn More
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFD60A]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[#8E8E93] text-sm">
                  4.9 rating on App Store
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Device Mockup */}
          <FadeIn delay={0.3} direction="right" className="flex justify-center lg:justify-end">
            <DeviceMockup floating screenshotSrc="/images/app-screenshot.png" />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
