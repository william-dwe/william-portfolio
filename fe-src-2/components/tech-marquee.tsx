import type { IconType } from "@/lib/icons-local";
import {
  SiDocker,
  SiApacheairflow,
  SiGo,
  SiGooglecloud,
  SiGooglebigquery,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTypescript,
} from "@/lib/icons-local";

const techs: Array<{ name: string; Icon: IconType }> = [
  { name: "BigQuery", Icon: SiGooglebigquery },
  { name: "Airflow", Icon: SiApacheairflow },
  { name: "GCP", Icon: SiGooglecloud },
  { name: "Go", Icon: SiGo },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Docker", Icon: SiDocker },
];

export default function TechMarquee() {
  const loop = [...techs, ...techs];

  return (
    <div aria-hidden className="relative w-full py-4">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <ul className="animate-marquee flex w-max items-center font-mono text-xs uppercase tracking-widest text-zinc-500">
            {loop.map(({ name, Icon }, i) => (
              <li key={`${name}-${i}`} className="flex shrink-0 items-center">
                <span className="flex items-center gap-2 px-5">
                  <Icon className="h-4 w-4" />
                  {name}
                </span>
                <span className="text-zinc-800">·</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}
