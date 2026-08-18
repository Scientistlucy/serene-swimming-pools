export const site = {
  name: "Serene Swimming Pool Contractors",
  shortName: "Serene",
  tagline: "Pools Designed for the Way You Live.",
  description:
    "From concept and construction to finishing and ongoing care, Serene Swimming Pool Contractors creates beautiful, durable swimming pools designed around your space.",
  locationLabel: "Nairobi, Kenya",
  mapsUrl: "https://maps.app.goo.gl/dofH2qcSztk5MMDW8",
  phone: "+254 748 216 904",
  whatsapp: "254748216904",
  email: "hello@serenepools.co.ke",
  address: "Nairobi, Kenya",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" },
  ],
  seo: {
    title: "Serene Swimming Pool Contractors | Swimming Pool Construction in Kenya",
    description:
      "Serene Swimming Pool Contractors designs and builds custom swimming pools across Kenya — from residential and family pools to commercial and resort-style projects.",
  },
} as const;

export type NavItem = (typeof site.nav)[number];

export function telHref() {
  return `tel:${site.phone.replace(/\s/g, "")}`;
}

export function whatsappHref() {
  return `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
}
