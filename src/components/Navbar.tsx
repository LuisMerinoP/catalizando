import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/catalytic-converters', label: 'Catalytic Converters' },
  { to: '/non-ferrous-metals', label: 'Non-Ferrous Metals' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
            <Logo className="h-10 w-10 text-white" />
            <span>PANAMA<span className="text-secondary">CATS</span></span>
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
            <div className="flex items-center gap-2 ml-4 text-xs border-l border-white/30 pl-4">
              <span className="font-semibold text-secondary">EN</span>
              <span className="text-white/60">|</span>
              <span className="text-white/60 cursor-pointer hover:text-white">ES</span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
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
