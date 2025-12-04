export interface User {
  id: string;
  name: string;
  avatar: string;
  level: string;
  rating: number;
  reviewsCount: number;
  joinedAt: string;
  skills: string[];
  bio: string;
  location: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Package {
  name: string;
  description: string;
  price: number;
  deliveryTime: number; // in days
  revisions: number;
  features: string[];
}

export interface Gig {
  id: string;
  sellerId: string;
  seller: User;
  title: string;
  description: string;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  startingPrice: number;
  packages: {
    basic: Package;
    standard: Package;
    premium: Package;
  };
  reviews: Review[];
}

export enum GigCategory {
  WEB_DEV = 'Web Development',
  APP_DEV = 'Mobile Apps',
  DESIGN = 'Graphics & Design',
  AI_ML = 'AI & Machine Learning',
  WRITING = 'Writing & Translation',
  MARKETING = 'Digital Marketing'
}