"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface FilterBarProps {
  categories: string[];
  active?: string;
}

export default function FilterBar({ categories, active }: FilterBarProps) {
  const options = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((label) => {
        const isActive = label === "All" ? !active : active === label;
        const href = label === "All" ? "/medicines" : `/medicines?category=${encodeURIComponent(label)}`;
        return (
          <Link key={label} href={href} className="relative rounded-full px-4 py-1.5 text-sm font-medium">
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-brand"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors ${
                isActive ? "text-white" : "text-neutral-700 hover:text-brand"
              }`}
            >
              {label}
            </span>
            {!isActive && (
              <span className="absolute inset-0 rounded-full border border-border transition-colors hover:border-brand" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
