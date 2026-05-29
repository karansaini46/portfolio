"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#050608] text-center px-5">
        <h2 className="text-3xl font-semibold text-white">Something went wrong!</h2>
        <p className="mt-3 text-sm text-slate-400">A global application error occurred.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full border border-sky-300/40 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-white cursor-pointer"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
