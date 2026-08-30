import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div
      className={`grid items-start gap-8 ${
        project.imageUrl ? "md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      <div>
        <p className="font-mono text-sm text-zinc-500">{project.num}</p>
        <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 leading-relaxed text-zinc-400">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          {project.architecture}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-xs text-zinc-400"
            >
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 font-mono text-sm text-zinc-300 transition-colors hover:text-white"
        >
          View repository <span aria-hidden>↗</span>
        </a>
      </div>

      {project.imageUrl && (
        <div className="rounded-xl border border-white/10 bg-panel p-6">
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={640}
            height={480}
            className="h-auto w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
