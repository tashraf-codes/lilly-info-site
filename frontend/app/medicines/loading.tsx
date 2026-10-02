export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="h-10 w-48 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-4 w-full max-w-xl animate-pulse rounded bg-muted" />
      <div className="mt-2 h-4 w-2/3 max-w-md animate-pulse rounded bg-muted" />

      <div className="mt-8 flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 w-28 animate-pulse rounded-full bg-muted" />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-52 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    </div>
  );
}
