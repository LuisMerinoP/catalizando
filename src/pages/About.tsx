import HeroSection from '../components/HeroSection';
import { BookOpen, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Dedicated to supplying recyclable metals to industries around the world"
        ctaText=""
      />

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src="/siulrecycling.png" alt="SIUL Recycling logo" className="max-w-md w-full mx-auto mb-8 object-contain" />
          <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            At SIUL Recycling, we are dedicated to supplying recyclable metals to different
            industries around the world. We specialize in the urban extraction of metals,
            providing sustainable solutions that benefit both our clients and the environment.
            Founded with a vision to lead the international recycling industry, we have grown
            into a trusted partner for businesses across multiple continents.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To supply recyclable metals as raw material to our clients located in different
              parts of the world, ensuring quality, reliability, and sustainable practices
              in every transaction.
            </p>
          </div>
          <div className="bg-white rounded-xl p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leader in the international trade of recyclable metals through a
              team of highly competent and committed people who drive innovation and
              environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-gray-light">
              <BookOpen size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">Learn Continuously</h4>
              <p className="text-gray-600 text-sm">
                We embrace growth and knowledge, constantly seeking better ways
                to serve our clients and the environment.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gray-light">
              <Shield size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">Decide Responsibly</h4>
              <p className="text-gray-600 text-sm">
                Every decision we make considers the impact on our community,
                partners, and the planet.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gray-light">
              <Heart size={48} className="mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-bold text-primary mb-2">True Respect</h4>
              <p className="text-gray-600 text-sm">
                We treat every person, partner, and resource with genuine
                respect and appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Our Team</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm w-full max-w-sm">
              <img src="/foto_luis.png" alt="Luis Merino" className="w-48 h-60 rounded-xl mb-4 object-cover" />
              <span className="text-primary font-semibold">Luis Merino</span>
              <span className="text-gray-500 text-sm mt-1">Office</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
