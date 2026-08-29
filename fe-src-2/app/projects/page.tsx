import type { Metadata } from "next";
import ProjectDetail from "@/components/project-detail";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — William Wibowo",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32">
      <h1 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        Sanitized architecture case studies — what each system is, how it is
        wired, and why the pieces are there.
      </p>
      <div className="mt-12 space-y-16">
        {projects.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className="border-t border-white/10 pt-10 first:border-t-0 first:pt-0"
          >
            <ProjectDetail project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
