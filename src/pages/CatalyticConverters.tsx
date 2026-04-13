import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { useT } from '../i18n/LanguageContext';

export default function CatalyticConverters() {
  const { t } = useT();

  return (
    <>
      <HeroSection title={t.catalytic.hero.title} subtitle={t.catalytic.hero.subtitle} />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t.catalytic.what.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{t.catalytic.what.body}</p>
            <h3 className="text-2xl font-bold text-primary mb-4">{t.catalytic.composition.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.catalytic.composition.body}</p>
          </div>
          <img
            src="/cat_converter.webp"
            alt="Catalytic converter"
            className="rounded-xl h-64 w-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/recycle.jpg"
            alt="Recycling process"
            className="rounded-xl h-64 w-full object-contain bg-white p-4 order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-6">{t.catalytic.why.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.catalytic.why.body}</p>
            <ul className="space-y-2 text-gray-600">
              {t.catalytic.why.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.catalytic.cta.title}</h2>
          <p className="text-gray-600 mb-8">{t.catalytic.cta.body}</p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-10 rounded-lg transition-colors uppercase"
          >
            {t.catalytic.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
