import { PrismaAnswerRepository } from "@/repositories/prisma/prisma-answer-repository";
import { CreateAnswerServices } from "../create-answer";

export function makeCreateAnswerServices() {
  const answerRepository = new PrismaAnswerRepository();
  const useCase = new CreateAnswerServices(answerRepository);

  return useCase;
}
