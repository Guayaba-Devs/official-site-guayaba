# Guayaba Devs - Sitio Oficial 🍈

Sitio web oficial de **Guayaba Devs**, una comunidad tech que conecta talento y construye espacios de aprendizaje en Mexico.

> [!NOTE]
> 🤖 **Experimentando con IA para desarrollo.** Este proyecto esta siendo mejorado con herramientas de inteligencia artificial como parte de nuestra exploracion de nuevas tecnologias. Creemos en probar, iterar y compartir lo que aprendemos con la comunidad.

## Stack tecnologico

- **Framework** - [Next.js 16](https://nextjs.org/) (App Router, SSR/ISR)
- **Estilos** - [Tailwind CSS](https://tailwindcss.com/)
- **CMS** - [Sanity](https://www.sanity.io/) (headless, free tier)
- **Animaciones** - [GSAP](https://gsap.com/) + ScrollTrigger
- **Hosting** - [Vercel](https://vercel.com/)
- **Lenguaje** - TypeScript

## Arquitectura

```
src/
├── app/                # Pages (App Router)
│   ├── page.tsx        # Landing
│   ├── events/         # Listado + detalle de eventos
│   └── api/            # Webhook de revalidacion
├── components/         # Componentes React
├── data/               # Tipos y estilos compartidos
└── lib/                # Cliente Sanity, queries, utilidades
```

Los eventos se gestionan desde **Sanity Studio** y se actualizan en la web automaticamente via webhook, sin necesidad de rebuild manual.

## Desarrollo local

```bash
# Clonar el repo
git clone https://github.com/Guayaba-Devs/official-site-guayaba.git
cd official-site-guayaba

# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus valores

# Levantar el servidor
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Variables de entorno

| Variable | Descripcion |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | ID del proyecto en Sanity |
| `NEXT_PUBLIC_SANITY_DATASET` | Nombre del dataset (`production`) |
| `SANITY_REVALIDATE_SECRET` | Secret para validar webhooks (solo server) |

## Como contribuir

1. Haz **fork** del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mi-mejora`)
3. Haz commit de tus cambios (`git commit -m "feat: descripcion del cambio"`)
4. Push a tu rama (`git push origin feature/mi-mejora`)
5. Abre un **Pull Request**

Seguimos [Conventional Commits](https://www.conventionalcommits.org/) para los mensajes de commit.

## Comunidad

- 🌐 [guayabadev.com](https://guayabadev.com)
- 📸 [Instagram](https://www.instagram.com/guayaba_devs_official/)
- 💻 [GitHub](https://github.com/Guayaba-Devs)

---

###### Made with :sparkling_heart: by Guayaba Dev Team :mexico:
