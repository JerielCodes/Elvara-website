import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Check, Clock, Users, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Reception & Booking Service',
  description: 'Never miss a call again with intelligent AI that handles inquiries, books appointments, and provides information 24/7.',
};

const whatsIncluded = [
  'Professional AI phone handling for up to 200 calls/month (Starter)',
  'Unlimited AI phone handling (Growth and above)',
  'Automated appointment booking with calendar sync',
  'Custom conversation flows for your business',
  '24/7 availability with intelligent call routing',
  'Call analytics and performance reporting',
  'Integration with your existing systems',
  'Monthly optimization and training updates'
];

const howItWorks = [
  'Discovery call to understand your business and call patterns',
  'Custom AI training on your services, pricing, and procedures',
  'Set up conversation flows and appointment booking logic',
  'Integration with your calendar and existing systems',
  'Testing and quality assurance with your team',
  'Launch with monitoring and continuous optimization'
];

const pricingDetails = [
  {
    plan: 'Starter',
    price: '$149/month',
    description: 'Perfect for small businesses',
    features: [
      'Up to 200 calls/month',
      'Basic conversation flows',
      'Calendar integration',
      'Email support'
    ]
  },
  {
    plan: 'Growth',
    price: '$399/month',
    description: 'For growing businesses',
    features: [
      'Unlimited calls',
      'Advanced conversation flows',
      'Multi-calendar support',
      'Priority support',
      'Advanced analytics'
    ]
  },
  {
    plan: 'Premium',
    price: '$899/month',
    description: 'Full-service solution',
    features: [
      'Everything in Growth',
      'Custom integrations',
      'Dedicated account manager',
      'White-label options',
      'Custom reporting'
    ]
  }
];

const faqs = [
  {
    question: 'How does the AI handle complex customer inquiries?',
    answer: 'Our AI is trained on your specific business information and can handle most common inquiries. For complex questions, it can transfer calls to your team or take detailed messages.'
  },
  {
    question: 'Can the AI book appointments in my existing calendar?',
    answer: 'Yes, the AI integrates seamlessly with Google Calendar, Outlook, and most major calendar systems. It can check availability and book appointments in real-time.'
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer: 'The AI is designed to gracefully handle unknown questions by taking detailed messages, offering to have someone call back, or transferring to your team when appropriate.'
  },
  {
    question: 'How quickly can you set up AI reception for my business?',
    answer: 'Most businesses are up and running within 1-2 weeks. This includes training the AI, setting up integrations, and testing the system with your team.'
  }
];

export default function AIReceptionPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <Phone className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Reception & Booking
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Never miss a call again with intelligent AI that handles inquiries, books appointments, and provides information 24/7.
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
                Everything you need to never miss another call or booking opportunity
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
                Choose the plan that fits your call volume and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingDetails.map((plan, index) => (
                <Card key={index} className={`${index === 1 ? 'ring-2 ring-brand-green' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.plan}</CardTitle>
                    <div className="text-3xl font-bold text-brand-green">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <p className="text-xs text-gray-500 mb-4">
                        Final quote depends on scope and volume; we'll price it together after a quick call.
                      </p>
                      <Button 
                        className="w-full" 
                        variant={index === 1 ? 'default' : 'outline'}
                        asChild
                      >
                        <Link href="/book">Get Started</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-brand-green/5 rounded-lg border border-brand-green/20 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Volume & Scope Details</h3>
              <Accordion type="single" collapsible>
                <AccordionItem value="volume-details">
                  <AccordionTrigger>View volume and scope details</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-sm text-gray-700">
                      <p><strong>Starter Plan:</strong> Up to 100 minutes/month of AI call handling. Perfect for small businesses with moderate call volume.</p>
                      <p><strong>Growth Plan:</strong> Unlimited AI call handling with advanced conversation flows and multi-calendar support.</p>
                      <p><strong>Premium Plan:</strong> Full-service AI reception with custom integrations and dedicated account management.</p>
                      <p><strong>Larger volumes:</strong> For businesses with high call volumes (500+ calls/month), we provide custom pricing after a scoping call to ensure optimal performance and cost-effectiveness.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                Simple setup process to get your AI reception up and running
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
                Common questions about our AI reception service
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
                Ready to never miss another call?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Book a demo to see how AI reception can transform your business operations.
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
