'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import SectionContainer from '@/components/ui/section-container';

const testimonials = [
  {
    name: 'Sarah Johnson',
    business: 'Bloom Beauty Salon',
    rating: 5,
    text: 'Elvara transformed our business. We\'ve seen 40% more bookings and our phone never goes unanswered.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Mike Rodriguez',
    business: 'Rodriguez Construction',
    rating: 5,
    text: 'The SEO and lead generation has been incredible. We\'re booked solid for the next 3 months.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  },
  {
    name: 'Dr. Emily Chen',
    business: 'Chen Family Dentistry',
    rating: 5,
    text: 'Our patient scheduling is seamless now. Elvara handles everything so we can focus on patient care.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
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

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Growing businesses every day
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how local businesses are scaling with Elvara's growth systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote className="h-8 w-8 text-brand-green/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 relative z-10 pl-6">{testimonial.text}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </SectionContainer>
  );
}