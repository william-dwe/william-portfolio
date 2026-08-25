import type { Metadata } from "next";
import type { Role } from "@/lib/data";
import { bio, education, experience, internships, stats, voluntary } from "@/lib/data";

function RoleSection({ label, roles }: { label: string; roles: Role[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
        {label}
      </h2>
      <ol className="mt-6 space-y-10">
        {roles.map((role) => (
          <li key={`${role.org}-${role.title}`}>
            <p className="font-mono text-xs text-zinc-500">{role.period}</p>
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
            {role.points.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-400">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
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
          </li>
        ))}
      </ol>
    </section>
  );
}

export const metadata: Metadata = {
  title: "About — William Wibowo",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32">
      <h1 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
        About
      </h1>

      <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-zinc-300">
        {bio.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-16 grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col px-4 py-2 text-center first:pl-0">
            <dt className="order-last mt-1 text-xs text-zinc-500">{label}</dt>
            <dd className="text-3xl font-medium tracking-tight text-white">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <RoleSection label="Experience" roles={experience} />
      <RoleSection label="Education & Certification" roles={education} />
      <RoleSection label="Internships" roles={internships} />
      <RoleSection label="Volunteering" roles={voluntary} />
    </section>
  );
}
