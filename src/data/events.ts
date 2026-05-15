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
  accent: "aurora" | "sunset" | "violet" | "forest";
};
