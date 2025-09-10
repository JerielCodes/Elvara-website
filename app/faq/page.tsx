import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import FAQAccordion from '@/components/faq/faq-accordion';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about Elvara\'s growth systems, AI reception, pricing, and more.',
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently asked questions
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Everything you need to know about Elvara's growth systems
            </p>
          </div>
        </SectionContainer>

        {/* FAQ Content */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion />
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Contact CTA */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="mb-6">
                <MessageCircle className="h-12 w-12 text-brand-green mx-auto" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Get in touch and we'll answer any questions about our growth systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/book">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}