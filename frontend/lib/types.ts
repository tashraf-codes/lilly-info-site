export interface HistoryEvent {
  year: number;
  event: string;
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
  disclaimer: string;
}

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
}
