"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
    >
      Print / save as PDF
    </button>
  );
}
