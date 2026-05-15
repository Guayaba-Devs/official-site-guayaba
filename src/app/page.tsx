import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { TeamSection } from "@/components/team";
import { Newsletter } from "@/components/newsletter";
import { Events } from "@/components/events";
import { getEvents } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Guayaba Devs · Comunidad Tech en México",
  description:
    "Comunidad de desarrolladores Guayaba Devs: eventos, talleres y networking para impulsar el talento tecnológico en México.",
  alternates: { canonical: "/" },
};

const Landing = async () => {
  const events = await getEvents(4);

  return (
    <main className="mx-auto w-full">
      <Hero />
      <AboutSection />
      <Sponsors />
      <TeamSection />
      <Events events={events} />
      <Newsletter />
    </main>
  );
};

export default Landing;
