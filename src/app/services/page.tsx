import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PoolTypes } from "@/components/PoolTypes";
import { Services } from "@/components/Services";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Landscape design, garden installation, lawns, planting, hardscape, red soil and manure supply, and garden care across Nairobi and Kenya.",
};

export default function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Services"
        title="Construction, planting and care — held in one conversation."
        description="From custom landscape design to lawns, soil and commercial frontages. Every service sits inside the same standard of work."
        image={images.water}
      />
      <Services showHeading={false} />
      <PoolTypes />
    </main>
  );
}
