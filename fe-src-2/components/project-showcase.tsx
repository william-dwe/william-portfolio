"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ProjectDetail from "@/components/project-detail";
import { projects } from "@/lib/data";

export default function ProjectShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [trackHeight, setTrackHeight] = useState<number | undefined>(undefined);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    track.scrollTo({
      left: clamped * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  // Track the active slide from scroll position for the mobile carousel.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const width = track.clientWidth;
        if (width === 0) return;
        const next = Math.max(
          0,
          Math.min(projects.length - 1, Math.round(track.scrollLeft / width)),
        );
        setActive(next);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Size the mobile carousel to the tallest project so the arrow row and the
  // page below never shift between slides, and the track never scrolls
  // vertically.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const inners = Array.from(track.children)
      .map((slide) => slide.firstElementChild)
      .filter((el): el is HTMLElement => el instanceof HTMLElement);
    if (inners.length === 0) return;

    const measure = () => {
      let tallest = 0;
      for (const inner of inners) {
        const height = inner.getBoundingClientRect().height;
        if (height > tallest) tallest = height;
      }
      if (tallest > 0) setTrackHeight(Math.ceil(tallest));
    };
    measure();

    const observer = new ResizeObserver(measure);
    for (const inner of inners) observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  const atStart = active === 0;
  const atEnd = active === projects.length - 1;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Projects"
        className="hidden flex-wrap gap-x-6 gap-y-2 border-b border-white/10 sm:flex"
      >
        {projects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            role="tab"
            id={`project-tab-${p.slug}`}
            aria-selected={i === active}
            aria-controls="project-panel"
            onClick={() => setActive(i)}
            className={`-mb-px pb-3 pt-1 font-mono text-sm uppercase tracking-wider transition-colors ${
              i === active
                ? "border-b border-white text-white"
                : "border-b border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <span className="mr-2 text-zinc-500">{p.num}</span>
            {p.slug}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="project-panel"
        aria-labelledby={`project-tab-${projects[active].slug}`}
        className="mt-8 hidden sm:block"
      >
        <ProjectDetail project={projects[active]} />
      </div>

      <div className="mb-5 flex items-center justify-between sm:hidden">
        <button
          type="button"
          onClick={() => scrollToIndex(active - 1)}
          disabled={atStart}
          aria-label="Previous project"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-white/25 hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div aria-hidden className="flex items-center gap-2">
          {projects.map((p, i) => (
            <span
              key={p.slug}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(active + 1)}
          disabled={atEnd}
          aria-label="Next project"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-colors hover:border-white/25 hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex items-start snap-x snap-mandatory overflow-x-auto overflow-y-hidden sm:hidden"
        style={{ height: trackHeight }}
      >
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="w-full shrink-0 snap-center"
            aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
          >
            <ProjectDetail project={p} />
          </div>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        Project {active + 1} of {projects.length}: {projects[active].title}
      </p>
    </div>
  );
}