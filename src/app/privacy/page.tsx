import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Summit',
  description: 'Privacy Policy for Summit habit tracking app.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-[#8E8E93] mb-6">
            Last updated: March 2024
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              Summit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your
              personal data. This Privacy Policy explains how we collect, use, and safeguard your information
              when you use our habit tracking application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-[#8E8E93] mb-4 space-y-2">
              <li><strong className="text-white">Account Information:</strong> Email address and display name when you create an account</li>
              <li><strong className="text-white">Habit Data:</strong> Habits you create, completion records, and streaks</li>
              <li><strong className="text-white">Device Information:</strong> Device type, operating system, and app version</li>
              <li><strong className="text-white">Usage Data:</strong> How you interact with the App, including features used and time spent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-[#8E8E93] mb-4 space-y-2">
              <li>Provide and maintain the App&apos;s functionality</li>
              <li>Sync your data across devices</li>
              <li>Send notifications and reminders you&apos;ve requested</li>
              <li>Improve and optimize the App</li>
              <li>Communicate with you about updates and support</li>
              <li>Enable partner accountability features (if you opt in)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Storage and Security</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              Your data is stored securely using industry-standard encryption. We use Firebase for data
              storage, which employs robust security measures. We implement appropriate technical and
              organizational measures to protect your personal data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Data Sharing</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We do not sell your personal data. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-[#8E8E93] mb-4 space-y-2">
              <li><strong className="text-white">With your consent:</strong> When you use partner accountability features</li>
              <li><strong className="text-white">Service providers:</strong> Third-party services that help us operate the App (e.g., Firebase, analytics)</li>
              <li><strong className="text-white">Legal requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#8E8E93] mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data and account</li>
              <li>Export your data</li>
              <li>Opt out of non-essential data collection</li>
            </ul>
            <p className="text-[#8E8E93] leading-relaxed">
              You can manage these options within the App&apos;s settings or by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Data Retention</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We retain your data for as long as your account is active. If you delete your account, we will
              delete your personal data within 30 days, except where we are required to retain it for legal
              or legitimate business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              The App is not intended for children under 13. We do not knowingly collect personal information
              from children under 13. If you believe we have collected such information, please contact us
              immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes
              through the App or via email. Your continued use of the App after such notification constitutes
              acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-[#8E8E93] leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at
              privacy@summitapp.com.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
