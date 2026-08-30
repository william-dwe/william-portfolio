import { MarqueeSkeleton, Skeleton, SkeletonText } from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <div className="space-y-4">
        <Skeleton className="h-4 w-44 rounded-full" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-12 w-2/3" />
        <SkeletonText lines={3} className="max-w-2xl" />
      </div>

      <div className="mt-10">
        <MarqueeSkeleton />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-xl" />
        ))}
      </div>

      {[1, 2, 3].map((i) => (
        <section key={i} className="mt-12 space-y-4">
          <Skeleton className="h-3 w-32" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Skeleton className="h-40 w-full rounded-xl" />
            <Skeleton className="h-40 w-full rounded-xl" />
          </div>
        </section>
      ))}
    </div>
  );
}