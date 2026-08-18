const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80${extra}`;

export type SiteImage = {
  src: string;
  alt: string;
  credit?: string;
};

export const images = {
  hero: {
    src: unsplash("photo-1512917774080-9991f1c4c750"),
    alt: "Luxury residential swimming pool beside a modern home at dusk",
    credit: "Unsplash",
  },
  intro: {
    src: unsplash("photo-1613490493576-7fde63acd811"),
    alt: "Architectural villa with a still, geometric swimming pool",
    credit: "Unsplash",
  },
  cta: {
    src: unsplash("photo-1540541338287-41700207dee6"),
    alt: "Resort-style swimming pool with calm water and surrounding palms",
    credit: "Unsplash",
  },
  why: {
    src: unsplash("photo-1582268611958-ebfd161ef9cf"),
    alt: "Poolside architecture with stone, water and evening light",
    credit: "Unsplash",
  },
  construction: {
    src: unsplash("photo-1503387762-592deb58ef4e"),
    alt: "Architectural construction detailing on a building site",
    credit: "Unsplash",
  },
  finishing: {
    src: unsplash("photo-1604709177225-055fef2fc0b0"),
    alt: "Precision tiling and stone finishing detail",
    credit: "Unsplash",
  },
  water: {
    src: unsplash("photo-1575429198097-5407a1103d5d"),
    alt: "Close view of swimming pool water and tiled edge",
    credit: "Unsplash",
  },
} satisfies Record<string, SiteImage>;

export const serviceImages: Record<string, SiteImage> = {
  design: {
    src: unsplash("photo-1600585154340-be6161a56a0c"),
    alt: "Modern home and pool composition used as design reference",
  },
  construction: {
    src: unsplash("photo-1541888946425-d81bb19240f5"),
    alt: "Construction in progress on a structured building site",
  },
  renovation: {
    src: unsplash("photo-1600607687939-ce8a6c25118c"),
    alt: "Refined interior-adjacent architecture suggesting renovation quality",
  },
  maintenance: {
    src: unsplash("photo-1572331165267-854da2b10ccc"),
    alt: "Clear swimming pool water ready for ongoing care",
  },
  equipment: {
    src: unsplash("photo-1576013551627-0cc20b96c2a7"),
    alt: "Geometric swimming pool showing circulation and clean water",
  },
  finishing: {
    src: unsplash("photo-1584622650111-993a426fbf0a"),
    alt: "Stone and tile surfaces for pool finishing",
  },
  features: {
    src: unsplash("photo-1432405972617-f8e8bde8eaeb"),
    alt: "Water moving over stone, suggesting a water feature",
  },
  commercial: {
    src: unsplash("photo-1566073771259-6a8506099945"),
    alt: "Hotel-scale pool suited to commercial hospitality projects",
  },
};

export const poolTypeImages: Record<string, SiteImage> = {
  infinity: {
    src: unsplash("photo-1562778612-32248a0c0c5b"),
    alt: "Infinity swimming pool edge meeting the horizon",
  },
  residential: {
    src: unsplash("photo-1600596542815-ffad4c1539a9"),
    alt: "Residential swimming pool beside a contemporary house",
  },
  commercial: {
    src: unsplash("photo-1571896349842-33c89424de2d"),
    alt: "Commercial hotel swimming pool with landscaped edges",
  },
  geometric: {
    src: unsplash("photo-1576013551627-0cc20b96c2a7"),
    alt: "Modern geometric swimming pool seen from above",
  },
  family: {
    src: unsplash("photo-1499793983690-e29da59ef1c2"),
    alt: "Family-scale tropical pool beside a private villa",
  },
  resort: {
    src: unsplash("photo-1520250497591-112f2f40a3f4"),
    alt: "Resort-style swimming pool with lounge setting",
  },
  compact: {
    src: unsplash("photo-1600047509807-ba8f99d2cdbc"),
    alt: "Compact courtyard pool in a contemporary property",
  },
};

export const projectImages: SiteImage[] = [
  {
    src: unsplash("photo-1613977257363-707ba9348227"),
    alt: "Placeholder photography for a luxury residential pool project",
  },
  {
    src: unsplash("photo-1512917774080-9991f1c4c750"),
    alt: "Placeholder photography for a dusk residential pool setting",
  },
  {
    src: unsplash("photo-1564501049412-61c2a3083791"),
    alt: "Placeholder photography for a landscaped hospitality pool",
  },
  {
    src: unsplash("photo-1596394516093-50137fbda1e9"),
    alt: "Placeholder photography for a tropical outdoor pool",
  },
];
