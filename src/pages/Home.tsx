import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatCard from '../components/StatCard';
import { Leaf, Globe, Recycle } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function Home() {
  const { t } = useT();

  return (
    <>
      <HeroSection
        title={t.home.hero.title}
        subtitle={t.home.hero.subtitle}
        ctaText={t.home.hero.cta}
        ctaLink="/contact"
      />

      {/* Purpose */}
      <section className="py-20 bg-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">
            {t.home.purpose.title}
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">{t.home.purpose.body}</p>
          <Link
            to="/about"
            className="inline-block mt-8 bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg transition-colors uppercase tracking-wide"
          >
            {t.home.purpose.cta}
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            {t.home.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-light rounded-xl p-8">
              <Recycle size={40} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                {t.home.services.catalytic.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t.home.services.catalytic.body}</p>
            </div>
            <div className="bg-gray-light rounded-xl p-8">
              <Globe size={40} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">
                {t.home.services.nonFerrous.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t.home.services.nonFerrous.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{t.home.regions.title}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.home.regions.subtitle}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-12">
            {[
              { name: 'Panamá', flag: '🇵🇦' },
              { name: 'Costa Rica', flag: '🇨🇷' },
              { name: 'Nicaragua', flag: '🇳🇮' },
              { name: 'El Salvador', flag: '🇸🇻' },
              { name: 'Honduras', flag: '🇭🇳' },
              { name: 'Guatemala', flag: '🇬🇹' },
              { name: 'Belice', flag: '🇧🇿' },
            ].map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-xl p-8 flex flex-col items-center justify-center h-40 gap-3"
              >
                <span className="text-5xl">{region.flag}</span>
                <span className="text-gray-600 font-medium">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">{t.home.pricing.title}</h2>
          <p className="mt-4 text-white/80">{t.home.pricing.body}</p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            {t.home.pricing.cta}
          </Link>
        </div>
      </section>

      {/* Product Links */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/catalytic-converters"
            className="group block bg-primary text-white rounded-xl p-10 text-center hover:bg-primary-light transition-colors"
          >
            <Recycle size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase">{t.nav.catalytic}</h3>
            <p className="mt-2 text-white/70 text-sm">{t.home.productLinks.catalyticDesc}</p>
          </Link>
          <Link
            to="/non-ferrous-metals"
            className="group block bg-primary text-white rounded-xl p-10 text-center hover:bg-primary-light transition-colors"
          >
            <Globe size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase">{t.nav.nonFerrous}</h3>
            <p className="mt-2 text-white/70 text-sm">{t.home.productLinks.nonFerrousDesc}</p>
          </Link>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {t.home.impact.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t.home.impact.body}</p>
        </div>
      </section>

      {/* SDG */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">{t.home.sdg.title}</h2>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { icon: <Leaf size={40} />, label: t.home.sdg.sdg6, goal: 'ODS 6' },
              { icon: <Globe size={40} />, label: t.home.sdg.sdg11, goal: 'ODS 11' },
              { icon: <Recycle size={40} />, label: t.home.sdg.sdg12, goal: 'ODS 12' },
            ].map((item) => (
              <div key={item.goal} className="flex flex-col items-center gap-2 text-primary">
                {item.icon}
                <span className="font-bold text-sm">{item.goal}</span>
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-4">{t.home.stats.title}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {t.home.stats.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard number="80,000+" label={t.home.stats.converters} />
            <StatCard number="7+" label={t.home.stats.countries} />
            <StatCard number="80,000+" label={t.home.stats.tons} />
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.home.social.title}</h2>
          <p className="text-white/70 mb-8">{t.home.social.subtitle}</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg px-8 py-4 font-semibold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg px-8 py-4 font-semibold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
