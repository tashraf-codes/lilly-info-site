import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & History" },
  { href: "/medicines", label: "Medicines" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-brand">Lilly</span>
          <span className="hidden text-sm text-neutral-500 sm:inline">
            Medicine &amp; Company Information
          </span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-700 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
