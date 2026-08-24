import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export default function FloatingActions() {
  return (
    <div 
      id="floating-actions-container" 
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end"
    >
      {/* Floating WhatsApp Action (Desktop & Mobile) */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-emerald-900/50 hover:scale-105 transition-all duration-300 group"
        aria-label="Chat on WhatsApp with Flying Scissor"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>

      {/* Floating Call Action (Mobile only for quick conversion) */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        id="floating-call-btn"
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#d4af37] text-[#0c0d0e] shadow-2xl hover:scale-105 transition-all duration-300"
        aria-label="Call Flying Scissor directly"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  );
}
