"use client";

import ProjectDetail from "@/components/project-detail";
import { useState } from "react";
import { projects } from "@/lib/data";

export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Projects"
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10"
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
        aria-labelledby={`project-tab-${project.slug}`}
        className="mt-8"
      >
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}
