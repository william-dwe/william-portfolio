"use client";

import { useEffect, useState } from "react";

type OrbConfig = {
  className: string;
  innerClassName: string;
  factor: number;
  gradient: string;
  xShape: "arc" | "square"; // arc = 4A·t·(1−t), square = A·t²
  amplitude: number; // px, peak displacement; sign = direction
};

const xPx = (orb: OrbConfig, scrollY: number, maxScroll: number): number => {
  const t = Math.min(scrollY / maxScroll, 1);
  return orb.xShape === "arc"
    ? 4 * orb.amplitude * t * (1 - t)
    : orb.amplitude * t * t;
};

const ORBS: OrbConfig[] = [
  {
    className: "left-[-12%] top-[-18%] h-[55vw] w-[55vw]",
    innerClassName: "animate-orb-drift-1 blur-[110px]",
    factor: 0.18,
    gradient:
      "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 45%, transparent 70%)",
    xShape: "arc",
    amplitude: 240,
  },
  {
    className: "right-[-15%] top-[25%] h-[40vw] w-[40vw]",
    innerClassName: "animate-orb-drift-2 blur-[130px]",
    factor: -0.12,
    gradient:
      "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)",
    xShape: "square",
    amplitude: -240,
  },
  {
    className: "left-[20%] bottom-[-25%] h-[32vw] w-[32vw]",
    innerClassName: "animate-orb-drift-3 blur-[100px]",
    factor: 0.3,
    gradient:
      "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)",
    xShape: "arc",
    amplitude: -170,
  },
  {
    className: "right[6%] top-[-14%] h-[38vw] w-[38vw]",
    innerClassName: "animate-orb-drift-4 blur-[120px]",
    factor: 0.45,
    gradient:
      "radial-gradient(circle, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)",
    xShape: "square",
    amplitude: 200,
  },
];

export default function AmbientOrbs(): JSX.Element {
  const [scroll, setScroll] = useState({ y: 0, max: 1, boost: 1 });

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    let idle: ReturnType<typeof setTimeout> | undefined;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const velocity = Math.abs(y - lastY);
      lastY = y;
      setScroll({
        y,
        max: Math.max(document.body.scrollHeight - window.innerHeight, 1),
        boost: Math.min(1 + velocity / 60, 1.8),
      });
      clearTimeout(idle);
      idle = setTimeout(() => {
        setScroll((prev) => ({ ...prev, boost: 1 }));
      }, 200);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="ambient-orbs no-print pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
    >
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.className}`}
          style={{
            transform: `translate3d(${xPx(orb, scroll.y, scroll.max)}px, ${scroll.y * orb.factor}px, 0)`,
            filter: `brightness(${scroll.boost})`,
            transition: "filter 200ms ease-out, transform 300ms ease-out",
          }}
        >
          <div
            className={`h-full w-full rounded-full ${orb.innerClassName}`}
            style={{ background: orb.gradient }}
          />
        </div>
      ))}
    </div>
  );
}
