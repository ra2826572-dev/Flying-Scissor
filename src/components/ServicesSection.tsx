import { Link } from 'react-router-dom';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  UserCheck, 
  Crown, 
  ArrowRight, 
  Check, 
  Clock 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0c0d0e] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              Menu & Expertise
            </span>
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-4">
            Our Signature Services
          </h2>
          
          <p className="text-base sm:text-lg text-[#a9abb1] font-light">
            Professional styling and grooming designed around your look.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#121317] border border-[#22242a] hover:border-[#d4af37]/60 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 group relative overflow-hidden"
            >
              {/* Subtle top card shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/0 group-hover:via-[#d4af37]/80 to-transparent transition-all duration-500 z-20" />

              <div>
                {/* Service Image Header */}
                {service.imageUrl && (
                  <div className="relative w-full h-44 overflow-hidden bg-[#181920]">
                    <img
                      src={service.imageUrl}
                      alt={`${service.title} at Flying Scissor & Co Faisalabad`}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-[#121317]/40 to-transparent" />
                    
                    {/* Badge Category */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37] bg-[#0c0d0e]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#d4af37]/30">
                        {service.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#e0e2ea] bg-[#0c0d0e]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        <Clock className="w-3 h-3 text-[#d4af37]" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Service Title with Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1a1c22] border border-[#2a2c34] group-hover:border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0 transition-colors mt-0.5">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white tracking-wide group-hover:text-[#e8cf89] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#a3a5ad] leading-relaxed mb-5 font-light">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-[#1e2026]">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#8e9098]">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Book Service Link */}
              <div className="p-6 pt-0 border-t border-[#1c1d23]">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  id={`book-service-${service.id}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#181a20] hover:bg-[#d4af37] text-white hover:text-[#0c0d0e] border border-[#282a32] hover:border-[#d4af37] text-xs uppercase tracking-widest font-semibold flex items-center justify-between transition-all duration-300 cursor-pointer group/btn"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="text-center mb-12">
          <Link
            to="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#16171e] hover:bg-[#20222a] border border-[#2d303b] hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <span>View Full Services &amp; Treatments Menu</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </Link>
        </div>

        {/* Bottom Booking Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#14161b] via-[#1a1c24] to-[#14161b] border border-[#2c2f38] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              Looking for a Custom Styling Consultation?
            </h4>
            <p className="text-sm text-[#a4a6af] font-light max-w-xl">
              Our stylists provide complimentary face-shape and hair texture consultations before every service.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            id="services-consultation-btn"
            className="gold-button px-8 py-3.5 rounded text-xs uppercase tracking-widest font-bold text-[#0c0d0e] shrink-0 cursor-pointer"
          >
            Reserve Your Session
          </button>
        </div>

      </div>
    </section>
  );
}
