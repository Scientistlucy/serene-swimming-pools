import { projects } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type ProjectsProps = {
  featuredCount?: number;
  showHeading?: boolean;
};

export function Projects({ featuredCount, showHeading = true }: ProjectsProps) {
  const list = featuredCount ? projects.slice(0, featuredCount) : projects;

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="site-wrap">
        {showHeading ? (
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-4 text-4xl md:text-5xl lg:text-[3.5rem]">
              Built to Be Seen. Built to Last.
            </h2>
            <p className="mt-6 max-w-xl text-ink/75">
              Residential and commercial swimming pools designed around the property — from private gardens
              in Nairobi to hospitality terraces beyond the city.
            </p>
          </Reveal>
        ) : null}

        <div className={cn("space-y-20 md:space-y-28", showHeading && "mt-16")}>
          {list.map((project, index) => (
            <Reveal key={project.id}>
              <article
                className={cn(
                  "grid items-end gap-8 lg:grid-cols-12",
                  index % 2 === 1 && "lg:[&>div:first-child]:order-2",
                )}
              >
                <div className={cn("image-zoom relative min-h-[16rem] bg-midnight lg:col-span-8", index % 2 === 1 && "lg:col-start-5")}>
                  <CoverImage
                    src={project.image.src}
                    alt={project.image.alt}
                    className="aspect-[16/10] w-full md:aspect-[3/2]"
                  />
                </div>
                <div className={cn("lg:col-span-4", index % 2 === 1 ? "lg:col-start-1 lg:row-start-1 lg:pr-8" : "lg:pl-4")}>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-aqua">{project.type}</p>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl">{project.title}</h3>
                  <p className="mt-3 text-sm tracking-wide text-ink/60">{project.location}</p>
                  <p className="mt-5 max-w-sm leading-relaxed text-ink/80">{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {featuredCount ? (
          <div className="mt-16">
            <Button href="/projects" variant="light">
              View all projects
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
