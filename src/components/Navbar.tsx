import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useT } from '../i18n/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useT();

  const navLinks = [
    { to: '/about', label: t.nav.about },
    { to: '/catalytic-converters', label: t.nav.catalytic },
    { to: '/non-ferrous-metals', label: t.nav.nonFerrous },
    { to: '/contact', label: t.nav.contact },
  ];

  const LangToggle = (
    <div className="flex items-center gap-2 text-xs">
      <button
        type="button"
        onClick={() => setLang('es')}
        className={`font-semibold transition-colors ${
          lang === 'es' ? 'text-secondary' : 'text-white/60 hover:text-white'
        }`}
      >
        ES
      </button>
      <span className="text-white/60">|</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`font-semibold transition-colors ${
          lang === 'en' ? 'text-secondary' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <Logo className="h-12 w-auto" />
            <span>SIUL<span className="text-secondary">RECYCLING</span></span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-secondary ${
                  location.pathname === link.to ? 'text-secondary' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4 border-l border-white/30 pl-4">{LangToggle}</div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            {LangToggle}
            <button
              onClick={() => setOpen(!open)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-secondary ${
                  location.pathname === link.to ? 'text-secondary' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
