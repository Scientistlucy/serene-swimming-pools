import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Projects } from "@/components/Projects";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected swimming pool projects by Serene Swimming Pool Contractors — residential, family and commercial pools in Kenya.",
};

export default function ProjectsPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Projects"
        title="Built to Be Seen. Built to Last."
        description="A look at the kind of pools we build — quiet geometry, family gardens and hospitality water, always shaped by the site."
        image={images.hero}
      />
      <Projects showHeading={false} />
    </main>
  );
}
