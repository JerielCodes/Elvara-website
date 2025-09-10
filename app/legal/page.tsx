import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'Terms of Service and Privacy Policy for Elvara growth systems.',
};

export default function LegalPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal Information
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our commitment to transparency and protecting your business
            </p>
          </div>
        </SectionContainer>

        {/* Legal Documents */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-brand-green" />
                  </div>
                  <CardTitle className="text-2xl">Terms of Service</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Our terms outline the agreement between Elvara and your business, 
                    including service provisions, responsibilities, and usage guidelines.
                  </p>
                  <Link 
                    href="/legal/terms" 
                    className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium"
                  >
                    Read Terms of Service →
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-brand-green" />
                  </div>
                  <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">
                    Learn how we collect, use, and protect your business data, 
                    including our commitment to security and confidentiality.
                  </p>
                  <Link 
                    href="/legal/privacy" 
                    className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium"
                  >
                    Read Privacy Policy →
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Have questions about our legal policies?
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-brand-green hover:text-brand-green-dark font-medium"
              >
                Contact our legal team →
              </Link>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Placeholder Legal Content */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Summary</h2>
                <div className="prose max-w-none text-gray-700">
                  <h3 className="text-lg font-semibold mb-3">Data Protection</h3>
                  <p className="mb-4">
                    We implement enterprise-level security measures to protect your business data, 
                    including encryption, secure cloud storage, and regular security audits. 
                    We are compliant with GDPR, CCPA, and industry-specific regulations.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">Service Guarantees</h3>
                  <p className="mb-4">
                    Our growth systems come with performance guarantees and service level agreements. 
                    We're committed to delivering measurable results for your business.
                  </p>

                  <h3 className="text-lg font-semibold mb-3">Contract Terms</h3>
                  <p className="mb-4">
                    We offer flexible, month-to-month agreements with no long-term contracts. 
                    You can upgrade, downgrade, or cancel your service at any time.
                  </p>

                  <div className="mt-8 p-4 bg-brand-green/5 rounded-lg border border-brand-green/20">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> This is a summary for informational purposes. 
                      Please refer to the complete Terms of Service and Privacy Policy documents 
                      for detailed legal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}