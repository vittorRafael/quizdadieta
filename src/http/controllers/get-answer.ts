import { makeGetAnswerService } from "@/services/factories/make-get-answer-services";
import { FastifyReply, FastifyRequest } from "fastify";

interface getAnswerParams {
  id: string;
}

export const getAnswer = async (
  request: FastifyRequest<{ Params: getAnswerParams }>,
  reply: FastifyReply
) => {
  const getAnswer = makeGetAnswerService();

  const { answer } = await getAnswer.execute({ quizId: request.params.id });

  return reply.status(200).send({ answer });
};
