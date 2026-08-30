

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="no-print mt-24 border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6 text-center font-mono text-sm text-zinc-500">
        <p>© {year} William Wibowo</p>

      </div>
    </footer>
  );
}
