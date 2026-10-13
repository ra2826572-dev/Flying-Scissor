import { Star, CheckCircle, Quote, MessageSquare, Calendar, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { GENUINE_REVIEWS, BUSINESS_INFO } from '../data/salonData';

interface ReviewsPageProps {
  onOpenBooking: () => void;
}

export default function ReviewsPage({ onOpenBooking }: ReviewsPageProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Flying Scissor & Co Basement National Bank West Canal Road Faisalabad Pakistan'
  )}`;

  return (
    <div className="bg-[#0c0d0e]">
      <PageHeader
        badge="Reviews"
        title="Client Feedback & Ratings"
        description="Authentic client reviews from Google reflecting our dedication to quality, styling, and welcoming hospitality."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Score Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-16 rounded-2xl bg-[#121419] border border-[#272934] p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div>
              <div className="flex items-baseline justify-center sm:justify-start gap-1">
                <span className="text-5xl sm:text-6xl font-serif font-extrabold text-[#d4af37]">
                  {BUSINESS_INFO.rating.score}
                </span>
                <span className="text-xl text-[#777] font-light"> / 5.0</span>
              </div>
              <p className="text-xs text-[#8e909a] mt-1 font-medium">Verified Google Score</p>
            </div>

            <div className="h-12 w-[1px] bg-[#272934] hidden sm:block" />

            <div>
              <div className="flex text-[#d4af37] justify-center sm:justify-start mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4af37]" />
                ))}
              </div>
              <p className="text-sm text-[#cacbd2]">
                Based on <strong className="text-white font-semibold">{BUSINESS_INFO.rating.totalReviews} Google Reviews</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#191b22] border border-[#2e313c] hover:border-[#d4af37] text-xs font-semibold text-white flex items-center justify-center gap-2 hover:text-[#d4af37] transition-all"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenBooking}
              className="gold-button px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0c0d0e] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0c0d0e]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GENUINE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#111216] border border-[#21232b] hover:border-[#d4af37]/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#1e2028] border border-[#30333f] flex items-center justify-center font-serif text-base font-bold text-[#d4af37]">
                      {review.avatarInitial}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-white tracking-wide">
                        {review.author}
                      </h3>
                      <span className="text-xs text-[#7d7f87] flex items-center gap-1 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        {review.date}
                      </span>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/40" />
                </div>

                <div className="flex text-[#d4af37] mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>

                <p className="text-sm text-[#c5c6cd] italic leading-relaxed font-light">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1a1b22] flex items-center justify-between text-[11px] text-[#71737c]">
                <span>Verified Local Visitor</span>
                <span className="text-[#d4af37]">Faisalabad</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitments */}
        <div className="rounded-3xl bg-[#14151b] border border-[#242630] p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-2">
            Client Experience
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Our Commitment to Every Guest
          </h3>
          <p className="text-sm text-[#9fabb4] leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            We value candid client feedback to constantly elevate our precision techniques, salon atmosphere, and client care. Have a request or custom styling need? We're here for you.
          </p>

          <button
            onClick={onOpenBooking}
            className="gold-button px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0c0d0e] inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0c0d0e]" />
            <span>Experience Flying Scissor & Co</span>
          </button>
        </div>

      </section>
    </div>
  );
}
