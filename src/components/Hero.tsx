import { Phone, Calendar, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, SALON_IMAGES } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Depth & Dark Luxury Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_IMAGES.hero}
          alt="Flying Scissor & Co Luxury Salon Interior in Faisalabad"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Multi-gradient overlay for optimal contrast and warm atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/80 to-[#0c0d0e]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0c0d0e]/50 to-[#0c0d0e]/95" />
      </div>

      {/* Decorative Golden Accent Lines */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18191d]/80 border border-[#d4af37]/40 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e5d5a6] font-semibold">
            Premium Hair Salon • Faisalabad
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          id="hero-main-heading"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-[0.12em] text-white leading-tight mb-4 drop-shadow-2xl"
        >
          FLYING SCISSOR &amp; CO
        </h1>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-8 sm:w-16 bg-[#d4af37]/40" />
          <h2 className="text-lg sm:text-2xl md:text-3xl font-editorial italic text-[#e6c673] tracking-wide font-normal">
            Where Style Meets Precision
          </h2>
          <div className="h-[1px] w-8 sm:w-16 bg-[#d4af37]/40" />
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#d0d0d0] font-light leading-relaxed mb-10 px-2">
          Experience premium hair styling, grooming, and beauty services in an elegant environment designed for your comfort.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          <button
            onClick={onOpenBooking}
            id="hero-book-cta"
            className="gold-button w-full sm:w-auto px-8 py-4 rounded text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#0c0d0e] flex items-center justify-center gap-3 shadow-2xl cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0c0d0e]" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            id="hero-call-cta"
            className="w-full sm:w-auto px-8 py-4 rounded text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white bg-[#1a1b20]/90 hover:bg-[#252730] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Trust Badges & Local Credentials */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-[#b5b5b5]">
          <div 
            id="hero-rating-badge"
            className="flex items-center gap-2 bg-[#141518]/90 px-4 py-2 rounded-full border border-white/10"
          >
            <div className="flex text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
              ))}
            </div>
            <span className="font-semibold text-white">4.3/5</span>
            <span className="text-[#8e8e8e]">Google Rating ({BUSINESS_INFO.rating.totalReviews} Reviews)</span>
          </div>

          <div 
            id="hero-features-pill"
            className="flex items-center gap-2 text-[#cccccc] font-medium tracking-wide text-xs sm:text-sm text-center"
          >
            <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Professional Hair Styling • Premium Experience • Faisalabad</span>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#a0a0a0] mb-1">Scroll to Explore</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
