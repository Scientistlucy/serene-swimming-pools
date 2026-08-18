import { poolTypes } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function PoolTypes() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap">
        <Reveal>
          <p className="eyebrow">Design possibilities</p>
          <h2 className="display mt-4 max-w-[14ch] text-4xl md:text-5xl">
            Different pools for different ways of living.
          </h2>
        </Reveal>
      </div>

      <div className="pool-track mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-1440px)/2+1.25rem))] pb-4 md:gap-6 md:px-[max(2.25rem,calc((100vw-1440px)/2+2.25rem))]">
        {poolTypes.map((type) => (
          <article
            key={type.id}
            className="image-zoom relative h-[28rem] w-[78vw] shrink-0 snap-start sm:w-[22rem] md:h-[34rem] md:w-[26rem]"
          >
            <img src={type.image.src} alt={type.image.alt} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
              <h3 className="font-serif text-3xl">{type.name}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/80">{type.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
