import type { Metadata } from "next";
import PrintButton from "@/components/print-button";
import {
  bio,
  education,
  experience,
  internships,
  profile,
  skills,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — William Wibowo",
};

export default function ResumePage() {
  return (
    <div className="print-page mx-auto max-w-3xl px-6 pt-28 pb-16">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-1 text-zinc-300">{profile.role}</p>
          <p className="mt-2 font-mono text-xs text-zinc-400">
            {profile.email} · {profile.linkedin.replace("https://www.", "")} ·{" "}
            {profile.github.replace("https://", "")}
          </p>
        </div>
        <PrintButton />
      </header>

      <section className="mt-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Summary
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">{bio[0]}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Experience
        </h2>
        <ol className="mt-3 space-y-5">
          {experience.map((role) => (
            <li key={`${role.org}-${role.title}`}>
              <p className="text-sm font-medium text-white">
                {role.org} — {role.title}
              </p>
              <p className="font-mono text-xs text-zinc-500">{role.period}</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-zinc-400">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Education & Certification
        </h2>
        <ol className="mt-3 space-y-2">
          {education.map((item) => (
            <li key={item.org}>
              <p className="text-sm font-medium text-white">
                {item.org} — {item.title}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-500 underline decoration-zinc-700 underline-offset-2"
                >
                  {item.link.url}
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Internships
        </h2>
        <ol className="mt-3 space-y-3">
          {internships.map((role) => (
            <li key={`${role.org}-${role.title}`}>
              <p className="text-sm font-medium text-white">
                {role.org} — {role.title}
              </p>
              <p className="font-mono text-xs text-zinc-500">{role.period}</p>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-zinc-400">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Skills
        </h2>
        <p className="mt-3 font-mono text-sm text-zinc-300">
          {skills.join(" · ")}
        </p>
      </section>
    </div>
  );
}
