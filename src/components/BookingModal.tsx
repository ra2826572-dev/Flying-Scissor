import { useState, useEffect, type FormEvent } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Scissors, 
  Sparkles,
  MapPin
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    serviceId: initialServiceId || SERVICES_LIST[0].id,
    preferredDate: '',
    preferredTime: '12:00 PM',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update selected service when initialServiceId changes
  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId]);

  // Set default date to today or tomorrow in YYYY-MM-DD
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, preferredDate: prev.preferredDate || formatted }));
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM', '11:30 AM', '12:30 PM', '01:30 PM', 
    '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', 
    '06:30 PM', '07:30 PM', '08:30 PM', '09:00 PM'
  ];

  const selectedService = SERVICES_LIST.find(s => s.id === formData.serviceId) || SERVICES_LIST[0];

  const handleSubmit = (e: FormEvent, viaWhatsApp: boolean = false) => {
    e.preventDefault();
    
    const code = `FS-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmationCode(code);
    setIsSubmitted(true);

    if (viaWhatsApp) {
      const message = `*Flying Scissor & Co Appointment Request*%0A` +
        `--------------------------------%0A` +
        `*Name:* ${encodeURIComponent(formData.fullName || 'Guest')}%0A` +
        `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
        `*Service:* ${encodeURIComponent(selectedService.title)}%0A` +
        `*Date:* ${encodeURIComponent(formData.preferredDate)}%0A` +
        `*Time Slot:* ${encodeURIComponent(formData.preferredTime)}%0A` +
        (formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}%0A` : '') +
        `*Ref Code:* ${code}%0A` +
        `--------------------------------%0A` +
        `Please confirm my reservation at Flying Scissor & Co Faisalabad.`;

      window.open(`https://wa.me/923245478822?text=${message}`, '_blank');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="booking-modal-card"
        className="relative bg-[#111216] border border-[#2d2f38] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="booking-modal-close"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#888] hover:text-white hover:bg-[#1f2127] transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1c23] border border-[#d4af37]/30 text-xs text-[#d4af37] font-semibold mb-2">
                <Scissors className="w-3.5 h-3.5" />
                <span>Flying Scissor &amp; Co Appointment</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Book Your Salon Visit
              </h3>
              <p className="text-xs text-[#9ea0a8] mt-1">
                Select your preferred service and schedule. We look forward to welcoming you.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              
              {/* Select Service */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5">
                  Select Service *
                </label>
                <select
                  id="booking-service-select"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                  required
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.id} className="bg-[#181a20] text-white">
                      {srv.title} ({srv.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="booking-date-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    Preferred Time *
                  </label>
                  <select
                    id="booking-time-select"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white focus:border-[#d4af37] focus:outline-none transition-colors"
                    required
                  >
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-[#181a20] text-white">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="booking-name-input"
                    placeholder="e.g. Saad Rehman"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#60626b] focus:border-[#d4af37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="booking-phone-input"
                    placeholder="0324 5478822"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#60626b] focus:border-[#d4af37] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#b8bac2] font-semibold mb-1.5">
                  Special Requests / Stylist Preferences (Optional)
                </label>
                <textarea
                  id="booking-notes-input"
                  rows={2}
                  placeholder="Any specific styling instructions or occasion details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#181a20] border border-[#2d303a] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#60626b] focus:border-[#d4af37] focus:outline-none transition-colors"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  id="booking-submit-whatsapp-btn"
                  className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Book Instantly via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  id="booking-submit-online-btn"
                  className="gold-button w-full py-3 px-4 rounded-lg text-[#0c0d0e] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#0c0d0e]" />
                  <span>Confirm Online Reservation</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-[#7d808a]">
                  Prefer to call? Ring us directly at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-[#d4af37] font-semibold hover:underline">{BUSINESS_INFO.phone}</a>
                </span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div id="booking-success-view" className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Appointment Requested!
            </h3>

            <p className="text-sm text-[#a8abb4] mb-6 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.fullName || 'Valued Guest'}</strong>. Your appointment request has been recorded with Flying Scissor &amp; Co Faisalabad.
            </p>

            <div className="bg-[#171920] border border-[#292b35] rounded-xl p-5 text-left mb-6 space-y-2.5 text-xs">
              <div className="flex justify-between pb-2 border-b border-[#252832]">
                <span className="text-[#888]">Reference Code:</span>
                <span className="text-[#d4af37] font-bold tracking-wider">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Service:</span>
                <span className="text-white font-medium">{selectedService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Date & Time:</span>
                <span className="text-white font-medium">{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888]">Salon Location:</span>
                <span className="text-white font-medium text-right max-w-[200px]">West Canal Road, Faisalabad</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                id="booking-done-btn"
                className="flex-1 py-2.5 rounded-lg bg-[#22242c] hover:bg-[#2e313c] text-white font-semibold text-xs uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
