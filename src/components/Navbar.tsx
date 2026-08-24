import { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Notification Bar for Hours & Contact */}
      <div id="top-announcement-bar" className="bg-[#121316] border-b border-[#26282c] text-xs text-[#a0a0a0] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#dcdcdc]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              West Canal Road, Faisalabad
            </span>
            <span className="flex items-center gap-1.5 text-[#a0a0a0]">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              {BUSINESS_INFO.openingHours}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              id="topbar-phone-link"
              className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 text-[#dcdcdc] font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              {BUSINESS_INFO.phone}
            </a>
            <div className="flex items-center gap-3 pl-3 border-l border-[#333]">
              <a 
                href={BUSINESS_INFO.social.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                id="topbar-instagram-link"
                className="hover:text-[#d4af37] transition-colors"
                title="Follow Flying Scissor on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={BUSINESS_INFO.social.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                id="topbar-facebook-link"
                className="hover:text-[#d4af37] transition-colors"
                title="Follow Flying Scissors on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        id="main-navigation"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0c0d0ee8] backdrop-blur-md border-b border-[#222428] shadow-2xl py-3.5' 
            : 'bg-gradient-to-b from-[#0c0d0e]/95 to-[#0c0d0e]/80 border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              id="nav-brand-logo"
              className="flex flex-col group cursor-pointer"
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-[#d4af37] transition-colors duration-200">
                FLYING SCISSOR
              </span>
              <span className="text-[9px] tracking-[0.28em] text-[#a58942] uppercase font-sans font-semibold">
                Faisalabad • Hair Salon
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm uppercase tracking-widest text-[#c8c8c8] hover:text-[#d4af37] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Right Action CTA buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                id="nav-call-btn"
                className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded border border-[#3a3a3a] text-xs font-semibold tracking-wider text-[#dcdcdc] hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => onOpenBooking()}
                id="nav-book-btn"
                className="gold-button px-5 py-2.5 rounded text-xs uppercase tracking-widest font-bold text-[#0c0d0e] flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0c0d0e]" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                id="mobile-nav-book-btn"
                className="gold-button px-3.5 py-2 rounded text-[11px] uppercase tracking-wider font-bold text-[#0c0d0e] sm:hidden"
              >
                Book
              </button>
              
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#dcdcdc] hover:text-white hover:bg-[#1f2125] focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-[#111215] border-b border-[#25272c] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-link-${link.name.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#d4d4d4] hover:text-[#d4af37] py-2 border-b border-[#1c1d22] transition-colors"
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  id="mobile-menu-cta-book"
                  className="gold-button w-full py-3 rounded text-center text-xs font-bold uppercase tracking-wider text-[#0c0d0e] flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#0c0d0e]" />
                  Book Your Appointment
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  id="mobile-menu-cta-call"
                  className="w-full py-3 rounded text-center text-xs font-bold uppercase tracking-wider text-[#e5e5e5] border border-[#33363d] hover:border-[#d4af37] flex items-center justify-center gap-2 bg-[#181a1f]"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#888]">
                <span>Open Daily: 10AM – 10PM</span>
                <div className="flex gap-4">
                  <a href={BUSINESS_INFO.social.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37]">Instagram</a>
                  <a href={BUSINESS_INFO.social.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37]">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
