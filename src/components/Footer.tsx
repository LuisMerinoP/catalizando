import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useT } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SIUL<span className="text-secondary">RECYCLING</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-secondary transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/catalytic-converters" className="hover:text-secondary transition-colors">{t.nav.catalytic}</Link></li>
              <li><Link to="/non-ferrous-metals" className="hover:text-secondary transition-colors">{t.nav.nonFerrous}</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.office}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>
                  <strong>SIUL Recycling Corp.</strong><br />
                  Vía España Nº122, Torre Delta, Piso 14<br />
                  Apartado 0823-05658<br />
                  Panamá, República de Panamá
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>+507 6462-2131</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="shrink-0 text-secondary" />
                <span>WhatsApp: +507 6462-2131</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>info@siulrecycling.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} SIUL Recycling. {t.footer.rights}</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
