"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Company } from "@/lib/types";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroContent({ company }: { company: Company }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={container} className="relative">
      <motion.p variants={item} className="text-sm font-semibold uppercase tracking-wide text-brand">
        {company.founded} &middot; {company.headquarters}
      </motion.p>
      <motion.h1 variants={item} className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        {company.legalName}
      </motion.h1>
      <motion.p variants={item} className="mt-2 text-lg italic text-neutral-500">
        &ldquo;{company.tagline}&rdquo;
      </motion.p>
      <motion.p variants={item} className="mt-6 max-w-2xl text-neutral-700">
        {company.summary}
      </motion.p>
      <motion.div variants={item} className="mt-8 flex gap-4">
        <Link href="/medicines" className="group">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand/20 transition-colors group-hover:bg-brand-dark"
          >
            Browse Medicines
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.span>
        </Link>
        <Link href="/about">
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors hover:border-brand hover:text-brand"
          >
            Company History
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
