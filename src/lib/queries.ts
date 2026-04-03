import { sanityClient, urlFor } from "./sanity";
import type { EventItem } from "@/data/events";

const EVENTS_QUERY = `*[_type == "event"] | order(date desc) {
  "id": slug.current,
  title,
  highlight,
  summary,
  description,
  date,
  "year": string::split(date, "-")[0],
  location,
  hero,
  gallery,
  link,
  tags,
  accent
}`;

const EVENT_SLUGS_QUERY = `*[_type == "event"]{ "id": slug.current }`;

const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  "id": slug.current,
  title,
  highlight,
  summary,
  description,
  date,
  "year": string::split(date, "-")[0],
  location,
  hero,
  gallery,
  link,
  tags,
  accent
}`;

type SanityEvent = Omit<EventItem, "hero" | "gallery" | "date"> & {
  hero: { asset: { _ref: string } } | null;
  gallery: { asset: { _ref: string } }[] | null;
  date: string;
};

function formatDateES(isoDate: string): string {
  const date = new Date(isoDate + "T12:00:00");
  return date.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function mapEvent(event: SanityEvent): EventItem {
  return {
    ...event,
    date: formatDateES(event.date),
    hero: event.hero ? urlFor(event.hero).width(1200).quality(80).url() : "",
    gallery: event.gallery
      ? event.gallery.map((img) => urlFor(img).width(800).quality(80).url())
      : [],
  };
}

export async function getEvents(limit?: number): Promise<EventItem[]> {
  const query = limit
    ? `*[_type == "event"] | order(date desc) [0...${limit}] {
        "id": slug.current, title, highlight, summary, description, date,
        "year": string::split(date, "-")[0], location, hero, gallery, link, tags, accent
      }`
    : EVENTS_QUERY;
  const events = await sanityClient.fetch<SanityEvent[]>(query, {}, {
    next: { tags: ["events"] },
  });
  return events.map(mapEvent);
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  const event = await sanityClient.fetch<SanityEvent | null>(
    EVENT_BY_SLUG_QUERY,
    { slug },
    { next: { tags: ["events"] } },
  );
  if (!event) return null;
  return mapEvent(event);
}

export async function getEventSlugs(): Promise<{ id: string }[]> {
  return sanityClient.fetch(EVENT_SLUGS_QUERY, {}, {
    next: { tags: ["events"] },
  });
}
