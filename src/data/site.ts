export const site = {
  name: "Adgreens landscape",
  shortName: "Adgreens",
  tagline: "Gardens That Belong to the House.",
  description:
    "From landscape design and planting to lawns, soil and ongoing garden care, Adgreens landscape shapes outdoor space around how you live — from Northern Bypass Road in Nairobi.",
  locationLabel: "Northern Bypass Rd, Nairobi",
  mapsUrl: "https://maps.app.goo.gl/tcDfNZRvH3zLojyH6",
  phone: "+254 720 418 356",
  whatsapp: "254720418356",
  email: "hello@adgreens.co.ke",
  address: "Northern Bypass Rd, Nairobi, Kenya",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  seo: {
    title: "Adgreens landscape | Landscaping and Garden Design in Nairobi",
    description:
      "Adgreens landscape designs and builds gardens in Nairobi and across Kenya — landscape design, planting, lawns, soil and manure supply, and ongoing garden care.",
  },
} as const;

export type NavItem = (typeof site.nav)[number];

export function telHref() {
  return `tel:${site.phone.replace(/\s/g, "")}`;
}

export function whatsappHref() {
  const text = encodeURIComponent(
    "Hello Adgreens landscape — I would like to discuss a garden or landscape project.",
  );
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${text}`;
}
