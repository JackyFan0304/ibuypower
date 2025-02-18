// data/products.ts
export interface Product {
  id: number;
  type: 'Prebuilt PC' | 'Custom PC';
  name: string;
  rating?: {
    score: number;
    count: number;
  };
  os: string;
  cpu: string;
  gpu: string;
  motherboard: string;
  ram: string;
  storage: string;
  price: {
    current: string;
    original: string;
  };
  discount: {
    amount: string;
    save: string;
  };
  payment: {
    monthly: string;
    provider: string;
  };
  shipping: {
    type: string;
    date: string;
  };
  rewards: {
    points: string;
    link: string;
  };
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    type: 'Prebuilt PC',
    name: "RDY Y70 Silver Wolf",
    os: "Windows 11 Home",
    cpu: "Intel® Core™ i9-14900KF CPU",
    gpu: "ASUS GeForce RTX 4070 SUPER - 12GB",
    motherboard: "ASUS Z790 Gaming WIFI 7",
    ram: "32GB DDR5-6000MHz RGB RAM",
    storage: "4TB M.2 NVMe Gen4 SSD",
    price: {
      current: "2,149",
      original: "2,599"
    },
    discount: {
      amount: "450",
      save: "Save $450"
    },
    payment: {
      monthly: "104",
      provider: "Affirm"
    },
    shipping: {
      type: "Free Shipping",
      date: "Delivery By Thursday, Feb 20"
    },
    rewards: {
      points: "21490",
      link: "21490 points"
    },
    imageUrl: "./images/Y70-SilverWolf-02-Hero-Solo-400.avif"
  },
  {
    id: 2,
    type: 'Prebuilt PC',
    name: "RDY Slate 6M 005",
    rating: {
      score: 5,
      count: 1
    },
    os: "Windows 11 Home",
    cpu: "AMD Ryzen 5 7600 CPU",
    gpu: "GeForce RTX 4060 Ti - 8GB",
    motherboard: "ASUS Prime B650M-A AX6 II",
    ram: "16GB DDR5-5200MHz RAM",
    storage: "1TB M.2 NVMe SSD",
    price: {
      current: "1,249",
      original: "1,399"
    },
    discount: {
      amount: "150",
      save: "Save $150"
    },
    payment: {
      monthly: "78",
      provider: "Affirm"
    },
    shipping: {
      type: "Free Shipping",
      date: "Delivery By Thursday, Feb 20"
    },
    rewards: {
      points: "12490",
      link: "12490 points"
    },
    imageUrl: "./images/gaming-pc-01-Slate6M-005-Hero-400.avif"
  },
  {
    id: 3,
    type: 'Custom PC',
    name: "AMD Ryzen Hyte Ultra Gaming Daily Deal",
    os: "Windows 11 Home",
    cpu: "AMD Ryzen™ 7 9800X3D CPU",
    gpu: "AMD Radeon RX 7900 XTX - 24GB",
    motherboard: "MSI X670 GAMING PLUS WIFI",
    ram: "64GB DDR5-6000MHz KINGSTON RAM",
    storage: "2TB WD M.2 NVMe SSD",
    price: {
      current: "2,749",
      original: "3,049"
    },
    discount: {
      amount: "300",
      save: "Save $300"
    },
    payment: {
      monthly: "133",
      provider: "Affirm"
    },
    shipping: {
      type: "Free Shipping",
      date: "Estimate Ship By 02/24/2025"
    },
    rewards: {
      points: "27490",
      link: "27490 points"
    },
    imageUrl: "./images/gaming-pc-01-Trace7MP009-main-400.avif"
  },
  {
    id: 4,
    type: 'Custom PC',
    name: "Intel 14th Gen Pro X Gaming PC Daily Deal",
    os: "Windows 11 Home",
    cpu: "Intel® Core™ i5-14400F CPU",
    gpu: "Intel® Arc™ B580 - 12GB",
    motherboard: "ASUS Z790 GAMING WIFI",
    ram: "64GB DDR5-6000MHz KINGSTON RAM",
    storage: "2TB WD M.2 NVMe SSD",
    price: {
      current: "1,399",
      original: "1,699"
    },
    discount: {
      amount: "300",
      save: "Save $300"
    },
    payment: {
      monthly: "97",
      provider: "Affirm"
    },
    shipping: {
      type: "Free Shipping",
      date: "Estimate Ship By 02/24/2025"
    },
    rewards: {
      points: "13990",
      link: "13990 points"
    },
    imageUrl: "./images/gaming-pc-01-Y40-VCTA-R005-main-400-.avif"
  }
];
