"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl flex-wrap items-center justify-between gap-y-1 px-6">
        <Link
          href="/"
          className="font-mono text-sm text-zinc-100 transition-colors hover:text-white"
        >
          william<span className="text-zinc-500">.wibowo</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 font-mono text-sm">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "text-white"
                    : "text-zinc-400 transition-colors hover:text-white"
                }
              >
                {label}
              </Link>
            );
          })}
          <span className="hidden items-center gap-x-6 text-zinc-400 sm:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
          </span>
        </div>
      </nav>
    </header>
  );
}
