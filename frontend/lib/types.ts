export interface HistoryEvent {
  year: number;
  event: string;
}

export interface StatItem {
  label: string;
  value: string;
  note: string;
}

export interface Location {
  city: string;
  type: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Company {
  legalName: string;
  shortName: string;
  founded: number;
  founder: string;
  headquarters: string;
  industry: string;
  stockTicker: string;
  tagline: string;
  summary: string;
  history: HistoryEvent[];
  therapeuticAreas: string[];
  byTheNumbers: StatItem[];
  locations: Location[];
  faqs: Faq[];
  disclaimer: string;
}

export type MedicineFormType = "pen" | "vial" | "tablet" | "capsule" | "infusion" | "nasal";

export interface Medicine {
  slug: string;
  name: string;
  genericName: string;
  category: string;
  drugClass: string;
  approvalYear: number;
  about: string;
  usedFor: string[];
  form: string;
  formType: MedicineFormType;
}
