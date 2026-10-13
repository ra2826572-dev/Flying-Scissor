import { useState, type FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  MessageCircle, 
  Instagram, 
  Send,
  Compass,
  CheckCircle2
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { BUSINESS_INFO } from '../data/salonData';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    serviceInterest: 'Haircut & Styling',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Flying Scissor & Co Basement National Bank West Canal Road Faisalabad Pakistan'
  )}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `*Inquiry for Flying Scissor & Co*%0A` +
      `*Name:* ${encodeURIComponent(formState.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formState.phone)}%0A` +
      `*Interest:* ${encodeURIComponent(formState.serviceInterest)}%0A` +
      (formState.message ? `*Message:* ${encodeURIComponent(formState.message)}%0A` : '') +
      `Please let me know availability and details.`;

    window.open(`https://wa.me/923245478822?text=${waText}`, '_blank');
  };

  return (
    <div className="bg-[#0c0d0e]">
      <PageHeader
        badge="Contact & Location"
        title="Find & Contact Us"
        description="Conveniently situated on West Canal Road in Faisalabad. Open 7 days a week from 10:00 AM to 10:00 PM."
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address */}
          <div className="p-7 rounded-2xl bg-[#121318] border border-[#22242e] hover:border-[#d4af37]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#191b22] border border-[#292c36] flex items-center justify-center text-[#d4af37] mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Our Location</h3>
              <p className="text-sm text-[#a3a5ad] leading-relaxed font-light mb-3">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-xs text-[#d4af37] font-medium">
                Landmark: {BUSINESS_INFO.landmarks}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-semibold"
            >
              <span>Get Google Maps Directions</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Telephone */}
          <div className="p-7 rounded-2xl bg-[#121318] border border-[#22242e] hover:border-[#d4af37]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#191b22] border border-[#292c36] flex items-center justify-center text-[#d4af37] mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Telephone & WhatsApp</h3>
              <p className="text-sm text-[#a3a5ad] font-light mb-3">
                Call our direct reception line or send a quick WhatsApp message for instant response.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="text-lg font-semibold text-white hover:text-[#d4af37] transition-colors block mb-1"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-xs text-[#71737d]">Available daily during business hours</span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-4 py-2 rounded-lg bg-[#191b22] border border-[#2e313c] text-xs font-semibold text-white hover:text-[#d4af37] transition-colors"
              >
                Call Now
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366] text-xs font-semibold text-white hover:bg-[#20ba59] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="p-7 rounded-2xl bg-[#121318] border border-[#22242e] hover:border-[#d4af37]/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#191b22] border border-[#292c36] flex items-center justify-center text-[#d4af37] mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">Working Hours</h3>
              <p className="text-sm text-white font-medium mb-1">
                Monday to Sunday (Open 7 Days)
              </p>
              <p className="text-base font-serif font-bold text-[#d4af37] mb-3">
                10:00 AM – 10:00 PM
              </p>
              <p className="text-xs text-[#a3a5ad] font-light">
                Walk-ins are welcomed warmly; reservations are given priority seating.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-[#d4af37]">
              <Instagram className="w-4 h-4" />
              <a
                href={BUSINESS_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-semibold"
              >
                Follow on Instagram {BUSINESS_INFO.social.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        {/* Map & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#23252e] bg-[#121318] shadow-2xl relative min-h-[420px] flex flex-col">
            <div className="relative w-full h-full min-h-[380px] flex-1">
              <iframe
                title="Flying Scissor & Co Faisalabad Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.144410065096!2d73.1250106!3d31.4397394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226868846c4fa9%3A0xb3caee42e58eb6d3!2sCanal%20Rd%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718000000000!5m2!1sen!2s"
                className="w-full h-full border-0 absolute inset-0 filter invert-[0.90] hue-rotate-180 contrast-[1.1] opacity-85"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Info Box */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#111216]/95 border border-[#30333d] backdrop-blur-md rounded-xl p-4 shadow-2xl z-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0c0d0e] flex items-center justify-center font-bold font-serif text-xs shrink-0">
                    FS
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-white">Flying Scissor &amp; Co</h4>
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

            <div className="p-4 bg-[#14161c] border-t border-[#22242c] flex items-center justify-between text-xs text-[#8f919a]">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                Easy parking along West Canal Road
              </span>
              <span className="text-[#d4af37]">Opposite Raza Garden</span>
            </div>
          </div>

          {/* Direct Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-[#121318] border border-[#23252e] rounded-2xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold block mb-2">
                Quick Message
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#9c9ea6] font-light mb-6">
                Have a question regarding pricing, wedding packages, or timing? Leave a message below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-white">Inquiry Forwarded</h4>
                  <p className="text-xs text-[#a0a2ab]">
                    WhatsApp chat has been prepared for Flying Scissor &amp; Co. Our team will assist you immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#d4af37] hover:underline pt-2 inline-block font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Taha"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5e616c] focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0324 5478822"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5e616c] focus:border-[#d4af37] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1">
                      Service Interest
                    </label>
                    <select
                      value={formState.serviceInterest}
                      onChange={(e) => setFormState({ ...formState, serviceInterest: e.target.value })}
                      className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    >
                      <option value="Haircut & Styling">Haircut &amp; Styling</option>
                      <option value="Beard & Razor Grooming">Beard &amp; Razor Grooming</option>
                      <option value="Hair Color & Highlights">Hair Color &amp; Highlights</option>
                      <option value="Hair Treatment & Spa">Hair Treatment &amp; Spa</option>
                      <option value="Special Occasion / Groom">Special Occasion / Groom</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific hairstyle, time preferences or requests..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#5e616c] focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gold-button w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0c0d0e] flex items-center justify-center gap-2 cursor-pointer shadow-xl"
                  >
                    <Send className="w-3.5 h-3.5 text-[#0c0d0e]" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-[#1c1d24] text-[11px] text-[#71737d] flex items-center justify-between">
              <span>Fastest response: Within minutes</span>
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#d4af37] hover:underline font-semibold">
                Direct Call: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
