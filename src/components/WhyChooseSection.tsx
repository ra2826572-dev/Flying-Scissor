import { Award, Sparkles, TrendingUp, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/salonData';

export default function WhyChooseSection() {
  const icons = [Award, Sparkles, TrendingUp, HeartHandshake];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0a0b0d] relative overflow-hidden border-t border-[#18191e]">
      {/* Subtle Background Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              The Flying Scissor &amp; Co Standard
            </span>
            <span className="w-6 h-[1.5px] bg-[#d4af37]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-4">
            Why Flying Scissor &amp; Co?
          </h2>
          
          <p className="text-base text-[#9fa1a8] font-light">
            Engineered around comfort, luxury, and unmatched hairdressing precision.
          </p>
        </div>

        {/* 4 Large Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.number}
                id={`why-block-${item.number}`}
                className="bg-[#111216] border border-[#202228] hover:border-[#d4af37]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 group relative"
              >
                {/* Top Numbering and Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors tracking-wider">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#181a20] border border-[#252830] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0c0d0e] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-wide group-hover:text-[#f3dfa7] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#a2a4ab] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="pt-6 mt-6 border-t border-[#1a1b22]">
                  <div className="w-8 h-[2px] bg-[#d4af37]/30 group-hover:w-full group-hover:bg-[#d4af37] transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
