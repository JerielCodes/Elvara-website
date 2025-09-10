import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import SectionContainer from '@/components/ui/section-container';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Elvara growth systems and services.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <SectionContainer background="default">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/legal"
              className="inline-flex items-center text-brand-green hover:text-brand-green-dark mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Legal
            </Link>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Business contact information (name, email, phone number)</li>
                  <li>Business details and industry information</li>
                  <li>Call recordings and transcripts (with appropriate consent)</li>
                  <li>Appointment and booking data</li>
                  <li>Website and social media analytics</li>
                  <li>Payment and billing information</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and manage your account</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments, questions, and provide customer service</li>
                  <li>Generate analytics and insights about your business performance</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing and Disclosure</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist in operating our services</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect 
                  your information against unauthorized access, alteration, disclosure, or destruction. 
                  This includes:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure cloud infrastructure with enterprise-grade protection</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
                <p className="mb-4">
                  We retain your information for as long as necessary to provide our services and 
                  fulfill the purposes outlined in this policy. When you cancel your account, 
                  we will delete or anonymize your personal information within 30 days, unless 
                  retention is required by law.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights and Choices</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to provide and improve our services. 
                  You can control cookies through your browser settings, but disabling cookies may 
                  limit your ability to use certain features of our services.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. International Data Transfers</h2>
                <p className="mb-4">
                  Your information may be transferred to and processed in countries other than your 
                  own. We ensure appropriate safeguards are in place to protect your information 
                  in accordance with this privacy policy and applicable laws.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and sending you an 
                  email notification.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Email: privacy@elvara.com</p>
                  <p>Phone: 1-800-ELVARA</p>
                  <p>Address: San Francisco, CA</p>
                </div>

                <div className="mt-8 p-4 bg-brand-green/5 rounded-lg border border-brand-green/20">
                  <p className="text-sm">
                    <strong>Disclaimer:</strong> This is a template Privacy Policy document. 
                    Please consult with legal professionals to ensure compliance with all 
                    applicable privacy laws and regulations including GDPR, CCPA, and others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}