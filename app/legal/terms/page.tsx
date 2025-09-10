import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import SectionContainer from '@/components/ui/section-container';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Elvara growth systems and services.',
};

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
                <p className="mb-4">
                  By accessing and using Elvara's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. These Terms of Service govern your use of the service 
                  operated by Elvara.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services Description</h2>
                <p className="mb-4">
                  Elvara provides growth systems for local businesses including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>AI reception and call handling services</li>
                  <li>Automated booking and scheduling systems</li>
                  <li>SEO and local search optimization</li>
                  <li>Social media management and marketing</li>
                  <li>Analytics and performance reporting</li>
                  <li>Business consulting and strategic guidance</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Subscription and Payment</h2>
                <p className="mb-4">
                  Our services are offered on a subscription basis with monthly billing cycles. 
                  Payment is due in advance for each billing period. We reserve the right to 
                  modify our pricing with 30 days advance notice.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Cancellation Policy</h2>
                <p className="mb-4">
                  You may cancel your subscription at any time. Cancellations are effective at 
                  the end of the current billing period. No refunds are provided for partial 
                  months of service.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data and Privacy</h2>
                <p className="mb-4">
                  We are committed to protecting your business data and customer information. 
                  All data is encrypted in transit and at rest. We comply with applicable 
                  data protection regulations including GDPR and CCPA.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Service Availability</h2>
                <p className="mb-4">
                  We strive to maintain 99.9% uptime for our services. Scheduled maintenance 
                  will be performed during off-peak hours with advance notice when possible.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  Elvara shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will provide notice 
                  of material changes via email or through our service. Continued use of our 
                  services after changes constitutes acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Email: legal@elvara.com</p>
                  <p>Phone: 1-800-ELVARA</p>
                  <p>Address: San Francisco, CA</p>
                </div>

                <div className="mt-8 p-4 bg-brand-green/5 rounded-lg border border-brand-green/20">
                  <p className="text-sm">
                    <strong>Disclaimer:</strong> This is a template Terms of Service document. 
                    Please consult with legal professionals to ensure compliance with all 
                    applicable laws and regulations for your specific business needs.
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