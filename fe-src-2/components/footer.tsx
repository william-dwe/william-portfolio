import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 font-mono text-sm text-zinc-500">
        <p>© {year} William Wibowo</p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-zinc-300"
          >
            email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            github <span aria-hidden>↗</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            linkedin <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
