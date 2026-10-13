import { Calendar, ShieldCheck, Sparkles, Scissors, Clock, Award, CheckCircle2, HeartHandshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SALON_IMAGES, BUSINESS_INFO } from '../data/salonData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export default function AboutPage({ onOpenBooking }: AboutPageProps) {
  const standards = [
    {
      title: 'Precision Tools & Sanitization',
      desc: 'All scissors, clippers, and straight razors are sterilized before every client session.',
      icon: Scissors
    },
    {
      title: 'Premium Styling Formulations',
      desc: 'We use professional, nourishing hair and beard grooming products for long-lasting health.',
      icon: Sparkles
    },
    {
      title: 'Ergonomic Luxury Seating',
      desc: 'Heavy-duty hydraulic leather styling chairs and ergonomic wash basins for maximum comfort.',
      icon: Award
    },
    {
      title: 'Personalized Consultations',
      desc: 'Every cut and style starts with analyzing your face structure, hair texture, and daily lifestyle.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="bg-[#0c0d0e]">
      <PageHeader
        badge="About Us"
        title="About Flying Scissor & Co"
        description="Crafting refined hair styling, beard grooming, and exceptional client experiences on West Canal Road, Faisalabad."
      />

      {/* Main Editorial Story */}
      <section className="py-20 lg:py-24 bg-[#0e0f13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column Image Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2b2d35] shadow-2xl group">
                <img
                  src={SALON_IMAGES.about}
                  alt="Flying Scissor & Co Salon Interior Lounge & Stations"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121316]/95 border border-[#30333d] backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">Flagship Studio</span>
                    <h3 className="font-serif text-sm font-bold text-white">West Canal Road, Faisalabad</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/70 px-2.5 py-1 rounded border border-emerald-800/50">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open Daily 10AM-10PM
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column Story Details */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[1.5px] bg-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                  Our Philosophy
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide leading-tight mb-6">
                Where Hairdressing Meets Artistry & Precision
              </h2>

              <p className="text-base text-[#bbbcc2] leading-relaxed font-light mb-5">
                Flying Scissor & Co was founded on a simple yet uncompromising standard: every client deserves a haircut and grooming session tailored to their individuality in an environment that feels welcoming, peaceful, and thoroughly modern.
              </p>

              <p className="text-base text-[#bbbcc2] leading-relaxed font-light mb-8">
                Located conveniently on West Canal Road in Faisalabad, our studio pairs skilled master stylists with world-class barbershop and salon hospitality. Whether you are coming in for a clean corporate fade, a luxury hot-towel beard sculpt, or a dimensional hair color change, we invest the time to make every detail immaculate.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1e2028]">
                <div className="p-4 rounded-xl bg-[#131418] border border-[#22242c]">
                  <span className="text-2xl font-serif font-bold text-[#d4af37]">4.3 / 5</span>
                  <p className="text-xs text-[#9a9ca4] mt-1">Verified Google Rating across clients</p>
                </div>
                <div className="p-4 rounded-xl bg-[#131418] border border-[#22242c]">
                  <span className="text-2xl font-serif font-bold text-[#d4af37]">7 Days</span>
                  <p className="text-xs text-[#9a9ca4] mt-1">Consistent daily service: 10AM – 10PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Salon Standards & Quality Grid */}
      <section className="py-20 bg-[#0a0b0d] border-t border-[#1a1b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-2">
              Uncompromising Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              The Flying Scissor & Co Difference
            </h2>
            <p className="text-sm text-[#9c9ea6] mt-3 font-light">
              Designed around your comfort, hygienic standards, and styling satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#111216] border border-[#20222a] hover:border-[#d4af37]/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#191b22] border border-[#292c36] group-hover:border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#e4ce94] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#93959d] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Atmosphere Showcase Banner */}
      <section className="py-20 bg-[#121318] border-t border-[#1e2028]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-[#2c2f38] bg-[#16171d] grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-2">
                Visit Our Studio
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Step Into Serenity & Style
              </h2>
              <p className="text-sm text-[#a8abb4] leading-relaxed font-light mb-8">
                Whether you need a quick touch-up or an entire transformation, our dedicated stylists on West Canal Road are ready to welcome you with cold beverages, relaxing hospitality, and precision shears.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onOpenBooking}
                  className="gold-button px-7 py-3.5 rounded text-xs uppercase tracking-widest font-bold text-[#0c0d0e] flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#0c0d0e]" />
                  <span>Reserve an Appointment</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-6 py-3.5 rounded text-xs uppercase tracking-widest font-semibold text-white bg-[#1e2027] hover:bg-[#292c36] border border-[#333642] transition-colors"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="h-80 lg:h-full min-h-[380px] relative">
              <img
                src={SALON_IMAGES.stylingStation}
                alt="Flying Scissor & Co Styling Station in Faisalabad"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#16171d] via-transparent to-transparent hidden lg:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
