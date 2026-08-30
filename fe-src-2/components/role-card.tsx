"use client";

import { useState } from "react";
import type { Role } from "@/lib/data";
import BrandLogo from "@/components/brand-logo";
import { techIcon } from "@/lib/tech-icons";

type RoleCardProps = {
  role: Role;
  badge?: string;
};

export default function RoleCard({ role, badge }: RoleCardProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = role.points.length > 3;
  const visible = expanded ? role.points : role.points.slice(0, 3);

  return (
    <div className="flex gap-4">
      <div className="mt-0.5">
        <BrandLogo domain={role.logoDomain} name={role.org} size={44} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-zinc-500">{role.period}</p>
          {badge && (
            <span className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mt-1 font-medium text-white">
          {role.orgUrl ? (
            <a
              href={role.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-300"
            >
              {role.org}
            </a>
          ) : (
            role.org
          )}
        </h3>
        <p className="text-zinc-300">{role.title}</p>
        {role.tech && role.tech.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {role.tech.map((item) => {
              const Icon = techIcon(item);
              return (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5 font-mono text-xs text-zinc-400"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        {role.points.length > 0 && (
          <>
            <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400">
              {visible.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {hasMore && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="mt-2 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              >
                {expanded ? "Show less" : `Show ${role.points.length - 3} more`}
              </button>
            )}
          </>
        )}
        {role.link && (
          <a
            href={role.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-zinc-400 transition-colors hover:text-white"
          >
            {role.link.label} <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
