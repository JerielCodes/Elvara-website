import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Stethoscope, Hammer, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Elvara provides specialized growth systems for salons, dental practices, contractors, nail techs, and more local businesses.',
};

const industries = [
  {
    name: 'Salons & Spas',
    slug: 'salons',
    icon: <Scissors className="h-12 w-12 text-brand-green" />,
    description: 'Streamlined booking, client management, and marketing systems designed for beauty professionals.',
    features: ['Automated appointment reminders', 'Client retention campaigns', 'Social media showcases', 'Review management'],
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    name: 'Dental Practices',
    slug: 'dentists',
    icon: <Stethoscope className="h-12 w-12 text-brand-green" />,
    description: 'HIPAA-compliant systems for patient scheduling, follow-ups, and practice growth.',
    features: ['Patient communication', 'Insurance verification', 'Recall management', 'Local SEO optimization'],
    image: 'https://images.pexels.com/photos/4167544/pexels-photo-4167544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    name: 'Contractors',
    slug: 'contractors',
    icon: <Hammer className="h-12 w-12 text-brand-green" />,
    description: 'Lead generation and project management systems for construction and home services.',
    features: ['Quote automation', 'Project tracking', 'Lead qualification', 'Reputation management'],
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    name: 'Nail Techs',
    slug: 'nail-techs',
    icon: <Sparkles className="h-12 w-12 text-brand-green" />,
    description: 'Specialized booking and client management for nail art and beauty professionals.',
    features: ['Design portfolio management', 'Appointment optimization', 'Client preferences tracking', 'Social media automation'],
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industries we serve
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Specialized growth systems tailored to the unique needs of your industry
            </p>
          </div>
        </SectionContainer>

        {/* Industries Grid */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-green/30">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {industry.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-brand-green rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-brand-green-dark transition-colors" asChild>
                      <Link href={`/industries/${industry.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* CTA Section */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Don't see your industry?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We work with all types of local businesses. Let's discuss how our growth systems can be customized for your specific industry.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}