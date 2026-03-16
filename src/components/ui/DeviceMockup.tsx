'use client';

import Image from 'next/image';
import { cn } from '@/lib/cn';
import { motion, type Transition } from 'framer-motion';
import { ReactNode } from 'react';

interface DeviceMockupProps {
  children?: ReactNode;
  className?: string;
  floating?: boolean;
  screenshotSrc?: string;
}

export function DeviceMockup({ children, className, floating = true, screenshotSrc }: DeviceMockupProps) {
  const floatingTransition: Transition = {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  };

  return (
    <motion.div
      className={cn('relative', className)}
      animate={floating ? { y: [0, -10, 0] } : undefined}
      transition={floating ? floatingTransition : undefined}
    >
      {/* iPhone Frame - 6.5 inch iPhone (19.5:9 aspect ratio) */}
      <div className="relative w-[280px] h-[608px] sm:w-[300px] sm:h-[652px] md:w-[320px] md:h-[696px]">
        {/* Outer frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2E] to-[#1C1C1E] rounded-[45px] p-[3px] shadow-2xl">
          {/* Inner bezel */}
          <div className="relative w-full h-full bg-black rounded-[42px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-10" />

            {/* Screen content */}
            <div className="w-full h-full">
              {children ? children : screenshotSrc ? (
                <div className="relative w-full h-full">
                  <Image
                    src={screenshotSrc}
                    alt="Summit app screenshot"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="pt-12 pb-6 px-2 h-full">
                  <PlaceholderScreen />
                </div>
              )}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-white/30 rounded-full z-10" />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[160px] w-[3px] h-[50px] bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[220px] w-[3px] h-[50px] bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute right-[-2px] top-[150px] w-[3px] h-[80px] bg-[#2C2C2E] rounded-r-sm" />
      </div>
    </motion.div>
  );
}

function PlaceholderScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#1C1C1E] to-black flex flex-col items-center justify-center p-4 rounded-[38px]">
      {/* App header mockup */}
      <div className="w-full mb-6">
        <div className="text-center">
          <div className="text-[#00D47B] text-2xl font-bold mb-1">Summit</div>
          <div className="text-[#8E8E93] text-xs">Today&apos;s Habits</div>
        </div>
      </div>

      {/* Habit cards mockup */}
      <div className="w-full space-y-3 flex-1">
        {[
          { name: 'Morning Workout', streak: 12, done: true },
          { name: 'Read 30 mins', streak: 7, done: true },
          { name: 'Meditate', streak: 21, done: false },
          { name: 'Drink Water', streak: 5, done: false },
        ].map((habit, i) => (
          <motion.div
            key={habit.name}
            className="bg-[#2C2C2E] rounded-xl p-3 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'w-6 h-6 rounded-full border-2 flex items-center justify-center',
                habit.done
                  ? 'bg-[#00D47B] border-[#00D47B]'
                  : 'border-[#8E8E93]'
              )}>
                {habit.done && (
                  <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className="text-white text-sm">{habit.name}</span>
            </div>
            <div className="flex items-center gap-1 text-[#FF9500]">
              <span className="text-xs">{habit.streak}</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress ring */}
      <div className="mt-4 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#2C2C2E"
              strokeWidth="4"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#00D47B"
              strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 28 * 0.5} ${2 * Math.PI * 28}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-semibold">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
