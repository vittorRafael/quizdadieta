import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { answerRoutes } from "./http/routes";
import { ResourceNotFoundError } from "./services/errors/resource-not-found-error";

export const app = fastify();

app.register(answerRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError)
    return reply
      .status(400)
      .send({ message: `Validation error.`, issues: error.format });

  if (env.NODE_ENV != "production") console.error(error);

  if (error instanceof ResourceNotFoundError)
    return reply.status(404).send({ message: `Resource Not Found!.` });

  return reply.status(500).send({ message: "Internal Server Error." });
});
