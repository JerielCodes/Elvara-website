import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/home/hero-section';
import ProofSection from '@/components/home/proof-section';
import PricingTiers from '@/components/pricing/pricing-tiers';
import FAQAccordion from '@/components/faq/faq-accordion';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, TrendingUp, BarChart3, Megaphone, Globe } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Phone className="h-8 w-8 text-brand-green" />,
    title: 'AI Reception',
    description: 'Never miss a call again. Our AI handles inquiries, books appointments, and provides information 24/7.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-green" />,
    title: 'Smart Booking',
    description: 'Automated scheduling with reminders, follow-ups, and seamless calendar integration.',
  },
  {
    icon: <Globe className="h-8 w-8 text-brand-green" />,
    title: 'SEO & Local Search',
    description: 'Dominate local search results with optimized listings, content, and review management.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-brand-green" />,
    title: 'Social Media',
    description: 'Consistent, engaging content across all platforms to build your brand and attract customers.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-green" />,
    title: 'Lead Nurturing',
    description: 'Automated follow-ups and nurturing sequences that convert prospects into loyal customers.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-brand-green" />,
    title: 'Growth Analytics',
    description: 'Real-time insights into your business performance with actionable growth recommendations.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <HeroSection />
        <ProofSection />

        {/* Plans Overview */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Growth plans that scale with you
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Each tier builds into a comprehensive growth system designed to move your business forward
              </p>
            </div>
            <PricingTiers showDetailed={true} />
            <div className="text-center mt-12">
              <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
                <Link href="/pricing">View Full Pricing Details</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Features Snapshot */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything your business needs to grow
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From AI reception to advanced marketing, we handle it all so you can focus on what you do best
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-full group-hover:bg-brand-green/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* FAQ Preview */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our growth systems
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion limit={6} />
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/faq">View All FAQs</Link>
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