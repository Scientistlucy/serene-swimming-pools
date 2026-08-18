const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?ixlib=rb-4.1.0&auto=format&fit=crop&w=2000&q=80`;

export type SiteImage = {
  src: string;
  alt: string;
  credit?: string;
};

export const images = {
  hero: {
    src: unsplash("photo-1558904541-efa843a96f01"),
    alt: "A composed garden of hedges, lawn and planting in soft daylight",
    credit: "Unsplash",
  },
  intro: {
    src: unsplash("photo-1564013799919-ab600027ffc6"),
    alt: "A contemporary house sitting in a considered lawn and garden",
    credit: "Unsplash",
  },
  cta: {
    src: unsplash("photo-1420593248178-d88870618ca0"),
    alt: "Tree canopy and filtered light over a planted landscape",
    credit: "Unsplash",
  },
  why: {
    src: unsplash("photo-1591857177580-dc82b9ac4e1e"),
    alt: "Garden planting with texture, structure and quiet colour",
    credit: "Unsplash",
  },
  construction: {
    src: unsplash("photo-1542601906990-b4d3fb778b09"),
    alt: "Hands setting plants into prepared soil",
    credit: "Unsplash",
  },
  finishing: {
    src: unsplash("photo-1523348837708-15d4a09cfac2"),
    alt: "Close planting and groundcover with considered texture",
    credit: "Unsplash",
  },
  water: {
    src: unsplash("photo-1416879595882-3373a0480b5b"),
    alt: "Garden beds laid out with planting and soil ready for growth",
    credit: "Unsplash",
  },
} satisfies Record<string, SiteImage>;

export const serviceImages: Record<string, SiteImage> = {
  design: {
    src: unsplash("photo-1600585154526-990dced4db0d"),
    alt: "A house and garden composition used as a design reference",
  },
  construction: {
    src: unsplash("photo-1416879595882-3373a0480b5b"),
    alt: "Garden installation with prepared beds and planting layout",
  },
  renovation: {
    src: unsplash("photo-1600566752355-35792bedcfea"),
    alt: "Refined architecture suggesting a garden that belongs to the house",
  },
  maintenance: {
    src: unsplash("photo-1598902108854-10e335adac99"),
    alt: "A tended garden landscape kept in good condition",
  },
  equipment: {
    src: unsplash("photo-1464226184884-fa280b87c399"),
    alt: "Soil, planting rows and ground prepared for garden work",
  },
  finishing: {
    src: unsplash("photo-1518531933037-91b2f5f229cc"),
    alt: "Botanical foliage for considered planting schemes",
  },
  features: {
    src: unsplash("photo-1490750967868-88aa4486c946"),
    alt: "Flowering planting used as a garden feature",
  },
  commercial: {
    src: unsplash("photo-1570129477492-45c003edd2be"),
    alt: "A property frontage suited to commercial landscape work",
  },
};

export const gardenTypeImages: Record<string, SiteImage> = {
  residential: {
    src: unsplash("photo-1564013799919-ab600027ffc6"),
    alt: "Residential garden and lawn beside a contemporary house",
  },
  lawn: {
    src: unsplash("photo-1500382017468-9049fed747ef"),
    alt: "Open lawn and landscape under a wide sky",
  },
  courtyard: {
    src: unsplash("photo-1523348837708-15d4a09cfac2"),
    alt: "Compact planted courtyard with succulents and groundcover",
  },
  commercial: {
    src: unsplash("photo-1570129477492-45c003edd2be"),
    alt: "Commercial property frontage with room for landscape",
  },
  borders: {
    src: unsplash("photo-1591857177580-dc82b9ac4e1e"),
    alt: "Planted garden borders with layered foliage",
  },
  outdoor: {
    src: unsplash("photo-1600210492486-724fe5c67fb0"),
    alt: "An outdoor room opening to garden light",
  },
  compact: {
    src: unsplash("photo-1568605114967-8130f3a36994"),
    alt: "A compact urban house with a small garden setting",
  },
};

export const projectImages: SiteImage[] = [
  {
    src: unsplash("photo-1558904541-efa843a96f01"),
    alt: "A formal garden of lawn, hedges and structured planting",
  },
  {
    src: unsplash("photo-1564013799919-ab600027ffc6"),
    alt: "A family house with lawn and a quiet garden edge",
  },
  {
    src: unsplash("photo-1600585154526-990dced4db0d"),
    alt: "Contemporary architecture sitting in a considered landscape",
  },
  {
    src: unsplash("photo-1591857177580-dc82b9ac4e1e"),
    alt: "Layered planting in a private Nairobi-scale garden",
  },
];
