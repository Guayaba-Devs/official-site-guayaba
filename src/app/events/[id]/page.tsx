import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getEventBySlug, getEventSlugs } from "@/lib/queries";
import {
  IconMapPin,
  IconCalendarEvent,
  IconBrandInstagram,
  IconArrowLeft,
  IconExternalLink,
} from "@tabler/icons-react";

type EventPageParams = {
  id?: string;
};

type EventPageProps = {
  params: Promise<EventPageParams>;
};

export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id) {
    return { title: "Evento no encontrado · Guayaba Devs" };
  }

  const event = await getEventBySlug(id);
  if (!event) {
    return { title: "Evento no encontrado · Guayaba Devs" };
  }

  return {
    title: `${event.title} · Guayaba Devs`,
    description: event.highlight,
    openGraph: {
      title: `${event.title} · Guayaba Devs`,
      description: event.highlight,
      type: "article",
      siteName: "Guayaba Devs",
      locale: "es_MX",
      images: event.hero
        ? [{ url: event.hero, width: 1200, height: 630, alt: event.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} · Guayaba Devs`,
      description: event.highlight,
      images: event.hero ? [event.hero] : [],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id) notFound();

  const event = await getEventBySlug(id);
  if (!event) notFound();

  const galleryImages = event.gallery.filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero banner */}
      {event.hero && (
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src={event.hero}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />

          {/* Title overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-10">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 mb-5"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <IconArrowLeft className="h-4 w-4" />
                Eventos
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <IconCalendarEvent className="h-3.5 w-3.5" />
                  {event.date}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <IconMapPin className="h-3.5 w-3.5" />
                  {event.location}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl !text-white">
                {event.title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* Fallback header when no hero */}
      {!event.hero && (
        <div className="pt-24 pb-8">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-secondary mb-8"
            >
              <IconArrowLeft className="h-4 w-4" />
              Eventos
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                <IconCalendarEvent className="h-3.5 w-3.5" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                <IconMapPin className="h-3.5 w-3.5" />
                {event.location}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1fr,300px]">
          {/* Main content */}
          <div className="space-y-8">
            {/* Highlight */}
            <p className="text-lg text-gray-300 leading-relaxed md:text-xl">
              {event.highlight}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Sobre el evento
              </h2>
              <p className="text-base text-gray-400 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Gallery */}
            {galleryImages.length > 0 && (
              <div className="space-y-5">
                <h2 className="text-xl font-semibold text-white">
                  Galería
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {galleryImages.map((image, index) => (
                    <div
                      key={`gallery-${index}`}
                      className="overflow-hidden border border-white/[0.08] bg-white/[0.03]"
                      style={{ borderRadius: "16px" }}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={image}
                          alt={`${event.title} - foto ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Info card */}
            <div
              className="border border-white/[0.08] bg-white/[0.03] p-6 space-y-5"
              style={{ borderRadius: "20px" }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Detalles
              </h3>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs text-gray-500">Fecha</span>
                  <p className="text-sm text-white flex items-center gap-2">
                    <IconCalendarEvent className="h-4 w-4 text-gray-500" />
                    {event.date}
                  </p>
                </div>

                <div className="h-px bg-white/[0.06]" />

                <div className="space-y-1.5">
                  <span className="text-xs text-gray-500">Ubicación</span>
                  <p className="text-sm text-white flex items-center gap-2">
                    <IconMapPin className="h-4 w-4 text-gray-500" />
                    {event.location}
                  </p>
                </div>

                <div className="h-px bg-white/[0.06]" />

                <div className="space-y-2">
                  <span className="text-xs text-gray-500">Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/20 w-full"
              >
                <IconBrandInstagram className="h-4 w-4" />
                Ver recap
                <IconExternalLink className="h-3.5 w-3.5" />
              </a>
            )}

            {/* Back link */}
            <Link
              href="/events"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-400 transition-all hover:border-white/20 hover:text-white w-full"
            >
              <IconArrowLeft className="h-4 w-4" />
              Todos los eventos
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
