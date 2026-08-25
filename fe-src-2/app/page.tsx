import Link from "next/link";
import TypingTerminal from "@/components/typing-terminal";
import CopyEmail from "@/components/copy-email";
import ProjectShowcase from "@/components/project-showcase";
import BlogPostRow from "@/components/blog-post-row";
import { blogs, profile } from "@/lib/data";

const services = [
  {
    title: "Data Platform & Pipelines",
    description:
      "Ingestion, orchestration, and warehouse modeling that survives scale.",
  },
  {
    title: "Analytics Engineering & BI",
    description:
      "Semantic layers, data quality gates, and dashboards people actually trust.",
  },
  {
    title: "Full-stack Prototyping",
    description: "Go + React builds from schema to deployed product.",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col justify-center pt-14">
        <div className="mx-auto w-full max-w-5xl px-6">
          <p className="inline-flex rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-300">
            Traveloka · Data Engineer
          </p>
          <h1 className="mt-6 text-[clamp(2.75rem,6vw,4.4rem)] font-medium leading-[1.1] tracking-tight">
            <span className="text-zinc-400">
              A data engineer
              <br />
              with the
              <br />
            </span>
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              warehouse wired in.
            </span>
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-zinc-400">
            I design, build, and operate data platforms end to end — ingestion,
            warehousing, and analytics — tuned against real production
            workloads.
          </p>
          <p className="mt-3 font-mono text-xs text-zinc-500">
            Ex-Shopee QA Automation · GCP Certified Data Engineer
          </p>
          <div className="mt-10 max-w-xl">
            <TypingTerminal />
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto mt-24 max-w-5xl px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Projects
          </h2>
          <Link
            href="/projects"
            className="shrink-0 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-10">
          <ProjectShowcase />
        </div>
      </section>

      <section id="writing" className="mx-auto mt-24 max-w-5xl px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Writing
          </h2>
          <Link
            href="/blog"
            className="shrink-0 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Everything →
          </Link>
        </div>
        <div className="mt-8 border-t border-white/10">
          {blogs.map((post) => (
            <BlogPostRow key={post.url} post={post} />
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
          What I can help with
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-panel p-6">
          <CopyEmail />
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
