"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconArrowUpRight,
  IconCalendarEvent,
  IconMapPin,
} from "@tabler/icons-react";

import type { EventItem } from "@/data/events";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EventsGrid = ({ events }: { events: EventItem[] }) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const registerCard = useCallback(
    (element: HTMLDivElement | null, index: number) => {
      cardsRef.current[index] = element;
    },
    []
  );

  if (cardsRef.current.length !== events.length) {
    cardsRef.current = Array(events.length).fill(null);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          event={event}
          register={(node) => registerCard(node, index)}
        />
      ))}
    </div>
  );
};

const EventCard = ({
  event,
  register,
}: {
  event: EventItem;
  register: (element: HTMLDivElement | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    register(cardRef.current);
    return () => register(null);
  }, [register]);

  return (
    <Link href={`/events/${event.id}`}>
      <article
        ref={cardRef}
        className="group/card relative flex h-full flex-col overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
        style={{ borderRadius: "24px" }}
      >
        {/* Hero image */}
        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            {event.hero ? (
              <Image
                src={event.hero}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-white/5" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Title overlay on image */}
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <h3 className="text-xl font-bold text-white md:text-2xl !text-white">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <IconCalendarEvent className="h-3.5 w-3.5" />
              {event.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-600" />
            <span className="inline-flex items-center gap-1.5">
              <IconMapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
          </div>

          {/* Highlight */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {event.highlight}
          </p>

          {/* Tags + Arrow */}
          <div className="mt-auto flex items-end justify-between gap-4 pt-2">
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

            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-500 transition-all duration-200 group-hover/card:border-primary/30 group-hover/card:bg-primary/10 group-hover/card:text-primary">
              <IconArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
