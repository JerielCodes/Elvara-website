'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ChevronDown, ChevronUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Starter',
    price: 149,
    period: '/month',
    description: 'Perfect for small businesses getting started with growth systems',
    badge: null,
    features: [
      'AI Reception (200 calls/month)',
      'Basic booking system',
      'Email notifications',
      'Simple analytics dashboard',
      '5 automated responses',
      'Email support',
    ],
    detailedFeatures: [
      'Professional AI phone handling for up to 200 calls per month',
      'Online booking system with calendar sync',
      'Automated email notifications for appointments',
      'Basic analytics on calls and bookings',
      '5 customizable automated responses',
      'Email support during business hours',
      'Mobile-optimized booking page',
      'Basic integration with Google Calendar',
    ],
    ctaText: 'Start Growing',
    popular: false,
  },
  {
    name: 'Growth',
    price: 399,
    period: '/month',
    description: 'Comprehensive growth tools for expanding businesses',
    badge: 'Most Popular',
    features: [
      'AI Reception (unlimited calls)',
      'Advanced booking & reminders',
      'Basic SEO optimization',
      'Social media posting (3 platforms)',
      'Lead tracking & nurturing',
      'Priority support',
    ],
    detailedFeatures: [
      'Unlimited AI phone handling with advanced conversation flows',
      'Advanced booking system with automated reminders and follow-ups',
      'Monthly SEO optimization and local search management',
      'Automated social media posting on 3 platforms',
      'Complete lead tracking and nurturing system',
      'Priority phone and email support',
      'Custom booking workflows',
      'Integration with major CRM systems',
      'Monthly performance reports',
      'Review management and response',
    ],
    ctaText: 'Accelerate Growth',
    popular: true,
  },
  {
    name: 'Premium',
    price: 899,
    period: '/month',
    description: 'Full-service growth partner with advanced marketing',
    badge: 'Best Value',
    features: [
      'Everything in Growth',
      'Advanced SEO & content creation',
      'Paid ads management',
      'Social media management (all platforms)',
      'Advanced analytics & reporting',
      'Dedicated account manager',
    ],
    detailedFeatures: [
      'All Growth plan features included',
      'Advanced SEO with content creation and link building',
      'Professional paid advertising management (Google, Facebook, Instagram)',
      'Full social media management across all platforms',
      'Advanced analytics dashboard with ROI tracking',
      'Dedicated account manager with monthly strategy calls',
      'Custom landing pages and funnels',
      'A/B testing for all campaigns',
      'Competitor analysis and market research',
      'Quarterly business growth strategy sessions',
    ],
    ctaText: 'Scale Premium',
    popular: false,
  },
  {
    name: 'Elite',
    price: 2000,
    period: '+/month',
    description: 'Enterprise-level growth systems with custom solutions',
    badge: 'Custom',
    features: [
      'Everything in Premium',
      'Custom integrations',
      'White-label solutions',
      'Multi-location management',
      'Advanced automation workflows',
      'C-suite strategic consulting',
    ],
    detailedFeatures: [
      'All Premium plan features included',
      'Custom integrations with existing business systems',
      'White-label solutions for agencies and franchises',
      'Multi-location management and reporting',
      'Advanced automation workflows and custom triggers',
      'C-suite strategic consulting and business planning',
      'Custom software development and features',
      'Enterprise-level security and compliance',
      'Unlimited team member access',
      'Custom reporting and dashboard development',
    ],
    ctaText: 'Contact Sales',
    popular: false,
  },
];

interface PricingTiersProps {
  showDetailed?: boolean;
}

export default function PricingTiers({ showDetailed = false }: PricingTiersProps) {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleExpanded = (tierName: string) => {
    setExpandedTier(expandedTier === tierName ? null : tierName);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {pricingTiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={cn(
            'relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl',
            tier.popular
              ? 'border-brand-green ring-2 ring-brand-green/20 scale-105'
              : 'border-gray-200 hover:border-brand-green/30'
          )}
        >
          {tier.badge && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-brand-green text-white px-4 py-1">
                {tier.badge}
              </Badge>
            </div>
          )}

          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-bold text-gray-900">${tier.price.toLocaleString()}</span>
                <span className="text-lg text-gray-600 ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-gray-600">{tier.description}</p>
            </div>

            <div className="space-y-3 mb-6">
              {tier.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {showDetailed && (
              <div className="mb-6">
                <button
                  onClick={() => toggleExpanded(tier.name)}
                  className="flex items-center justify-between w-full text-sm text-brand-green hover:text-brand-green-dark transition-colors"
                >
                  <span>View detailed features</span>
                  {expandedTier === tier.name ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedTier === tier.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="space-y-2">
                          {tier.detailedFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <Zap className="h-4 w-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <Button
              className={cn(
                'w-full',
                tier.popular
                  ? 'bg-brand-green hover:bg-brand-green-dark text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
              )}
              asChild
            >
              <Link href={tier.name === 'Elite' ? '/contact' : '/book'}>
                {tier.ctaText}
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}