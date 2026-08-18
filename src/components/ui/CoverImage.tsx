"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  decorative?: boolean;
  priority?: boolean;
};

export function CoverImage({ src, alt, className, decorative = false, priority = false }: CoverImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={cn("bg-midnight", className)} aria-hidden="true" />;
  }

  return (
    <img
      src={src}
      alt={decorative ? "" : alt}
      className={cn("h-full w-full object-cover", className)}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}
