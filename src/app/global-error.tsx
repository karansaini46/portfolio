"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background text-center px-5 selection:bg-accent-primary/25">
        <h2 className="text-3xl font-bold font-sans text-text-primary tracking-tight">System Fault Detected</h2>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-text-muted">
          SYS_STATUS: EXCEPTION_UNHANDLED
        </p>
        <p className="mt-3 text-sm text-text-secondary max-w-sm">
          A critical execution error occurred in the system core.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded bg-accent-primary px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white hover:bg-accent-primary/95 transition-colors cursor-pointer"
        >
          Reinitialize Core
        </button>
      </body>
    </html>
  );
}
