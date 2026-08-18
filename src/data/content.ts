import { gardenTypeImages, images, projectImages, serviceImages } from "./images";

export const services = [
  {
    id: "design",
    number: "01",
    name: "Landscape Design",
    description:
      "Garden layouts that respond to the house, the climate and how you actually use the outdoors.",
    image: serviceImages.design,
  },
  {
    id: "construction",
    number: "02",
    name: "Garden Installation",
    description:
      "From soil preparation through planting and finishing — a garden built to take root and last.",
    image: serviceImages.construction,
  },
  {
    id: "lawn",
    number: "03",
    name: "Lawns & Groundcover",
    description:
      "Lawns and planted ground that hold the house and garden in one outdoor room.",
    image: serviceImages.renovation,
  },
  {
    id: "planting",
    number: "04",
    name: "Planting",
    description:
      "Trees, shrubs and seasonal planting chosen for Kenyan light, water and the character of the site.",
    image: serviceImages.finishing,
  },
  {
    id: "hardscape",
    number: "05",
    name: "Hardscape & Outdoor Rooms",
    description:
      "Paths, paving and sitting areas that give the garden structure without shouting over the planting.",
    image: serviceImages.features,
  },
  {
    id: "soil",
    number: "06",
    name: "Red Soil & Manure Supply",
    description:
      "Soil and manure for gardens that need a better start — supplied as part of the landscape work.",
    image: serviceImages.equipment,
  },
  {
    id: "maintenance",
    number: "07",
    name: "Garden Care",
    description:
      "Ongoing tending so the planting, lawns and edges stay in good condition after handover.",
    image: serviceImages.maintenance,
  },
  {
    id: "commercial",
    number: "08",
    name: "Commercial Landscapes",
    description:
      "Frontages and grounds for offices, apartments and institutions — designed for daily use and simple upkeep.",
    image: serviceImages.commercial,
  },
] as const;

export const gardenTypes = [
  {
    id: "residential",
    name: "Residential Gardens",
    enquiryType: "Residential garden",
    note: "Private gardens shaped around the house, the family and the way the outdoors is used.",
    image: gardenTypeImages.residential,
  },
  {
    id: "lawn",
    name: "Lawns & Terraces",
    enquiryType: "Lawn and terrace",
    note: "Open lawn with a clear edge — for sitting, gathering and a quieter view from the house.",
    image: gardenTypeImages.lawn,
  },
  {
    id: "courtyard",
    name: "Courtyard Gardens",
    enquiryType: "Courtyard garden",
    note: "Smaller plots that still feel considered — planting, paving and a little shade.",
    image: gardenTypeImages.courtyard,
  },
  {
    id: "commercial",
    name: "Commercial Frontage",
    enquiryType: "Commercial landscape",
    note: "Arrival landscapes for buildings that have to look tended every day.",
    image: gardenTypeImages.commercial,
  },
  {
    id: "borders",
    name: "Planted Borders",
    enquiryType: "Planted borders",
    note: "Layered planting that softens walls, fences and the architecture of the house.",
    image: gardenTypeImages.borders,
  },
  {
    id: "outdoor",
    name: "Outdoor Rooms",
    enquiryType: "Outdoor room",
    note: "Places to sit and linger — garden, hardscape and planting held together.",
    image: gardenTypeImages.outdoor,
  },
  {
    id: "compact",
    name: "Compact Gardens",
    enquiryType: "Compact garden",
    note: "Tight urban plots that still deserve a proper garden, not leftover grass.",
    image: gardenTypeImages.compact,
  },
] as const;

export const projects = [
  {
    id: "karen-garden",
    title: "Karen Garden Rooms",
    location: "Karen, Nairobi",
    type: "Residential",
    description:
      "A sequence of lawn, planting and a quiet sitting edge — the garden treated as part of the house, not leftover ground.",
    image: projectImages[0],
  },
  {
    id: "lavington-lawn",
    title: "Lavington Lawn",
    location: "Lavington, Nairobi",
    type: "Lawn",
    description:
      "A family lawn with a clear planted border, so the house opens onto green rather than a leftover patch of grass.",
    image: projectImages[1],
  },
  {
    id: "westlands-courtyard",
    title: "Westlands Courtyard",
    location: "Westlands, Nairobi",
    type: "Courtyard",
    description:
      "A compact courtyard of paving, shade and planting — enough garden for a tight urban plot.",
    image: projectImages[2],
  },
  {
    id: "runda-planting",
    title: "Runda Planting",
    location: "Runda, Nairobi",
    type: "Planting",
    description:
      "Layered borders that hold the house and drive in one landscape — practical, calm and built for everyday living.",
    image: projectImages[3],
  },
] as const;

export const reasons = [
  {
    title: "Thoughtful Design",
    body: "Every garden should complement the property and the people using it. We start with the site, not a catalogue of plants.",
  },
  {
    title: "Proper Installation",
    body: "Attention to soil, levels, planting and the edges that keep a garden looking considered years after handover.",
  },
  {
    title: "Professional Execution",
    body: "A clear process from first conversation through installation and care, so you always know what comes next.",
  },
  {
    title: "Built Around Your Space",
    body: "Landscape should respond to the house and climate rather than forcing a generic garden onto the plot.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    body: "We talk through the site, how you want to use the garden, and the kind of atmosphere you have in mind.",
  },
  {
    number: "02",
    title: "Site Assessment",
    body: "A visit to understand soil, levels, light, access and the practical constraints of the plot.",
  },
  {
    number: "03",
    title: "Design & Planning",
    body: "Layout, planting, lawns and hardscape are resolved into a buildable plan before work begins.",
  },
  {
    number: "04",
    title: "Installation",
    body: "Soil, planting, lawns and outdoor rooms — the work that determines how the garden will grow.",
  },
  {
    number: "05",
    title: "Finishing",
    body: "Edges, paths and the last of the planting. This is where the garden takes on its character.",
  },
  {
    number: "06",
    title: "Handover",
    body: "The garden is walked through with you, and you are shown how to live with and look after it.",
  },
] as const;

export const faqs = [
  {
    q: "How much does landscaping cost in Kenya?",
    a: "Cost depends on plot size, design, soil, planting and hardscape. There is no honest one-price-fits-all figure. After we understand your property and what you want to build, we prepare a quotation for that garden.",
  },
  {
    q: "How long does a garden project take?",
    a: "Timelines vary with design complexity, site access, weather and planting choices. Once the site has been assessed, we share a realistic programme rather than a generic number of weeks.",
  },
  {
    q: "Do you design custom gardens?",
    a: "Yes. Adgreens designs landscapes around the property — its architecture, outdoor space and how you intend to use the garden — rather than applying a standard layout by default.",
  },
  {
    q: "Do you work on residential and commercial landscapes?",
    a: "Yes. We work on private residential gardens as well as commercial frontages such as offices, apartments and other institutional settings.",
  },
  {
    q: "What type of garden is suitable for my property?",
    a: "That depends on plot size, soil, light, access and how the outdoors will be used. A site assessment is the most reliable way to decide between a compact courtyard, a lawn and terrace, planted borders or a larger commercial frontage.",
  },
  {
    q: "Do you provide garden care after installation?",
    a: "Yes. Alongside new gardens we offer ongoing care so the planting, lawns and edges stay in good condition after handover.",
  },
  {
    q: "Do you supply red soil and manure?",
    a: "Yes. Red soil and manure supply sits alongside the landscape work, so gardens that need a better start can be prepared properly.",
  },
  {
    q: "How do I get a quotation?",
    a: "Use the contact form to describe your space and the garden you have in mind, or reach us by phone or WhatsApp. We will follow up to arrange a conversation and, where needed, a site visit.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They treated the garden as part of the house, not leftover ground. The planting sits quietly, and it works the way we actually live.",
    attribution: "Amina K.",
    detail: "Karen, Nairobi",
  },
  {
    quote:
      "Clear conversation from the first site visit through planting. The lawn, the borders, the edges — all of it feels considered rather than rushed.",
    attribution: "David M.",
    detail: "Kiambu",
  },
] as const;

export const projectTypes = [
  "Residential garden",
  "Lawn and terrace",
  "Courtyard garden",
  "Commercial landscape",
  "Planted borders",
  "Outdoor room",
  "Compact garden",
  "Garden care",
  "Red soil and manure",
  "Not sure yet",
] as const;

export { images };
