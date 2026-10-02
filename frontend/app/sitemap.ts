import type { MetadataRoute } from "next";
import { getMedicines } from "@/lib/api";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const medicines = await getMedicines();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/medicines`, changeFrequency: "weekly", priority: 0.9 },
  ];

  const medicineRoutes: MetadataRoute.Sitemap = medicines.map((m) => ({
    url: `${SITE_URL}/medicines/${m.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...medicineRoutes];
}
