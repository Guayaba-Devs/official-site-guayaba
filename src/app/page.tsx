import { Newsletter } from "@/components/newsletter";
import { Events } from "@/components/events";

const Landing = () => {
  return (
    <main className="mx-auto max-w-screen-xl h-auto">
      <section>
        <Newsletter />
      </section>
      <section>
        <Events />
      </section>
    </main>
  );
};

export default Landing;
