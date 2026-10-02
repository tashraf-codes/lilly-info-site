"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Search, CornerDownLeft } from "lucide-react";
import { getMedicines } from "@/lib/api";
import { getTherapeuticAreaIcon } from "@/lib/icons";
import type { Medicine } from "@/lib/types";

const OPEN_EVENT = "open-command-palette";

export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CommandPalette() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function openPalette() {
    setQuery("");
    setActiveIndex(0);
    setIsOpen(true);
  }

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((open) => {
          if (open) return false;
          setQuery("");
          setActiveIndex(0);
          return true;
        });
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKeydown);
    window.addEventListener(OPEN_EVENT, openPalette);
    return () => {
      window.removeEventListener("keydown", onKeydown);
      window.removeEventListener(OPEN_EVENT, openPalette);
    };
  }, []);

  useEffect(() => {
    if (isOpen && medicines.length === 0) {
      getMedicines().then(setMedicines).catch(() => setMedicines([]));
    }
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, medicines.length]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return medicines.slice(0, 8);
    return medicines
      .filter((m) =>
        [m.name, m.genericName, m.category, m.drugClass].some((field) =>
          field.toLowerCase().includes(q)
        )
      )
      .slice(0, 8);
  }, [query, medicines]);

  function go(slug: string) {
    setIsOpen(false);
    router.push(`/medicines/${slug}`);
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      go(results[activeIndex].slug);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search medicines"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-neutral-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search medicines by name, ingredient, or category..."
                className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400"
              />
              <kbd className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 text-xs text-neutral-400 sm:block">
                esc
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-neutral-500">
                  No medicines match &ldquo;{query}&rdquo;.
                </p>
              )}
              {results.map((m, i) => {
                const Icon = getTherapeuticAreaIcon(m.category);
                return (
                  <button
                    key={m.slug}
                    type="button"
                    onClick={() => go(m.slug)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      i === activeIndex ? "bg-muted" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand" strokeWidth={1.75} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-neutral-900">
                        {m.name}
                        <span className="ml-2 font-normal text-neutral-400">{m.genericName}</span>
                      </span>
                    </span>
                    <span className="shrink-0 text-xs uppercase tracking-wide text-neutral-400">
                      {m.category}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-border bg-muted/60 px-4 py-2 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <CornerDownLeft className="h-3 w-3" /> select
              </span>
              <span>&uarr;&darr; navigate</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
