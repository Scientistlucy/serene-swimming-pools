import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { VisualCta } from "@/components/VisualCta";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <IntroSection cta />
      <Services compact />
      <Projects featuredCount={2} />
      <VisualCta />
    </main>
  );
}
