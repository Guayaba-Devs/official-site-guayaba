import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { TeamSection } from "@/components/team";
import { Newsletter } from "@/components/newsletter";
import { Events } from "@/components/events";

const Landing = () => {
  return (
    <main className="mx-auto w-full">
      <Hero />
      <AboutSection />
      <Sponsors />
      <TeamSection />
      <Newsletter />
      <Events />
    </main>
  );
};

export default Landing;
