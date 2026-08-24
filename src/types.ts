export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  avatarInitial: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'styling' | 'grooming' | 'experience';
  imageUrl: string;
  aspect: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  stylistPreference?: string;
  notes?: string;
}
