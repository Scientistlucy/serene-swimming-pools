import { images } from "@/data/content";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type IntroSectionProps = {
  showTitle?: boolean;
  cta?: boolean;
  extended?: boolean;
};

export function IntroSection({ showTitle = true, cta = false, extended = false }: IntroSectionProps) {
  return (
    <section id="intro" className="bg-ivory py-24 md:py-32">
      <div className="site-wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="order-2 lg:order-1 lg:col-span-6">
          <div className="image-zoom relative aspect-[4/5] max-h-[720px] w-full">
            <img
              src={images.intro.src}
              alt={images.intro.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:pl-6">
          {showTitle ? (
            <Reveal>
              <p className="eyebrow">About Serene</p>
              <h2 className="display mt-5 max-w-[12ch] text-4xl md:text-5xl lg:text-[3.6rem]">
                More Than a Pool. A Space Built Around You.
              </h2>
            </Reveal>
          ) : (
            <Reveal>
              <p className="eyebrow">The studio</p>
            </Reveal>
          )}
          <Reveal delay={120}>
            <div className="mt-8 max-w-lg space-y-5 text-[1.02rem] leading-relaxed text-ink/85">
              <p>
                Serene Swimming Pool Contractors specialises in swimming pool construction and the outdoor
                aquatic work that sits around it — design, building, finishing and ongoing care.
              </p>
              <p>
                As swimming pool experts in Kenya, we treat each project as architecture in water: a pool
                that belongs to the house, the garden and the way you actually live, not a generic shape
                dropped onto the plot.
              </p>
              {extended ? (
                <p>
                  Whether the brief is a compact family pool in Nairobi, a resort-style terrace, or a
                  commercial pool that has to work every day, the approach is the same: understand the
                  site, design with restraint, and build with care.
                </p>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-stone/70 pt-6 text-sm tracking-wide text-ink/70">
              <span>{site.locationLabel}</span>
              <span aria-hidden="true">/</span>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="underline decoration-stone">
                View Google listing
              </a>
              {cta ? (
                <Button href="/about" variant="light" className="ml-auto">
                  About Serene
                </Button>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
