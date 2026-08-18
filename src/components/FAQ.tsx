"use client";

import { faqs } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-4 text-4xl md:text-5xl">Before the first site visit.</h2>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.q}>
                <div className="border-t border-stone/70 last:border-b">
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span className="font-serif text-xl md:text-2xl">{item.q}</span>
                      <span aria-hidden="true" className="mt-1 text-aqua">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div className={cn("faq-answer", isOpen && "open")}>
                    <p className="overflow-hidden pb-6 pr-10 leading-relaxed text-ink/80">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
