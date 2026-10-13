import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  parentLabel?: string;
}

export default function PageHeader({ badge, title, description, parentLabel = 'Home' }: PageHeaderProps) {
  return (
    <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#14151b] via-[#0f1013] to-[#0c0d0e] border-b border-[#1f2128] overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8e9099] mb-5">
          <Link to="/" className="hover:text-[#d4af37] transition-colors">{parentLabel}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[#d4af37] font-semibold">{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-wide mb-4">
          {title}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#b8bac2] font-light leading-relaxed">
          {description}
        </p>

        {/* Decorative Golden Line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
        </div>
      </div>
    </div>
  );
}
