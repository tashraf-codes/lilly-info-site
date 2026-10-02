import Link from "next/link";
import { Dna } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-28 text-center">
      <Dna className="h-14 w-14 text-brand/50" strokeWidth={1.25} />
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist, or may have moved.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Back to home
        </Link>
        <Link
          href="/medicines"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand hover:text-brand"
        >
          Browse medicines
        </Link>
      </div>
    </div>
  );
}
