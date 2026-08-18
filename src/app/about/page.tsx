import type { Metadata } from "next";
import { IntroSection } from "@/components/IntroSection";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adgreens landscape is a landscaping and garden design studio in Nairobi, shaping outdoor space around the property, the climate and the way you live.",
};

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="About Adgreens"
        title="More Than a Garden. A Landscape Built Around You."
        description="Landscaping from Northern Bypass Road in Nairobi — from first conversation through planting, finishing and ongoing garden care."
        image={images.why}
      />
      <IntroSection showTitle={false} extended />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
