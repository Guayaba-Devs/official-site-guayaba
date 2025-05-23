import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  subscriptNewsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      try {
        // Lógica para guardar el email en la base de datos
        console.log("Email recibido:", email);

        return {
          data: { message: "Suscripción exitosa!" },
        };
      } catch (error) {
        console.error("Error al suscribir:", error);
        return {
          error: { message: "Error al suscribir. Inténtalo de nuevo." },
        };
      }
    },
  }),
};
