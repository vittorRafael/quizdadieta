import { Prisma, QuizResposta } from "@prisma/client";

export interface AnswerRepository {
  create(data: Prisma.QuizRespostaCreateInput): Promise<QuizResposta>;
  findById(id: string): Promise<QuizResposta | null>;
}
