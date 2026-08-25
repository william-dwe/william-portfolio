"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the mailto link still works.
    }
  };

  return (
    <p className="font-mono text-sm">
      <span className="text-zinc-500">$ mail </span>
      <a
        href={`mailto:${profile.email}`}
        className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-zinc-100"
      >
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className={`ml-4 rounded-md border px-3 py-1 font-mono text-xs transition-colors ${
          copied
            ? "border-white/40 text-white"
            : "border-white/15 text-zinc-300 hover:border-white/25 hover:text-white"
        }`}
      >
        {copied ? "✓ copied" : "copy"}
      </button>
    </p>
  );
}
