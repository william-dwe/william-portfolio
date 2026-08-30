"use client";

import { useEffect, useState } from "react";

export type ProgressSection = { id: string; label: string; count?: number };

const ACTIVE_OFFSET = 140;

export default function SectionProgress({
  sections,
}: {
  sections: ProgressSection[];
}): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const first = document.getElementById(sections[0]?.id ?? "");
      const last = document.getElementById(sections[sections.length - 1]?.id ?? "");
      if (!first || !last) return;

      const lastRect = last.getBoundingClientRect();
      const startY = first.getBoundingClientRect().top + window.scrollY;
      const endY = lastRect.top + window.scrollY + lastRect.height - window.innerHeight;
      const span = Math.max(endY - startY, 1);
      const ratio = (window.scrollY - startY) / span;
      setPct(Math.round(Math.min(Math.max(ratio, 0), 1) * 100));

      let next = 0;
      for (let i = 0; i < sections.length; i += 1) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= ACTIVE_OFFSET) {
          next = i;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length > 0) {
        next = sections.length - 1;
      }

      setActiveIndex(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <>
      <div className="sticky top-14 z-40 -mx-6 mb-10 border-b border-white/5 bg-black/70 px-6 py-2 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="text-zinc-200">{sections[activeIndex]?.label}</span>
          <span className="text-zinc-500">{pct}% read</span>
        </div>
        <div className="mt-2 h-px w-full bg-white/10">
          <div
            className="h-px bg-white transition-[width] duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        <nav
          aria-label="Sections"
          className="mt-2 flex gap-4 overflow-x-auto pb-1 font-mono text-[11px]"
        >
          {sections.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={`whitespace-nowrap transition-colors ${
                i === activeIndex ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <aside className="hidden lg:block">
        <nav aria-label="Reading progress" className="sticky top-28">
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            Progress
          </p>
          <div className="mt-3 flex gap-4">
            <div className="relative w-px shrink-0 bg-white/10" aria-hidden>
              <div
                className="absolute inset-x-0 top-0 bg-white transition-[height] duration-150"
                style={{ height: `${pct}%` }}
              />
            </div>
            <ol className="flex-1 space-y-3">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                    className={`flex items-baseline justify-between gap-2 font-mono text-xs transition-colors ${
                      i === activeIndex
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span>{s.label}</span>
                    {s.count !== undefined && (
                      <span className="text-[10px] text-zinc-600">{s.count}</span>
                    )}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-5 font-mono text-[10px] text-zinc-500">{pct}% read</p>
        </nav>
      </aside>
    </>
  );
}
