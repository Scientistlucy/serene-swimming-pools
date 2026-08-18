"use client";

import { services } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { useState } from "react";

type ServicesProps = {
  compact?: boolean;
  showHeading?: boolean;
};

export function Services({ compact = false, showHeading = true }: ServicesProps) {
  const [active, setActive] = useState(0);
  const list = compact ? services.slice(0, 4) : services;
  const featured = list[active] ?? list[0];

  return (
    <section className="bg-midnight py-24 text-ivory md:py-32">
      <div className="site-wrap">
        {showHeading ? (
          <Reveal>
            <p className="eyebrow text-sand">What we do</p>
            <h2 className="display mt-4 max-w-[16ch] text-4xl md:text-5xl">
              Construction, finishing and care — held in one conversation.
            </h2>
          </Reveal>
        ) : null}

        <div className={cn("grid gap-10 lg:grid-cols-12 lg:gap-16", showHeading && "mt-14")}>
          <Reveal className="lg:col-span-6">
            <div className="image-zoom relative aspect-[4/5] w-full md:aspect-[5/6]">
              <img
                key={featured.id}
                src={featured.image.src}
                alt={featured.image.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/70 to-transparent p-6 md:p-8">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-sand">{featured.number}</p>
                <p className="mt-2 font-serif text-3xl">{featured.name}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <ul>
              {list.map((service, index) => (
                <li key={service.id} className="border-t border-ivory/12 last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className={cn(
                      "group flex w-full items-start gap-5 py-5 text-left transition-colors",
                      active === index ? "text-ivory" : "text-ivory/55 hover:text-ivory",
                    )}
                  >
                    <span className="w-8 shrink-0 pt-1 text-[0.72rem] tracking-[0.16em]">{service.number}</span>
                    <span className="flex-1">
                      <span className="block font-serif text-2xl md:text-[1.7rem]">{service.name}</span>
                      <span
                        className={cn(
                          "mt-2 block max-w-md text-sm leading-relaxed text-ivory/70 transition-opacity",
                          active === index ? "opacity-100" : "opacity-0 md:opacity-70",
                        )}
                      >
                        {service.description}
                      </span>
                    </span>
                    <span aria-hidden="true" className="pt-2 text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            {compact ? (
              <Button href="/services" variant="ghost" className="mt-8">
                All services
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
