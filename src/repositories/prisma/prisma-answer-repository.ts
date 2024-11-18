import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { AnswerRepository } from "../answer-repository";

export class PrismaAnswerRepository implements AnswerRepository {
  async create(data: Prisma.QuizRespostaCreateInput) {
    const answer = await prisma.quizResposta.create({
      data,
    });
    return answer;
  }

  async findById(id: string) {
    const answer = await prisma.quizResposta.findUnique({
      where: { id },
    });

    return answer;
  }
}
