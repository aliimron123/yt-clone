import { NextApiRequest, NextApiResponse } from 'next';

// Mock video data
const videos = [
  {
    id: '1',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'How to Bake the Perfect Chocolate Cake',
    profile_image: '/image/windah.jpeg',
    duration: '12:34',
    uploader: 'BakingMaster123',
    views: 100000000,
    likes: 800,
    dislikes: 20,
    publicationDate: '2023-04-22T12:30:00',
    description:
      'Learn the secrets to baking the most delicious chocolate cake!',
    tags: ['baking', 'chocolate', 'recipe'],
  },
  {
    id: '2',
    link: '',
    thumbnailImage: '/image/test.png',
    title: '10 Tips for Productive Remote Work',
    profile_image: '/image/windah.jpeg',
    duration: '8:45',
    uploader: 'RemoteWorkGuru',
    views: 5000,
    likes: 600,
    dislikes: 10,
    publicationDate: '2022-05-22T12:30:00',
    description:
      'Discover 10 valuable tips for staying productive while working remotely.',
    tags: ['remote work', 'productivity', 'tips'],
  },
  {
    id: '3',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Introduction to Machine Learning',
    profile_image: '/image/windah.jpeg',
    duration: '25:17',
    uploader: 'AIEnthusiast',
    views: 20000,
    likes: 1500,
    dislikes: 30,
    publicationDate: '2023-06-27T12:30:00',
    description:
      'Get started with machine learning with this comprehensive introduction.',
    tags: ['machine learning', 'AI', 'tutorial'],
  },
  {
    id: '4',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Travel Vlog: Exploring Thailand',
    profile_image: '/image/windah.jpeg',
    duration: '18:50',
    uploader: 'TravelBuddies',
    views: 3500,
    likes: 400,
    dislikes: 5,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Join us on our adventure as we explore the beautiful landscapes of Thailand.',
    tags: ['travel', 'vlog', 'Thailand'],
  },
  {
    id: '5',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Guitar Tutorial: Learn to Play Wonderwall',
    profile_image: '/image/windah.jpeg',
    duration: '6:12',
    uploader: 'GuitarMaestro',
    views: 12000,
    likes: 900,
    dislikes: 15,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Master the classic song "Wonderwall" with this easy-to-follow guitar tutorial.',
    tags: ['guitar', 'tutorial', 'Wonderwall'],
  },
  {
    id: '6',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Cooking Challenge: 3-Course Meal in 30 Minutes',
    profile_image: '/image/windah.jpeg',
    duration: '28:39',
    uploader: 'ChefChampion',
    views: 8000,
    likes: 700,
    dislikes: 25,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Watch as I take on the challenge of cooking a gourmet 3-course meal in just 30 minutes.',
    tags: ['cooking', 'challenge', 'gourmet'],
  },
  {
    id: '7',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Fitness Tips: How to Stay Motivated',
    profile_image: '/image/windah.jpeg',
    duration: '9:27',
    uploader: 'FitLifeCoach',
    views: 6000,
    likes: 550,
    dislikes: 8,
    publicationDate: '2024-04-29T12:30:00',
    description:
      'Struggling to stay motivated with your fitness routine? These tips will help you stay on track!',
    tags: ['fitness', 'motivation', 'tips'],
  },
  {
    id: '8',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'DIY: Upcycling Old Furniture',
    profile_image: '/image/windah.jpeg',
    duration: '15:20',
    uploader: 'CraftyCreator',
    views: 4000,
    likes: 300,
    dislikes: 12,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Transform your old furniture into stylish new pieces with these creative upcycling ideas.',
    tags: ['DIY', 'upcycling', 'furniture'],
  },
  {
    id: '9',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Language Learning: Mastering Spanish Grammar',
    profile_image: '/image/windah.jpeg',
    duration: '20:15',
    uploader: 'LanguageLearner',
    views: 15000,
    likes: 1200,
    dislikes: 40,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Struggling with Spanish grammar? This comprehensive guide will help you master it!',
    tags: ['language learning', 'Spanish', 'grammar'],
  },
  {
    id: '10',
    link: '',
    thumbnailImage: '/image/test.png',
    title: 'Photography Tutorial: Understanding Exposure',
    profile_image: '/image/windah.jpeg',
    duration: '14:58',
    uploader: 'PhotoPro',
    views: 10000,
    likes: 800,
    dislikes: 30,
    publicationDate: '2023-04-20T12:30:00',
    description:
      'Learn how exposure works and take your photography to the next level with this tutorial.',
    tags: ['photography', 'tutorial', 'exposure'],
  },
  // Add more videos as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Respond to GET requests
  if (req.method === 'GET') {
    res.status(200).json(videos);
  } else {
    // Respond with method not allowed error for other HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
