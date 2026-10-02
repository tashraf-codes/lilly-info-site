"use client";

import { useId, type ReactElement } from "react";
import type { MedicineFormType } from "@/lib/types";

interface ArtProps {
  className?: string;
}

function PenArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Injector pen illustration">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="55%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e5e5e5" />
        </linearGradient>
        <linearGradient id={`${id}-cap`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#93081f" />
          <stop offset="100%" stopColor="#c8102e" />
        </linearGradient>
      </defs>
      <rect x="44" y="18" width="32" height="96" rx="10" fill={`url(#${id}-body)`} stroke="#d4d4d4" strokeWidth="1.5" />
      <rect x="44" y="18" width="32" height="22" rx="10" fill="#1a1a1a" />
      <circle cx="60" cy="29" r="5" fill="#ffffff" opacity="0.9" />
      <rect x="50" y="52" width="20" height="4" rx="2" fill="#c8102e" opacity="0.7" />
      <rect x="50" y="64" width="20" height="4" rx="2" fill="#d4d4d4" />
      <rect x="50" y="76" width="20" height="4" rx="2" fill="#d4d4d4" />
      <path d="M44 114 h32 l-10 26 a6 6 0 0 1 -12 0 Z" fill={`url(#${id}-cap)`} />
      <rect x="56" y="140" width="8" height="12" rx="2" fill="#93081f" />
    </svg>
  );
}

function VialArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Medicine vial illustration">
      <defs>
        <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eef2f3" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe1e3" />
        </linearGradient>
      </defs>
      <rect x="38" y="46" width="44" height="86" rx="8" fill={`url(#${id}-glass)`} stroke="#c7ced0" strokeWidth="1.5" />
      <rect x="40" y="90" width="40" height="40" rx="6" fill="#c8102e" opacity="0.18" />
      <rect x="34" y="34" width="52" height="14" rx="3" fill="#b0b8bb" />
      <rect x="40" y="20" width="40" height="16" rx="4" fill="#1a1a1a" />
      <g stroke="#9aa3a6" strokeWidth="1" opacity="0.7">
        <line x1="46" y1="60" x2="52" y2="60" />
        <line x1="46" y1="74" x2="52" y2="74" />
        <line x1="46" y1="88" x2="52" y2="88" />
        <line x1="46" y1="102" x2="52" y2="102" />
      </g>
    </svg>
  );
}

function TabletArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Tablet illustration">
      <defs>
        <linearGradient id={`${id}-t1`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e5e5e5" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="96" rx="34" ry="34" fill={`url(#${id}-t1)`} stroke="#d4d4d4" strokeWidth="1.5" />
      <line x1="26" y1="96" x2="74" y2="96" stroke="#c8c8c8" strokeWidth="1.5" />
      <ellipse cx="78" cy="56" rx="30" ry="30" fill="#c8102e" opacity="0.9" />
      <ellipse cx="78" cy="56" rx="30" ry="30" fill="none" stroke="#93081f" strokeWidth="1.5" opacity="0.6" />
      <path d="M62 56 a16 16 0 0 1 32 0" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.35" strokeLinecap="round" />
    </svg>
  );
}

function CapsuleArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Capsule illustration">
      <defs>
        <linearGradient id={`${id}-cap1`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8102e" />
          <stop offset="100%" stopColor="#93081f" />
        </linearGradient>
        <linearGradient id={`${id}-cap2`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e5e5e5" />
        </linearGradient>
      </defs>
      <g transform="rotate(-35 60 80)">
        <path d="M30 80 a24 24 0 0 1 48 0 v10 h-48 z" fill={`url(#${id}-cap1)`} />
        <path d="M30 90 a24 24 0 0 0 48 0 v-10 h-48 z" fill={`url(#${id}-cap2)`} stroke="#d4d4d4" strokeWidth="1" />
        <line x1="30" y1="90" x2="78" y2="90" stroke="#93081f" strokeWidth="1.5" opacity="0.4" />
      </g>
    </svg>
  );
}

function InfusionArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Infusion bag illustration">
      <defs>
        <linearGradient id={`${id}-bag`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#eef2f3" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe1e3" />
        </linearGradient>
      </defs>
      <path d="M42 18 h36 a4 4 0 0 1 4 4 v8 h-44 v-8 a4 4 0 0 1 4 -4 z" fill="#b0b8bb" />
      <circle cx="60" cy="22" r="3" fill="#ffffff" />
      <path
        d="M34 30 h52 l-6 64 a10 10 0 0 1 -10 9 h-20 a10 10 0 0 1 -10 -9 z"
        fill={`url(#${id}-bag)`}
        stroke="#c7ced0"
        strokeWidth="1.5"
      />
      <rect x="40" y="55" width="40" height="32" rx="4" fill="#c8102e" opacity="0.16" />
      <line x1="60" y1="103" x2="60" y2="128" stroke="#b0b8bb" strokeWidth="3" />
      <circle cx="60" cy="132" r="5" fill="#ffffff" stroke="#b0b8bb" strokeWidth="2" />
      <line x1="60" y1="137" x2="60" y2="152" stroke="#b0b8bb" strokeWidth="3" />
    </svg>
  );
}

function NasalArt({ className }: ArtProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 160" className={className} role="img" aria-label="Nasal spray device illustration">
      <defs>
        <linearGradient id={`${id}-n1`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e5e5e5" />
        </linearGradient>
      </defs>
      <rect x="46" y="60" width="28" height="60" rx="8" fill={`url(#${id}-n1)`} stroke="#d4d4d4" strokeWidth="1.5" />
      <rect x="50" y="36" width="20" height="30" rx="6" fill="#c8102e" />
      <path d="M50 36 q10 -18 20 0" fill="none" stroke="#c8102e" strokeWidth="6" strokeLinecap="round" />
      <rect x="54" y="120" width="12" height="18" rx="3" fill="#93081f" opacity="0.85" />
      <g stroke="#ffffff" strokeWidth="2" opacity="0.5">
        <line x1="34" y1="30" x2="42" y2="38" />
        <line x1="86" y1="30" x2="78" y2="38" />
      </g>
    </svg>
  );
}

const artByType: Record<MedicineFormType, (props: ArtProps) => ReactElement> = {
  pen: PenArt,
  vial: VialArt,
  tablet: TabletArt,
  capsule: CapsuleArt,
  infusion: InfusionArt,
  nasal: NasalArt,
};

export default function MedicineArt({
  formType,
  className,
}: {
  formType: MedicineFormType;
  className?: string;
}) {
  const Art = artByType[formType] ?? TabletArt;
  return <Art className={className} />;
}
