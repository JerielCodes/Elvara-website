import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Sprout, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Elvara\'s mission to provide growth systems for local businesses. Discover our values and commitment to your success.',
};

const values = [
  {
    icon: <Sprout className="h-8 w-8 text-brand-green" />,
    title: 'Growth-Focused',
    description: 'Every decision we make is centered on driving measurable growth for your business.',
  },
  {
    icon: <Target className="h-8 w-8 text-brand-green" />,
    title: 'Results-Driven',
    description: 'We measure success by your success. Our systems are designed for real, tangible outcomes.',
  },
  {
    icon: <Heart className="h-8 w-8 text-brand-green" />,
    title: 'Partnership Approach',
    description: 'We\'re not just a service provider - we\'re your growth partner, invested in your long-term success.',
  },
  {
    icon: <Zap className="h-8 w-8 text-brand-green" />,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technology to give your business a competitive advantage.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/20 backdrop-blur-sm rounded-full">
              <Sprout className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our mission is growth
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We handle the systems and strategies that move your business forward, 
              so you can focus on what you do best.
            </p>
          </div>
        </SectionContainer>

        {/* Mission Statement */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Elvara exists
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  Local businesses are the backbone of our communities, but they're often held back by 
                  the complexity of modern business operations. Between managing calls, bookings, 
                  marketing, and customer relationships, business owners spend more time on systems 
                  than on their craft.
                </p>
                <p>
                  That's where Elvara comes in. We believe every local business deserves access to 
                  the same growth systems that enterprise companies use - AI reception, automated 
                  marketing, advanced analytics, and strategic guidance.
                </p>
                <p className="text-xl font-semibold text-brand-green">
                  We're not just automating tasks. We're creating growth engines.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Brand Story */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Elvara symbol
                </h2>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Elvara takes its name and symbol from the concept of growth and renewal. 
                    Like a plant that grows from a simple seed into something flourishing, 
                    we believe every business has untapped potential waiting to be unlocked.
                  </p>
                  <p>
                    Our sprouting leaf represents the moment when the right systems, strategies, 
                    and support come together to create exponential growth. It's that pivotal 
                    point where your business stops just surviving and starts truly thriving.
                  </p>
                  <p>
                    Every day, we work to be the catalyst for that growth in your business.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-growth rounded-full flex items-center justify-center shadow-2xl">
                    <Sprout className="h-24 w-24 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Target className="h-8 w-8 text-brand-green" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-brand-green" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Values */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our core values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and every decision we make
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-full group-hover:bg-brand-green/20 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Vision */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our vision for the future
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                  We envision a world where every local business has access to enterprise-level 
                  growth systems, regardless of size or budget. Where business owners can focus 
                  on their passion while intelligent systems handle the complexity of modern 
                  business operations.
                </p>
                <p>
                  Through AI, automation, and strategic guidance, we're building the infrastructure 
                  that will power the next generation of local business success stories.
                </p>
              </div>
              <div className="mt-12">
                <Button size="lg" className="bg-white text-brand-green hover:bg-white/90" asChild>
                  <Link href="/book">Partner with us for growth</Link>
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