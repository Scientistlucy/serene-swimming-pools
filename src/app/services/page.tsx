import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PoolTypes } from "@/components/PoolTypes";
import { Services } from "@/components/Services";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Swimming pool design, construction, renovation, maintenance, finishing and commercial pool building across Kenya.",
};

export default function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Services"
        title="Construction, finishing and care — held in one conversation."
        description="From custom design to equipment, tiling and commercial pools. Every service sits inside the same standard of work."
        image={images.water}
      />
      <Services showHeading={false} />
      <PoolTypes />
    </main>
  );
}
