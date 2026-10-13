import { ServiceItem, ReviewItem, GalleryItem } from '../types';

import heroImg from '../assets/images/hero_salon_interior_1787564672751.jpg';
import aboutImg from '../assets/images/about_salon_interior_1787564692592.jpg';
import precisionHairImg from '../assets/images/salon_precision_hair_1787564711709.jpg';
import vipGroomingImg from '../assets/images/salon_vip_grooming_1787564728962.jpg';
import receptionLoungeImg from '../assets/images/salon_reception_lounge_1787564804606.jpg';
import stylingStationImg from '../assets/images/salon_styling_station_1787564830341.jpg';
import beardShaveImg from '../assets/images/salon_beard_shave_1787565380064.jpg';
import hairColorImg from '../assets/images/salon_hair_color_1787565396135.jpg';

export const BUSINESS_INFO = {
  name: 'Flying Scissor & Co',
  tagline: 'Where Style Meets Precision',
  category: 'Premium Hair Salon',
  description: 'Experience premium hair styling, grooming, and beauty services in an elegant environment designed for your comfort.',
  address: 'Basement National Bank, West Canal Road, Main Canal Expressway, opposite Raza Garden, Faisal Town Canal Road, Faisalabad, Pakistan',
  phone: '+92 324 5478822',
  phoneClean: '+923245478822',
  phoneDisplay: '+92 324 5478822',
  whatsappUrl: 'https://wa.me/923245478822?text=Hello%20Flying%20Scissor%20%26%20Co%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.',
  openingHours: 'Daily 10:00 AM – 10:00 PM',
  hoursDetail: {
    weekdays: '10:00 AM – 10:00 PM',
    weekends: '10:00 AM – 10:00 PM',
    allDays: 'Monday through Sunday (Open 7 Days)'
  },
  rating: {
    score: 4.3,
    totalReviews: 11,
    maxScore: 5.0,
    source: 'Google Reviews'
  },
  social: {
    instagram: {
      handle: '@flying_scissorofficial',
      url: 'https://www.instagram.com/flying_scissorofficial'
    }
  },
  landmarks: 'Opposite Raza Garden, Basement National Bank, Main Canal Expressway'
};

export const SALON_IMAGES = {
  hero: heroImg,
  about: aboutImg,
  precisionHair: precisionHairImg,
  vipGrooming: vipGroomingImg,
  receptionLounge: receptionLoungeImg,
  stylingStation: stylingStationImg,
  beardShave: beardShaveImg,
  hairColor: hairColorImg
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'haircut-styling',
    title: 'Haircut & Styling',
    category: 'Cut & Finish',
    duration: '45 mins',
    description: 'Precision haircuts and professional styling tailored to your face shape and personal style.',
    highlights: [
      'Comprehensive facial contour & hair consultation',
      'Wash & scalp revitalization',
      'Precision scissor & clipper craft',
      'Signature blow-dry & matte or shine finish'
    ],
    iconName: 'Scissors',
    imageUrl: precisionHairImg
  },
  {
    id: 'hair-styling',
    title: 'Hair Styling',
    category: 'Styling',
    duration: '35 mins',
    description: 'Modern styling for everyday looks, events and special occasions.',
    highlights: [
      'Texture volume & blow-dry styling',
      'Pompadour, quiff, fade & modern crops',
      'Long hair sculpted blowouts',
      'Premium hair hold & heat protectants'
    ],
    iconName: 'Sparkles',
    imageUrl: stylingStationImg
  },
  {
    id: 'hair-color',
    title: 'Hair Color',
    category: 'Color & Highlights',
    duration: '60 - 90 mins',
    description: 'Professional coloring services designed to refresh and transform your look.',
    highlights: [
      'Grey coverage & blending',
      'Natural tone-on-tone highlights & balayage',
      'Beard & mustache tinting',
      'Ammonia-free nourishing formulas'
    ],
    iconName: 'Palette',
    imageUrl: hairColorImg
  },
  {
    id: 'hair-treatment',
    title: 'Hair Treatment',
    category: 'Care & Therapy',
    duration: '45 - 60 mins',
    description: 'Premium hair care treatments focused on healthier-looking, smoother and more manageable hair.',
    highlights: [
      'Deep keratin & protein reconstruction',
      'Anti-frizz smoothing therapy',
      'Scalp detox & anti-dandruff treatment',
      'Hot oil & nutrient moisture masks'
    ],
    iconName: 'ShieldCheck',
    imageUrl: vipGroomingImg
  },
  {
    id: 'beard-grooming',
    title: 'Beard & Grooming',
    category: 'Grooming & Shave',
    duration: '30 mins',
    description: 'Professional grooming and beard styling for a sharp, polished appearance.',
    highlights: [
      'Hot towel steam preparation',
      'Straight-razor boundary outlining',
      'Beard tapering, fade & shape sculpting',
      'Organic beard oil & aftershave balm'
    ],
    iconName: 'UserCheck',
    imageUrl: beardShaveImg
  },
  {
    id: 'special-occasion',
    title: 'Special Occasion Styling',
    category: 'Event & Wedding',
    duration: '60 - 90 mins',
    description: 'Elegant styling for weddings, parties, events and important occasions.',
    highlights: [
      'Groom & bridal party styling packages',
      'High-definition camera-ready finish',
      'Complete look coordination',
      'Express VIP express appointments'
    ],
    iconName: 'Crown',
    imageUrl: heroImg
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Professional Expertise',
    description: 'Attention to detail and professional styling by dedicated, experienced masters.'
  },
  {
    number: '02',
    title: 'Premium Atmosphere',
    description: 'A sophisticated salon environment designed for comfort, luxury, and serenity.'
  },
  {
    number: '03',
    title: 'Modern Style',
    description: 'Contemporary haircuts, styling and grooming tailored to your unique personality.'
  },
  {
    number: '04',
    title: 'Client Experience',
    description: 'Friendly, attentive, and professional service from the moment you walk through our doors.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Salon Floor & Styling Stations',
    category: 'interior',
    imageUrl: heroImg,
    aspect: 'landscape',
    caption: 'Illuminated halo mirrors, dark walnut stations, and pristine marble finish.'
  },
  {
    id: 'gal-2',
    title: 'Styling Lounge & Hydraulic Stations',
    category: 'interior',
    imageUrl: aboutImg,
    aspect: 'landscape',
    caption: 'Modern luxury setting equipped with premium leather seating.'
  },
  {
    id: 'gal-3',
    title: 'Master Scissor & Styling Craft',
    category: 'styling',
    imageUrl: precisionHairImg,
    aspect: 'square',
    caption: 'Tailored precision shear work for every client profile.'
  },
  {
    id: 'gal-4',
    title: 'VIP Hair Spa & Treatment Suite',
    category: 'experience',
    imageUrl: vipGroomingImg,
    aspect: 'landscape',
    caption: 'Ergonomic reclining wash chairs and restorative hair therapies.'
  },
  {
    id: 'gal-5',
    title: 'Beard Grooming & Straight Razor Precision',
    category: 'grooming',
    imageUrl: beardShaveImg,
    aspect: 'landscape',
    caption: 'Master straight razor styling, beard shaping, and hot towel relaxation.'
  },
  {
    id: 'gal-6',
    title: 'Dimensional Hair Color & Balayage Suite',
    category: 'styling',
    imageUrl: hairColorImg,
    aspect: 'landscape',
    caption: 'Rich tone-on-tone coloring, grey coverage, and modern hair color transformations.'
  },
  {
    id: 'gal-7',
    title: 'Welcoming Guest Reception Lounge',
    category: 'experience',
    imageUrl: receptionLoungeImg,
    aspect: 'landscape',
    caption: 'Warm ambient illumination and comfortable guest reception.'
  },
  {
    id: 'gal-8',
    title: 'Dedicated Detail Vanity Suite',
    category: 'interior',
    imageUrl: stylingStationImg,
    aspect: 'square',
    caption: 'Sanitized professional tools and warm ambient golden lighting.'
  }
];

export const GENUINE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Saad Rehman',
    rating: 5,
    date: 'Google Review',
    content: 'Good place, friendly and professional staff',
    verified: true,
    avatarInitial: 'S'
  },
  {
    id: 'rev-2',
    author: 'Muhammad Taha',
    rating: 5,
    date: 'Google Review',
    content: 'Amazing experience every single time. I just need a number for the place.',
    verified: true,
    avatarInitial: 'M'
  },
  {
    id: 'rev-3',
    author: 'Naila Umais',
    rating: 5,
    date: 'Google Review',
    content: 'Overall good but they cant make u stylish',
    verified: true,
    avatarInitial: 'N'
  }
];

export const SALON_FEATURES = [
  {
    title: 'Professional Stylists',
    description: 'Experienced professionals focused on detail and precision.',
    icon: 'Sparkles'
  },
  {
    title: 'Premium Environment',
    description: 'A modern, comfortable and elegant salon atmosphere.',
    icon: 'Shield'
  },
  {
    title: 'Personal Style',
    description: 'Services tailored to your individual look and preferences.',
    icon: 'Scissors'
  }
];
