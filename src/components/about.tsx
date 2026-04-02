"use client";

import Image from "next/image";

const highlights = [
  {
    title: "Comunidad con historia",
    description:
      "Nacimos en 2022 como Escihu Wizards y evolucionamos a Guayaba Devs para conectar a sedes y capítulos en todo México.",
  },
  {
    title: "Crecimiento profesional",
    description:
      "Impulsamos carreras con mentorías, red de contactos y beneficios como el GitHub Student Developer Pack.",
  },
  {
    title: "Espacios seguros",
    description:
      "Promovemos discusiones, colaboración y código abierto bajo un código de conducta inclusivo.",
  },
];

const activities = [
  "Talleres prácticos de herramientas y frameworks",
  "Pláticas con especialistas de la industria",
  "Hackatones y retos de colaboración exprés",
  "Sesiones de networking y mentorías entre capítulos",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-background py-20 md:py-28 scroll-mt-24"
    >
      {/* Subtle top gradient for transition from hero */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <header className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Sobre Guayaba
            </p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Conectamos talento tech que quiere crecer acompañado
            </h2>
            <p className="text-base text-gray-400 sm:text-lg leading-relaxed">
              Guayaba Devs surge de una comunidad estudiantil que encontró en la
              colaboración la mejor forma de aprender. Hoy operamos como una red
              abierta que une sedes, capítulos y aliados para impulsar proyectos
              de tecnología y compartir conocimiento sin costo.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src="/images/guayaba-cover.webp"
              alt="Guayaba Devs"
              width={600}
              height={400}
              className="h-full w-full object-cover p-6"
              priority
            />
          </div>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:grid-cols-[1fr,1.25fr] md:items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              ¿Qué hacemos?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Organizamos actividades gratuitas para estudiantes y cualquier
              persona interesada en tecnología: formación práctica, experiencias
              inmersivas y networking genuino.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-lg px-3 py-2"
                >
                  <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 text-sm text-gray-400">
            <p className="font-semibold text-white">Nuestra invitación</p>
            <p className="mt-2 leading-relaxed">
              Súmate a un espacio donde practicar habilidades técnicas y blandas
              con una comunidad que respalda tu crecimiento. Nos encontramos en
              eventos, ferias, meetups y sesiones en línea para construir
              experiencias con impacto.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Más información:{" "}
              <a
                href="https://github.com/Guayaba-Devs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub · Guayaba Devs
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
