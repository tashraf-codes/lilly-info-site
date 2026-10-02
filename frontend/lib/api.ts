import { Company, Medicine } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status}`);
  }
  return res.json();
}

export function getCompany(): Promise<Company> {
  return fetchJson<Company>("/api/company");
}

export function getMedicines(category?: string): Promise<Medicine[]> {
  const query = category ? `?category=${encodeURIComponent(category)}` : "";
  return fetchJson<Medicine[]>(`/api/medicines${query}`);
}

export function getMedicine(slug: string): Promise<Medicine | null> {
  return fetchJson<Medicine>(`/api/medicines/${slug}`).catch(() => null);
}

export function getCategories(): Promise<string[]> {
  return fetchJson<string[]>("/api/medicines/categories");
}
