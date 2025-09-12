import { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Demo',
  description: 'Schedule a personalized demo of Elvara\'s growth systems. See how we can help scale your local business.',
};

const demoFeatures = [
  {
    icon: <Calendar className="h-6 w-6 text-brand-green" />,
    title: '30-Minute Consultation',
    description: 'Personalized demo tailored to your business needs',
  },
  {
    icon: <Clock className="h-6 w-6 text-brand-green" />,
    title: 'Same-Day Availability',
    description: 'Flexible scheduling to fit your busy schedule',
  },
  {
    icon: <Users className="h-6 w-6 text-brand-green" />,
    title: 'Expert Guidance',
    description: 'Speak directly with our growth specialists',
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-brand-green" />,
    title: 'Custom Strategy',
    description: 'Get a preliminary growth plan for your business',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See Elvara in action
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Book a personalized demo and discover how our growth systems can transform your business
            </p>
          </div>
        </SectionContainer>

        {/* Booking Section */}
        <SectionContainer background="default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Embed */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card className="shadow-lg min-h-[600px]">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-2xl text-gray-900 text-center">
                      Schedule Your Demo
                    </CardTitle>
                    <p className="text-gray-600 text-center">
                      Choose a time that works best for you
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <iframe
                      src="https://cal.com/jeriel-herrera-cbpg4x/consultation?primary_color=2EAE6B&layout=month_view&hide_event_type_details=1"
                      className="w-full"
                      style={{ height: "600px" }}
                      loading="lazy"
                      allow="camera; microphone; fullscreen; autoplay; encrypted-media; picture-in-picture"
                      title="Book a Demo"
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Demo Info */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      What to expect
                    </h2>
                    <p className="text-gray-600">
                      During your demo, we'll show you exactly how Elvara can help grow your business with our comprehensive suite of tools.
                    </p>
                  </div>

                  {demoFeatures.map((feature, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-brand-green/10 rounded-lg">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="bg-brand-green/5 border-brand-green/20">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Demo Agenda
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Business assessment (5 min)</li>
                        <li>• AI reception demo (10 min)</li>
                        <li>• Growth systems overview (10 min)</li>
                        <li>• Custom strategy discussion (5 min)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 text-white">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">
                        Questions about the demo?
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Reach out to our team for immediate assistance.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div>📧 hello@elvara.com</div>
                        <div>📞 1-800-ELVARA</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </SectionContainer>

        {/* What Happens Next */}
        <SectionContainer background="gray">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What happens after you book?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-600">We'll send you a brief questionnaire to understand your business better</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Demo Call</h3>
                <p className="text-gray-600">Personalized 30-minute demo showing how Elvara works for your industry</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Next Steps</h3>
                <p className="text-gray-600">Receive a custom growth plan and guidance on implementation</p>
              </div>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>

      <Footer />
    </>
  );
}