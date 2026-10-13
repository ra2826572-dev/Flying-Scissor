import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

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
    <BrowserRouter>
      <div className="min-h-screen bg-[#0c0d0e] text-[#e8e6e3] flex flex-col selection:bg-[#d4af37] selection:text-black">
        {/* Reset Scroll Position Upon Route Change */}
        <ScrollToTop />

        {/* Global Multi-Page Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/gallery" element={<GalleryPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/reviews" element={<ReviewsPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Global Multi-Page Footer */}
        <Footer />

        {/* Persistent WhatsApp and Call Floating Utilities */}
        <FloatingActions />

        {/* Universal Booking & Appointment Dialog */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={handleCloseBooking} 
          initialServiceId={selectedServiceId} 
        />
      </div>
    </BrowserRouter>
  );
}
