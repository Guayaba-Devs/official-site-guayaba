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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
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
            duration: 0.8,
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
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
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
      <div className="absolute inset-x-0 top-10 h-40 bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-20 bottom-0 h-32 bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center">
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

        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const glow = card.querySelector<HTMLDivElement>("[data-glow]");
    if (!glow) return;

    const rect = card.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const moveX = ((relX - rect.width / 2) / rect.width) * 24;
    const moveY = ((relY - rect.height / 2) / rect.height) * 24;
    glow.style.opacity = "1";
    glow.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const glow = e.currentTarget.querySelector<HTMLDivElement>("[data-glow]");
    if (!glow) return;
    glow.style.opacity = "0";
    glow.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group/card relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-5 backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-2"
    >
      <div
        data-glow
        className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${accent.glow} opacity-0 transition duration-500`}
      />

      <div className="absolute inset-0 rounded-3xl border border-white/5 opacity-30" />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${accent.badge}`}
          >
            <IconCalendarEvent className="h-4 w-4" />
            {event.date}
          </span>
          <span className="flex items-center gap-1 text-sm text-gray-300">
            <IconMapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>

        <div
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 ring-1 ${accent.ring}`}
          style={{ viewTransitionName: `event-hero-${event.id}` }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={event.hero}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-500 group-hover/card:scale-105"
              priority={false}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${accent.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h3
            className="text-2xl font-semibold text-white md:text-3xl"
            style={{ viewTransitionName: `event-title-${event.id}` }}
          >
            {event.title}
          </h3>
          <p className={`mt-2 text-sm font-semibold ${accent.highlight}`}>
            {event.highlight}
          </p>
          <p className="mt-3 text-sm text-gray-300 md:text-base">
            {event.summary}
          </p>
        </div>

        {event.gallery.length > 0 ? (
          <div className="mt-3 flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gray-500">
              <IconPhoto className="h-4 w-4" />
              Recuerdos
            </span>
            <div className="flex -space-x-3">
              {event.gallery.slice(0, 3).map((image, idx) => (
                <div
                  key={image}
                  className="relative h-9 w-9 overflow-hidden rounded-full border border-background/80 shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`${event.title} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="flex items-center gap-2">
            <Link
              href={`/events/${event.id}`}
              className={`relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:border-white/30 hover:bg-white/20 ${accent.focus}`}
            >
              Ver más
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" />
            </Link>
            {event.link ? (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-white/30 hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <IconBrandInstagram className="h-4 w-4" />
              </a>
            ) : null}
          </div>
          <div className="text-sm text-gray-400">{event.year}</div>
        </div>
      </div>
    </article>
  );
};
