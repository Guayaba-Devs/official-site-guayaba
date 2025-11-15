"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import teamData from "@/data/team.json";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBuilding,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
} from "@tabler/icons-react";

type SocialPlatform =
  | "github"
  | "linkedin"
  | "instagram"
  | "behance"
  | "twitter"
  | "website";

type TeamJSON = typeof teamData;

interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
}

interface Headquarters {
  id: string;
  label: string;
  location: string;
  lead?: string;
  members: TeamMember[];
}

type HeadquartersStyle = {
  gradient: string;
  badge: string;
  ring: string;
  glow: string;
  accentLight: string;
  text: string;
  icon: (className?: string) => JSX.Element;
};

const SOCIAL_PLATFORMS: readonly SocialPlatform[] = [
  "github",
  "linkedin",
  "instagram",
  "behance",
  "twitter",
  "website",
] as const;

const isSocialPlatform = (platform: string): platform is SocialPlatform => {
  return SOCIAL_PLATFORMS.includes(platform as SocialPlatform);
};

const normalizeSocials = (
  socials?: { platform: string; url: string }[]
): SocialLink[] => {
  if (!socials) return [];
  return socials
    .map((social) => {
      if (!isSocialPlatform(social.platform)) return null;
      return {
        platform: social.platform,
        url: social.url,
      };
    })
    .filter((social): social is SocialLink => Boolean(social));
};

const normalizeHeadquarters = (
  headquarters?: TeamJSON["headquarters"]
): Headquarters[] => {
  if (!headquarters) return [];
  return headquarters
    .filter((hq) => (hq.members?.length ?? 0) > 0)
    .map((hq): Headquarters => ({
      id: hq.id,
      label: hq.label,
      location: hq.location,
      lead: hq.lead,
      members:
        hq.members?.map(
          (member): TeamMember => ({
            name: member.name,
            role: member.role,
            image: member.image,
            socials: normalizeSocials(member.socials),
          })
        ) ?? [],
    }));
};

const HEADQUARTERS_STYLES: Record<string, HeadquartersStyle> = {
  principal: {
    gradient: "from-primary via-primary to-secondary",
    badge: "from-primary to-secondary",
    ring: "ring-primary/40",
    glow: "from-primary/30 via-secondary/40 to-primary/30",
    accentLight: "from-primary/20 to-secondary/20",
    text: "text-primary",
    icon: (className) => <IconBuilding className={className} />,
  },
  cdmx: {
    gradient: "from-blue-500 via-purple-500 to-pink-500",
    badge: "from-blue-500 to-purple-500",
    ring: "ring-blue-400/40",
    glow: "from-blue-500/30 via-purple-500/40 to-pink-500/30",
    accentLight: "from-blue-500/20 to-purple-500/20",
    text: "text-blue-400",
    icon: (className) => <IconBuilding className={className} />,
  },
  chiapas: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    badge: "from-emerald-500 to-teal-500",
    ring: "ring-emerald-400/40",
    glow: "from-emerald-500/30 via-green-500/40 to-teal-500/30",
    accentLight: "from-emerald-500/20 to-teal-500/20",
    text: "text-emerald-400",
    icon: (className) => <IconMapPin className={className} />,
  },
};

const DEFAULT_STYLE: HeadquartersStyle = {
  gradient: "from-primary via-secondary to-primary",
  badge: "from-primary to-secondary",
  ring: "ring-primary/40",
  glow: "from-primary/30 via-secondary/40 to-primary/30",
  accentLight: "from-primary/20 to-secondary/20",
  text: "text-primary",
  icon: (className) => <IconBuilding className={className} />,
};

const getSocialIcon = (platform: SocialPlatform, className?: string) => {
  switch (platform) {
    case "github":
      return <IconBrandGithub aria-hidden className={className} />;
    case "linkedin":
      return <IconBrandLinkedin aria-hidden className={className} />;
    case "instagram":
      return <IconBrandInstagram aria-hidden className={className} />;
    default:
      return null;
  }
};

const useScrollPosition = (
  ref: React.RefObject<HTMLDivElement>,
  deps: unknown[]
) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = ref.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollPrev(scrollLeft > 16);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 16);
  }, [ref]);

  useEffect(() => {
    updateScrollState();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = useCallback(() => {
    updateScrollState();
  }, [updateScrollState]);

  return { canScrollPrev, canScrollNext, handleScroll };
};

const TeamCard = ({
  member,
  styles,
  locationLabel,
}: {
  member: TeamMember;
  styles: HeadquartersStyle;
  locationLabel: string;
}) => {
  return (
    <article className="snap-start flex-shrink-0 pt-3 pb-6 w-[17rem] sm:w-[18.5rem] lg:w-[20rem] xl:w-[22rem]">
      <div className="group relative h-full min-h-[22rem] sm:min-h-[24rem]">
        <div
          className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${styles.gradient} opacity-70 transition-opacity duration-300 group-hover:opacity-100`}
        />

        <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-white/5 bg-black/20 backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-3 hover:border-white/10">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 320px, 440px"
            priority={false}
            style={{ objectPosition: "center 25%" }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${styles.glow} opacity-30 mix-blend-screen`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />

          {/* Ciudad - Esquina superior izquierda */}
          <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg`}
            >
              <span
                className={`inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-r ${styles.badge}`}
              />
              {locationLabel}
            </span>
          </div>

          {/* Redes sociales - Esquina superior derecha */}
          {member.socials.length > 0 && (
            <div className="absolute right-3 top-3 z-20 flex gap-2 sm:right-4 sm:top-4">
              {member.socials.map((social) => {
                const icon = getSocialIcon(
                  social.platform,
                  "h-4 w-4 sm:h-5 sm:w-5"
                );
                if (!icon) return null;

                const socialLabel =
                  social.platform.charAt(0).toUpperCase() +
                  social.platform.slice(1);

                return (
                  <a
                    key={`${member.name}-${social.platform}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-white/30 bg-white/20 backdrop-blur-md text-white transition-all duration-300 hover:border-white/40 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg"
                    aria-label={`${socialLabel} de ${member.name}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${styles.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-40 group-focus-visible/social:opacity-50`}
                    />
                    <span aria-hidden className="relative z-10">
                      {icon}
                    </span>
                    <span className="sr-only">{socialLabel}</span>
                    <span className="pointer-events-none absolute -bottom-12 left-1/2 z-20 hidden min-w-[6rem] -translate-x-1/2 rounded-xl border border-white/15 bg-black/85 px-3 py-1 text-xs font-medium text-white shadow-lg transition-opacity duration-150 group-hover/social:flex group-focus-visible/social:flex">
                      {socialLabel}
                    </span>
                  </a>
                );
              })}
            </div>
          )}

          {/* Nombre y rol - Abajo */}
          <div className="relative z-10 pb-4 px-4 sm:pb-5 sm:px-5">
            <div className="space-y-1 rounded-xl border border-white/30 bg-white/20 backdrop-blur-md p-3 shadow-lg">
              <h3 className="text-center text-base font-semibold text-white sm:text-lg">
                {member.name}
              </h3>
              <p className="text-center text-xs text-white/80 sm:text-sm">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const HeadquartersCarousel = ({
  headquarters,
}: {
  headquarters: Headquarters;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const styles = HEADQUARTERS_STYLES[headquarters.id] ?? DEFAULT_STYLE;

  const { canScrollPrev, canScrollNext, handleScroll } = useScrollPosition(
    scrollRef,
    [headquarters.members.length]
  );

  const scrollBy = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    window.requestAnimationFrame(() => handleScroll());
  };

  if (headquarters.members.length === 0) {
    return null;
  }

  return (
    <section className="relative mb-16 sm:mb-20">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${styles.badge} text-white shadow-lg`}
            >
              {styles.icon("h-5 w-5")}
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                {headquarters.label}
              </h3>
              <span className={`text-sm font-medium ${styles.text}`}>
                {headquarters.location}
              </span>
            </div>
          </div>
          {headquarters.lead && (
            <p className="max-w-xl text-sm text-gray-400 sm:text-base">
              {headquarters.lead}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Equipo anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition disabled:opacity-30"
            onClick={() => scrollBy("prev")}
            disabled={!canScrollPrev}
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Equipo siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition disabled:opacity-30"
            onClick={() => scrollBy("next")}
            disabled={!canScrollNext}
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-y-6 left-0 w-16 rounded-full bg-gradient-to-r ${styles.accentLight} opacity-0 transition-opacity duration-300 sm:opacity-70`}
        />
        <div
          className={`pointer-events-none absolute inset-y-6 right-0 w-16 rounded-full bg-gradient-to-l ${styles.accentLight} opacity-0 transition-opacity duration-300 sm:opacity-70`}
        />

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 py-3 pb-6 sm:gap-6 sm:px-3"
          onScroll={handleScroll}
        >
          {headquarters.members.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              styles={styles}
              locationLabel={headquarters.location}
            />
          ))}
          <div className="snap-end flex-shrink-0" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const data = teamData as TeamJSON;

  const headquartersList = useMemo<Headquarters[]>(
    () => normalizeHeadquarters(data?.headquarters),
    [data]
  );

  if (headquartersList.length === 0) {
    return null;
  }

  return (
    <section
      id="team"
      className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-16 sm:py-24 scroll-mt-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-16 h-40 w-40 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-[8%] bottom-24 h-48 w-48 rounded-full bg-secondary/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Personas Guayaba
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Conoce las mentes que impulsan las iniciativas desde cada sede. Cada
            tarjeta trae enlaces directos para que conectes con ellas.
          </p>
        </header>

        {headquartersList.map((headquarters) => (
          <HeadquartersCarousel
            key={headquarters.id}
            headquarters={headquarters}
          />
        ))}
      </div>
    </section>
  );
};
