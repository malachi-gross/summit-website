'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/animations/FadeIn';
import { TESTIMONIALS } from '@/lib/constants';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32">
      <Container size="md">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by <span className="text-[#00D47B]">hundreds</span>
          </h2>
          <p className="text-lg text-[#8E8E93]">
            See what our users have to say about Summit.
          </p>
        </FadeIn>

        <div className="relative min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote */}
              <div className="mb-8">
                <svg
                  className="w-10 h-10 text-[#00D47B]/30 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div>
                <p className="text-white font-semibold">
                  {TESTIMONIALS[currentIndex].author}
                </p>
                <p className="text-[#8E8E93] text-sm">
                  {TESTIMONIALS[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                  ? 'bg-[#00D47B] w-6'
                  : 'bg-[#2C2C2E] hover:bg-[#3C3C3E]'
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
