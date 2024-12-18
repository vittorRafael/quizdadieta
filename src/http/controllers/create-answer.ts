import { makeCreateAnswerServices } from "@/services/factories/make-create-answer-services";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export const createAnswer = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const registerBodySchema = z.object({
    email: z.string().email(),
    nome: z.string(),
    genero: z.enum(["Homem", "Mulher"]),
    idade_faixa: z.enum(["18-24", "25-34", "35-44", "45+"]),
    objetivo_fitness: z.enum(["Emagrecer", "Manter o peso", "Ganhar peso"]),
    me_identifico: z.enum(["1-12", "13-15", "16-19", "20-24", "25-30"]),
    objetivo_corpo: z.enum([
      "Musculoso e Forte",
      "Definido e Atlético",
      "Tonificante e Proporcional",
      "Natural e Ativo",
      "Robusto e Equilibrado",
    ]),
    me_incomoda: z.array(
      z.enum(["Corpo todo", "Braços", "Bunda", "Pernas", "Barriga", "Costas"])
    ),
    me_sentir_bem: z.enum([
      "Há mais de 3 anos",
      "Há 1-3 anos",
      "Nunca me sentir bem",
      "Já me sinto bem",
    ]),
    atividade_fisica: z.enum([
      "Não faço",
      "Faço 1-2x",
      "Faço 3-4x",
      "Faço 5x ou +",
    ]),
    altura: z.number(),
    peso_atual: z.number(),
    peso_objetivo: z.number(),
    idade: z.number(),
    me_sinto: z.enum(["Motivado(a)", "Confiante", "Nervoso(a)", "Frustado(a)"]),
  });

  const {
    email,
    nome,
    genero,
    idade_faixa,
    objetivo_fitness,
    me_identifico,
    objetivo_corpo,
    me_incomoda,
    me_sentir_bem,
    atividade_fisica,
    altura,
    peso_atual,
    peso_objetivo,
    idade,
    me_sinto,
  } = registerBodySchema.parse(request.body);

  try {
    const registerServices = makeCreateAnswerServices();
    const res = await registerServices.execute({
      email,
      nome,
      genero,
      idade_faixa,
      objetivo_fitness,
      me_identifico,
      objetivo_corpo,
      me_incomoda,
      me_sentir_bem,
      atividade_fisica,
      altura,
      peso_atual,
      peso_objetivo,
      idade,
      me_sinto,
    });

    return reply.status(201).send({ id_answer: res.answer.id });
  } catch (error) {
    throw error;
  }
};
