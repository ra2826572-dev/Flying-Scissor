import { Link } from 'react-router-dom';
import { Star, CheckCircle, Quote, MessageSquare, ArrowRight } from 'lucide-react';
import { GENUINE_REVIEWS, BUSINESS_INFO } from '../data/salonData';

interface ReviewsSectionProps {
  onOpenBooking: () => void;
}

export default function ReviewsSection({ onOpenBooking }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0a0b0d] relative overflow-hidden border-t border-[#18191f]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              Client Feedback
            </span>
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-4">
            What Our Clients Say
          </h2>

          <p className="text-base text-[#9fa1a8] font-light">
            Verified ratings and authentic experiences from Google Reviews.
          </p>
        </div>

        {/* Rating Summary Banner */}
        <div 
          id="reviews-summary-card"
          className="max-w-3xl mx-auto mb-14 rounded-2xl bg-[#121419] border border-[#262832] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-5">
            <div className="text-center sm:text-left">
              <span className="text-4xl sm:text-5xl font-serif font-extrabold text-[#d4af37]">
                {BUSINESS_INFO.rating.score}
              </span>
              <span className="text-lg text-[#777] font-normal"> / 5.0</span>
            </div>
            <div className="h-10 w-[1px] bg-[#292b34] hidden sm:block" />
            <div>
              <div className="flex text-[#d4af37] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-xs text-[#a0a2ab]">
                Based on <strong className="text-white font-semibold">{BUSINESS_INFO.rating.totalReviews} Google Reviews</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
            <CheckCircle className="w-4 h-4" />
            <span>Verified Local Business</span>
          </div>
        </div>

        {/* Authentic Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {GENUINE_REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="rounded-2xl bg-[#111216] border border-[#21232b] hover:border-[#d4af37]/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Top: Avatar, Name, Rating & Quote icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#1e2028] border border-[#30333f] flex items-center justify-center font-serif text-sm font-bold text-[#d4af37]">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-bold text-white tracking-wide">
                        {review.author}
                      </h3>
                      <span className="text-[11px] text-[#7d7f87] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-[#d4af37]/40" />
                </div>

                {/* Star rating */}
                <div className="flex text-[#d4af37] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
                  ))}
                </div>

                {/* Review body */}
                <p className="text-sm text-[#b8bac2] leading-relaxed font-light italic">
                  “{review.content}”
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#1a1c22] text-[11px] text-[#6d6f78] uppercase tracking-wider">
                Google Verified Reviewer
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <Link
            to="/reviews"
            id="view-all-reviews-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#16171e] hover:bg-[#20222a] border border-[#2d303b] hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <span>View All Client Reviews &amp; Ratings</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </Link>

          <button
            onClick={onOpenBooking}
            id="reviews-cta-btn"
            className="gold-button px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold text-[#0c0d0e] shadow-xl hover:shadow-2xl cursor-pointer"
          >
            Book Your Appointment
          </button>
        </div>

      </div>
    </section>
  );
}
