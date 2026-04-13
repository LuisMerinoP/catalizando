import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import { useT } from '../i18n/LanguageContext';

export default function NonFerrousMetals() {
  const { t } = useT();

  return (
    <>
      <HeroSection title={t.nonFerrous.hero.title} subtitle={t.nonFerrous.hero.subtitle} />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t.nonFerrous.what.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.nonFerrous.what.body}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{t.nonFerrous.what.examples}</p>
            <ul className="space-y-2 text-gray-600">
              {t.nonFerrous.what.list.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/non_ferritic_mats.png"
            alt="Non-ferrous metal samples"
            className="rounded-xl h-64 w-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/cat.avif"
            alt="Recycling facility"
            className="rounded-xl h-64 w-full object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-6">{t.nonFerrous.why.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t.nonFerrous.why.p1}</p>
            <p className="text-gray-600 leading-relaxed">{t.nonFerrous.why.p2}</p>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">{t.nonFerrous.cta.title}</h2>
          <p className="text-gray-600 mb-8">{t.nonFerrous.cta.body}</p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-10 rounded-lg transition-colors uppercase"
          >
            {t.nonFerrous.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
