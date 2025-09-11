import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Analytics Dashboards Service',
  description: 'Real-time insights into your business performance with actionable growth recommendations.',
};

const whatsIncluded = [
  'Custom dashboard creation',
  'Data integration and visualization',
  'Performance tracking',
  'Automated reporting',
  'Growth insights and recommendations',
  'Monthly strategy reviews',
  'Real-time monitoring',
  'Custom KPI tracking'
];

const howItWorks = [
  'Audit your current data sources and metrics',
  'Design custom dashboard for your KPIs',
  'Integrate data from all business systems',
  'Set up automated reporting and alerts',
  'Provide monthly insights and recommendations'
];

export default function AnalyticsDashboardsPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Analytics Dashboards</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Real-time insights into your business performance with actionable growth recommendations.
            </p>
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
              <Link href="/book">Book a Demo</Link>
            </Button>
          </div>
        </SectionContainer>

        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's included</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Complete analytics solution</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatsIncluded.map((item, index) => (
                <Card key={index} className="text-center bg-white">
                  <CardContent className="p-6">
                    <Check className="h-8 w-8 text-brand-green mx-auto mb-4" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Starting at $149/month for comprehensive analytics</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Analytics Dashboards</CardTitle>
                  <div className="text-4xl font-bold text-brand-green">Starting at $149/month</div>
                  <p className="text-gray-600">Complete analytics solution</p>
                </CardHeader>
                <CardContent>
                  <div className="mt-8 p-6 bg-brand-green/5 rounded-lg border border-brand-green/20">
                    <p className="text-center text-gray-700">
                      <strong>Final quote depends on scope and volume; we'll price it together after a quick call.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </SectionContainer>

        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Strategic analytics implementation</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step {index + 1}</h3>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>

        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready for better insights?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a demo to see how our analytics can improve your business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
                  <Link href="/book">Book a Demo</Link>
                </Button>
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
                  <Link href="/contact">Contact Us</Link>
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
