import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { TeamSection } from "@/components/team";
import { Newsletter } from "@/components/newsletter";
import { Events } from "@/components/events";
import { getEvents } from "@/lib/queries";

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
