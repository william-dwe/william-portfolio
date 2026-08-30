import {
  BlogRowSkeleton,
  HeroSkeleton,
  MarqueeSkeleton,
  ProjectSkeleton,
  SectionHeaderSkeleton,
} from "@/components/skeletons";

export default function Loading() {
  return (
    <>
      <section className="flex min-h-[100svh] flex-col justify-center pt-14">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <HeroSkeleton />
        </div>
        <div className="mt-10 mx-auto w-full max-w-5xl px-6">
          <MarqueeSkeleton />
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeaderSkeleton />
        <div className="mt-10">
          <ProjectSkeleton />
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-6">
        <SectionHeaderSkeleton />
        <div className="mt-8 border-t border-white/10">
          <BlogRowSkeleton />
          <BlogRowSkeleton />
          <BlogRowSkeleton />
        </div>
      </section>
    </>
  );
}