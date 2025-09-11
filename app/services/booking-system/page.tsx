import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, Check, Clock, Users, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Booking System Setup Service',
  description: 'Streamlined online booking with automated reminders, follow-ups, and seamless calendar integration.',
};

const whatsIncluded = [
  'Custom booking page design and development',
  'Calendar synchronization with Google, Outlook, and others',
  'Automated email reminders and confirmations',
  'SMS notifications for appointments',
  'Payment processing integration',
  'Multi-location and multi-service support',
  'Customer self-service portal',
  'Analytics and reporting dashboard'
];

const howItWorks = [
  'Audit your current booking process and identify pain points',
  'Design a custom booking flow tailored to your business',
  'Set up calendar integrations and synchronization',
  'Configure automated reminder sequences and notifications',
  'Test the system thoroughly with your team',
  'Launch with training and ongoing support'
];

const faqs = [
  {
    question: 'How long does it take to set up a booking system?',
    answer: 'Most booking systems are set up and ready to use within 2-3 weeks, depending on complexity and integrations needed.'
  },
  {
    question: 'Can I integrate with my existing calendar?',
    answer: 'Yes, we integrate with Google Calendar, Outlook, Apple Calendar, and most major calendar systems.'
  },
  {
    question: 'Do you provide training for my team?',
    answer: 'Absolutely! We provide comprehensive training for your team and ongoing support to ensure smooth operation.'
  },
  {
    question: 'Can customers reschedule or cancel appointments?',
    answer: 'Yes, customers can easily reschedule or cancel appointments through the self-service portal, with automatic notifications to your team.'
  }
];

export default function BookingSystemPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <Calendar className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Booking System Setup
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Streamlined online booking with automated reminders, follow-ups, and seamless calendar integration.
            </p>
            <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
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
                Complete booking solution tailored to your business needs
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
                Custom pricing based on your specific needs and requirements
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">One-time Setup</CardTitle>
                    <div className="text-3xl font-bold text-brand-green">Contact for quote</div>
                    <p className="text-gray-600">Custom booking system development</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Custom design and development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Calendar integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Payment processing setup</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Team training and documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">Monthly Maintenance</CardTitle>
                    <div className="text-3xl font-bold text-brand-green">Contact for quote</div>
                    <p className="text-gray-600">Ongoing support and updates</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">System monitoring and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Regular updates and improvements</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Technical support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">Analytics and reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-brand-green/5 rounded-lg border border-brand-green/20">
                <p className="text-center text-gray-700">
                  <strong>Final quote depends on scope and volume; we'll price it together after a quick call.</strong>
                </p>
              </div>
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
                Simple setup process to get your booking system running smoothly
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
                Common questions about our booking system service
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
                Ready to streamline your booking process?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a demo to see how our booking system can improve your customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
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
