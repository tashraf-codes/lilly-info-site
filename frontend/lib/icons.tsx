import { Syringe, Microscope, ShieldPlus, Brain, HeartPulse, Bone, type LucideIcon } from "lucide-react";

export const therapeuticAreaIcons: Record<string, LucideIcon> = {
  "Diabetes & Obesity": Syringe,
  "Oncology": Microscope,
  "Immunology": ShieldPlus,
  "Neuroscience": Brain,
  "Cardiometabolic Health": HeartPulse,
  "Bone Health": Bone,
};

export function getTherapeuticAreaIcon(area: string): LucideIcon {
  return therapeuticAreaIcons[area] ?? Syringe;
}
