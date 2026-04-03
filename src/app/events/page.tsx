import type { Metadata } from "next";
import { getEvents } from "@/lib/queries";
import { EventsGrid } from "@/components/events-grid";

export const metadata: Metadata = {
  title: "Eventos · Guayaba Devs",
  description:
    "Todos los eventos de Guayaba Devs: workshops, hackrooms, ferias y más.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Historias
          </span>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Todos los Eventos
          </h1>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Workshops, hackrooms, ferias y lanzamientos que ocurrieron gracias a
            personas que creen en construir juntas.
          </p>
        </header>

        <EventsGrid events={events} />
      </div>
    </main>
  );
}
