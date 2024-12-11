import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { ZodError } from "zod";
import { env } from "./env";
import { answerRoutes } from "./http/routes";
import { ResourceNotFoundError } from "./services/errors/resource-not-found-error";

export const app = fastify();

app.register(fastifyCors, {
  origin: "*", // Permite todas as origens. Você pode configurar para permitir origens específicas.
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
  credentials: true, // Habilitar cookies e credenciais
});

app.register(answerRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError)
    return reply
      .status(400)
      .send({ message: `Validation error.`, issues: error.errors });

  if (env.NODE_ENV != "production") console.error(error);

  if (error instanceof ResourceNotFoundError)
    return reply.status(404).send({ message: `Resource Not Found!.` });

  return reply.status(500).send({ message: "Internal Server Error." });
});
