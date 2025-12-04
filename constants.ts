import { Gig, GigCategory, User } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Alex Developer',
  avatar: 'https://picsum.photos/seed/alex/100/100',
  level: 'Top Rated',
  rating: 4.9,
  reviewsCount: 120,
  joinedAt: '2022-01-15',
  skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
  bio: 'Full Stack Engineer with a passion for scalable web applications.',
  location: 'San Francisco, USA'
};

export const MOCK_GIGS: Gig[] = [
  {
    id: 'g1',
    sellerId: 's1',
    seller: {
      id: 's1',
      name: 'Sarah Code',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      level: 'Level 2 Seller',
      rating: 5.0,
      reviewsCount: 45,
      joinedAt: '2023-03-10',
      skills: ['React', 'Next.js', 'Tailwind'],
      bio: 'Frontend wizard creating magic.',
      location: 'London, UK'
    },
    title: 'I will build a modern React website with Tailwind CSS',
    description: 'Do you need a stunning, high-performance website? I specialize in building responsive, modern web applications using React, Next.js, and Tailwind CSS. Whether it is a landing page, a dashboard, or a full-scale e-commerce platform, I have got you covered.',
    category: GigCategory.WEB_DEV,
    images: ['https://picsum.photos/seed/web1/800/600', 'https://picsum.photos/seed/web2/800/600'],
    rating: 5.0,
    reviewsCount: 45,
    startingPrice: 150,
    packages: {
      basic: {
        name: 'Landing Page',
        description: 'One page responsive website with contact form.',
        price: 150,
        deliveryTime: 3,
        revisions: 2,
        features: ['1 Page', 'Responsive Design', 'Source Code']
      },
      standard: {
        name: 'Business Site',
        description: 'Up to 5 pages, SEO optimization, and animations.',
        price: 450,
        deliveryTime: 7,
        revisions: 5,
        features: ['5 Pages', 'Responsive Design', 'Source Code', 'SEO Optimized']
      },
      premium: {
        name: 'Full App',
        description: 'Complete web application with authentication and database.',
        price: 1200,
        deliveryTime: 21,
        revisions: 99,
        features: ['10+ Pages', 'Full Backend', 'Database', 'Payment Gateway']
      }
    },
    reviews: [
      {
        id: 'r1',
        userId: 'c1',
        userName: 'John Doe',
        userAvatar: 'https://picsum.photos/seed/john/50/50',
        rating: 5,
        comment: 'Fantastic work! Delivered ahead of schedule and the code is clean.',
        createdAt: '2023-10-01'
      }
    ]
  },
  {
    id: 'g2',
    sellerId: 's2',
    seller: {
      id: 's2',
      name: 'Mobile Mike',
      avatar: 'https://picsum.photos/seed/mike/100/100',
      level: 'Top Rated',
      rating: 4.8,
      reviewsCount: 230,
      joinedAt: '2021-05-20',
      skills: ['Flutter', 'React Native', 'Swift'],
      bio: 'Mobile app expert shipping across stores.',
      location: 'Berlin, Germany'
    },
    title: 'I will develop a cross-platform mobile app for iOS and Android',
    description: 'Get a high-quality mobile application that works seamlessly on both iOS and Android. Using Flutter or React Native, I ensure native performance and a beautiful UI.',
    category: GigCategory.APP_DEV,
    images: ['https://picsum.photos/seed/app1/800/600', 'https://picsum.photos/seed/app2/800/600'],
    rating: 4.8,
    reviewsCount: 230,
    startingPrice: 500,
    packages: {
      basic: {
        name: 'UI/UX Prototype',
        description: 'Clickable prototype of your app concept.',
        price: 500,
        deliveryTime: 5,
        revisions: 3,
        features: ['Prototype', 'Figma File']
      },
      standard: {
        name: 'Hybrid App',
        description: 'Functional app with standard features.',
        price: 1500,
        deliveryTime: 20,
        revisions: 5,
        features: ['iOS & Android', 'API Integration', 'App Store Submission']
      },
      premium: {
        name: 'Complex App',
        description: 'Social media, ride-sharing, or complex logic apps.',
        price: 3500,
        deliveryTime: 45,
        revisions: 10,
        features: ['Complex Backend', 'Admin Panel', '3 Months Support']
      }
    },
    reviews: []
  },
  {
    id: 'g3',
    sellerId: 's3',
    seller: {
      id: 's3',
      name: 'Pixel Art',
      avatar: 'https://picsum.photos/seed/pixel/100/100',
      level: 'New Seller',
      rating: 4.5,
      reviewsCount: 12,
      joinedAt: '2024-01-05',
      skills: ['Photoshop', 'Illustrator', 'Figma'],
      bio: 'Creative designer making brands stand out.',
      location: 'Paris, France'
    },
    title: 'I will design a unique logo and brand identity',
    description: 'Your brand deserves to stand out. I will create a unique, memorable logo and a complete brand style guide including typography and color palette.',
    category: GigCategory.DESIGN,
    images: ['https://picsum.photos/seed/design1/800/600', 'https://picsum.photos/seed/design2/800/600'],
    rating: 4.5,
    reviewsCount: 12,
    startingPrice: 50,
    packages: {
      basic: {
        name: 'Logo Only',
        description: '2 Logo concepts with transparent background.',
        price: 50,
        deliveryTime: 2,
        revisions: 2,
        features: ['High Res', 'Transparency']
      },
      standard: {
        name: 'Brand Kit',
        description: 'Logo + Business Card + Letterhead.',
        price: 150,
        deliveryTime: 5,
        revisions: 5,
        features: ['Source Files', 'Stationery Designs', 'Social Media Kit']
      },
      premium: {
        name: 'Full Identity',
        description: 'Complete branding guide and all assets.',
        price: 400,
        deliveryTime: 10,
        revisions: 99,
        features: ['Style Guide', 'Brand Book', 'Copyright Transfer']
      }
    },
    reviews: []
  },
    {
    id: 'g4',
    sellerId: 's4',
    seller: {
      id: 's4',
      name: 'Data Dan',
      avatar: 'https://picsum.photos/seed/dan/100/100',
      level: 'Level 1 Seller',
      rating: 5.0,
      reviewsCount: 8,
      joinedAt: '2023-11-15',
      skills: ['Python', 'TensorFlow', 'OpenAI'],
      bio: 'AI enthusiast building the future.',
      location: 'Toronto, Canada'
    },
    title: 'I will fine-tune LLMs for your specific business needs',
    description: 'Leverage the power of custom AI. I will fine-tune open source LLMs on your proprietary data to create a specialized chatbot or analysis tool.',
    category: GigCategory.AI_ML,
    images: ['https://picsum.photos/seed/ai1/800/600'],
    rating: 5.0,
    reviewsCount: 8,
    startingPrice: 800,
    packages: {
      basic: {
        name: 'Consultation',
        description: '1 hour strategy call on AI integration.',
        price: 100,
        deliveryTime: 1,
        revisions: 0,
        features: ['Consultation']
      },
      standard: {
        name: 'Simple Fine-tune',
        description: 'Fine-tuning Llama-3 on prepared dataset.',
        price: 800,
        deliveryTime: 7,
        revisions: 2,
        features: ['Model Weights', 'Testing Script']
      },
      premium: {
        name: 'Enterprise AI',
        description: 'End-to-end RAG pipeline implementation.',
        price: 2500,
        deliveryTime: 21,
        revisions: 5,
        features: ['RAG Pipeline', 'Frontend UI', 'Deployment']
      }
    },
    reviews: []
  }
];