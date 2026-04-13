import HeroSection from '../components/HeroSection';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';
import { useT } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useT();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    materialType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      t.whatsappTemplate,
      '',
      '---',
      `${t.contact.form.name}: ${formData.name}`,
      formData.company && `${t.contact.form.company}: ${formData.company}`,
      formData.country && `${t.contact.form.country}: ${formData.country}`,
      formData.phone && `${t.contact.form.phone}: ${formData.phone}`,
      formData.email && `${t.contact.form.email}: ${formData.email}`,
      formData.materialType && `${t.contact.form.materialType}: ${formData.materialType}`,
      '',
      formData.message,
    ].filter(Boolean);
    const whatsappMsg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/50764622131?text=${whatsappMsg}`, '_blank');
  };

  const field = (label: string, value: string, key: keyof typeof formData, type = 'text', ph = '', required = false) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
        placeholder={ph}
      />
    </div>
  );

  return (
    <>
      <HeroSection title={t.contact.hero.title} subtitle={t.contact.hero.subtitle} ctaText="" />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">{t.contact.form.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              {field(t.contact.form.name, formData.name, 'name', 'text', t.contact.form.namePh, true)}
              {field(t.contact.form.company, formData.company, 'company', 'text', t.contact.form.companyPh)}
              {field(t.contact.form.country, formData.country, 'country', 'text', t.contact.form.countryPh)}
              {field(t.contact.form.phone, formData.phone, 'phone', 'tel', t.contact.form.phonePh)}
              {field(t.contact.form.email, formData.email, 'email', 'email', t.contact.form.emailPh)}
              {field(t.contact.form.materialType, formData.materialType, 'materialType', 'text', t.contact.form.materialTypePh)}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.form.message}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  placeholder={t.contact.form.messagePh}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">{t.contact.office.title}</h2>
            <div className="bg-gray-light rounded-xl p-8 space-y-5">
              <h3 className="font-semibold text-lg text-primary">{t.contact.office.company}</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-secondary" />
                  <span>
                    <strong>SIUL Recycling Corp.</strong><br />
                    Vía España Nº122, Torre Delta, Piso 14<br />
                    Apartado 0823-05658<br />
                    Panamá, República de Panamá
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-secondary" />
                  <span>{t.contact.office.phone}: +507 6462-2131</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="shrink-0 text-secondary" />
                  <span>{t.contact.office.whatsapp}: +507 6462-2131</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-secondary" />
                  <span>info@siulrecycling.com</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/50764622131?text=${encodeURIComponent(t.whatsappTemplate)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block bg-accent hover:bg-accent/90 text-white rounded-xl p-6 text-center transition-colors"
            >
              <MessageCircle size={36} className="mx-auto mb-3" />
              <p className="font-bold text-lg">{t.contact.wa.title}</p>
              <p className="text-white/80 text-sm mt-1">{t.contact.wa.subtitle}</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
