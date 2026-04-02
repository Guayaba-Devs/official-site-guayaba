import type { MetadataRoute } from "next";
import { eventsData } from "@/data/events";

const siteUrl = "https://guayabadevs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const eventPages = eventsData.map((event) => ({
    url: `${siteUrl}/events/${event.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...eventPages,
  ];
}
