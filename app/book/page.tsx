import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Schedule a free consultation to discuss your business growth needs and see how Elvara can help you scale.',
};

const demoBenefits = [
  {
    icon: <Calendar className="h-6 w-6 text-brand-green" />,
    title: '30-minute consultation',
    description: 'Focused discussion about your business goals and challenges',
  },
  {
    icon: <Users className="h-6 w-6 text-brand-green" />,
    title: 'Custom growth plan',
    description: 'Personalized recommendations for your specific business needs',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-green" />,
    title: 'No commitment required',
    description: 'Free consultation with no pressure to purchase anything',
  },
];

export default function BookPage() {
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
              Book a Demo
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Schedule a free consultation to discuss your business growth needs and see how Elvara can help you scale.
            </p>
          </div>
        </SectionContainer>

        {/* Demo Benefits */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What to expect
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A focused conversation about your business and how we can help you grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {demoBenefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center p-3 bg-brand-green/10 rounded-full">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Cal.com Embed */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Schedule Your Demo</CardTitle>
                  <p className="text-gray-600">
                    Choose a time that works for you. We'll send you a calendar invite with meeting details.
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://cal.com/YOUR_CAL_USERNAME/demo"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      className="rounded-lg"
                      title="Book a Demo"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </SectionContainer>

        {/* Alternative Contact */}
        <SectionContainer background="default">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prefer to talk first?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Give us a call or send us an email to discuss your needs before scheduling a demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:1-800-ELVARA"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-dark transition-colors"
                >
                  <Clock className="h-5 w-5 mr-2" />
                  Call 1-800-ELVARA
                </a>
                <a
                  href="mailto:hello@elvara.com"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}