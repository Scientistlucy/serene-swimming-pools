"use client";

import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const solid = !isHome || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-ivory/95 text-midnight" : "bg-transparent text-ivory",
        solid && !open && "border-b border-stone/40",
      )}
    >
      <div className="site-wrap flex h-[4.5rem] items-center justify-between md:h-20">
        <Link href="/" className="font-serif text-[1.35rem] tracking-tight">
          {site.shortName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className={cn("btn hidden sm:inline-flex", solid ? "btn-primary" : "btn-ghost")}>
            Get a Quote
          </Link>
          <button
            type="button"
            className="relative h-10 w-10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cn(
                "absolute left-2 right-2 top-[14px] h-px bg-current transition-transform duration-300",
                open && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-2 right-2 bottom-[14px] h-px bg-current transition-transform duration-300",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-500 ease-reveal",
          open ? "max-h-screen" : "max-h-0",
        )}
      >
        <nav className="site-wrap flex min-h-[calc(100vh-4.5rem)] flex-col justify-center gap-6 pb-16" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="font-serif text-4xl tracking-tight">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary mt-6 w-fit">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
