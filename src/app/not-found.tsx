export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050608] text-center px-5">
      <h1 className="text-6xl font-semibold text-white">404</h1>
      <p className="mt-4 text-base text-slate-400">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="mt-6 rounded-full border border-sky-300/40 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-white cursor-pointer"
      >
        Return Home
      </a>
    </div>
  );
}
