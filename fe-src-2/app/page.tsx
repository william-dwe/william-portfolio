import Link from "next/link";
import TypingTerminal from "@/components/typing-terminal";
import TechMarquee from "@/components/tech-marquee";
import ProjectShowcase from "@/components/project-showcase";
import BlogPostRow from "@/components/blog-post-row";
import { blogs, profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col justify-center pt-14">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-zinc-300">
              Senior AI & Data Engineer
            </p>
            <h1 className="mt-6 text-[clamp(2.5rem,4.5vw,3.6rem)] font-medium leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
                Well Experienced Data Warehouse Craftsman
              </span>
            </h1>
            <p className="mt-6 leading-relaxed text-zinc-400">
              I design, build, and operate end-to-end data pipeline (Ingestion, Transformation, and Serving) at scale.
            </p>
            <p className="mt-3 font-mono text-xs text-zinc-500">
              Confluent Certified Data Streaming Engineer · GCP Certified Data Engineer
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="rounded-full bg-zinc-100 px-5 py-2 font-mono text-xs text-black transition-colors hover:bg-white"
              >
                About Me
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-5 py-2 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
          <div>
            <TypingTerminal />
          </div>
        </div>
        <div className="mt-10 mx-auto w-full max-w-5xl px-6">
          <TechMarquee />
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
    </>
  );
}
