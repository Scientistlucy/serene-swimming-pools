import { images } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function VisualCta() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden text-ivory">
      <img src={images.cta.src} alt={images.cta.alt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-midnight/45" />
      <div className="site-wrap relative flex min-h-[70vh] flex-col items-start justify-end py-20">
        <h2 className="display max-w-[14ch] text-4xl md:text-6xl">Your Backyard Could Feel Very Different.</h2>
        <Button href="/contact" className="mt-8">
          Start Your Pool Project
        </Button>
      </div>
    </section>
  );
}
