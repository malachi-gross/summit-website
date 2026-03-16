export const APP_NAME = 'Summit';
export const APP_TAGLINE = 'Climb higher every day.';
export const APP_DESCRIPTION = 'The habit tracking app that helps you build lasting routines through streaks, insights, and beautiful design.';
export const APP_STORE_URL = 'https://apps.apple.com/us/app/summit-habit-tracker/id6751303035';

export const FEATURES = [
  {
    icon: 'CheckCircle',
    title: 'Simple Habit Tracking',
    description: 'Track your daily habits with a single tap. No complex setup, just start building better routines.',
  },
  {
    icon: 'Flame',
    title: 'Streak Motivation',
    description: 'Watch your streaks grow and stay motivated. Visual progress keeps you accountable day after day.',
  },
  {
    icon: 'ChartBar',
    title: 'Powerful Insights',
    description: 'Understand your patterns with detailed analytics. See your progress over weeks, months, and years.',
  },
  {
    icon: 'Bell',
    title: 'Smart Reminders',
    description: 'Never miss a habit with customizable notifications. Set the perfect time for each routine.',
  },
  {
    icon: 'Users',
    title: 'Partner Accountability',
    description: 'Connect with a partner to share progress and stay accountable together.',
  },
  {
    icon: 'Sparkles',
    title: 'Beautiful Design',
    description: 'A stunning dark interface that feels native to iOS. Track habits in style.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Add Your Habits',
    description: 'Create habits that matter to you. Set daily, weekly, or custom schedules.',
  },
  {
    step: 2,
    title: 'Track Daily',
    description: 'Check off habits as you complete them. Build momentum with every tap.',
  },
  {
    step: 3,
    title: 'Watch Progress',
    description: 'See your streaks grow and insights improve. Celebrate your consistency.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Summit has completely transformed my morning routine. The streak feature keeps me coming back every single day.",
    author: "Sarah M.",
    role: "Fitness Enthusiast",
  },
  {
    quote: "Finally, a habit app that doesn't feel cluttered. Clean, simple, and effective. Exactly what I needed.",
    author: "James K.",
    role: "Software Developer",
  },
  {
    quote: "The partner accountability feature is a game-changer. My wife and I keep each other on track daily.",
    author: "Michael R.",
    role: "Entrepreneur",
  },
] as const;

export const PRICING = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Up to 3 habits',
      'Basic streak tracking',
      'Daily reminders',
      'Weekly insights',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  pro: {
    name: 'Summit Pro',
    monthly: {
      price: '$4.99',
      period: '/month',
    },
    annual: {
      price: '$29.99',
      period: '/year',
      savings: 'Save 50%',
    },
    lifetime: {
      price: '$79.99',
      period: 'one-time',
    },
    description: 'For those serious about growth',
    features: [
      'Unlimited habits',
      'Advanced analytics',
      'Partner accountability',
      'Custom habit icons',
      'Widget support',
      'Priority support',
      'All future features',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
} as const;

export const FAQ = [
  {
    question: 'Is Summit really free to use?',
    answer: 'Yes! Summit is free to download and use with up to 3 habits. You can track streaks, set reminders, and view basic insights without paying anything.',
  },
  {
    question: 'What devices does Summit support?',
    answer: 'Summit is currently available on iOS (iPhone and iPad). Android support is coming soon - join our waitlist to be notified!',
  },
  {
    question: 'How does partner accountability work?',
    answer: 'With Summit Pro, you can invite a partner to share habit progress. You\'ll see when they complete habits and receive notifications to keep each other accountable.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time through the App Store. Your Pro features will remain active until the end of your billing period.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Your privacy is our priority. Habit data is stored securely and never shared with third parties. You can delete your data at any time from within the app.',
  },
  {
    question: 'What makes Summit different from other habit apps?',
    answer: 'Summit focuses on simplicity and motivation. Our beautiful dark interface, streak visualization, and partner accountability features create a unique experience that keeps you coming back.',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
  social: [
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
} as const;
