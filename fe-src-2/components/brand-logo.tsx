"use client";

import Image from "next/image";
import { useState } from "react";

const LOGO_DEV_TOKEN =
  process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN ?? "pk_X-1ZO13GSgeOoUrIuJ6GMQ";

export function orgInitials(name: string): string {
  const tokens = name
    .split(/\s+/)
    .filter((t) => t.length > 0 && t !== "PT" && t !== "CV");
  if (tokens.length >= 2) {
    return (tokens[0][0] + tokens[1][0]).toUpperCase();
  }
  return tokens[0]?.slice(0, 2).toUpperCase() ?? "";
}

type BrandLogoProps = {
  domain?: string;
  name: string;
  size?: number;
};

export default function BrandLogo({ domain, name, size = 40 }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = !domain || failed;

  if (showFallback) {
    return (
      <span
        aria-label={`${name} logo`}
        style={{ width: size, height: size }}
        className="flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-zinc-400"
      >
        {orgInitials(name)}
      </span>
    );
  }

  const src =
    `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}` +
    `&size=128&format=png&retina=true&fallback=404`;

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      unoptimized
      loading="lazy"
      onError={() => setFailed(true)}
      className="shrink-0 rounded-lg border border-white/10 bg-white/5 object-contain p-1"
    />
  );
}
