import { Link } from 'react-router-dom';
import { Sparkles, Shield, Scissors, CheckCircle2, ArrowRight } from 'lucide-react';
import { SALON_IMAGES, BUSINESS_INFO } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const features = [
    {
      title: 'Professional Stylists',
      desc: 'Experienced professionals focused on detail and precision.',
      icon: Scissors
    },
    {
      title: 'Premium Environment',
      desc: 'A modern, comfortable and elegant salon atmosphere.',
      icon: Sparkles
    },
    {
      title: 'Personal Style',
      desc: 'Services tailored to your individual look and preferences.',
      icon: Shield
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0f1013] relative overflow-hidden border-t border-[#1c1d22]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2d2f36] shadow-2xl group">
              <img
                src={SALON_IMAGES.about}
                alt="Flying Scissor & Co Salon Interior Lounge & Stations"
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/80 via-transparent to-transparent" />
              
              {/* Overlay Badge for Location & Quality */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121316]/90 border border-[#33363f] backdrop-blur-md flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Flagship Studio</p>
                  <p className="text-sm font-serif font-bold text-white">Canal Road, Faisalabad</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open Daily
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold corner frame */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl-2xl -z-0 pointer-events-none" />
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-2xl -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Copy & Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[1.5px] bg-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                About Flying Scissor &amp; Co
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight mb-6">
              More Than a Hair Salon
            </h2>

            <p className="text-base sm:text-lg text-[#bbbcc0] leading-relaxed font-light mb-8">
              Flying Scissor &amp; Co brings professional hair styling and grooming to Faisalabad with a focus on precision, quality, comfort, and personal style. Our modern salon environment is designed to give every client a premium experience from the moment they walk through the door.
            </p>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    id={`about-feature-${index + 1}`}
                    className="p-4 rounded-xl bg-[#141519] border border-[#22242a] hover:border-[#d4af37]/50 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1e2026] flex items-center justify-center text-[#d4af37] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-white mb-1 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#9c9da3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* About Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/about"
                id="about-story-btn"
                className="gold-button px-6 py-3 rounded text-xs uppercase tracking-widest font-bold text-[#0c0d0e] inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={onOpenBooking}
                id="about-book-btn"
                className="px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold text-[#d4d4d4] hover:text-white border border-[#2e3038] hover:border-[#d4af37] transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
