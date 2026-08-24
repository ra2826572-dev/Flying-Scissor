import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUp, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#08090b] text-[#a0a2aa] border-t border-[#1c1d24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#181920]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-[#d4af37]" />
              <span className="font-serif text-2xl font-bold tracking-[0.16em] text-white">
                FLYING SCISSOR
              </span>
            </div>
            
            <p className="text-sm text-[#95979f] font-light leading-relaxed mb-6 max-w-sm">
              Professional hair styling and grooming in Faisalabad.
            </p>

            <div className="p-4 rounded-xl bg-[#111216] border border-[#20222a] text-xs text-[#8f919a] space-y-1.5">
              <div className="text-white font-medium">Flying Scissor Hair Salon</div>
              <div>Basement National Bank, West Canal Road, Faisalabad</div>
            </div>
          </div>

          {/* Column 1: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                    id={`footer-link-${item.toLowerCase()}`}
                    className="hover:text-[#d4af37] transition-colors text-[#999ba2]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <a 
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="hover:text-[#d4af37] text-white font-semibold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-[#a0a2ab] leading-relaxed text-xs">
                  West Canal Road, Main Canal Expressway, opposite Raza Garden, Faisal Town, Faisalabad
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours & Follow Us (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-5">
              Opening Hours
            </h3>
            <div className="flex items-start gap-2.5 text-sm mb-6">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Daily</p>
                <p className="text-xs text-[#d4af37]">{BUSINESS_INFO.openingHours}</p>
              </div>
            </div>

            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-3">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram-btn"
                className="w-10 h-10 rounded-lg bg-[#14151b] border border-[#242630] hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center text-white transition-colors"
                title="Instagram: @flying_scissorofficial"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-facebook-btn"
                className="w-10 h-10 rounded-lg bg-[#14151b] border border-[#242630] hover:border-[#d4af37] hover:text-[#d4af37] flex items-center justify-center text-white transition-colors"
                title="Facebook: Flying Scissors | Faisalabad"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e7078]">
          <p>© 2026 Flying Scissor. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Faisalabad, Pakistan</span>
            <button
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="flex items-center gap-1.5 text-[#9a9ba3] hover:text-[#d4af37] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
