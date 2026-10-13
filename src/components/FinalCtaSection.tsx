import { Phone, Calendar, Sparkles } from 'lucide-react';
import { SALON_IMAGES, BUSINESS_INFO } from '../data/salonData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export default function FinalCtaSection({ onOpenBooking }: FinalCtaProps) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden flex items-center justify-center border-t border-[#202229]">
      {/* Background Image with Deep Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_IMAGES.receptionLounge}
          alt="Flying Scissor & Co Luxury Salon Experience in Faisalabad"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Multi-layered dark luxury backdrop gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e]/95 via-[#0c0d0e]/85 to-[#0c0d0e]/95" />
        <div className="absolute inset-0 bg-[#0c0d0e]/60" />
      </div>

      {/* Decorative center gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18191e]/90 border border-[#d4af37]/40 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e6d09c] font-semibold">
            Reserve Your Visit
          </span>
        </div>

        {/* Large Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-wide leading-tight mb-6">
          Ready for Your Next Look?
        </h2>

        {/* Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#cbccd2] font-light leading-relaxed mb-10">
          Step into Flying Scissor &amp; Co and experience professional styling in a premium environment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8">
          <button
            onClick={onOpenBooking}
            id="final-cta-book-btn"
            className="gold-button w-full sm:w-auto px-9 py-4 rounded text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#0c0d0e] flex items-center justify-center gap-3 shadow-2xl cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0c0d0e]" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            id="final-cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 rounded text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-white bg-[#191a20]/90 hover:bg-[#262832] border border-[#d4af37]/40 hover:border-[#d4af37] transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="text-xs text-[#8f919a] tracking-wider uppercase">
          Walk-ins welcome • Appointments prioritized • Open 7 Days
        </p>

      </div>
    </section>
  );
}
