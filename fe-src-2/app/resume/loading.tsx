import { Skeleton, SkeletonText } from "@/components/skeletons";

export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-28 pb-16">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-72" />
        </div>
        <Skeleton className="h-9 w-20 rounded-md" />
      </div>

      {[1, 2, 3, 4, 5].map((i) => (
        <section key={i} className="mt-8">
          <Skeleton className="h-3 w-32" />
          <div className="mt-3">
            <SkeletonText lines={i === 1 ? 4 : 3} />
          </div>
        </section>
      ))}
    </div>
  );
}