import type { CSSProperties } from "react";

type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

const baseClass =
  "block rounded-md bg-zinc-800/60 bg-[linear-gradient(90deg,rgba(63,63,70,0.45)_0%,rgba(113,113,122,0.55)_50%,rgba(63,63,70,0.45)_100%)] bg-[length:200%_100%] animate-shimmer";

export function Skeleton({ className = "", style }: SkeletonProps) {
  return <span aria-hidden className={`${baseClass} ${className}`} style={style} />;
}

type SkeletonTextProps = {
  lines?: number;
  className?: string;
};

export function SkeletonText({ lines = 3, className = "" }: SkeletonTextProps) {
  const widths = ["w-full", "w-11/12", "w-10/12", "w-9/12", "w-8/12"];
  return (
    <div aria-hidden className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-3 ${widths[i % widths.length]}`}
        />
      ))}
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div aria-hidden className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
      <div className="space-y-5">
        <Skeleton className="h-6 w-44 rounded-full" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-12 w-2/3" />
        <SkeletonText lines={3} />
        <Skeleton className="h-3 w-2/3" />
        <div className="flex gap-3 pt-2">
          <Skeleton className="h-9 w-28 rounded-full" />
          <Skeleton className="h-9 w-28 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-56 w-full rounded-xl" />
    </div>
  );
}

export function TerminalSkeleton() {
  return (
    <div aria-hidden className="overflow-hidden rounded-xl border border-white/10 bg-panel">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="h-3 w-3 rounded-full" />
        <Skeleton className="mx-auto h-3 w-32" />
      </div>
      <div className="space-y-2 p-5">
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-3 w-3/5" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
  );
}

export function MarqueeSkeleton() {
  return (
    <div aria-hidden className="flex w-full items-center gap-6 py-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-3 w-20" />
      ))}
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div aria-hidden className="space-y-6">
      <div className="flex gap-6 border-b border-white/10 pb-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-20" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <Skeleton className="h-7 w-2/3" />
          <SkeletonText lines={4} />
          <div className="flex gap-2 pt-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-14 rounded-full" />
          </div>
        </div>
        <Skeleton className="aspect-[4/3] w-full rounded-xl" />
      </div>
    </div>
  );
}

export function BlogRowSkeleton() {
  return (
    <div aria-hidden className="flex items-start justify-between gap-6 border-b border-white/10 py-6">
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
}

export function SectionHeaderSkeleton() {
  return (
    <div aria-hidden className="flex items-baseline justify-between gap-4">
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-4 w-28" />
    </div>
  );
}