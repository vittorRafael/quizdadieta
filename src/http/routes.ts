import { FastifyInstance } from "fastify";
import { createAnswer } from "./controllers/create-answer";
import { getAnswer } from "./controllers/get-answer";

export const answerRoutes = async (app: FastifyInstance) => {
  app.post("/answer", createAnswer);
  app.get("/get-answer/:id", getAnswer);
};
