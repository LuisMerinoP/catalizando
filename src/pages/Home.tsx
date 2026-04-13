import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import StatCard from '../components/StatCard';
import { Leaf, Globe, Recycle } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="SIUL RECYCLING — Sustainable Solutions, Global Reach"
        subtitle="We purchase used catalytic converters and non-ferrous metals. Get in touch with us today for a competitive quote."
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      {/* Sustainability */}
      <section className="py-20 bg-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase">
            Our Limit Is the Sky
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            At SIUL RECYCLING, we believe in the circular economy. Every material we recover
            is a step toward reducing waste and preserving our planet's precious resources
            for future generations.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg transition-colors uppercase tracking-wide"
          >
            Be Part of the Change
          </Link>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            We Operate Across Multiple Regions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            SIUL RECYCLING buys and processes materials in multiple countries and regions,
            serving clients around the globe with reliable recycling services.
          </p>
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
                className="bg-gray-light rounded-xl p-8 flex flex-col items-center justify-center h-40 gap-3"
              >
                <span className="text-5xl">{region.flag}</span>
                <span className="text-gray-600 font-medium">{region.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing info */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Prices Change Daily
          </h2>
          <p className="mt-4 text-white/80">
            Prices for used catalytic converters and non-ferrous metals fluctuate every day
            based on market conditions. Contact our advisors for the most up-to-date quote.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-6 bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Get a Quote
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
            <h3 className="text-xl font-bold uppercase">Catalytic Converters</h3>
            <p className="mt-2 text-white/70 text-sm">Learn about our catalyst recycling services</p>
          </Link>
          <Link
            to="/non-ferrous-metals"
            className="group block bg-primary text-white rounded-xl p-10 text-center hover:bg-primary-light transition-colors"
          >
            <Globe size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold uppercase">Non-Ferrous Metals</h3>
            <p className="mt-2 text-white/70 text-sm">Explore our metal recovery solutions</p>
          </Link>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
            Aligned with UN Sustainability Goals
          </h2>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            {[
              { icon: <Leaf size={40} />, label: 'Clean Water & Sanitation', goal: 'SDG 6' },
              { icon: <Globe size={40} />, label: 'Sustainable Cities', goal: 'SDG 11' },
              { icon: <Recycle size={40} />, label: 'Responsible Consumption', goal: 'SDG 12' },
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

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard number="80,000+" label="Recycled Catalytic Converters" />
            <StatCard number="7+" label="Countries Impacted" />
            <StatCard number="80,000+" label="Tons of Non-Ferrous Materials" />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-white/70 mb-8">Stay connected through our social media channels</p>
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
