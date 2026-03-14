import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = 'Contact Us',
  ctaLink = '/contact',
  backgroundClass = 'bg-gradient-to-br from-primary to-primary-light',
}: HeroSectionProps) {
  return (
    <section className={`${backgroundClass} text-white py-24 md:py-36`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Link
            to={ctaLink}
            className="inline-block mt-8 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors uppercase tracking-wide"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
