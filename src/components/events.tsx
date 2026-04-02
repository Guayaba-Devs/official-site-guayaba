"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconArrowUpRight,
  IconBrandInstagram,
  IconCalendarEvent,
  IconMapPin,
  IconPhoto,
} from "@tabler/icons-react";

import {
  accentStyles,
  eventsData,
  type AccentStyle,
  type EventItem,
} from "@/data/events";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Events = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const registerCard = useCallback(
    (element: HTMLDivElement | null, index: number) => {
      cardsRef.current[index] = element;
    },
    []
  );

  if (cardsRef.current.length !== eventsData.length) {
    cardsRef.current = Array(eventsData.length).fill(null);
  }

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background to-background/95 py-20 md:py-28 scroll-mt-24"
    >
      <div className="absolute inset-x-0 top-10 h-40 bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-4">
            Historias
          </p>
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Nuestros Eventos
          </h2>
          <p
            ref={subtitleRef}
            className="mt-4 text-base text-gray-400 sm:text-lg"
          >
            Contamos historias de comunidad: workshops, hackrooms, ferias y
            lanzamientos que ocurrieron gracias a personas que creen en
            construir juntas.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-2">
          {eventsData.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              accent={accentStyles[event.accent]}
              register={(node) => registerCard(node, index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({
  event,
  accent,
  register,
}: {
  event: EventItem;
  accent: AccentStyle;
  register: (element: HTMLDivElement | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    register(cardRef.current);
    return () => register(null);
  }, [register]);

  return (
    <article
      ref={cardRef}
      className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
    >
      <div className="relative z-10 flex h-full flex-col">
        {/* Image */}
        <div
          className="relative overflow-hidden"
          style={{ viewTransitionName: `event-hero-${event.id}` }}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={event.hero}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Date badge on image */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md ${accent.badge}`}
            >
              <IconCalendarEvent className="h-3.5 w-3.5" />
              {event.date}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <IconMapPin className="h-3.5 w-3.5" />
            {event.location}
          </div>

          <div className="space-y-2">
            <h3
              className="text-xl font-semibold text-white md:text-2xl"
              style={{ viewTransitionName: `event-title-${event.id}` }}
            >
              {event.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {event.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-1">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {event.gallery.length > 0 && (
            <div className="flex items-center gap-2 mt-1">
              <IconPhoto className="h-3.5 w-3.5 text-gray-500" />
              <div className="flex -space-x-2">
                {event.gallery.slice(0, 3).map((image, idx) => (
                  <div
                    key={image}
                    className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-background"
                  >
                    <Image
                      src={image}
                      alt={`${event.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="28px"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                +{event.gallery.length}
              </span>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
            <Link
              href={`/events/${event.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-primary"
            >
              Ver más
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
            </Link>
            <div className="flex items-center gap-2">
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/10 text-white/60 transition-all hover:border-white/20 hover:text-white/90"
                  aria-label={`Instagram de ${event.title}`}
                >
                  <IconBrandInstagram className="h-4 w-4" />
                </a>
              )}
              <span className="text-xs text-gray-500">{event.year}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
