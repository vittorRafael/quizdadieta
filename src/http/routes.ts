import { FastifyInstance } from "fastify";
import { createAnswer } from "./controllers/create-answer";

export const answerRoutes = async (app: FastifyInstance) => {
  app.post("/answer", createAnswer);
};
