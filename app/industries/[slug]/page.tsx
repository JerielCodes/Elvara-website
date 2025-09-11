import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowLeft } from 'lucide-react';

const industryData: { [key: string]: any } = {
  salons: {
    name: 'Salons & Spas',
    hero: {
      title: 'Growth Systems for Salons & Spas',
      subtitle: 'Streamline operations and grow your beauty business with AI reception, smart booking, and targeted marketing.',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    challenges: [
      'Managing appointments and no-shows',
      'Keeping clients engaged between visits',
      'Showcasing work on social media',
      'Building online reputation',
    ],
    solutions: [
      {
        title: 'Smart Booking System',
        description: 'Automated scheduling with confirmation and reminder texts to reduce no-shows by up to 40%.',
        features: ['Online booking integration', 'Automated reminders', 'No-show reduction', 'Calendar optimization'],
      },
      {
        title: 'Client Retention Programs',
        description: 'Personalized follow-ups and loyalty programs that keep clients coming back.',
        features: ['Birthday campaigns', 'Service reminders', 'Loyalty tracking', 'Personalized offers'],
      },
      {
        title: 'Social Media Showcase',
        description: 'Professional photography integration and automated posting of your best work.',
        features: ['Before/after galleries', 'Instagram automation', 'Portfolio management', 'Client testimonials'],
      },
    ],
  },
  dentists: {
    name: 'Dental Practices',
    hero: {
      title: 'Growth Systems for Dental Practices',
      subtitle: 'HIPAA-compliant systems for patient management, appointment scheduling, and practice growth.',
      image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    challenges: [
      'Patient communication and follow-ups',
      'Managing complex scheduling needs',
      'Insurance verification processes',
      'Building trust with new patients',
    ],
    solutions: [
      {
        title: 'Patient Communication Hub',
        description: 'HIPAA-compliant automated communication for appointments, reminders, and follow-ups.',
        features: ['Secure messaging', 'Appointment confirmations', 'Treatment reminders', 'Post-visit follow-ups'],
      },
      {
        title: 'Practice Management',
        description: 'Streamlined scheduling and patient management with insurance integration.',
        features: ['Complex scheduling', 'Insurance verification', 'Treatment planning', 'Recall management'],
      },
      {
        title: 'Local SEO & Reputation',
        description: 'Build trust and attract new patients through optimized local search presence.',
        features: ['Google My Business optimization', 'Review management', 'Local directory listings', 'Patient testimonials'],
      },
    ],
  },
  contractors: {
    name: 'Contractors',
    hero: {
      title: 'Growth Systems for Contractors',
      subtitle: 'Lead generation, project management, and reputation systems designed for construction and home services.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    challenges: [
      'Qualifying and following up with leads',
      'Managing multiple project timelines',
      'Building trust with homeowners',
      'Seasonal business fluctuations',
    ],
    solutions: [
      {
        title: 'Lead Qualification System',
        description: 'AI-powered lead scoring and automated follow-up sequences that convert more prospects.',
        features: ['Lead scoring', 'Automated follow-ups', 'Quote automation', 'Project tracking'],
      },
      {
        title: 'Project Management',
        description: 'Client communication and project tracking systems that keep everyone informed.',
        features: ['Progress updates', 'Photo documentation', 'Timeline management', 'Client portals'],
      },
      {
        title: 'Reputation Building',
        description: 'Systematic approach to building trust and showcasing quality work.',
        features: ['Review generation', 'Portfolio management', 'Testimonial collection', 'Trust signals'],
      },
    ],
  },
  'nail-techs': {
    name: 'Nail Techs',
    hero: {
      title: 'Growth Systems for Nail Techs',
      subtitle: 'Specialized booking, client management, and marketing systems for nail art professionals.',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    challenges: [
      'Showcasing intricate nail art designs',
      'Managing appointment complexity',
      'Building a loyal client base',
      'Pricing specialized services',
    ],
    solutions: [
      {
        title: 'Design Portfolio System',
        description: 'Professional photography and portfolio management to showcase your artistic work.',
        features: ['Design galleries', 'Before/after documentation', 'Social media integration', 'Client inspiration boards'],
      },
      {
        title: 'Specialized Booking',
        description: 'Advanced booking system that accounts for different service types and durations.',
        features: ['Service-specific scheduling', 'Design consultation booking', 'Pricing optimization', 'Client preferences'],
      },
      {
        title: 'Client Experience',
        description: 'Personalized client journey from consultation to aftercare.',
        features: ['Style consultations', 'Aftercare instructions', 'Maintenance reminders', 'Loyalty rewards'],
      },
    ],
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = industryData[params.slug];
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industry.name,
    description: industry.hero.subtitle,
  };
}

export default function IndustryPage({ params }: PageProps) {
  const industry = industryData[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="default" size="large" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/industries"
                className="inline-flex items-center text-brand-green hover:text-brand-green-dark mb-6 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Industries
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {industry.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {industry.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
                  <Link href="/book">Book a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={industry.hero.image}
                alt={industry.name}
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </SectionContainer>

        {/* Challenges */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common challenges we solve
              </h2>
              <p className="text-xl text-gray-600">
                Issues that {industry.name.toLowerCase()} face every day
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {industry.challenges.map((challenge: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Solutions */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our specialized solutions
              </h2>
              <p className="text-xl text-gray-600">
                Tailored systems designed specifically for your industry
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {industry.solutions.map((solution: any, index: number) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex items-center">
                          <Check className="h-4 w-4 text-brand-green mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* CTA */}
        <SectionContainer background="gradient">
          <AnimatedSection>
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to grow your {industry.name.toLowerCase()}?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                See how our specialized systems can transform your business operations and drive growth.
              </p>
              <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
                <Link href="/book">Schedule Your Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({
    slug,
  }));
}