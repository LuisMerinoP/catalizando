import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function CatalyticConverters() {
  return (
    <>
      <HeroSection
        title="Catalytic Converters"
        subtitle="Professional recycling and recovery of precious metals from used catalytic converters"
      />

      {/* What are catalytic converters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              What Are Catalytic Converters?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Catalytic converters are emission control devices found in vehicle exhaust systems.
              They contain precious metals such as platinum, palladium, and rhodium that serve
              as catalysts to convert harmful pollutants into less harmful emissions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These precious metals make catalytic converters highly valuable for recycling.
              Through specialized processing, we recover these materials and return them
              to the production cycle, reducing the need for mining new resources.
            </p>
          </div>
          <img
            src="/cat_converter.webp"
            alt="Catalytic converter"
            className="rounded-xl h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* Why recycle */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="/recycle.jpg"
            alt="Recycling process"
            className="rounded-xl h-64 w-full object-contain bg-white p-4 order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Why Recycle Catalytic Converters?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recycling catalytic converters helps recover valuable precious metals while
              reducing environmental impact. The process is significantly more efficient
              than traditional mining operations.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Recovery of platinum, palladium, and rhodium
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Reduced environmental footprint vs. mining
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Competitive pricing based on daily market rates
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                Professional and transparent evaluation process
              </li>
            </ul>
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
            We offer competitive prices and reliable service for your used catalytic converters.
            Contact us today for a personalized quote.
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
