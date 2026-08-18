import type { SiteImage } from "@/data/images";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: SiteImage;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-midnight text-ivory md:min-h-[78vh]">
      <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight/82 via-midnight/40 to-midnight/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/75 via-transparent to-midnight/25" />
      <div className="site-wrap relative flex min-h-[72vh] items-end pb-14 pt-32 md:min-h-[78vh] md:pb-20">
        <div className="grid w-full gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-sand">{eyebrow}</p>
            <h1 className="display mt-5 max-w-[16ch] text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              {title}
            </h1>
          </div>
          <p className="max-w-md self-end text-[1.02rem] leading-relaxed text-ivory/82 lg:col-span-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
