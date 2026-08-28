import type { MetadataRoute } from "next"

const baseUrl = "https://falseceilingservice.com"
const slugs = ["gypsum-false-ceiling", "pvc-false-ceiling", "grid-ceiling", "partition-wall", "wpc-wall-panel", "uv-marble-sheet", "modular-tv-unit", "artificial-grass"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: baseUrl, lastModified: new Date() }, ...slugs.map((slug) => ({ url: `${baseUrl}/services/${slug}`, lastModified: new Date() }))]
}
