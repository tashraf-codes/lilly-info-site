"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Menu, X } from "lucide-react";
import { openCommandPalette } from "@/components/CommandPalette";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About & History" },
  { href: "/medicines", label: "Medicines" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header
      className={`sticky top-0 z-20 border-b bg-background/80 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-brand">Lilly</span>
          <span className="hidden text-sm text-neutral-500 sm:inline">
            Medicine &amp; Company Information
          </span>
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <nav className="flex gap-1 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-neutral-700 transition-colors hover:text-brand"
              >
                <span className={isActive(link.href) ? "text-brand" : undefined}>{link.label}</span>
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Search medicines"
            className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-neutral-500 transition-colors hover:border-brand hover:text-brand"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Search</span>
            <kbd className="hidden rounded border border-border px-1 text-xs text-neutral-400 sm:inline">
              &#8984;K
            </kbd>
          </button>
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            onClick={openCommandPalette}
            aria-label="Search medicines"
            className="rounded-full p-2 text-neutral-600 transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-neutral-600 transition-colors hover:text-brand"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border bg-background sm:hidden"
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-2 py-3 text-base font-medium transition-colors ${
                    isActive(link.href) ? "text-brand" : "text-neutral-700 hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
