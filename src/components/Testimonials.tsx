import { testimonials } from "@/data/content";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Client voices</p>
            <h2 className="display mt-4 max-w-[14ch] text-4xl md:text-5xl">Work that holds, quietly.</h2>
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light w-fit"
          >
            Read reviews on Google
          </a>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {testimonials.map((item) => (
            <Reveal key={item.quote} as="article" className="border-t border-stone/80 pt-8">
              <blockquote className="font-serif text-2xl leading-snug md:text-[1.85rem]">
                “{item.quote}”
              </blockquote>
              <p className="mt-8 text-sm tracking-wide text-ink/60">
                {item.attribution}
                <span className="mx-2">·</span>
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
