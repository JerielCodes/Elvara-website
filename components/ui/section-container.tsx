import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'large';
  background?: 'default' | 'gray' | 'gradient';
}

export default function SectionContainer({
  children,
  className = '',
  size = 'default',
  background = 'default',
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        'relative',
        {
          'py-16 md:py-24': size === 'default',
          'py-20 md:py-32': size === 'large',
          'bg-brand-cream': background === 'default',
          'bg-gray-50': background === 'gray',
          'bg-gradient-growth': background === 'gradient',
        },
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}