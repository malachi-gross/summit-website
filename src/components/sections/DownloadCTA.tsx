'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { APP_STORE_URL } from '@/lib/constants';

export function DownloadCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0E] to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D47B]/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to climb <span className="text-[#00D47B]">higher</span>?
          </h2>
          <p className="text-lg sm:text-xl text-[#8E8E93] max-w-2xl mx-auto mb-8">
            Join thousands of people building better habits with Summit.
            Start your journey today — it&apos;s free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href={APP_STORE_URL}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </Button>
            <Button variant="secondary" size="lg" href="#pricing">
              View Pricing
            </Button>
          </div>

          <p className="mt-6 text-[#8E8E93] text-sm">
            Free to download • No credit card required
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
