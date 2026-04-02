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
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="grid gap-10 md:grid-cols-[1.25fr,1fr] md:items-center">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sobre Guayaba
            </span>
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
          <div
            className="relative overflow-hidden border border-white/10 bg-white/5"
            style={{ borderRadius: "24px" }}
          >
            <Image
              src="/images/guayaba-cover.webp"
              alt="Guayaba Devs"
              width={600}
              height={400}
              className="h-full w-full object-cover p-5"
              style={{ borderRadius: "20px" }}
              priority
            />
          </div>
        </header>

        {/* Highlights */}
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, i) => (
            <article
              key={highlight.title}
              className="group relative overflow-hidden border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
              style={{ borderRadius: "22px" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pl-11">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>

        {/* What we do */}
        <div
          className="grid gap-8 border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 md:grid-cols-[1fr,1.25fr] md:items-center"
          style={{ borderRadius: "28px" }}
        >
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              ¿Qué hacemos?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Organizamos actividades gratuitas para estudiantes y cualquier
              persona interesada en tecnología: formación práctica, experiencias
              inmersivas y networking genuino.
            </p>
            <ul className="space-y-2.5">
              {activities.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm text-gray-400 transition-colors hover:border-white/10 hover:bg-white/[0.05]"
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside
            className="border border-white/[0.08] bg-white/[0.03] p-7 text-sm text-gray-400"
            style={{ borderRadius: "20px" }}
          >
            <span className="inline-flex rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-white mb-3">
              Nuestra invitación
            </span>
            <p className="leading-relaxed">
              Súmate a un espacio donde practicar habilidades técnicas y blandas
              con una comunidad que respalda tu crecimiento. Nos encontramos en
              eventos, ferias, meetups y sesiones en línea para construir
              experiencias con impacto.
            </p>
            <div className="mt-5">
              <a
                href="https://github.com/Guayaba-Devs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/15 hover:border-primary/30"
              >
                GitHub · Guayaba Devs
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
