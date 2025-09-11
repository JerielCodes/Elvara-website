'use client';

import { motion } from 'framer-motion';
import { Phone, Calendar, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';

const outcomes = [
  {
    icon: <Phone className="h-8 w-8 text-brand-green" />,
    title: 'Fewer missed calls → more booked appointments',
    description: 'AI reception ensures every call is answered professionally, capturing more opportunities for your business.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-brand-green" />,
    title: 'Automated reminders & follow-ups → fewer no-shows',
    description: 'Smart booking systems with automated reminders reduce no-shows and keep your schedule full.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-brand-green" />,
    title: 'Clear ROI view → time & cost you actually save',
    description: 'Comprehensive analytics show exactly how our systems save you time and money while driving growth.',
  },
];

const logoPartners = [
  'TechCrunch',
  'Forbes',
  'Inc. Magazine',
  'Entrepreneur',
  'Business Insider',
  'Fast Company',
];

export default function ProofSection() {
  return (
    <SectionContainer background="default">
      <AnimatedSection>
        {/* Logo strip */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-8">
            Trusted by growing businesses nationwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {logoPartners.map((logo, index) => (
              <div key={index} className="text-center">
                <span className="text-lg font-semibold text-gray-400">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Get */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What you'll get
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real outcomes that transform how your business operates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="mb-4 inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-full">
                {outcome.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{outcome.title}</h3>
              <p className="text-gray-600">{outcome.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'll tailor outcomes to your business and back them up with real data—ask us for sources once we've scoped your setup.
          </p>
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}