import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Phone, 
  Calendar, 
  Search, 
  Share2, 
  Globe, 
  Zap, 
  Users, 
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive growth services for your business. From AI reception to advanced marketing, we handle it all.',
};

const services = [
  {
    id: 'ai-reception',
    title: 'AI Reception & Booking',
    description: 'Never miss a call again with intelligent AI that handles inquiries, books appointments, and provides information 24/7.',
    pricing: 'From $149/month',
    icon: <Phone className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Professional AI phone handling',
      'Automated appointment booking',
      '24/7 availability',
      'Custom conversation flows',
      'Integration with your calendar',
      'Call analytics and reporting'
    ],
    howItWorks: [
      'We analyze your business needs and call patterns',
      'Set up custom AI conversation flows for your services',
      'Integrate with your existing calendar and booking system',
      'Train the AI on your specific business information',
      'Launch with monitoring and continuous optimization'
    ]
  },
  {
    id: 'booking-system',
    title: 'Booking System Setup',
    description: 'Streamlined online booking with automated reminders, follow-ups, and seamless calendar integration.',
    pricing: 'Contact for quote',
    icon: <Calendar className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Custom booking page design',
      'Calendar synchronization',
      'Automated email reminders',
      'SMS notifications',
      'Payment processing integration',
      'Multi-location support'
    ],
    howItWorks: [
      'Audit your current booking process and pain points',
      'Design a custom booking flow for your business',
      'Set up calendar integrations and sync',
      'Configure automated reminder sequences',
      'Test and launch with training for your team'
    ]
  },
  {
    id: 'seo',
    title: 'SEO (Local + On-page)',
    description: 'Dominate local search results with optimized listings, content, and review management.',
    pricing: 'Starting at $399/month',
    icon: <Search className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Local SEO optimization',
      'Google My Business management',
      'On-page SEO improvements',
      'Content creation and optimization',
      'Review management and response',
      'Monthly performance reports'
    ],
    howItWorks: [
      'Conduct comprehensive SEO audit of your current presence',
      'Optimize Google My Business and local listings',
      'Improve on-page SEO across your website',
      'Create and optimize content for target keywords',
      'Monitor rankings and adjust strategy monthly'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'Consistent, engaging content across all platforms to build your brand and attract customers.',
    pricing: 'Starting at $399/month',
    icon: <Share2 className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Content creation and curation',
      'Multi-platform posting',
      'Community management',
      'Engagement monitoring',
      'Performance analytics',
      'Brand voice development'
    ],
    howItWorks: [
      'Develop your brand voice and content strategy',
      'Create engaging content calendar',
      'Schedule and publish across platforms',
      'Monitor engagement and respond to comments',
      'Analyze performance and optimize content'
    ]
  },
  {
    id: 'website-builds',
    title: 'Website Builds',
    description: 'Professional, conversion-optimized websites that drive growth and showcase your business.',
    pricing: 'Contact for quote',
    icon: <Globe className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Custom website design',
      'Mobile-responsive development',
      'SEO optimization',
      'Fast loading speeds',
      'Contact forms and lead capture',
      'Analytics integration'
    ],
    howItWorks: [
      'Discovery session to understand your goals',
      'Design mockups and get your approval',
      'Develop responsive website with modern tech',
      'Optimize for search engines and speed',
      'Launch with training and ongoing support'
    ]
  },
  {
    id: 'custom-automations',
    title: 'Custom Automations',
    description: 'Streamline your business processes with custom automation workflows that save time and reduce errors.',
    pricing: 'Contact for quote',
    icon: <Zap className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Workflow analysis and design',
      'Custom automation development',
      'Integration with existing tools',
      'Testing and quality assurance',
      'Documentation and training',
      'Ongoing maintenance and updates'
    ],
    howItWorks: [
      'Map your current business processes',
      'Identify automation opportunities',
      'Design custom workflow solutions',
      'Develop and test automations',
      'Deploy with training and documentation'
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    description: 'Targeted strategies to attract and convert high-quality leads for your business.',
    pricing: 'Starting at $399/month',
    icon: <Users className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Lead magnet creation',
      'Landing page optimization',
      'Email marketing campaigns',
      'Social media advertising',
      'Lead nurturing sequences',
      'Conversion tracking and reporting'
    ],
    howItWorks: [
      'Identify your ideal customer profile',
      'Create compelling lead magnets and offers',
      'Build optimized landing pages',
      'Launch targeted advertising campaigns',
      'Nurture leads with automated sequences'
    ]
  },
  {
    id: 'analytics-dashboards',
    title: 'Analytics Dashboards',
    description: 'Real-time insights into your business performance with actionable growth recommendations.',
    pricing: 'Starting at $149/month',
    icon: <BarChart3 className="h-8 w-8 text-brand-green" />,
    whatsIncluded: [
      'Custom dashboard creation',
      'Data integration and visualization',
      'Performance tracking',
      'Automated reporting',
      'Growth insights and recommendations',
      'Monthly strategy reviews'
    ],
    howItWorks: [
      'Audit your current data sources and metrics',
      'Design custom dashboard for your KPIs',
      'Integrate data from all business systems',
      'Set up automated reporting and alerts',
      'Provide monthly insights and recommendations'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Growth services that scale with you
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              From AI reception to advanced marketing, we provide comprehensive solutions to drive your business forward.
            </p>
            <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white" asChild>
              <Link href="/book">Book a Demo to Get Started</Link>
            </Button>
          </div>
        </SectionContainer>

        {/* Services Grid */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose individual services or bundle them for maximum growth impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to grow your business?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss which services are right for your business and create a custom growth plan.
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

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow bg-white">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-brand-green/10 rounded-lg">
            {service.icon}
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <p className="text-sm font-semibold text-brand-green mb-4">{service.pricing}</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1">
          <Accordion type="single" collapsible>
            <AccordionItem value="whats-included">
              <AccordionTrigger className="text-sm font-medium">
                What's included
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.whatsIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-it-works">
              <AccordionTrigger className="text-sm font-medium">
                How it works
              </AccordionTrigger>
              <AccordionContent>
                <ol className="space-y-2 text-sm text-gray-600">
                  {service.howItWorks.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-green mr-2 font-semibold">{idx + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Button variant="outline" className="w-full" asChild>
            <Link href={`/services/${service.id}`}>Learn more</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
