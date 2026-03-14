import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function NonFerrousMetals() {
  return (
    <>
      <HeroSection
        title="Non-Ferrous Metals"
        subtitle="Sustainable recycling and recovery of non-ferrous metals for a greener future"
      />

      {/* What are non-ferrous metals */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              What Are Non-Ferrous Metals?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Non-ferrous metals are metals and alloys that do not contain iron in
              appreciable amounts. They are widely used across industries due to their
              lightweight properties, corrosion resistance, and excellent conductivity.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Common examples include:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Aluminum
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Stainless Steel
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Bronze
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Brass
              </li>
            </ul>
          </div>
          <img
            src="/non_ferritic_mats.png"
            alt="Non-ferrous metal samples"
            className="rounded-xl h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* Why recycle */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/cat.avif"
            alt="Recycling facility"
            className="rounded-xl h-64 w-full object-cover order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Is It Important to Recycle?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recycling non-ferrous metals is remarkably efficient. For example, recycling
              aluminum requires only about five percent of the energy needed to produce
              new aluminum from ore. This massive energy saving translates directly into
              reduced carbon emissions and environmental preservation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Proper handling procedures — including sorting, compacting, and processing —
              ensure maximum recovery rates. Non-ferrous metals are lightweight,
              non-combustible, and resistant to rust, making them ideal for repeated recycling
              without degradation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Become One of Our Star Suppliers
          </h2>
          <p className="text-gray-600 mb-8">
            We purchase non-ferrous metals at competitive market rates.
            Reach out to us for a quote today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-10 rounded-lg transition-colors uppercase"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
