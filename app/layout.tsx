import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Elvara - Growth Systems for Local Businesses',
    template: '%s | Elvara',
  },
  description: 'Our mission is growth. Handling the systems and strategies that move your business forward with AI reception, booking, SEO, social media, and analytics.',
  keywords: ['local business', 'growth systems', 'AI receptionist', 'business automation', 'SEO', 'social media'],
  authors: [{ name: 'Elvara' }],
  creator: 'Elvara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://elvara.com',
    title: 'Elvara - Growth Systems for Local Businesses',
    description: 'Our mission is growth. Handling the systems and strategies that move your business forward.',
    siteName: 'Elvara',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elvara - Growth Systems for Local Businesses',
    description: 'Our mission is growth. Handling the systems and strategies that move your business forward.',
    creator: '@elvara',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}