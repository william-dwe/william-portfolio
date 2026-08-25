import type { Metadata } from "next";
import BlogPostRow from "@/components/blog-post-row";
import { blogs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — William Wibowo",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32">
      <h1 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
        Writing
      </h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        Technical write-ups on data engineering, mostly BigQuery and SQL.
      </p>
      <div className="mt-10 border-y border-white/10">
        {blogs.map((post) => (
          <BlogPostRow key={post.url} post={post} />
        ))}
      </div>
      <a
        href="https://williamwibowo.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-1 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
      >
        More on Medium <span aria-hidden>↗</span>
      </a>
    </section>
  );
}
