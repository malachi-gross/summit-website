export const APP_NAME = 'Summit';
export const APP_TAGLINE = 'Start in debt. Reach your summit.';
export const APP_DESCRIPTION = 'The habit tracker that flips the script. Wake up in the red, complete your habits, and watch your score transform from negative to positive. Every day is a climb to your summit.';
export const APP_STORE_URL = 'https://apps.apple.com/us/app/summit-habit-tracker/id6751303035';

export const FEATURES = [
  {
    icon: 'TrendingUp',
    title: 'Start in Debt',
    description: 'Begin each day with negative points based on your difficulty preset: Easy (-10), Medium (-20), Hard (-30), or Custom.',
  },
  {
    icon: 'Target',
    title: 'Reach Your Summit',
    description: 'Watch your score transform from red to green as you complete habits. Hit your daily goal and claim victory.',
  },
  {
    icon: 'PlusMinus',
    title: 'Positive & Negative Habits',
    description: 'Track positive habits that earn points when completed. With Pro, track negative habits too—slip up and lose points.',
  },
  {
    icon: 'ChartBar',
    title: 'Powerful Insights',
    description: 'View heatmaps, track scores over time, and celebrate perfect days. See your progress at a glance.',
  },
  {
    icon: 'Users',
    title: 'Partner Accountability',
    description: 'Climb together with a partner. Share progress and keep each other motivated on the journey.',
  },
  {
    icon: 'Layers',
    title: '40+ Habit Templates',
    description: 'Choose from expertly-crafted templates across 8 categories: Health, Fitness, Productivity, Learning, Mindfulness, Social, Creative, and Finance.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Start in Debt',
    description: 'Wake up with negative points. Your daily habits determine how deep you start—the more habits, the bigger the climb.',
    color: '#FF3B30',
  },
  {
    step: 2,
    title: 'Complete Habits',
    description: 'Check off habits throughout the day. Each completion adds points and moves you closer to zero and beyond.',
    color: '#FF9500',
  },
  {
    step: 3,
    title: 'Reach Your Summit',
    description: 'Cross into positive territory and hit your goal. Green means victory—you\'ve conquered the day.',
    color: '#00D47B',
  },
] as const;

export const HISTORY_STATS = {
  title: 'Track Your Journey',
  description: 'See your progress unfold over time. Summit\'s history view gives you a complete picture of your habit journey with powerful visualizations.',
  stats: [
    {
      icon: 'Link',
      title: 'Habit Connections',
      description: 'Discover which habits you complete together and build powerful routines',
    },
    {
      icon: 'ChartBar',
      title: 'Daily Performance',
      description: 'See your strongest and weakest days to optimize your schedule',
    },
    {
      icon: 'TrendingUp',
      title: 'Weekly Trends',
      description: 'Track how your completion rate changes week over week',
    },
    {
      icon: 'Star',
      title: 'Most Consistent',
      description: 'Rank your habits by completion rate and celebrate your wins',
    },
  ],
} as const;


export const PRICING = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 habits',
      'Positive habit tracking',
      'Streak tracking',
      'Daily & weekly analytics',
      'Home screen widgets',
      'Difficulty presets',
      '10 habit templates',
      '4 weeks history',
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
      price: '$39.99',
      period: '/year',
      savings: 'Save 33%',
    },
    lifetime: {
      price: '$79.99',
      period: 'one-time',
      savings: 'Best Value',
    },
    description: 'For those serious about growth',
    features: [
      'Unlimited habits',
      'Negative habit tracking',
      'Monthly & yearly analytics',
      'Score heatmaps',
      'Advanced insights & trends',
      '40+ habit templates',
      'Complete history access',
      'Accountability partner',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
} as const;

export const FAQ = [
  {
    question: 'How does the points system work?',
    answer: 'Each habit has a point value you assign (1-5 points). Positive habits add points when completed, while negative habits (like "no social media") subtract points if you break them. Your daily goal is to reach a positive score, turning your display from red to green.',
  },
  {
    question: 'What are positive vs negative habits?',
    answer: 'Positive habits are things you want to do (exercise, read, meditate) and earn you points. Negative habits are things you want to avoid (smoking, junk food, excessive screen time)—you start with those points, but lose them if you slip up. Both types help you build the life you want.',
  },
  {
    question: 'What makes Summit different from other habit apps?',
    answer: 'Summit\'s debt-to-goal system creates urgency and satisfaction that other apps lack. Instead of passive checkboxes, you\'re actively climbing out of the red each day. The visual transformation from negative (red) to positive (green) provides instant, motivating feedback on your progress.',
  },
  {
    question: 'Is Summit really free to use?',
    answer: 'Yes! Summit is free to download and use with up to 5 habits. You get streak tracking, daily and weekly analytics, home screen widgets, difficulty presets, 10 habit templates, and 4 weeks of history—all without paying anything.',
  },
  {
    question: 'What devices does Summit support?',
    answer: 'Summit is currently available on iOS (iPhone and iPad). We\'re building support for Android, Web, macOS, Windows, and Linux—your habits will sync seamlessly across all your devices when they launch.',
  },
  {
    question: 'How does partner accountability work?',
    answer: 'With Summit Pro, you can invite a partner to share habit progress. You\'ll see when they complete habits and receive notifications to keep each other accountable on your climb.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time through the App Store. Your Pro features will remain active until the end of your billing period.',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Features', href: '/summit-website/#features' },
  { label: 'How It Works', href: '/summit-website/#how-it-works' },
  { label: 'Pricing', href: '/summit-website/#pricing' },
  { label: 'FAQ', href: '/summit-website/#faq' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/summit-website/#features' },
    { label: 'Pricing', href: '/summit-website/#pricing' },
    { label: 'FAQ', href: '/summit-website/#faq' },
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
