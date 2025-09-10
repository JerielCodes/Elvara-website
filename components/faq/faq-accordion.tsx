'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How quickly can Elvara be set up for my business?',
    answer: 'Most businesses are up and running within 24-48 hours. Our team handles the technical setup, phone integration, and initial configuration. You\'ll receive training and can start seeing results immediately.',
  },
  {
    question: 'Does the AI receptionist sound natural to callers?',
    answer: 'Yes! Our AI is trained specifically for professional business conversations. It handles complex inquiries, schedules appointments, and transfers calls seamlessly. Most callers can\'t tell they\'re speaking with AI.',
  },
  {
    question: 'Can I customize the AI responses for my specific business?',
    answer: 'Absolutely. We customize every AI interaction to match your business voice, services, and frequently asked questions. The system learns and improves over time based on your specific customer interactions.',
  },
  {
    question: 'What happens if the AI can\'t handle a call?',
    answer: 'The system is designed to recognize complex situations and seamlessly transfer calls to your team when needed. It also provides detailed call summaries so you have full context.',
  },
  {
    question: 'How does the SEO service work?',
    answer: 'Our SEO team optimizes your Google My Business, website content, and local search presence. We handle keyword research, content creation, review management, and local citations to improve your search rankings.',
  },
  {
    question: 'Can I integrate Elvara with my existing booking system?',
    answer: 'Yes, we integrate with most major booking platforms, calendars, and CRM systems. If you have a custom system, our team can create custom integrations as part of the Premium and Elite plans.',
  },
  {
    question: 'What kind of analytics and reporting do you provide?',
    answer: 'You\'ll receive detailed reports on calls handled, appointments booked, SEO performance, social media engagement, and ROI metrics. Reports are available in real-time through your dashboard.',
  },
  {
    question: 'Is there a contract or can I cancel anytime?',
    answer: 'We offer month-to-month plans with no long-term contracts. You can upgrade, downgrade, or cancel anytime. We\'re confident in our results and don\'t believe in locking clients into contracts.',
  },
  {
    question: 'How do you ensure my business data is secure?',
    answer: 'We use enterprise-level security including encrypted data transmission, secure cloud storage, and regular security audits. We\'re compliant with HIPAA, GDPR, and other industry standards.',
  },
  {
    question: 'What support is available if I need help?',
    answer: 'All plans include support, with higher tiers receiving priority and dedicated account management. Our team provides training, ongoing optimization, and strategic guidance to maximize your growth.',
  },
];

interface FAQAccordionProps {
  limit?: number;
}

export default function FAQAccordion({ limit }: FAQAccordionProps) {
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Accordion type="single" collapsible className="w-full">
      {displayFaqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-brand-green">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}