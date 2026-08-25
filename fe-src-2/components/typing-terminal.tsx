"use client";

import { TypeAnimation } from "react-type-animation";

const sequence: (string | number)[] = [
  "$ whoami\n> william wibowo — data & platform engineer",
  2600,
  "$ cat pedigree.txt\n> data engineer @ traveloka\n> ex-shopee qa automation\n> gcp professional data engineer",
  2600,
  "$ ls focus/\n> warehousing  ingestion  analytics  full-stack",
  2600,
];

export default function TypingTerminal() {
  return (
    <div className="rounded-xl border border-white/10 bg-panel">
      <div className="relative flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="absolute left-1/2 -translate-x-1/2 select-none font-mono text-xs text-zinc-500">
          william@portfolio: ~
        </span>
      </div>
      <pre className="min-h-[7.5rem] whitespace-pre-wrap p-5 font-mono text-sm leading-relaxed text-zinc-300">
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={45}
          deletionSpeed={65}
          repeat={Infinity}
          cursor={true}
          aria-label="Terminal intro typing animation"
        />
      </pre>
    </div>
  );
}
