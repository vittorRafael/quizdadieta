import { Prisma, QuizResposta } from "@prisma/client";
import { randomUUID } from "crypto";
import { AnswerRepository } from "../answer-repository";

export class InMemoryAnswerRepository implements AnswerRepository {
  public items: QuizResposta[] = [];

  async create(data: Prisma.QuizRespostaCreateInput) {
    const input = {
      me_incomoda: undefined, // ou qualquer dado vindo de outra fonte
    };

    const meIncomodaNormalized: string[] = Array.isArray(input.me_incomoda)
      ? input.me_incomoda
      : [];

    const answer = {
      id: data.id || randomUUID(),
      email: data.email,
      nome: data.nome,
      genero: data.genero,
      idade_faixa: data.idade_faixa,
      objetivo_fitness: data.objetivo_fitness,
      me_identifico: data.me_identifico,
      objetivo_corpo: data.objetivo_corpo,
      me_incomoda: meIncomodaNormalized,
      me_sentir_bem: data.me_sentir_bem,
      atividade_fisica: data.atividade_fisica,
      altura: data.altura,
      peso_atual: new Prisma.Decimal(data.peso_atual.toString()),
      peso_objetivo: new Prisma.Decimal(data.peso_objetivo.toString()),
      idade: data.idade,
      me_sinto: data.me_sinto,
      created_at: new Date(),
    };

    this.items.push(answer);

    return answer;
  }

  async findById(id: string) {
    const answer = this.items.find((item) => item.id === id);
    if (!answer) return null;

    return answer;
  }
}
