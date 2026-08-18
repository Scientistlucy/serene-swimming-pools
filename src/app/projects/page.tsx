import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected landscape projects by Adgreens landscape — residential gardens, lawns and commercial frontages in Kenya.",
};

export default function ProjectsPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Projects"
        title="Built to Be Seen. Built to Last."
        description="A look at the kind of gardens we make — quiet lawns, planted courtyards and building frontages, always shaped by the site."
        image={images.hero}
      />
      <Projects showHeading={false} />
    </main>
  );
}
