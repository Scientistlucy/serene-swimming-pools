import { images, reasons } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Why Serene</p>
            <h2 className="display mt-4 max-w-[11ch] text-4xl md:text-5xl">
              Quiet craft. Clear process. Water that belongs to the house.
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-10 hidden lg:block">
            <div className="image-zoom aspect-[4/5]">
              <img src={images.why.src} alt={images.why.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <ol>
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 70} as="li" className="border-t border-stone/70 py-8 last:border-b">
                <p className="text-[0.7rem] tracking-[0.2em] text-aqua">0{index + 1}</p>
                <h3 className="mt-3 font-serif text-3xl">{reason.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink/80">{reason.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
