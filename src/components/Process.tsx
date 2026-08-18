"use client";

import { processSteps } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { useEffect, useRef, useState } from "react";

export function Process({ showHeading = true }: { showHeading?: boolean }) {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-step]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const index = Number(top?.target.getAttribute("data-step"));
        if (!Number.isNaN(index)) setActive(index);
      },
      { root: null, threshold: 0.45, rootMargin: "-20% 0px -35% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            {showHeading ? (
              <>
                <p className="eyebrow">The process</p>
                <h2 className="display mt-4 text-4xl md:text-5xl">From first conversation to water in the pool.</h2>
              </>
            ) : (
              <p className="eyebrow">The steps</p>
            )}
            <p className="mt-16 hidden font-serif text-8xl text-stone/80 lg:block">
              {processSteps[active]?.number}
            </p>
          </div>
        </div>

        <div ref={listRef} className="relative lg:col-span-8 lg:pl-10">
          <div className="absolute bottom-8 left-0 top-8 hidden w-px bg-stone/70 lg:block" />
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number}>
                <article
                  data-step={index}
                  className="border-l-2 border-stone/50 py-8 pl-6 transition-colors lg:border-l-0 lg:pl-10"
                >
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-aqua">
                    {step.number} — {step.title}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">{step.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink/80">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
