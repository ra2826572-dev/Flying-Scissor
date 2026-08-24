import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#e8e6e3] flex flex-col selection:bg-[#d4af37] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Full-Screen Premium Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Signature Services Section */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Why Flying Scissor Dark Luxury Block */}
        <WhyChooseSection />

        {/* Visual Gallery with Interactive Lightbox */}
        <GallerySection />

        {/* Genuine Google Reviews & Ratings */}
        <ReviewsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Location & Directions Map */}
        <LocationSection />

        {/* Final Conversion CTA */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Floating Call and WhatsApp Action Buttons */}
      <FloatingActions />

      {/* Interactive Booking & Appointment Dialog */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        initialServiceId={selectedServiceId} 
      />
    </div>
  );
}
