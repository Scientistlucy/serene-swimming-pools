import { images, poolTypeImages, projectImages, serviceImages } from "./images";

export const services = [
  {
    id: "design",
    number: "01",
    name: "Swimming Pool Design",
    description:
      "Custom pool layouts that respond to the property, how you live, and how the space should feel.",
    image: serviceImages.design,
  },
  {
    id: "construction",
    number: "02",
    name: "Swimming Pool Construction",
    description:
      "Structured building from excavation through shell, plumbing and waterproofing — built to last.",
    image: serviceImages.construction,
  },
  {
    id: "renovation",
    number: "03",
    name: "Pool Renovation",
    description:
      "Bring an ageing pool back to life with improved finishes, equipment and a clearer spatial presence.",
    image: serviceImages.renovation,
  },
  {
    id: "maintenance",
    number: "04",
    name: "Pool Maintenance",
    description:
      "Ongoing care that keeps water balanced, systems working and the pool ready to use.",
    image: serviceImages.maintenance,
  },
  {
    id: "equipment",
    number: "05",
    name: "Pool Equipment & Filtration",
    description:
      "Pumps, filtration and circulation specified for reliable performance in Kenyan conditions.",
    image: serviceImages.equipment,
  },
  {
    id: "finishing",
    number: "06",
    name: "Pool Finishing & Tiling",
    description:
      "Coping, tiling and surface work that give the pool its final character and long-term durability.",
    image: serviceImages.finishing,
  },
  {
    id: "features",
    number: "07",
    name: "Water Features",
    description:
      "Spillways, fountains and still-water details that add movement and atmosphere around the pool.",
    image: serviceImages.features,
  },
  {
    id: "commercial",
    number: "08",
    name: "Commercial Pool Construction",
    description:
      "Pools for hotels, apartments and institutions — designed for use, maintenance and lasting finish.",
    image: serviceImages.commercial,
  },
] as const;

export const poolTypes = [
  {
    id: "infinity",
    name: "Infinity Pools",
    enquiryType: "Infinity pool",
    note: "For sites with a view, a vanishing edge can extend the water into the landscape.",
    image: poolTypeImages.infinity,
  },
  {
    id: "residential",
    name: "Residential Pools",
    enquiryType: "Residential pool",
    note: "Private pools shaped around the house, garden and the way the family uses the outdoors.",
    image: poolTypeImages.residential,
  },
  {
    id: "commercial",
    name: "Commercial Pools",
    enquiryType: "Commercial / hotel pool",
    note: "Hospitality and institutional pools built for daily use and straightforward upkeep.",
    image: poolTypeImages.commercial,
  },
  {
    id: "geometric",
    name: "Modern Geometric Pools",
    enquiryType: "Modern geometric pool",
    note: "Clean lines and considered proportions that sit naturally with contemporary architecture.",
    image: poolTypeImages.geometric,
  },
  {
    id: "family",
    name: "Family Pools",
    enquiryType: "Family pool",
    note: "Practical depths, comfortable edges and a layout that works for everyday living.",
    image: poolTypeImages.family,
  },
  {
    id: "resort",
    name: "Resort-Style Pools",
    enquiryType: "Resort-style pool",
    note: "Outdoor rooms for lingering — water, planting and poolside architecture together.",
    image: poolTypeImages.resort,
  },
  {
    id: "compact",
    name: "Compact Pools",
    enquiryType: "Compact pool",
    note: "Smaller footprints that still feel considered, even on tight urban plots.",
    image: poolTypeImages.compact,
  },
] as const;

export const projects = [
  {
    id: "karen-courtyard",
    title: "Karen Courtyard Pool",
    location: "Karen, Nairobi",
    type: "Geometric",
    description:
      "A still geometric pool set into a private garden, with stone coping and a quiet edge for evening use.",
    image: projectImages[0],
  },
  {
    id: "lavington-family",
    title: "Lavington Family Pool",
    location: "Lavington, Nairobi",
    type: "Residential",
    description:
      "A family pool with a shallow shelf, clear circulation and planting that softens the architecture of the house.",
    image: projectImages[1],
  },
  {
    id: "naivasha-lodge",
    title: "Naivasha Lodge Pool",
    location: "Naivasha",
    type: "Commercial",
    description:
      "A hospitality pool designed for daily guest use, with a long swimming line and a terrace that opens to the garden.",
    image: projectImages[2],
  },
  {
    id: "runda-garden",
    title: "Runda Garden Pool",
    location: "Runda, Nairobi",
    type: "Family",
    description:
      "A compact garden pool that holds the house and lawn in one outdoor room — practical, calm and built for everyday living.",
    image: projectImages[3],
  },
] as const;

export const reasons = [
  {
    title: "Thoughtful Design",
    body: "Every pool should complement the property and the people using it. We start with the site, not a catalogue shape.",
  },
  {
    title: "Quality Construction",
    body: "Attention to structural integrity, waterproofing, finishing and the systems that keep the pool working for years.",
  },
  {
    title: "Professional Execution",
    body: "A clear process from initial conversation through construction and handover, so you always know what comes next.",
  },
  {
    title: "Built Around Your Space",
    body: "Pool designs should respond to the property rather than forcing a generic form onto it.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    body: "We talk through the site, how you want to use the pool, and the kind of atmosphere you have in mind.",
  },
  {
    number: "02",
    title: "Site Assessment",
    body: "A visit to understand access, levels, neighbouring structures and the practical constraints of the plot.",
  },
  {
    number: "03",
    title: "Design & Planning",
    body: "Layout, depths, finishes and equipment are resolved into a buildable plan before construction begins.",
  },
  {
    number: "04",
    title: "Construction",
    body: "Excavation, structure, plumbing and waterproofing — the work that determines how the pool will last.",
  },
  {
    number: "05",
    title: "Finishing",
    body: "Tiling, coping, detailing and commissioning. This is where the pool takes on its final character.",
  },
  {
    number: "06",
    title: "Handover",
    body: "Systems are checked, the pool is filled, and you are shown how to live with and look after it.",
  },
] as const;

export const faqs = [
  {
    q: "How much does swimming pool construction cost in Kenya?",
    a: "Cost depends on size, design, ground conditions, finishes and equipment. There is no honest one-price-fits-all figure. After we understand your property and what you want to build, we prepare a quotation for that project.",
  },
  {
    q: "How long does pool construction take?",
    a: "Timelines vary with design complexity, site access, weather and finishing choices. Once the site has been assessed, we share a realistic programme rather than a generic number of weeks.",
  },
  {
    q: "Do you design custom swimming pools?",
    a: "Yes. Serene designs pools around the property — its architecture, outdoor space and how you intend to use the water — rather than applying a standard shape by default.",
  },
  {
    q: "Do you build residential and commercial pools?",
    a: "Yes. We work on private residential pools as well as commercial projects such as hotels, apartments and other institutional settings.",
  },
  {
    q: "What type of pool is suitable for my property?",
    a: "That depends on plot size, levels, access, neighbouring structures and how the pool will be used. A site assessment is the most reliable way to decide between a compact family pool, a geometric courtyard pool, an infinity edge or a larger hospitality layout.",
  },
  {
    q: "Do you provide maintenance services?",
    a: "Yes. Alongside new construction we offer pool maintenance so the water, equipment and finishes stay in good condition after handover.",
  },
  {
    q: "Can you renovate an existing swimming pool?",
    a: "Yes. Renovation can include resurfacing, tiling, equipment upgrades and spatial improvements to an existing pool that no longer looks or performs as it should.",
  },
  {
    q: "How do I get a quotation?",
    a: "Use the contact form to describe your space and the pool you have in mind, or reach us by phone or WhatsApp. We will follow up to arrange a conversation and, where needed, a site visit.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They treated the garden as part of the house, not a leftover space. The pool sits quietly, and it works the way we actually live.",
    attribution: "Amina K.",
    detail: "Karen, Nairobi",
  },
  {
    quote:
      "Clear conversation from the first site visit through finishing. The tiling, the water, the edges — all of it feels considered rather than rushed.",
    attribution: "David M.",
    detail: "Kiambu",
  },
] as const;

export const projectTypes = [
  "Residential pool",
  "Infinity pool",
  "Family pool",
  "Commercial / hotel pool",
  "Resort-style pool",
  "Modern geometric pool",
  "Compact pool",
  "Renovation",
  "Maintenance",
  "Not sure yet",
] as const;

export { images };
