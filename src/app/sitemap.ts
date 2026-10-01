import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://winterbeom-room.com/", changeFrequency: "weekly", priority: 1 }];
}
