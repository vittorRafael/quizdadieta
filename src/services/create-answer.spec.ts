import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryAnswerRepository } from "@/repositories/in-memory/in-memory-answer-repository";
import { CreateAnswerServices } from "./create-answer";

let answerRepository: InMemoryAnswerRepository;
let sut: CreateAnswerServices;

describe("Create Answer Use Case", () => {
  beforeEach(() => {
    answerRepository = new InMemoryAnswerRepository();
    sut = new CreateAnswerServices(answerRepository);
  });
  it("should be able to create", async () => {
    const { answer } = await sut.execute({
      email: "jonhdoe@example.com",
      nome: "Jonh Doe",
      genero: "Homem",
      idade_faixa: "18-24",
      objetivo_fitness: "Emagrecer",
      me_identifico: "Gordinho",
      objetivo_corpo: "Normal",
      me_incomoda: "Barriga",
      me_sentir_bem: "Há mais de 3 anos",
      atividade_fisica: "Não faço",
      altura: 175,
      peso_atual: 80.0,
      peso_objetivo: 70.0,
      idade: 22,
      me_sinto: "Motivado(a)",
    });

    expect(answer.id).toEqual(expect.any(String));
  });
});
