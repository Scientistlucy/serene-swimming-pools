import { gardenTypes } from "@/data/content";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function PoolTypes() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">Design possibilities</p>
          <h2 className="display mt-4 max-w-[14ch] text-4xl md:text-5xl">
            Different gardens for different ways of living.
          </h2>
        </Reveal>
        <p className="max-w-xs text-sm leading-relaxed text-ink/65">
          Scroll sideways through the garden types. Choose one to start a quotation with that landscape in mind.
        </p>
      </div>

      <div className="pool-track mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))] pb-6 md:gap-6 md:px-[max(2.25rem,calc((100vw-1440px)/2+2.25rem))]">
        {gardenTypes.map((type, index) => (
          <article
            key={type.id}
            className="w-[78vw] shrink-0 snap-start sm:w-[20rem] md:w-[22.5rem]"
          >
            <Link
              href={`/contact?type=${encodeURIComponent(type.enquiryType)}`}
              className="group block"
            >
              <div className="image-zoom relative aspect-[5/4] overflow-hidden bg-midnight">
                <CoverImage src={type.image.src} alt={type.image.alt} className="h-full w-full" />
              </div>
              <div className="border-b border-stone/70 pt-5 pb-6">
                <p className="text-[0.68rem] tracking-[0.2em] text-aqua">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl md:text-[1.7rem]">{type.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{type.note}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-midnight">
                  Request this garden
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
