import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Scissors, Image as ImageIcon, MessageSquare, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import FinalCtaSection from '../components/FinalCtaSection';

interface HomePageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function HomePage({ onOpenBooking }: HomePageProps) {
  return (
    <div>
      {/* Hero Showcase */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* About Preview Section */}
      <AboutSection onOpenBooking={() => onOpenBooking()} />

      {/* Quick Navigation Cards Bar */}
      <section className="bg-[#101115] border-y border-[#20222a] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Link
              to="/services"
              className="group p-5 rounded-xl bg-[#14161c] border border-[#23252f] hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1c1e26] group-hover:bg-[#d4af37] text-[#d4af37] group-hover:text-[#0c0d0e] flex items-center justify-center transition-colors mb-3">
                  <Scissors className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  Services Menu
                </h4>
                <p className="text-xs text-[#8c8e96] mt-1 font-light">
                  Haircuts, color, treatments & beard grooming
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] mt-4 font-semibold">
                Explore Menu <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/gallery"
              className="group p-5 rounded-xl bg-[#14161c] border border-[#23252f] hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1c1e26] group-hover:bg-[#d4af37] text-[#d4af37] group-hover:text-[#0c0d0e] flex items-center justify-center transition-colors mb-3">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  Salon Gallery
                </h4>
                <p className="text-xs text-[#8c8e96] mt-1 font-light">
                  Interior ambiance, styling suite & details
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] mt-4 font-semibold">
                View Photos <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/reviews"
              className="group p-5 rounded-xl bg-[#14161c] border border-[#23252f] hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1c1e26] group-hover:bg-[#d4af37] text-[#d4af37] group-hover:text-[#0c0d0e] flex items-center justify-center transition-colors mb-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  Client Reviews
                </h4>
                <p className="text-xs text-[#8c8e96] mt-1 font-light">
                  4.3/5 Star rating verified on Google
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] mt-4 font-semibold">
                Read Feedback <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="group p-5 rounded-xl bg-[#14161c] border border-[#23252f] hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1c1e26] group-hover:bg-[#d4af37] text-[#d4af37] group-hover:text-[#0c0d0e] flex items-center justify-center transition-colors mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  Location & Map
                </h4>
                <p className="text-xs text-[#8c8e96] mt-1 font-light">
                  West Canal Road, Faisalabad
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] mt-4 font-semibold">
                Get Directions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Services Section */}
      <ServicesSection onOpenBooking={onOpenBooking} />

      {/* Why Flying Scissor & Co */}
      <WhyChooseSection />

      {/* Visual Tour / Gallery Section */}
      <GallerySection />

      {/* Genuine Google Reviews */}
      <ReviewsSection onOpenBooking={() => onOpenBooking()} />

      {/* Location Section */}
      <LocationSection />

      {/* Final Call to Action */}
      <FinalCtaSection onOpenBooking={() => onOpenBooking()} />
    </div>
  );
}
