"use client";

import { projectTypes } from "@/data/content";
import { site, telHref, whatsappHref } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FormEvent, useState } from "react";

const initial = {
  name: "",
  phone: "",
  email: "",
  location: "",
  projectType: projectTypes[0],
  message: "",
};

type ContactProps = {
  showHeading?: boolean;
};

export function Contact({ showHeading = true }: ContactProps) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Please check the form and try again.");
      }
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="site-wrap grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          {showHeading ? (
            <>
              <p className="eyebrow">Start a project</p>
              <h2 className="display mt-4 max-w-[13ch] text-4xl md:text-5xl">
                Let&apos;s Build Something Worth Coming Home To.
              </h2>
            </>
          ) : (
            <p className="eyebrow">Reach us</p>
          )}
          <p className="mt-6 max-w-md leading-relaxed text-ink/80">
            Tell us about your space, your ideas and the kind of pool you have in mind. We&apos;ll help you
            explore the right approach for your project.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="tracking-[0.16em] uppercase text-ink/50">Location</dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] uppercase text-ink/50">Phone</dt>
              <dd className="mt-1">
                <a href={telHref()}>{site.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] uppercase text-ink/50">WhatsApp</dt>
              <dd className="mt-1">
                <a href={whatsappHref()} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] uppercase text-ink/50">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt className="tracking-[0.16em] uppercase text-ink/50">Google</dt>
              <dd className="mt-1">
                <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="underline decoration-stone">
                  Open Maps listing
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="grid gap-7 md:grid-cols-2">
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="field"
              />
            </label>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Phone Number</span>
              <input
                required
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="field"
              />
            </label>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Email</span>
              <input
                required
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="field"
              />
            </label>
            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Location</span>
              <input
                required
                name="location"
                value={form.location}
                onChange={(event) => setForm({ ...form, location: event.target.value })}
                className="field"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Project Type</span>
              <select
                name="projectType"
                value={form.projectType}
                onChange={(event) => setForm({ ...form, projectType: event.target.value as typeof form.projectType })}
                className="field bg-transparent"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-ink/55">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="field resize-y"
              />
            </label>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request a Quote"}
              </Button>
              <a href={whatsappHref()} className="btn btn-light" target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </div>
            {status === "sent" ? (
              <p className="md:col-span-2 text-sm text-aqua">
                Thank you. We have your details. Call or WhatsApp {site.phone} if you would like to speak
                sooner.
              </p>
            ) : null}
            {status === "error" ? <p className="md:col-span-2 text-sm text-red-800">{error}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
