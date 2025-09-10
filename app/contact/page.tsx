import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import LeadForm from '@/components/forms/lead-form';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Elvara to discuss your business growth needs. We\'re here to help you scale with our growth systems.',
};

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-brand-green" />,
    title: 'Email',
    details: 'hello@elvara.com',
    subtitle: 'We respond within 24 hours',
  },
  {
    icon: <Phone className="h-6 w-6 text-brand-green" />,
    title: 'Phone',
    details: '1-800-ELVARA',
    subtitle: 'Mon-Fri 9AM-6PM PST',
  },
  {
    icon: <MapPin className="h-6 w-6 text-brand-green" />,
    title: 'Location',
    details: 'San Francisco, CA',
    subtitle: 'Serving businesses nationwide',
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-green" />,
    title: 'Response Time',
    details: 'Within 24 hours',
    subtitle: 'Usually much faster',
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero */}
        <SectionContainer background="gradient" size="default">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's grow your business together
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your business with our growth systems? We're here to help you get started.
            </p>
          </div>
        </SectionContainer>

        {/* Contact Form & Info */}
        <SectionContainer background="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">
                      Tell us about your business
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours with a customized growth plan.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <LeadForm />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Get in touch
                    </h2>
                    <p className="text-gray-600">
                      We're here to answer your questions and help you understand how our growth systems can benefit your business.
                    </p>
                  </div>

                  {contactInfo.map((item, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-brand-green/10 rounded-lg">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-gray-900">{item.details}</p>
                            <p className="text-sm text-gray-600">{item.subtitle}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="bg-brand-green/5 border-brand-green/20">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Prefer to schedule a call?
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Book a 30-minute consultation to discuss your growth needs directly with our team.
                      </p>
                      <a
                        href="/book"
                        className="text-brand-green hover:text-brand-green-dark font-medium text-sm"
                      >
                        Schedule a demo →
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}