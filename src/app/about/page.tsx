import type { Metadata } from "next";
import { IntroSection } from "@/components/IntroSection";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Serene Swimming Pool Contractors is a swimming pool construction company in Kenya, designing pools around the property, the architecture and the way you live.",
};

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="About Serene"
        title="More Than a Pool. A Space Built Around You."
        description="Swimming pool experts in Kenya, working from first conversation through construction, finishing and ongoing care."
        image={images.why}
      />
      <IntroSection showTitle={false} extended />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
