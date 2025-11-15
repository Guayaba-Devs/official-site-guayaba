import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { eventsData, getEventById } from "@/data/events";
import { IconMapPin, IconCalendarEvent, IconBrandInstagram } from "@tabler/icons-react";

type EventPageParams = {
  id?: string;
};

type EventPageProps = {
  params: Promise<EventPageParams>;
};

export function generateStaticParams() {
  return eventsData.map((event) => ({ id: event.id }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id) {
    return {
      title: "Evento no encontrado · Guayaba Devs",
    };
  }

  const event = getEventById(id);
  if (!event) {
    return {
      title: "Evento no encontrado · Guayaba Devs",
    };
  }

  return {
    title: `${event.title} · Guayaba Devs`,
    description: event.highlight,
    openGraph: {
      title: `${event.title} · Guayaba Devs`,
      description: event.highlight,
      images: [
        {
          url: event.hero,
        },
      ],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id) {
    notFound();
  }

  const event = getEventById(id);

  if (!event) {
    notFound();
  }

  const galleryImages =
    event.gallery.length > 0 ? [event.hero, ...event.gallery] : [event.hero];

  return (
    <main className="min-h-screen bg-background pb-20 pt-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/events"
            className="text-sm font-semibold text-primary transition hover:text-secondary"
          >
            ← Volver a eventos
          </Link>
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/40 hover:bg-primary/20"
            >
              Ver recap
              <IconBrandInstagram className="h-4 w-4" />
            </a>
          ) : (
            <span />
          )}
        </div>

        <header className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            <IconCalendarEvent className="h-4 w-4" />
            {event.date}
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {event.title}
          </h1>
          <p className="max-w-3xl text-lg text-gray-300">{event.highlight}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2 font-medium text-gray-200">
              <IconMapPin className="h-4 w-4" />
              {event.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <span className="text-gray-400">{event.year}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="space-y-6">
          <p className="text-base text-gray-200">{event.description}</p>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={event.hero}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Galería de recuerdos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryImages.map((image, index) => (
              <div
                key={`${event.id}-${index}`}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image}
                    alt={`${event.title} recuerdo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

