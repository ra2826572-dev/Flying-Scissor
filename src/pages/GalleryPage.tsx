import { useState, useEffect } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onOpenBooking: () => void;
}

export default function GalleryPage({ onOpenBooking }: GalleryPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'styling', label: 'Hair & Styling' },
    { id: 'grooming', label: 'Beard & Shave' },
    { id: 'experience', label: 'Guest Lounge' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const currentItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-[#0c0d0e]">
      <PageHeader
        badge="Visual Tour"
        title="Salon Atmosphere & Portfolio"
        description="Experience the interior ambiance, precision styling suites, and luxury comfort that defines Flying Scissor & Co."
      />

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#0c0d0e] shadow-lg shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#15161b] text-[#9a9ba2] hover:text-white border border-[#23252d] hover:border-[#383a45]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#14151a] border border-[#24262e] hover:border-[#d4af37]/60 shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-[#0c0d0e]/30 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/90 text-[#0c0d0e] flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#b0b2b8] line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Invitation */}
        <div className="rounded-2xl bg-[#111216] border border-[#22242c] p-8 sm:p-12 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Experience Our Salon In Person
          </h3>
          <p className="text-sm text-[#9b9da5] max-w-xl mx-auto mb-6 font-light">
            Conveniently situated in the Basement of National Bank, West Canal Road, Faisalabad. Open daily 10AM to 10PM.
          </p>
          <button
            onClick={onOpenBooking}
            className="gold-button px-8 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0c0d0e] inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0c0d0e]" />
            <span>Book Your Visit Now</span>
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#181a20] text-white hover:text-[#d4af37] hover:bg-[#252832] transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#181a20]/90 text-white hover:text-[#d4af37] hover:bg-[#252832] transition-colors z-20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#181a20]/90 text-white hover:text-[#d4af37] hover:bg-[#252832] transition-colors z-20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden border border-[#30333d] shadow-2xl max-h-[75vh]">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                {currentItem.category} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white mt-1">
                {currentItem.title}
              </h4>
              <p className="text-xs text-[#a0a2ab] mt-1 font-light">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
