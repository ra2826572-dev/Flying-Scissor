import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Views' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'styling', label: 'Hair Styling' },
    { id: 'grooming', label: 'Grooming' },
    { id: 'experience', label: 'Client Experience' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0c0d0f] relative border-t border-[#1a1b20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              Visual Tour
            </span>
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-4">
            Step Inside Flying Scissor &amp; Co
          </h2>

          <p className="text-base sm:text-lg text-[#a3a5ad] font-light">
            A premium environment created for your style and comfort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c0d0e] shadow-lg shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#15161b] text-[#9a9ba2] hover:text-white border border-[#23252d] hover:border-[#383a45]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry-style balance) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#14151a] border border-[#24262e] hover:border-[#d4af37]/60 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Reveal Action Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/90 text-[#0c0d0e] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Card Title & Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b0b2b8] line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Portfolio Link */}
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            id="view-all-gallery-btn"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#16171e] hover:bg-[#20222a] border border-[#2d303b] hover:border-[#d4af37] text-white hover:text-[#d4af37] text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <span>Explore Complete Gallery &amp; Portfolio</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </Link>
        </div>

      </div>

      {/* Modern High-End Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div 
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            id="lightbox-close-btn"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#1e2026] text-white hover:text-[#d4af37] hover:bg-[#282a33] transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            id="lightbox-prev-btn"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-[#181a20]/80 text-white hover:text-[#d4af37] hover:bg-[#22252e] border border-white/10 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            id="lightbox-next-btn"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-[#181a20]/80 text-white hover:text-[#d4af37] hover:bg-[#22252e] border border-white/10 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Modal Content */}
          <div 
            className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#33353e] shadow-2xl bg-[#111216] max-h-[72vh] flex items-center justify-center">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Captions and Index indicator */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left px-2">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                  {currentItem.category.toUpperCase()} • Image {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-[#a0a2aa]">
                  {currentItem.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
