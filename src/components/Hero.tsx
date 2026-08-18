import { images } from "@/data/content";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-midnight text-ivory">
      <div className="absolute inset-0">
        <CoverImage src={images.hero.src} alt={images.hero.alt} decorative priority className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/35 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-midnight/25" />

      <div className="site-wrap relative flex min-h-[100svh] items-end pb-16 pt-32 md:pb-20">
        <div className="grid w-full items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-sand">Landscaping in Nairobi, Kenya</p>
            <h1 className="display mt-5 max-w-[14ch] text-[3.15rem] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              {site.tagline}
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="max-w-md text-[1.02rem] leading-relaxed text-ivory/82">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Request a Quote</Button>
              <Button href="/projects" variant="ghost">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-7 right-6 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-ivory/75 md:right-10"
      >
        Scroll
        <span className="relative block h-10 w-px bg-ivory/30">
          <span className="absolute inset-x-0 top-0 h-3 bg-ivory" />
        </span>
      </a>
    </section>
  );
}
