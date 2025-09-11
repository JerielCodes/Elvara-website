import Link from 'next/link';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'AI Reception', href: '/services/ai-reception' },
    { name: 'Booking System', href: '/services/booking-system' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'Social Media', href: '/services/social-media' },
    { name: 'Analytics', href: '/services/analytics-dashboards' },
  ],
  industries: [
    { name: 'Salons', href: '/industries/salons' },
    { name: 'Dentists', href: '/industries/dentists' },
    { name: 'Contractors', href: '/industries/contractors' },
    { name: 'Nail Techs', href: '/industries/nail-techs' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-brand-green/20">
                <Sprout className="h-5 w-5 text-brand-green" />
              </div>
              <span className="text-xl font-bold text-white">Elvara</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We build the systems behind your growth—so you can focus on serving clients.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-green" />
                <span className="text-sm">hello@elvara.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-green" />
                <span className="text-sm">1-800-ELVARA</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-green" />
                <span className="text-sm">Philadelphia, PA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mt-6 mb-2">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Elvara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}