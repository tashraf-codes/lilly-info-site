export default function Loading() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-[1.3fr_0.7fr]">
      <div>
        <div className="h-4 w-24 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-10 w-64 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-40 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-4 w-full animate-pulse rounded bg-muted" />
        <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-muted" />
      </div>
      <div className="mx-auto h-48 w-48 animate-pulse rounded-full bg-muted" />
    </div>
  );
}
