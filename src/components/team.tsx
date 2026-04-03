"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import teamData from "@/data/team.json";
import { gsap } from "gsap";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBuilding,
  IconChevronLeft,
  IconChevronRight,
  IconMapPin,
} from "@tabler/icons-react";
import { useTheme } from "@/lib/theme";

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
  accent: string;
  accentRgb: string;
  badge: string;
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
      return { platform: social.platform, url: social.url };
    })
    .filter((social): social is SocialLink => Boolean(social));
};

const normalizeHeadquarters = (
  headquarters?: TeamJSON["headquarters"]
): Headquarters[] => {
  if (!headquarters) return [];
  return headquarters
    .filter((hq) => (hq.members?.length ?? 0) > 0)
    .map(
      (hq): Headquarters => ({
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
      })
    );
};

const HEADQUARTERS_STYLES: Record<string, HeadquartersStyle> = {
  principal: {
    accent: "hsl(var(--primary))",
    accentRgb: "139, 192, 74",
    badge: "from-primary to-secondary",
    text: "text-primary",
    icon: (className) => <IconBuilding className={className} />,
  },
  cdmx: {
    accent: "#8B5CF6",
    accentRgb: "139, 92, 246",
    badge: "from-blue-500 to-purple-500",
    text: "text-purple-400",
    icon: (className) => <IconBuilding className={className} />,
  },
  chiapas: {
    accent: "#10B981",
    accentRgb: "16, 185, 129",
    badge: "from-emerald-500 to-teal-500",
    text: "text-emerald-400",
    icon: (className) => <IconMapPin className={className} />,
  },
};

const DEFAULT_STYLE: HeadquartersStyle = {
  accent: "hsl(var(--primary))",
  accentRgb: "139, 192, 74",
  badge: "from-primary to-secondary",
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

const HeadquartersSpotlight = ({
  headquarters,
}: {
  headquarters: Headquarters;
}) => {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const styles = HEADQUARTERS_STYLES[headquarters.id] ?? DEFAULT_STYLE;
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const members = headquarters.members;
  const active = members[activeIndex];

  const navigateTo = useCallback(
    (newIndex: number) => {
      if (isAnimating.current || newIndex === activeIndex) return;
      isAnimating.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false;
        },
      });

      tl.to([imageRef.current, infoRef.current], {
        opacity: 0,
        duration: 0.25,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => setActiveIndex(newIndex),
      });

      tl.to([imageRef.current, infoRef.current], {
        opacity: 1,
        duration: 0.3,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.05,
      });
    },
    [activeIndex]
  );

  const prev = useCallback(() => {
    navigateTo(activeIndex === 0 ? members.length - 1 : activeIndex - 1);
  }, [activeIndex, members.length, navigateTo]);

  const next = useCallback(() => {
    navigateTo(activeIndex === members.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, members.length, navigateTo]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating.current) {
        next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [next]);

  if (members.length === 0) return null;

  return (
    <section className="mb-24 last:mb-0">
      {/* HQ Header - pill badge style */}
      <div className="mb-8 flex items-center gap-3">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground"
          style={{
            background: `rgba(${styles.accentRgb}, 0.12)`,
            border: `1px solid rgba(${styles.accentRgb}, 0.2)`,
          }}
        >
          <span className={styles.text}>{styles.icon("h-4 w-4")}</span>
          {headquarters.label}
        </span>
        <span className="text-sm text-gray-500">{headquarters.location}</span>
      </div>

      {/* Spotlight Card - very rounded like GitHub Mobile */}
      <div
        className="relative overflow-hidden border border-white/[0.08] backdrop-blur-sm"
        style={{
          borderRadius: "28px",
          background: isLight
            ? `linear-gradient(135deg, rgba(${styles.accentRgb}, 0.08) 0%, hsl(173 45% 95% / 0.5) 50%, rgba(${styles.accentRgb}, 0.05) 100%)`
            : `linear-gradient(135deg, rgba(${styles.accentRgb}, 0.04) 0%, rgba(255,255,255,0.02) 50%, rgba(${styles.accentRgb}, 0.02) 100%)`,
        }}
      >
        <div className="grid md:grid-cols-[1fr,1.2fr]">
          {/* Image side - rounded inner container */}
          <div ref={imageRef} className="relative p-4 sm:p-5 md:p-6">
            <div
              className="relative overflow-hidden min-h-[340px] sm:min-h-[420px] md:min-h-[480px]"
              style={{ borderRadius: "20px" }}
            >
              <Image
                key={active.image}
                src={active.image}
                alt={active.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectPosition: "center 20%" }}
                priority={activeIndex === 0}
              />
              {/* Bottom fade on image */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Counter pill on image */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider !text-white"
                  style={{
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                  <span className="text-white/40">/</span>
                  {String(members.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Info side - fixed min-height to prevent layout shift */}
          <div
            ref={infoRef}
            className="relative flex flex-col justify-between p-6 sm:p-8 md:py-10 md:pr-10 md:pl-4 min-h-[340px] sm:min-h-[420px] md:min-h-[480px]"
          >
            {/* Top: Role pill + Name */}
            <div className="space-y-5">
              <span
                className="inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{
                  color: styles.accent,
                  background: `rgba(${styles.accentRgb}, 0.1)`,
                  border: `1px solid rgba(${styles.accentRgb}, 0.15)`,
                }}
              >
                {active.role}
              </span>

              <h4 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-[1.1] min-h-[2.2em]">
                {active.name}
              </h4>

              {/* Location pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-gray-400">
                <IconMapPin className="h-3.5 w-3.5" />
                {headquarters.location}
              </span>
            </div>

            {/* Bottom: Socials + Navigation */}
            <div className="mt-10 space-y-6">
              {/* Social links - pill shaped, fixed height */}
              {active.socials.length > 0 && (
                <div className="flex flex-wrap gap-2.5 min-h-[40px]">
                  {active.socials.map((social) => {
                    const icon = getSocialIcon(social.platform, "h-4 w-4");
                    if (!icon) return null;
                    const label =
                      social.platform.charAt(0).toUpperCase() +
                      social.platform.slice(1);
                    return (
                      <a
                        key={`${active.name}-${social.platform}`}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                        aria-label={`${label} de ${active.name}`}
                      >
                        {icon}
                        <span>{label}</span>
                      </a>
                    );
                  })}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                {/* Dots */}
                <div className="flex gap-2">
                  {members.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => navigateTo(i)}
                      aria-label={`Ver a ${members[i].name}`}
                      className="relative h-2.5 transition-all duration-300"
                      style={{ width: i === activeIndex ? "2.5rem" : "0.625rem" }}
                    >
                      <span
                        className="absolute inset-0 rounded-full transition-all duration-300"
                        style={{
                          background:
                            i === activeIndex
                              ? styles.accent
                              : isLight
                                ? "hsl(173 50% 70% / 0.3)"
                                : "rgba(255,255,255,0.12)",
                        }}
                      />
                    </button>
                  ))}
                </div>

                {/* Arrow pills */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Miembro anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <IconChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente miembro"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <IconChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip - circular avatars, fixed height */}
        {members.length > 1 && (
          <div
            className="border-t border-white/[0.06] px-6 py-5 sm:px-8 overflow-x-auto"
            style={{ background: isLight ? "hsl(173 45% 90% / 0.4)" : "rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center gap-4">
              {members.map((member, i) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => navigateTo(i)}
                  className="group flex flex-shrink-0 flex-col items-center gap-2"
                  aria-label={`Ver a ${member.name}`}
                >
                  <div
                    className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full transition-all duration-300"
                    style={
                      i === activeIndex
                        ? {
                            boxShadow: `0 0 0 2.5px rgba(${styles.accentRgb}, 0.6), 0 4px 12px rgba(${styles.accentRgb}, 0.15)`,
                            opacity: 1,
                          }
                        : {
                            boxShadow: isLight
                              ? "0 0 0 1.5px hsl(173 50% 70% / 0.35)"
                              : "0 0 0 1.5px rgba(255,255,255,0.1)",
                            opacity: 0.5,
                          }
                    }
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-medium transition-colors duration-300 max-w-[5rem] truncate ${
                      i === activeIndex ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {member.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";
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
      className="relative w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background py-20 md:py-28 scroll-mt-24"
    >
      {/* Background visual elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows - scattered across the section */}
        {/* Large ambient */}
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
        <div className="absolute -right-16 top-[45%] h-80 w-80 rounded-full bg-secondary/12 blur-[110px]" />
        <div className="absolute -left-10 bottom-[15%] h-60 w-60 rounded-full bg-purple-500/10 blur-[100px]" />

        {/* Medium scattered */}
        <div className="absolute right-[12%] top-20 h-40 w-40 rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute left-[25%] top-[18%] h-32 w-32 rounded-full bg-secondary/10 blur-[70px]" />
        <div className="absolute right-[30%] top-[35%] h-36 w-36 rounded-full bg-purple-400/8 blur-[75px]" />
        <div className="absolute left-[8%] top-[50%] h-44 w-44 rounded-full bg-blue-500/8 blur-[85px]" />
        <div className="absolute right-[6%] top-[62%] h-36 w-36 rounded-full bg-primary/12 blur-[70px]" />
        <div className="absolute left-[20%] top-[75%] h-40 w-40 rounded-full bg-emerald-500/8 blur-[80px]" />
        <div className="absolute right-[18%] bottom-[10%] h-48 w-48 rounded-full bg-secondary/10 blur-[90px]" />

        {/* Small accent flares */}
        <div className="absolute left-[5%] top-[12%] h-16 w-16 rounded-full bg-primary/25 blur-[40px]" />
        <div className="absolute right-[8%] top-[28%] h-14 w-14 rounded-full bg-secondary/20 blur-[35px]" />
        <div className="absolute left-[35%] top-[40%] h-12 w-12 rounded-full bg-white/10 blur-[30px]" />
        <div className="absolute right-[25%] top-[55%] h-16 w-16 rounded-full bg-primary/20 blur-[40px]" />
        <div className="absolute left-[15%] top-[65%] h-14 w-14 rounded-full bg-purple-400/15 blur-[35px]" />
        <div className="absolute right-[10%] top-[78%] h-12 w-12 rounded-full bg-emerald-400/15 blur-[30px]" />
        <div className="absolute left-[40%] bottom-[8%] h-16 w-16 rounded-full bg-secondary/20 blur-[40px]" />
        <div className="absolute right-[35%] top-[15%] h-10 w-10 rounded-full bg-blue-400/18 blur-[28px]" />
        <div className="absolute left-[45%] top-[88%] h-14 w-14 rounded-full bg-primary/15 blur-[35px]" />

        {/* Left decorative lines */}
        <div className="hidden lg:block absolute left-10 top-40 w-[2px] h-52 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="hidden lg:block absolute left-16 top-72 w-[2px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
        <div className="hidden lg:block absolute left-10 top-[58%] w-[2px] h-44 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Right decorative lines */}
        <div className="hidden lg:block absolute right-10 top-52 w-[2px] h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="hidden lg:block absolute right-16 top-[38%] w-[2px] h-28 bg-gradient-to-b from-transparent via-secondary/25 to-transparent" />
        <div className="hidden lg:block absolute right-10 bottom-36 w-[2px] h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Dots - left side */}
        <div className="hidden lg:block absolute left-12 top-36 h-2 w-2 rounded-full bg-primary/40" />
        <div className="hidden lg:block absolute left-20 top-[48%] h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="hidden lg:block absolute left-8 top-[68%] h-2 w-2 rounded-full bg-secondary/30" />
        <div className="hidden lg:block absolute left-24 bottom-28 h-1.5 w-1.5 rounded-full bg-primary/25" />

        {/* Dots - right side */}
        <div className="hidden lg:block absolute right-14 top-40 h-2 w-2 rounded-full bg-white/15" />
        <div className="hidden lg:block absolute right-8 top-[52%] h-2.5 w-2.5 rounded-full bg-primary/30" />
        <div className="hidden lg:block absolute right-22 top-[72%] h-2 w-2 rounded-full bg-secondary/25" />
        <div className="hidden lg:block absolute right-12 bottom-44 h-1.5 w-1.5 rounded-full bg-white/20" />

        {/* Corner brackets - top left */}
        <div className="hidden xl:block absolute left-14 top-48">
          <div className="h-12 w-[2px] bg-white/10" />
          <div className="absolute top-0 left-0 h-[2px] w-12 bg-white/10" />
        </div>

        {/* Corner brackets - top right */}
        <div className="hidden xl:block absolute right-14 top-[30%]">
          <div className="h-12 w-[2px] bg-white/10 ml-[46px]" />
          <div className="absolute top-0 right-0 h-[2px] w-12 bg-white/10" />
        </div>

        {/* Corner brackets - bottom left */}
        <div className="hidden xl:block absolute left-14 bottom-[25%]">
          <div className="h-12 w-[2px] bg-white/10" />
          <div className="absolute bottom-0 left-0 h-[2px] w-12 bg-white/10" />
        </div>

        {/* Corner brackets - bottom right */}
        <div className="hidden xl:block absolute right-14 bottom-40">
          <div className="h-12 w-[2px] bg-white/10 ml-[46px]" />
          <div className="absolute bottom-0 right-0 h-[2px] w-12 bg-white/10" />
        </div>

        {/* Grid pattern on sides */}
        <div
          className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 opacity-[0.04]"
          style={{
            backgroundImage: isLight
              ? "linear-gradient(hsl(173 50% 60% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(173 50% 60% / 0.5) 1px, transparent 1px)"
              : "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 opacity-[0.04]"
          style={{
            backgroundImage: isLight
              ? "linear-gradient(hsl(173 50% 60% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(173 50% 60% / 0.5) 1px, transparent 1px)"
              : "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Rings / circles */}
        <div className="hidden lg:block absolute left-6 top-[42%] h-20 w-20 rounded-full border border-white/[0.06]" />
        <div className="hidden lg:block absolute right-4 top-[60%] h-16 w-16 rounded-full border border-primary/10" />
        <div className="hidden xl:block absolute left-2 bottom-[30%] h-28 w-28 rounded-full border border-secondary/[0.07]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Personas Guayaba
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Conoce a quienes impulsan cada sede. Navega entre perfiles y
            conecta directamente con ellos.
          </p>
        </header>

        {headquartersList.map((hq) => (
          <HeadquartersSpotlight key={hq.id} headquarters={hq} />
        ))}
      </div>
    </section>
  );
};
