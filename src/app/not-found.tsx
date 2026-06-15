import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-5">
      <h1 className="text-6xl font-bold font-sans text-text-primary tracking-tight">404</h1>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-text-muted">
        SYS_STATUS: ROUTE_NOT_FOUND
      </p>
      <p className="mt-4 text-sm text-text-secondary max-w-sm">
        The requested address does not map to any active system nodes in this archive.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-accent-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/95 transition-colors cursor-pointer"
      >
        Return Home
      </Link>
    </div>
  );
}
