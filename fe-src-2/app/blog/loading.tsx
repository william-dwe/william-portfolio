import { BlogRowSkeleton } from "@/components/skeletons";

export default function Loading() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32">
      <div className="h-8 w-32 animate-pulse rounded-md bg-zinc-800/60" />
      <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded-md bg-zinc-800/60" />
      <div className="mt-10 border-y border-white/10">
        <BlogRowSkeleton />
        <BlogRowSkeleton />
        <BlogRowSkeleton />
        <BlogRowSkeleton />
      </div>
    </section>
  );
}