import type { Metadata } from "next";
import { TbCalendarStats, TbCertificate, TbDatabase, TbPlugConnected } from "@/lib/icons-local";
import type { Role } from "@/lib/data";
import {
  bio,
  education,
  experience,
  internships,
  stats,
  voluntary,
} from "@/lib/data";
import BrandLogo from "@/components/brand-logo";
import RoleCard from "@/components/role-card";
import SectionProgress, {
  type ProgressSection,
} from "@/components/section-progress";

type RoleEntry = { role: Role; badge?: string };

const orgLogos = [
  { name: "Gojek", domain: "gojek.com" },
  { name: "Traveloka", domain: "traveloka.com" },
  { name: "Shopee", domain: "shopee.com" },
  { name: "OVO", domain: "ovo.id" },
  { name: "Paragon", domain: "paragon-innovation.com" },
  { name: "Institut Teknologi Bandung", domain: "itb.ac.id" },
  { name: "Google Cloud", domain: "cloud.google.com" },
  { name: "Confluent", domain: "confluent.io" },
];
const loop = [...orgLogos, ...orgLogos];

const statIcons = [TbCalendarStats, TbDatabase, TbPlugConnected, TbCertificate];

const experienceEntries: RoleEntry[] = [
  ...experience.map((role) => ({ role })),
  ...internships.map((role) => ({ role, badge: "Internship" })),
];

const sections: ProgressSection[] = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience", count: experienceEntries.length },
  { id: "education", label: "Education & Certification", count: education.length },
  { id: "volunteering", label: "Volunteering", count: voluntary.length },
];

function RoleSection({
  id,
  label,
  entries,
}: {
  id: string;
  label: string;
  entries: RoleEntry[];
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-28">
      <h2 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
        {label}
      </h2>
      <ol className="mt-6 space-y-10">
        {entries.map(({ role, badge }) => (
          <li key={`${role.org}-${role.title}`}>
            <RoleCard role={role} badge={badge} />
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
    <div className="mx-auto max-w-6xl px-6 pt-28 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-12">
      <SectionProgress sections={sections} />
      <div id="about-content" className="pb-40">
        <h1 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
          About
        </h1>

        <section id="overview" className="scroll-mt-28">
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-zinc-300">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <div className="mt-20">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Trusted by
          </p>
          <div aria-hidden className="relative mt-4 w-full max-w-3xl py-2">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <ul className="animate-marquee flex w-max items-center">
                {loop.map(({ name, domain }, i) => (
                  <li
                    key={`${domain}-${i}`}
                    className="flex shrink-0 items-center px-3"
                    title={name}
                  >
                    <BrandLogo domain={domain} name={name} size={44} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <dl className="mt-20 mb-28 grid w-full max-w-3xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          {stats.map(({ value, label }, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={label}
                className="flex flex-col px-3 py-1 text-center first:pl-0"
              >
                <dt className="order-last mt-0.5 text-xs text-zinc-500">{label}</dt>
                {Icon ? (
                  <Icon
                    className="mx-auto mb-0.5 h-6 w-6 text-zinc-600"
                    aria-hidden
                  />
                ) : null}
                <dd className="text-2xl font-medium tracking-tight text-white">
                  {value}
                </dd>
              </div>
            );
          })}
        </dl>

        <RoleSection
          id="experience"
          label="Experience"
          entries={experienceEntries}
        />
        <RoleSection
          id="education"
          label="Education & Certification"
          entries={education.map((role) => ({ role }))}
        />
        <RoleSection
          id="volunteering"
          label="Volunteering"
          entries={voluntary.map((role) => ({ role }))}
        />
      </div>
    </div>
  );
}
