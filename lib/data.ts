export type Shoe = {
  id: string;
  name: string;
  images: string[];
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  status: 'Pre-order' | 'Available' | 'Sold Out';
  isNew?: boolean;
  isFeatured?: boolean;
};

export const categories = [
  "Air Jordan 4 Retro",
  "Air Jordan 1",
  "Air Force 1",
  "Dunk",
  "Yeezy",
  "Running Shoes",
  "Basketball Shoes",
  "Lifestyle"
];

export const shoes: Shoe[] = [
  {
    id: "1",
    name: "Air Jordan 4 Retro 'Bred Reimagined'",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Jordan 4 Retro",
    price: 215,
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13"],
    colors: ["Black", "Red", "Cement Grey"],
    description: "The classic returns. The Air Jordan 4 Retro brings back the iconic 'Bred' colorway with premium leather and heritage details. First released in 1989, this silhouette continues to define sneaker culture.",
    features: [
      "Premium leather upper for durability and support",
      "Visible Air-Sole unit in the heel for responsive cushioning",
      "Solid rubber outsole with herringbone pattern for traction",
      "Classic molded lace locks"
    ],
    specs: {
      "SKU": "FV5029-006",
      "Release Date": "02/17/2024",
      "Colorway": "Black/Fire Red-Cement Grey-Summit White"
    },
    status: "Available",
    isNew: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Air Jordan 1 Retro High OG 'Chicago'",
    images: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Jordan 1",
    price: 180,
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Red", "White", "Black"],
    description: "The shoe that started it all. The Air Jordan 1 Retro High OG in the original 'Chicago' colorway remains the holy grail for collectors and enthusiasts worldwide.",
    features: [
      "Full-grain leather for a premium look and feel",
      "Encapsulated Air-Sole unit for lightweight cushioning",
      "Padded collar for comfort around the ankle"
    ],
    specs: {
      "SKU": "DZ5485-612",
      "Release Date": "11/19/2022",
      "Colorway": "Varsity Red/Black-Sail-Muslin"
    },
    status: "Sold Out",
    isFeatured: true
  },
  {
    id: "3",
    name: "Nike Air Force 1 '07",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Force 1",
    price: 115,
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13", "14"],
    colors: ["White"],
    description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    features: [
      "Stitched leather overlays on the upper add heritage style",
      "Nike Air cushioning adds lightweight, all-day comfort",
      "Low-cut silhouette adds a clean, streamlined look"
    ],
    specs: {
      "SKU": "CW2288-111",
      "Colorway": "White/White"
    },
    status: "Available"
  },
  {
    id: "4",
    name: "Nike Dunk Low 'Panda'",
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1628103138927-4a0b22a012a6?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Dunk",
    price: 115,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black"],
    description: "Created for the hardwood but taken to the streets, the '80s b-ball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels '80s vintage back onto the streets while its padded, low-cut collar lets you take your game anywhere - in comfort.",
    features: [
      "Crisp leather upper with a slight sheen ages to soft perfection",
      "Foam midsole offers lightweight, responsive cushioning",
      "Rubber outsole with classic hoops pivot circle adds durability"
    ],
    specs: {
      "SKU": "DD1391-100",
      "Colorway": "White/Black"
    },
    status: "Available",
    isFeatured: true
  },
  {
    id: "5",
    name: "Yeezy Boost 350 V2 'Zebra'",
    images: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Yeezy",
    price: 230,
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11"],
    colors: ["White", "Core Black", "Red"],
    description: "The Yeezy Boost 350 V2 'Zebra' features a Primeknit upper displaying white and black stripes with a red 'SPLY-350' on the side.",
    features: [
      "Primeknit upper for a sock-like fit",
      "Boost midsole for ultimate comfort and energy return",
      "Distinctive side stripe detailing"
    ],
    specs: {
      "SKU": "CP9654",
      "Colorway": "White/Core Black/Red"
    },
    status: "Pre-order"
  },
  {
    id: "6",
    name: "Nike ZoomX Vaporfly NEXT% 3",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Running Shoes",
    price: 260,
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["Hyper Pink", "Laser Orange", "Black"],
    description: "Catch 'em if you can. The Nike ZoomX Vaporfly NEXT% 3 is made for the chasers, the racers, the elevated pacers who can't turn down the thrill of the pursuit.",
    features: [
      "Full-length carbon fiber flyplate provides a stiff and propulsive feel",
      "ZoomX foam delivers our greatest energy return yet",
      "Flyknit yarn upper provides breathability and support"
    ],
    specs: {
      "Drop": "8mm",
      "Weight": "6.5 oz",
      "Surface": "Road"
    },
    status: "Available",
    isNew: true
  },
  {
    id: "7",
    name: "LeBron 21 'Akoya'",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1584735175315-9d58231317ba?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Basketball Shoes",
    price: 200,
    sizes: ["8", "9", "9.5", "10", "10.5", "11", "12", "13", "14"],
    colors: ["Light Bone", "Campfire Orange", "Celestine Blue"],
    description: "The LeBron 21 has a cabling system that works with Zoom Air cushioning and a light, low-to-the-ground design, giving you agile fluidity and explosiveness without excess weight.",
    features: [
      "Zoom Air cushioning in the heel and forefoot",
      "Zonal cabling system for containment",
      "Breathable, lightweight mesh upper"
    ],
    specs: {
      "SKU": "FV2345-001",
      "Signature": "LeBron James"
    },
    status: "Available",
    isNew: true
  },
  {
    id: "8",
    name: "Nike Killshot 2 Leather",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Lifestyle",
    price: 90,
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    colors: ["Sail", "Midnight Navy", "Gum Yellow"],
    description: "Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the classic design with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch.",
    features: [
      "Variety of leathers add depth, durability and let you wear your style from uptown to downtown",
      "Gum rubber sole adds a retro look and durable traction",
      "\"NIKE\" on the heel and bold Swoosh logo"
    ],
    specs: {
      "SKU": "432997-107",
      "Colorway": "Sail/Gum Yellow/Midnight Navy"
    },
    status: "Available"
  },
  {
    id: "9",
    name: "Air Jordan 3 Retro 'White Cement Reimagined'",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Jordan 4 Retro",
    price: 210,
    sizes: ["8", "9", "10", "11"],
    colors: ["White", "Cement Grey", "Black"],
    description: "The classic returns with a vintage touch. A faithful recreation of the 1988 original.",
    features: ["Elephant print overlays", "Visible Air cushioning", "Premium leather"],
    specs: {"SKU": "DN3707-100"},
    status: "Available"
  },
  {
    id: "10",
    name: "Air Jordan 1 Low 'Travis Scott'",
    images: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Jordan 1",
    price: 150,
    sizes: ["7", "8", "9"],
    colors: ["Mocha", "Black", "Sail"],
    description: "Highly coveted collaboration featuring the reverse swoosh.",
    features: ["Suede upper", "Reverse Swoosh", "Cactus Jack branding"],
    specs: {"SKU": "CQ4277-001"},
    status: "Sold Out"
  },
  {
    id: "11",
    name: "Nike Air Force 1 High '07",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Force 1",
    price: 125,
    sizes: ["9", "10", "11", "12"],
    colors: ["White", "Black"],
    description: "The classic high-top version of the iconic AF1.",
    features: ["Ankle strap", "Leather upper", "Air cushioning"],
    specs: {"SKU": "CW2290-111"},
    status: "Available"
  },
  {
    id: "12",
    name: "Nike SB Dunk Low 'Jarritos'",
    images: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Dunk",
    price: 130,
    sizes: ["8", "9", "10"],
    colors: ["Phantom", "Safety Orange", "Malachite"],
    description: "A sweet collaboration with the popular Mexican soda brand.",
    features: ["Tear-away canvas upper", "Custom Jarritos branding", "Zoom Air unit"],
    specs: {"SKU": "FD0860-001"},
    status: "Sold Out"
  },
  {
    id: "13",
    name: "Yeezy Slide 'Onyx'",
    images: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Yeezy",
    price: 70,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Onyx"],
    description: "Minimalist slip-on comfort.",
    features: ["Injected EVA foam", "Soft footbed", "Strategic groove placement"],
    specs: {"SKU": "HQ6448"},
    status: "Available"
  },
  {
    id: "14",
    name: "Nike Pegasus 40",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Running Shoes",
    price: 130,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Grey"],
    description: "A springy ride for any run. The reliable workhorse with wings.",
    features: ["Nike React technology", "Zoom Air units", "Engineered mesh"],
    specs: {"Drop": "10mm", "Surface": "Road"},
    status: "Available"
  },
  {
    id: "15",
    name: "KD16 'Aunt Pearl'",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Basketball Shoes",
    price: 160,
    sizes: ["9", "10", "11", "12"],
    colors: ["Pink"],
    description: "Honoring KD's late Aunt Pearl with a beautiful pink colorway.",
    features: ["Zoom Air cushioning", "Lightweight upper", "Floral details"],
    specs: {"SKU": "FN4929-600"},
    status: "Pre-order"
  },
  {
    id: "16",
    name: "Nike Blazer Mid '77 Vintage",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Lifestyle",
    price: 105,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black"],
    description: "Old-school hoops style. Vintage treatment on the midsole.",
    features: ["Leather and synthetic upper", "Vintage treatment", "Exposed foam on tongue"],
    specs: {"SKU": "BQ6806-100"},
    status: "Available"
  },
  {
    id: "17",
    name: "Air Jordan 11 Retro 'Gratitude'",
    images: [
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Air Jordan 1",
    price: 230,
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gold"],
    description: "A thank you to the fans. A classic silhouette with premium materials.",
    features: ["Patent leather mudguard", "Carbon fiber shank", "Translucent outsole"],
    specs: {"SKU": "CT8012-170"},
    status: "Sold Out"
  },
  {
    id: "18",
    name: "Nike Invincible 3",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Running Shoes",
    price: 180,
    sizes: ["8", "9", "10", "11"],
    colors: ["White", "Cobalt Bliss", "Black"],
    description: "Maximum cushioning for maximum comfort.",
    features: ["ZoomX foam", "Flyknit upper", "Wider forefoot"],
    specs: {"Drop": "9mm"},
    status: "Available"
  },
  {
    id: "19",
    name: "Nike Air Max 95",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Lifestyle",
    price: 175,
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Neon Yellow", "Grey", "Black"],
    description: "Human anatomy inspired design.",
    features: ["Visible Air cushioning", "Mesh and synthetic upper", "Innovative lacing system"],
    specs: {"SKU": "DM0011-001"},
    status: "Available"
  },
  {
    id: "20",
    name: "Luka 2 'Matador'",
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=1000"
    ],
    category: "Basketball Shoes",
    price: 130,
    sizes: ["9", "10", "11", "12", "13"],
    colors: ["Tropical Twist", "Metallic Gold", "Washed Teal"],
    description: "Engineered for step-backs, side-steps and quick stops.",
    features: ["Formula 23 foam", "IsoPlate foot frame", "Sturdy cage"],
    specs: {"SKU": "DX9013-300"},
    status: "Available"
  }
];
