import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { prisma } from "@/lib/prisma";

describe("Get Answer (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get answer", async () => {
    const answer = await prisma.quizResposta.create({
      data: {
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
      },
    });

    console.log(answer.id);

    const answerResponse = await request(app.server)
      .get(`/get-answer/${answer.id}`)
      .send();

    expect(answerResponse.statusCode).toEqual(200);
    expect(answerResponse.body.answer).toEqual(
      expect.objectContaining({ email: "jonhdoe@example.com" })
    );
  });
});
