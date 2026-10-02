"use client";

import dynamic from "next/dynamic";
import { Dna } from "lucide-react";
import { useReducedMotion } from "motion/react";
import ErrorBoundary from "@/components/ErrorBoundary";

const DnaHelix = dynamic(() => import("@/components/three/DnaHelix"), {
  ssr: false,
  loading: () => <ScenePlaceholder spin />,
});

function ScenePlaceholder({ spin = false }: { spin?: boolean }) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Dna
        className={`h-20 w-20 text-brand/40 ${spin ? "animate-pulse" : ""}`}
        strokeWidth={1.25}
      />
    </div>
  );
}

export default function HeroScene() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-72 w-full sm:h-80 md:h-full md:min-h-[420px]">
      <ErrorBoundary fallback={<ScenePlaceholder />}>
        <DnaHelix interactive={!reduceMotion} />
      </ErrorBoundary>
    </div>
  );
}
