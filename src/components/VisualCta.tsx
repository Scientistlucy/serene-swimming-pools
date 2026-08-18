import { images } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";

export function VisualCta() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-midnight text-ivory">
      <div className="absolute inset-0">
        <CoverImage src={images.cta.src} alt={images.cta.alt} decorative className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-midnight/45" />
      <div className="site-wrap relative flex min-h-[70vh] flex-col items-start justify-end py-20">
        <h2 className="display max-w-[14ch] text-4xl md:text-6xl">Your Garden Could Feel Very Different.</h2>
        <Button href="/contact" className="mt-8">
          Start Your Landscape Project
        </Button>
      </div>
    </section>
  );
}
