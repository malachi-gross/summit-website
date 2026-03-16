import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - Summit',
  description: 'Terms of Use for Summit habit tracking app.',
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Use</h1>
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-[#8E8E93] mb-6">
            Last updated: March 2024
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              By downloading, installing, or using the Summit application (&quot;App&quot;), you agree to be bound
              by these Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              Summit is a habit tracking application designed to help users build and maintain daily routines.
              The App provides features including habit tracking, streak monitoring, reminders, and analytics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              To use certain features of the App, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur
              under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Subscription and Payments</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              Summit offers both free and pro subscription options. Pro subscriptions are billed through
              the App Store. All purchases are subject to the App Store&apos;s terms and conditions. Subscriptions
              automatically renew unless cancelled at least 24 hours before the end of the current period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. User Content</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              You retain ownership of any content you create within the App, including habit names and notes.
              By using the App, you grant us a limited license to store and process this content solely for
              the purpose of providing the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Prohibited Conduct</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              You agree not to: (a) use the App for any unlawful purpose; (b) attempt to gain unauthorized
              access to any portion of the App; (c) interfere with or disrupt the App or servers; (d) reverse
              engineer or attempt to extract the source code of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              The App is provided &quot;as is&quot; without warranties of any kind. We do not guarantee that the App
              will be error-free, uninterrupted, or free of harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising from your use of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p className="text-[#8E8E93] leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material
              changes through the App or via email. Continued use of the App after such notification
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact</h2>
            <p className="text-[#8E8E93] leading-relaxed">
              If you have any questions about these Terms, please contact us at summitapp.support@gmail.com.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
