import { PrismaAnswerRepository } from "@/repositories/prisma/prisma-answer-repository";
import {} from "../create-answer";
import { GetAnswerService } from "../get-answer";

export function makeGetAnswerService() {
  const answerRepository = new PrismaAnswerRepository();
  const useCase = new GetAnswerService(answerRepository);

  return useCase;
}
