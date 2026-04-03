export type AccentKey = "aurora" | "sunset" | "violet" | "forest";

export type AccentStyle = {
  glow: string;
  badge: string;
  tag: string;
  highlight: string;
  focus: string;
  ring: string;
};

export const accentStyles: Record<AccentKey, AccentStyle> = {
  aurora: {
    glow: "from-primary/30 via-primary/10 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-primary/60",
    ring: "ring-primary/25",
  },
  sunset: {
    glow: "from-secondary/30 via-secondary/15 to-primary/15",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-secondary/60",
    ring: "ring-secondary/25",
  },
  violet: {
    glow: "from-secondary/25 via-primary/10 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/15",
    tag: "border-white/15 bg-white/5 text-white/80",
    highlight: "text-white",
    focus: "focus-visible:ring-white/35",
    ring: "ring-white/15",
  },
  forest: {
    glow: "from-secondary/25 via-primary/15 to-secondary/20",
    badge: "bg-white/10 text-white border border-white/20",
    tag: "border-white/20 bg-white/5 text-white/85",
    highlight: "text-white",
    focus: "focus-visible:ring-primary/55",
    ring: "ring-primary/25",
  },
};

export type EventItem = {
  id: string;
  title: string;
  highlight: string;
  summary: string;
  description: string;
  date: string;
  year: string;
  location: string;
  hero: string;
  gallery: string[];
  link?: string;
  tags: string[];
  accent: AccentKey;
};
