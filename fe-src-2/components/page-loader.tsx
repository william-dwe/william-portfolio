"use client";

import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 400;

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    const timer = window.setTimeout(() => setHidden(true), wait);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="page-loader fixed inset-0 z-[200] flex items-center justify-center bg-page"
    >
      <div className="flex flex-col items-center gap-6">
        <div aria-hidden className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border border-white/10" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-white/80 border-r-white/30" />
        </div>
        <div aria-hidden className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-500" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Loading
        </p>
      </div>
    </div>
  );
}