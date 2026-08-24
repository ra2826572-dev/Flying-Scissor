import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export default function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Flying Scissor Basement National Bank West Canal Road Faisalabad Pakistan'
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0c0d0f] relative overflow-hidden border-t border-[#1a1b22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold">
              Find Us In Faisalabad
            </span>
            <MapPin className="w-4 h-4 text-[#d4af37]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide mb-4">
            Visit Flying Scissor
          </h2>

          <p className="text-base text-[#9fa1a8] font-light">
            Conveniently situated on West Canal Road, accessible from all major areas of Faisalabad.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Details Card (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#121318] border border-[#23252e] rounded-2xl p-7 sm:p-9 shadow-2xl">
            <div className="space-y-7">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#191b22] border border-[#2b2d37] flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-1">
                    Salon Address
                  </h3>
                  <p className="text-sm text-[#babcc4] leading-relaxed font-light">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#d4af37] mt-2 font-medium">
                    Landmark: {BUSINESS_INFO.landmarks}
                  </p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#191b22] border border-[#2b2d37] flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-1">
                    Telephone & Bookings
                  </h3>
                  <a 
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-base text-white hover:text-[#d4af37] font-semibold transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-[#7e808a]">Direct line for instant inquiries and reservations</span>
                </div>
              </div>

              {/* Hours Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#191b22] border border-[#2b2d37] flex items-center justify-center text-[#d4af37] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm font-semibold text-white">
                    Monday – Sunday
                  </p>
                  <p className="text-xs text-[#d4af37] font-medium mt-0.5">
                    10:00 AM – 10:00 PM (Open 7 Days)
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#1e2028] flex flex-col sm:flex-row gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="gold-button flex-1 py-3.5 px-4 rounded text-xs uppercase tracking-wider font-bold text-[#0c0d0e] flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#0c0d0e]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                id="location-call-btn"
                className="flex-1 py-3.5 px-4 rounded text-xs uppercase tracking-wider font-bold text-white bg-[#1a1c22] hover:bg-[#252832] border border-[#2e313c] hover:border-[#d4af37] flex items-center justify-center gap-2 text-center transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* Map View Frame (Right Column) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#23252e] bg-[#121318] shadow-2xl relative min-h-[380px] flex flex-col">
            
            {/* Real Interactive Google Maps Embed centered on Faisal Town Canal Road, Faisalabad */}
            <div className="relative w-full h-full min-h-[360px] flex-1">
              <iframe
                title="Flying Scissor Faisalabad Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.144410065096!2d73.1250106!3d31.4397394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226868846c4fa9%3A0xb3caee42e58eb6d3!2sCanal%20Rd%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718000000000!5m2!1sen!2s"
                className="w-full h-full border-0 absolute inset-0 filter invert-[0.90] hue-rotate-180 contrast-[1.1] opacity-85"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Location Pin Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#111216]/95 border border-[#30333d] backdrop-blur-md rounded-xl p-4 shadow-2xl z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0c0d0e] flex items-center justify-center font-bold font-serif text-xs shrink-0">
                    FS
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">Flying Scissor</h4>
                    <p className="text-[11px] text-[#9fa1a8]">West Canal Road, Faisalabad</p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Bar Info */}
            <div className="p-4 bg-[#14161c] border-t border-[#22242c] flex items-center justify-between text-xs text-[#8f919a]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                Easy parking available along West Canal Road
              </span>
              <span className="hidden sm:inline text-[#d4af37]">Opposite Raza Garden</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
