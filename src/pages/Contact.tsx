import HeroSection from '../components/HeroSection';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = encodeURIComponent(
      `Hello! My name is ${formData.name}. ${formData.message}`
    );
    window.open(`https://wa.me/50765503340?text=${whatsappMsg}`, '_blank');
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We are here to serve you. Write to us and tell us about your needs."
        ctaText=""
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Our Office</h2>
            <div className="bg-gray-light rounded-xl p-8 space-y-5">
              <h3 className="font-semibold text-lg text-primary">SIUL Recycling, Inc.</h3>
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
                  <span>Office: +507 6550 3340</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="shrink-0 text-secondary" />
                  <span>WhatsApp: +507 6550 3340</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-secondary" />
                  <span>info@siulrecycling.com</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/50765503340"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block bg-accent hover:bg-accent/90 text-white rounded-xl p-6 text-center transition-colors"
            >
              <MessageCircle size={36} className="mx-auto mb-3" />
              <p className="font-bold text-lg">Chat with us on WhatsApp</p>
              <p className="text-white/80 text-sm mt-1">Quick response guaranteed</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
