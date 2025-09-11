import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Check, Clock, Users, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Services - Local & On-page Optimization',
  description: 'Dominate local search results with optimized listings, content, and review management.',
};

const whatsIncluded = [
  'Local SEO optimization for Google My Business',
  'On-page SEO improvements and optimization',
  'Content creation and optimization',
  'Review management and response',
  'Local citation building and management',
  'Monthly performance reports and analytics',
  'Keyword research and strategy development',
  'Technical SEO audits and fixes'
];

const howItWorks = [
  'Conduct comprehensive SEO audit of your current online presence',
  'Optimize Google My Business and local business listings',
  'Improve on-page SEO across your website',
  'Create and optimize content for target keywords',
  'Build local citations and improve online reputation',
  'Monitor rankings and adjust strategy monthly'
];

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. You may see initial improvements in 2-3 months, with significant results typically appearing in 6-12 months.'
  },
  {
    question: 'Do you work with businesses in any location?',
    answer: 'Yes, we work with businesses nationwide. Our local SEO strategies are tailored to your specific market and competition.'
  },
  {
    question: "What's included in monthly reporting?",
    answer: 'Monthly reports include keyword rankings, website traffic, local search visibility, review performance, and actionable recommendations.'
  },
  {
    question: 'Can you help with existing websites?',
    answer: "Absolutely! We can audit and optimize existing websites, or help with new website development that's SEO-optimized from the start."
  }
];

export default function SEOPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <Search className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Dominate local search results with optimized listings, content, and review management.
            </p>
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
              <Link href="/book">Book a Demo</Link>
            </Button>
          </div>
        </SectionContainer>

        {/* What's Included */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What's included
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive SEO services to improve your online visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatsIncluded.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Check className="h-8 w-8 text-brand-green mx-auto mb-4" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Pricing */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Starting at $399/month for comprehensive SEO services
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">SEO Services</CardTitle>
                  <div className="text-4xl font-bold text-brand-green">Starting at $399/month</div>
                  <p className="text-gray-600">Comprehensive local and on-page SEO</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Local SEO</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Google My Business optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Local citation building</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Review management</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Local keyword optimization</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">On-page SEO</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Website optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Content creation and optimization</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Technical SEO audits</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Monthly performance reports</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
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

        {/* How It Works */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Strategic approach to improving your search visibility
              </p>
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

        {/* FAQ */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our SEO services
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* CTA */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to dominate local search?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a demo to see how our SEO services can improve your online visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
                  <Link href="/book">Book a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
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
