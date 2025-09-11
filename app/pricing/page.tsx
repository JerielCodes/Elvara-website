import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import PricingTiers from '@/components/pricing/pricing-tiers';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect growth plan for your business. From Starter to Elite, find the right solution to scale your local business.',
};

const comparisonFeatures = [
  { feature: 'AI Reception', starter: '200 calls/month', growth: 'Unlimited', premium: 'Unlimited', elite: 'Unlimited' },
  { feature: 'Booking System', starter: 'Basic', growth: 'Advanced + Reminders', premium: 'Advanced + Reminders', elite: 'Advanced + Reminders' },
  { feature: 'SEO Services', starter: false, growth: 'Basic optimization', premium: 'Advanced + Content', elite: 'Advanced + Content' },
  { feature: 'Social Media', starter: false, growth: '3 platforms', premium: 'All platforms', elite: 'All platforms' },
  { feature: 'Paid Ads Management', starter: false, growth: false, premium: 'Google + Facebook', elite: 'Google + Facebook' },
  { feature: 'Analytics & Reporting', starter: 'Basic dashboard', growth: 'Advanced reports', premium: 'Advanced + ROI', elite: 'Custom dashboards' },
  { feature: 'Support', starter: 'Email', growth: 'Priority', premium: 'Dedicated manager', elite: 'C-suite consulting' },
  { feature: 'Custom Integrations', starter: false, growth: false, premium: false, elite: 'Unlimited' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose your growth plan
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Every plan builds into a comprehensive growth system. Start where you are, scale as you grow.
            </p>
            <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
              <Link href="/book">Book a Demo to Get Started</Link>
            </Button>
          </div>
        </SectionContainer>

        {/* Pricing Tiers */}
        <SectionContainer background="default">
          <AnimatedSection>
            <PricingTiers showDetailed={true} />
          </AnimatedSection>
        </SectionContainer>

        {/* Comparison Table */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare all features
              </h2>
              <p className="text-xl text-gray-600">
                See exactly what's included in each plan
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 bg-brand-green/10">Growth</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Partner Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? (
                            <Check className="h-4 w-4 text-brand-green mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.starter}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600 bg-brand-green/5">
                        {typeof row.growth === "boolean" ? (
                          row.growth ? (
                            <Check className="h-4 w-4 text-brand-green mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.growth}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.premium === "boolean" ? (
                          row.premium ? (
                            <Check className="h-4 w-4 text-brand-green mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.premium}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {typeof row.elite === "boolean" ? (
                          row.elite ? (
                            <Check className="h-4 w-4 text-brand-green mx-auto" />
                          ) : (
                            <X className="h-4 w-4 text-gray-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.elite}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Not sure which plan is right for you?
              </p>
              <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
                <Link href="/book">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}