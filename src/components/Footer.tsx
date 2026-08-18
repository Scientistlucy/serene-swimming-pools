import { services } from "@/data/content";
import { site, telHref, whatsappHref } from "@/data/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="site-wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-4 max-w-sm leading-relaxed text-ivory/70">
            Landscaping in Nairobi — design, planting, lawns, soil and care for residential and commercial
            gardens.
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-sand">Navigate</p>
          <ul className="mt-4 space-y-2 text-ivory/80">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-sand">Services</p>
          <ul className="mt-4 space-y-2 text-ivory/80">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link href="/services">{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-sand">Contact</p>
          <ul className="mt-4 space-y-2 text-ivory/80">
            <li>{site.address}</li>
            <li>
              <a href={telHref()}>{site.phone}</a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-wrap flex flex-col gap-2 border-t border-ivory/10 py-6 text-sm text-ivory/50 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Landscaping and garden design in Kenya</p>
      </div>
    </footer>
  );
}
