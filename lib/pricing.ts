// Centralized pricing configuration
// Update these values to change pricing across the site

export const pricingConfig = {
  // Bundle pricing (unchanged)
  bundles: {
    starter: {
      price: 149,
      period: '/month',
      name: 'Starter',
    },
    growth: {
      price: 399,
      period: '/month',
      name: 'Growth',
    },
    premium: {
      price: 899,
      period: '/month',
      name: 'Premium',
    },
    partner: {
      price: 2000,
      period: '+/month',
      name: 'Partner Plan',
    },
  },

  // Individual service pricing
  services: {
    'ai-reception': {
      starter: 'From $149/month',
      growth: 'From $399/month',
      premium: 'From $899/month',
      note: 'Up to 100 minutes/month in Starter; larger volumes quoted after a quick scoping call.',
    },
    'booking-system': {
      setup: 'Contact for quote',
      maintenance: 'Contact for quote',
      note: 'One-time setup and optional monthly maintenance available.',
    },
    'seo': {
      starting: 'Starting at $399/month',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
    'social-media': {
      starting: 'Starting at $399/month',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
    'website-builds': {
      starting: 'Contact for quote',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
    'custom-automations': {
      starting: 'Contact for quote',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
    'lead-generation': {
      starting: 'Starting at $399/month',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
    'analytics-dashboards': {
      starting: 'Starting at $149/month',
      note: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    },
  },

  // Common pricing notes
  commonNotes: {
    contactForQuote: 'Final quote depends on scope and volume; we\'ll price it together after a quick call.',
    volumeDetails: 'Larger volumes quoted after a quick scoping call to ensure optimal performance and cost-effectiveness.',
  },
};

// Helper function to get service pricing
export function getServicePricing(serviceId: string) {
  return pricingConfig.services[serviceId as keyof typeof pricingConfig.services] || {
    starting: 'Contact for quote',
    note: pricingConfig.commonNotes.contactForQuote,
  };
}

// Helper function to get bundle pricing
export function getBundlePricing(bundleId: string) {
  return pricingConfig.bundles[bundleId as keyof typeof pricingConfig.bundles];
}
