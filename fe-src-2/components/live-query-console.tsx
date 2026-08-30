"use client";

import { useEffect, useRef, useState } from "react";

type Line = { id: number; node: React.ReactNode };

const SPINNER_FRAMES = ["⠋", "⠙", "⠸", "⠴", "⠦", "⠇"];

const WHOAMI_CMD = "$ whoami";
const WHOAMI_OUT = "william wibowo — data & platform engineer @ traveloka";
const QUERY_CMD = "$ bq query --use_legacy_sql=false";
const SQL_LINES = [
  "SELECT platform, COUNT(*) AS jobs",
  "FROM `ops.ingestion_jobs` WHERE DATE(ds) = CURRENT_DATE();",
];
const TABLE_HEADER = "  platform        jobs";
const TABLE_ROWS: Array<[string, string]> = [
  ["flight", "1,204"],
  ["train", "486"],
  ["hotel", "359"],
];
const RESULT_META = "  ✓ 3 rows · 1.21 s elapsed · slot_ms: 4,118";

export default function LiveQueryConsole() {
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [spin, setSpin] = useState(false);
  const [frame, setFrame] = useState(0);
  const nextId = useRef(0);

  useEffect(() => {
    // Strict Mode mounts effects twice in dev; every state mutation below is
    // guarded so a cancelled instance can never leave artifacts behind.
    let cancelled = false;

    const sleep = (ms: number) => {
      const { promise, resolve } = Promise.withResolvers<void>();
      setTimeout(resolve, ms);
      return promise;
    };
    const push = (node: React.ReactNode) => {
      if (cancelled) return;
      setLines((prev) => [...prev, { id: nextId.current++, node }]);
    };
    const showTyping = (text: string | null) => {
      if (cancelled) return;
      setTyping(text);
    };
    const showSpin = (value: boolean) => {
      if (cancelled) return;
      setSpin(value);
    };

    const typeAndPush = async (cmd: string, msPerChar: number) => {
      for (let i = 1; i <= cmd.length; i++) {
        if (cancelled) return;
        showTyping(cmd.slice(0, i));
        await sleep(msPerChar);
      }
      if (cancelled) return;
      showTyping(null);
      push(
        <span>
          <span className="text-zinc-500">{cmd.slice(0, 2)}</span>
          <span className="text-zinc-100">{cmd.slice(2)}</span>
        </span>,
      );
    };

    const run = async () => {
      while (!cancelled) {
        setLines([]);
        showSpin(false);

        await typeAndPush(WHOAMI_CMD, 42);
        await sleep(280);
        push(<span className="text-zinc-400">{"  " + WHOAMI_OUT}</span>);
        await sleep(1200);

        await typeAndPush(QUERY_CMD, 24);
        await sleep(220);
        for (const sql of SQL_LINES) {
          push(<span className="text-zinc-300">{"  " + sql}</span>);
          await sleep(140);
        }
        await sleep(420);

        showSpin(true);
        const spinUntil = Date.now() + 1150;
        while (!cancelled && Date.now() < spinUntil) {
          setFrame((f) => (f + 1) % SPINNER_FRAMES.length);
          await sleep(85);
        }
        if (cancelled) return;
        showSpin(false);

        push(<span className="text-zinc-500">{TABLE_HEADER}</span>);
        for (const [platform, jobs] of TABLE_ROWS) {
          await sleep(150);
          if (cancelled) return;
          push(
            <span>
              <span className="text-zinc-200">
                {("  " + platform).padEnd(18)}
              </span>
              <span className="text-zinc-400">{jobs}</span>
            </span>,
          );
        }
        await sleep(240);
        push(<span className="text-zinc-500">{RESULT_META}</span>);
        await sleep(340);
        push(
          <span>
            <span className="text-zinc-500">$ </span>
            <span className="caret-blink ml-px inline-block h-3.5 w-[7px] translate-y-px bg-zinc-300" />
          </span>,
        );

        await sleep(3000);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-panel shadow-[0_0_90px_-20px_rgba(255,255,255,0.18)]">
      <div className="relative flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-700" />
        <span className="absolute left-1/2 -translate-x-1/2 select-none font-mono text-xs text-zinc-500">
          william@warehouse: ~
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-zinc-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-300" />
          </span>
          live
        </span>
      </div>

      <pre className="min-h-[18rem] whitespace-pre-wrap p-5 font-mono text-sm leading-relaxed text-zinc-300">
        {lines.map((line) => (
          <span key={line.id} className="block animate-row-in">
            {line.node}
          </span>
        ))}
        {typing !== null && (
          <span className="block">
            <span className="text-zinc-100">{typing}</span>
            <span className="caret-blink ml-px inline-block h-3.5 w-[7px] translate-y-px bg-zinc-300" />
          </span>
        )}
        {spin && (
          <span className="block text-zinc-400">
            {"  "}
            {SPINNER_FRAMES[frame]} Running…
          </span>
        )}
      </pre>
    </div>
  );
}
