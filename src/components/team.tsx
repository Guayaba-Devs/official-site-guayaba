"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMapPin,
  IconBuilding,
} from "@tabler/icons-react";

interface SocialLink {
  icon: React.ReactNode;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLink[];
  location: "CDMX" | "Chiapas" | "Principal";
}

const principalMembers: TeamMember[] = [
  {
    name: "Josafat Jimenez",
    role: "Full Stack Developer",
    image: "images/josa-perfil.webp",
    location: "Principal",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/josafatjimenezB" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/josafat-jimenez/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/h4rt0ch/",
      },
    ],
  },
  {
    name: "Ivan Ramirez",
    role: "Full Stack Developer",
    image: "images/ivan-perfil.webp",
    location: "Principal",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/Texhnolyze47" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/ivan-ramirezu/",
      },
    ],
  },
  {
    name: "Ian Vega",
    role: "Full Stack Developer & Mobile",
    image: "images/ian-perfil.webp",
    location: "Principal",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/joh" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/lann892/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/lannv891/",
      },
    ],
  },
  {
    name: "Pablo Aguilar",
    role: "Software Developer",
    image: "images/pablo-perfil.webp",
    location: "Principal",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com/JuanPablo-Coder" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/juan-bablo-rodriguez-aguilar-1b7633295/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/pablo_roab/",
      },
    ],
  },
  {
    name: "Atenea Aguilar",
    role: "Diseño Gráfico",
    image: "images/ate-perfil.webp",
    location: "Principal",
    socialLinks: [
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/atenea-oishy-rodríguez-aguilar-097905147/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/kimdan.roasb/",
      },
    ],
  },
  {
    name: "Miker Gutierrez",
    role: "Marketing",
    image: "images/mike-perfil.webp",
    location: "Principal",
    socialLinks: [
      {
        icon: <IconBrandLinkedin />,
        url: "https://www.linkedin.com/in/erick-gutierrez/",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://www.instagram.com/miker_xn/",
      },
    ],
  },
];

const cdmxMembers: TeamMember[] = [
  {
    name: "Ana Martínez",
    role: "Frontend Developer",
    image: "images/josa-perfil.webp",
    location: "CDMX",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Carlos Rodríguez",
    role: "Backend Developer",
    image: "images/ivan-perfil.webp",
    location: "CDMX",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
    ],
  },
  {
    name: "María González",
    role: "UI/UX Designer",
    image: "images/ate-perfil.webp",
    location: "CDMX",
    socialLinks: [
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Diego Sánchez",
    role: "Full Stack Developer",
    image: "images/ian-perfil.webp",
    location: "CDMX",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Sofia Ramírez",
    role: "DevOps Engineer",
    image: "images/pablo-perfil.webp",
    location: "CDMX",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
    ],
  },
];

const chiapasMembers: TeamMember[] = [
  {
    name: "Luis Hernández",
    role: "Mobile Developer",
    image: "images/josa-perfil.webp",
    location: "Chiapas",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://instagram.com",
      },
    ],
  },
  {
    name: "Patricia López",
    role: "Frontend Developer",
    image: "images/ate-perfil.webp",
    location: "Chiapas",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
    ],
  },
  {
    name: "Roberto Morales",
    role: "Backend Developer",
    image: "images/mike-perfil.webp",
    location: "Chiapas",
    socialLinks: [
      { icon: <IconBrandGithub />, url: "https://github.com" },
      {
        icon: <IconBrandLinkedin />,
        url: "https://linkedin.com",
      },
      {
        icon: <IconBrandInstagram />,
        url: "https://instagram.com",
      },
    ],
  },
];

interface TeamCardProps {
  member: TeamMember;
  index: number;
  cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const TeamCard = ({ member, index, cardsRef }: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardsRef.current[index] = cardRef.current;
    }
  }, [index, cardsRef]);

  const handleMouseEnter = () => {
    if (!cardRef.current || !imageRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      y: -12,
      scale: 1.03,
      rotationY: 8,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      scale: 1.15,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(glowRef.current, {
      opacity: 0.8,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !imageRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleSocialHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isEnter: boolean
  ) => {
    gsap.to(e.currentTarget, {
      scale: isEnter ? 1.15 : 1,
      rotation: isEnter ? 360 : 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const locationStyles = {
    Principal: {
      gradient: "from-primary via-primary to-secondary",
      ring: "ring-primary/40",
      badgeBg: "from-primary to-secondary",
      glow: "from-primary via-primary to-secondary",
    },
    CDMX: {
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      ring: "ring-blue-400/40",
      badgeBg: "from-blue-500 to-purple-500",
      glow: "from-blue-500 via-purple-500 to-pink-500",
    },
    Chiapas: {
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      ring: "ring-emerald-400/40",
      badgeBg: "from-emerald-500 to-teal-500",
      glow: "from-emerald-500 via-green-500 to-teal-500",
    },
  };

  const locationStyle = locationStyles[member.location];

  return (
    <div
      ref={cardRef}
      className="relative will-change-transform group"
      style={{ opacity: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glowRef}
        className={`absolute -inset-1 bg-gradient-to-r ${locationStyle.glow} rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 pointer-events-none`}
      />

      <div className="relative bg-gradient-to-br from-cardbg/95 via-cardbg/80 to-cardbg/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${locationStyle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />

        {member.location === "Principal" && (
          <div className="absolute bottom-0 left-0 right-0 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
              <rect
                x="80"
                y="25"
                width="40"
                height="55"
                rx="2"
                fill="#00C8B3"
              />
              <rect x="85" y="15" width="8" height="10" rx="1" fill="#00C8B3" />
              <rect
                x="107"
                y="15"
                width="8"
                height="10"
                rx="1"
                fill="#00C8B3"
              />
              <ellipse
                cx="100"
                cy="22"
                rx="12"
                ry="6"
                fill="#00C8B3"
                opacity="0.8"
              />
              <rect
                x="20"
                y="35"
                width="25"
                height="45"
                rx="2"
                fill="#0D1137"
              />
              <rect
                x="22"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <rect
                x="30"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <rect
                x="38"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <rect
                x="155"
                y="35"
                width="25"
                height="45"
                rx="2"
                fill="#0D1137"
              />
              <rect
                x="157"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <rect
                x="165"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <rect
                x="173"
                y="42"
                width="6"
                height="6"
                rx="0.5"
                fill="#00C8B3"
                opacity="0.6"
              />
              <path
                d="M 10 60 L 25 40 L 40 50 L 40 80 L 10 80 Z"
                fill="url(#pueblaVolcanGradient)"
              />
              <circle cx="25" cy="45" r="2" fill="#00C8B3" opacity="0.8" />
              <defs>
                <linearGradient
                  id="pueblaVolcanGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00C8B3" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0D1137" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {member.location === "CDMX" && (
          <div className="absolute bottom-0 left-0 right-0 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
              <rect
                x="0"
                y="50"
                width="15"
                height="30"
                rx="2"
                fill="url(#cdmxBuilding1)"
              />
              <rect
                x="20"
                y="45"
                width="18"
                height="35"
                rx="2"
                fill="url(#cdmxBuilding2)"
              />
              <rect
                x="45"
                y="40"
                width="20"
                height="40"
                rx="2"
                fill="url(#cdmxBuilding3)"
              />
              <rect
                x="70"
                y="35"
                width="25"
                height="45"
                rx="2"
                fill="url(#cdmxBuilding4)"
              />
              <rect
                x="100"
                y="30"
                width="30"
                height="50"
                rx="2"
                fill="url(#cdmxBuilding5)"
              />
              <rect
                x="135"
                y="38"
                width="22"
                height="42"
                rx="2"
                fill="url(#cdmxBuilding4)"
              />
              <rect
                x="162"
                y="45"
                width="18"
                height="35"
                rx="2"
                fill="url(#cdmxBuilding2)"
              />
              <rect
                x="185"
                y="50"
                width="15"
                height="30"
                rx="2"
                fill="url(#cdmxBuilding1)"
              />
              <circle cx="130" cy="28" r="4" fill="#a855f7" />
              <path d="M 130 20 L 128 28 L 132 28 Z" fill="#ec4899" />
              <defs>
                <linearGradient
                  id="cdmxBuilding1"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient
                  id="cdmxBuilding2"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
                <linearGradient
                  id="cdmxBuilding3"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient
                  id="cdmxBuilding4"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient
                  id="cdmxBuilding5"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {member.location === "Chiapas" && (
          <div className="absolute bottom-0 left-0 right-0 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 200 80" className="w-full h-full" fill="none">
              <path
                d="M 0 80 L 30 50 L 60 65 L 90 40 L 120 55 L 150 35 L 180 50 L 200 45 L 200 80 Z"
                fill="url(#chiapasMountains)"
              />
              <path
                d="M 140 50 L 160 35 L 180 45 L 180 80 L 140 80 Z"
                fill="url(#chiapasVolcan)"
              />
              <circle cx="40" cy="55" r="3" fill="#10b981" opacity="0.7" />
              <circle cx="70" cy="60" r="2.5" fill="#059669" opacity="0.7" />
              <circle cx="100" cy="50" r="3" fill="#10b981" opacity="0.7" />
              <path
                d="M 10 60 L 12 58 L 14 60 L 12 62 Z"
                fill="#14b8a6"
                opacity="0.6"
              />
              <path
                d="M 190 55 L 192 53 L 194 55 L 192 57 Z"
                fill="#14b8a6"
                opacity="0.6"
              />
              <defs>
                <linearGradient
                  id="chiapasMountains"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient
                  id="chiapasVolcan"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        <div className="absolute top-4 right-4 z-10">
          <span
            className={`px-3 py-1.5 text-xs font-bold bg-gradient-to-r ${locationStyle.badgeBg} rounded-full text-white shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-1.5`}
          >
            {member.location === "Principal" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline-block"
              >
                <rect x="8" y="12" width="8" height="10" rx="1" />
                <path d="M12 6 L10 12 L14 12 Z" />
                <path d="M12 2 L12 6" />
                <rect x="10" y="16" width="1" height="6" />
                <rect x="13" y="16" width="1" height="6" />
              </svg>
            )}
            {member.location === "CDMX" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="inline-block"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
            )}
            {member.location === "Chiapas" && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="inline-block"
              >
                <path d="M12 2C8 2 4.5 4.5 4.5 8.5C4.5 12.5 12 22 12 22C12 22 19.5 12.5 19.5 8.5C19.5 4.5 16 2 12 2Z" />
                <circle cx="12" cy="8.5" r="2.5" fill="currentColor" />
              </svg>
            )}
            {member.location}
          </span>
        </div>

        <div className="relative mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r ${locationStyle.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
            </div>
            <div
              ref={imageRef}
              className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ${locationStyle.ring} ring-offset-4 ring-offset-background will-change-transform shadow-2xl`}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 144px, 176px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {member.name}
          </h3>
          <p className="text-base md:text-lg text-gray-400 font-medium">
            {member.role}
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {member.socialLinks.map((social, socialIndex) => (
            <a
              key={socialIndex}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 hover:text-white transition-all duration-300 will-change-transform overflow-hidden group/social`}
              style={{
                background:
                  member.location === "CDMX"
                    ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
                    : member.location === "Chiapas"
                    ? "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)"
                    : undefined,
              }}
              onMouseEnter={(e) => handleSocialHover(e, true)}
              onMouseLeave={(e) => handleSocialHover(e, false)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${locationStyle.gradient} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`}
              />
              <span className="relative z-10">{social.icon}</span>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${locationStyle.glow} opacity-0 group-hover/social:opacity-20 blur-md transition-opacity duration-300`}
              />
            </a>
          ))}
        </div>

        {member.location === "Principal" ? (
          <>
            <div className="absolute top-2 left-2 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 64 64" fill="none">
                <rect
                  x="8"
                  y="8"
                  width="24"
                  height="24"
                  rx="2"
                  stroke="#00C8B3"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="20" cy="20" r="3" fill="#00C8B3" opacity="0.7" />
                <circle cx="20" cy="28" r="2" fill="#0D1137" opacity="0.5" />
                <circle cx="28" cy="20" r="2" fill="#0D1137" opacity="0.5" />
                <circle cx="28" cy="28" r="3" fill="#00C8B3" opacity="0.7" />
                <path
                  d="M 32 32 L 36 28 L 40 32 L 36 36 Z"
                  fill="#00C8B3"
                  opacity="0.6"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-br-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-3xl pointer-events-none" />
          </>
        ) : member.location === "CDMX" ? (
          <>
            <div className="absolute top-2 left-2 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 64 64" fill="none">
                <rect
                  x="20"
                  y="30"
                  width="24"
                  height="34"
                  rx="2"
                  fill="url(#cdmxBuildingGradient)"
                />
                <rect
                  x="24"
                  y="38"
                  width="4"
                  height="4"
                  fill="#ec4899"
                  opacity="0.6"
                />
                <rect
                  x="32"
                  y="38"
                  width="4"
                  height="4"
                  fill="#9333ea"
                  opacity="0.7"
                />
                <rect
                  x="36"
                  y="38"
                  width="4"
                  height="4"
                  fill="#3b82f6"
                  opacity="0.8"
                />
                <rect
                  x="24"
                  y="46"
                  width="4"
                  height="4"
                  fill="#ec4899"
                  opacity="0.6"
                />
                <rect
                  x="32"
                  y="46"
                  width="4"
                  height="4"
                  fill="#9333ea"
                  opacity="0.7"
                />
                <rect
                  x="36"
                  y="46"
                  width="4"
                  height="4"
                  fill="#3b82f6"
                  opacity="0.8"
                />
                <defs>
                  <linearGradient
                    id="cdmxBuildingGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl pointer-events-none" />
          </>
        ) : member.location === "Chiapas" ? (
          <>
            <div className="absolute top-2 left-2 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <svg viewBox="0 0 64 64" fill="none">
                <path
                  d="M 32 8 Q 20 12 16 24 Q 12 36 24 44 Q 32 48 40 44 Q 52 36 48 24 Q 44 12 32 8 Z"
                  fill="url(#chiapasLeafGradient)"
                />
                <path
                  d="M 32 20 L 28 32 L 36 32 Z"
                  fill="#14b8a6"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="chiapasLeafGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-br-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-tl-3xl pointer-events-none" />
          </>
        ) : null}
      </div>
    </div>
  );
};

export const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const principalCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cdmxCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const chiapasCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const principalSectionRef = useRef<HTMLDivElement>(null);
  const cdmxSectionRef = useRef<HTMLDivElement>(null);
  const chiapasSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElement = (
      element: HTMLElement | null,
      fromProps: gsap.TweenVars,
      toProps: gsap.TweenVars
    ) => {
      if (!element) return;

      gsap.set(element, fromProps);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                ...toProps,
                duration: 0.8,
                ease: "power3.out",
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "50px" }
      );

      observer.observe(element);
    };

    animateElement(
      titleRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0 }
    );

    animateElement(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );

    const animateCards = (
      sectionRef: React.RefObject<HTMLDivElement>,
      cardsRef: React.MutableRefObject<(HTMLDivElement | null)[]>
    ) => {
      if (!sectionRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cardsRef.current.forEach((card, index) => {
                if (card) {
                  gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 0.6,
                    ease: "back.out(1.4)",
                    delay: index * 0.08,
                  });
                }
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "100px" }
      );

      observer.observe(sectionRef.current);
    };

    principalCardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationX: -10,
        });
      }
    });

    cdmxCardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationX: -10,
        });
      }
    });

    chiapasCardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationX: -10,
        });
      }
    });

    animateCards(principalSectionRef, principalCardsRef);
    animateCards(cdmxSectionRef, cdmxCardsRef);
    animateCards(chiapasSectionRef, chiapasCardsRef);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
            style={{ opacity: 0 }}
          >
            Nuestro Equipo
          </h2>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
            style={{ opacity: 0 }}
          >
            El corazón palpitante de Guayabadevs. Conoce al equipo que está
            revolucionando la formación de desarrolladores.
          </p>
        </div>

        {principalMembers.length > 0 && (
          <div ref={principalSectionRef} className="mb-24 md:mb-32">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Equipo Principal
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {principalMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index}
                  cardsRef={principalCardsRef}
                />
              ))}
            </div>
          </div>
        )}

        {cdmxMembers.length > 0 && (
          <div ref={cdmxSectionRef} className="mb-24 md:mb-32">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <IconBuilding className="w-8 h-8 text-primary" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ciudad de México
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cdmxMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index}
                  cardsRef={cdmxCardsRef}
                />
              ))}
            </div>
          </div>
        )}

        {chiapasMembers.length > 0 && (
          <div ref={chiapasSectionRef}>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <IconMapPin className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Chiapas
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {chiapasMembers.map((member, index) => (
                <TeamCard
                  key={member.name}
                  member={member}
                  index={index}
                  cardsRef={chiapasCardsRef}
                />
              ))}
            </div>
          </div>
        )}

        {(cdmxMembers.length === 0 || chiapasMembers.length === 0) && (
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-lg">
              {cdmxMembers.length === 0 && chiapasMembers.length === 0
                ? "Próximamente: Equipos en CDMX y Chiapas"
                : cdmxMembers.length === 0
                ? "Próximamente: Equipo en Ciudad de México"
                : "Próximamente: Equipo en Chiapas"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
