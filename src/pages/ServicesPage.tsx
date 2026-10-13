import { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  UserCheck, 
  Crown, 
  Check, 
  Clock, 
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function ServicesPage({ onOpenBooking }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircut', label: 'Haircut & Styling' },
    { id: 'color', label: 'Hair Color' },
    { id: 'grooming', label: 'Beard Grooming' },
    { id: 'treatment', label: 'Treatments & Spa' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => {
        if (selectedCategory === 'haircut') return s.id.includes('haircut') || s.id.includes('styling');
        if (selectedCategory === 'color') return s.id.includes('color');
        if (selectedCategory === 'grooming') return s.id.includes('beard');
        if (selectedCategory === 'treatment') return s.id.includes('treatment');
        return true;
      });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      default: return <Scissors className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-[#0c0d0e]">
      <PageHeader
        badge="Services Menu"
        title="Signature Services & Grooming"
        description="Every treatment is executed with precision shears, professional products, and tailored attention to detail."
      />

      {/* Category Tabs */}
      <section className="py-8 bg-[#111216] border-b border-[#20222a] sticky top-[73px] z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#d4af37] text-[#0c0d0e] font-bold shadow-lg shadow-[#d4af37]/20'
                    : 'bg-[#181920] text-[#a0a2aa] hover:text-white border border-[#2a2c36] hover:border-[#3d404c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#121317] border border-[#22242a] hover:border-[#d4af37]/60 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/0 group-hover:via-[#d4af37]/80 to-transparent transition-all duration-500 z-20" />

              <div>
                {/* Service Image */}
                {service.imageUrl && (
                  <div className="relative w-full h-48 overflow-hidden bg-[#181920]">
                    <img
                      src={service.imageUrl}
                      alt={`${service.title} at Flying Scissor & Co`}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-[#121317]/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#d4af37] bg-[#0c0d0e]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#d4af37]/30">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#e0e2ea] bg-[#0c0d0e]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        <Clock className="w-3 h-3 text-[#d4af37]" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1a1c22] border border-[#2a2c34] group-hover:border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0 transition-colors mt-0.5">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white tracking-wide group-hover:text-[#e8cf89] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#a3a5ad] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-2 pt-4 border-t border-[#1e2026]">
                    <p className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">Includes:</p>
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#8e9098]">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-[#1c1d23]">
                <button
                  onClick={() => onOpenBooking(service.id)}
                  className="w-full py-3.5 rounded-xl bg-[#191a20] hover:bg-[#d4af37] text-white hover:text-[#0c0d0e] border border-[#2b2d36] hover:border-[#d4af37] text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover/btn:text-[#0c0d0e] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Consultation & Assurance Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#14151a] via-[#161820] to-[#14151a] border border-[#292c36] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              Need a Custom Styling Consultation?
            </h3>
            <p className="text-sm text-[#b0b2ba] font-light leading-relaxed mb-8">
              Not sure which treatment or hair cut fits your hair type best? Walk in to our salon on West Canal Road or connect with our lead stylists directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="gold-button px-7 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0c0d0e] flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0c0d0e]" />
                <span>Book Consultation</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-6 py-3.5 rounded-lg bg-[#1e2028] border border-[#30333f] text-white hover:text-[#d4af37] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:border-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
