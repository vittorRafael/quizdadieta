import { QuizResposta } from "@prisma/client";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { AnswerRepository } from "@/repositories/answer-repository";

interface GetAnswerServiceResquest {
  quizId: string;
}
interface GetAnswerServiceResponse {
  answer: QuizResposta;
}

export class GetAnswerService {
  constructor(private anwerRepository: AnswerRepository) {}

  async execute({
    quizId,
  }: GetAnswerServiceResquest): Promise<GetAnswerServiceResponse> {
    const answer = await this.anwerRepository.findById(quizId);
    if (!answer) throw new ResourceNotFoundError();

    return { answer };
  }
}
