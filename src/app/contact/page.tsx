import type { Metadata } from "next";
import { Suspense } from "react";
import { Contact } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a landscaping quotation in Nairobi. Call ${site.phone}, WhatsApp, or write to ${site.email}.`,
};

export default function ContactPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Worth Coming Home To."
        description="Tell us about your space and the garden you have in mind. We work from Northern Bypass Road across Nairobi and Kenya."
        image={images.cta}
      />
      <Suspense>
        <Contact showHeading={false} />
      </Suspense>
    </main>
  );
}
