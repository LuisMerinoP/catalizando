import HeroSection from '../components/HeroSection';
import { BookOpen, Shield, Heart } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useT();

  return (
    <>
      <HeroSection title={t.about.hero.title} subtitle={t.about.hero.subtitle} ctaText="" />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img
            src="/siulrecycling.png"
            alt="SIUL Recycling logo"
            className="max-w-md w-full mx-auto mb-8 object-contain"
          />
          <h2 className="text-3xl font-bold text-primary mb-6">{t.about.who.title}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{t.about.who.body}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">{t.about.mission.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.about.mission.body}</p>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">{t.about.vision.title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.about.vision.body}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">{t.about.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-light">
              <BookOpen size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">{t.about.values.learn.title}</h4>
              <p className="text-gray-600 text-sm">{t.about.values.learn.body}</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-light">
              <Shield size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">{t.about.values.decide.title}</h4>
              <p className="text-gray-600 text-sm">{t.about.values.decide.body}</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-light">
              <Heart size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">{t.about.values.respect.title}</h4>
              <p className="text-gray-600 text-sm">{t.about.values.respect.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">{t.about.team.title}</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm w-full max-w-sm">
              <img
                src="/foto_luis.png"
                alt="Luis Merino"
                className="w-48 h-60 rounded-xl mb-4 object-cover"
              />
              <span className="text-primary font-semibold">Luis Merino</span>
              <span className="text-gray-500 text-sm mt-1">{t.about.team.role}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
