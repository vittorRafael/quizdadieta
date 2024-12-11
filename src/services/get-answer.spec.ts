import { expect, describe, it, beforeEach } from "vitest";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { InMemoryAnswerRepository } from "@/repositories/in-memory/in-memory-answer-repository";
import { GetAnswerService } from "./get-answer";

let answerRepository: InMemoryAnswerRepository;
let sut: GetAnswerService;

describe("Get Answer Use Case", () => {
  beforeEach(() => {
    answerRepository = new InMemoryAnswerRepository();
    sut = new GetAnswerService(answerRepository);
  });

  it("should be able to get answer", async () => {
    const createdAnswer = await answerRepository.create({
      id: "answer-01",
      email: "jonhdoe@example.com",
      nome: "Jonh Doe",
      genero: "Homem",
      idade_faixa: "18-24",
      objetivo_fitness: "Emagrecer",
      me_identifico: "Gordinho",
      objetivo_corpo: "Normal",
      me_incomoda: ["Barriga"],
      me_sentir_bem: "Há mais de 3 anos",
      atividade_fisica: "Não faço",
      altura: 175,
      peso_atual: 80.0,
      peso_objetivo: 70.0,
      idade: 22,
      me_sinto: "Motivado(a)",
    });

    const { answer } = await sut.execute({
      quizId: createdAnswer.id,
    });

    expect(answer.nome).toEqual("Jonh Doe");
  });

  it("should not be able to get answer with wrong id", async () => {
    await expect(() =>
      sut.execute({
        quizId: "non-existing-id",
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError);
  });
});
