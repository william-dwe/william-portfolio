import type { BlogPost } from "@/lib/data";

export default function BlogPostRow({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-6 border-b border-white/10 py-6"
    >
      <div>
        <p className="font-mono text-xs text-zinc-500">{post.date}</p>
        <h3 className="mt-1 text-lg font-medium text-zinc-200 transition-colors group-hover:text-white">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {post.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2 text-right">
        <ul className="space-y-1">
          {post.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-zinc-500">
              {tag}
            </li>
          ))}
        </ul>
        <span
          aria-hidden
          className="text-zinc-500 transition-colors group-hover:text-zinc-300"
        >
          ↗
        </span>
      </div>
    </a>
  );
}
