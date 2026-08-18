import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Serene Swimming Pool Contractors works: consultation, site assessment, design, construction, finishing and handover.",
};

export default function ProcessPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Process"
        title="From first conversation to water in the pool."
        description="A clear sequence so you always know what comes next — from the first visit to handover and care."
        image={images.construction}
      />
      <Process showHeading={false} />
      <FAQ />
    </main>
  );
}
