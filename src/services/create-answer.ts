import { QuizResposta } from "@prisma/client";
import { AnswerRepository } from "@/repositories/answer-repository";

interface CreateAnswerServicesRequest {
  email: string;
  nome: string;
  genero: string;
  idade_faixa: string;
  objetivo_fitness: string;
  me_identifico: string;
  objetivo_corpo: string;
  me_incomoda: string;
  me_sentir_bem: string;
  atividade_fisica: string;
  altura: number;
  peso_atual: number;
  peso_objetivo: number;
  idade: number;
  me_sinto: string;
}

interface CreateAnswerServicesResponse {
  answer: QuizResposta;
}

export class CreateAnswerServices {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
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
  }: CreateAnswerServicesRequest): Promise<CreateAnswerServicesResponse> {
    const answer = await this.answerRepository.create({
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

    return { answer };
  }
}
