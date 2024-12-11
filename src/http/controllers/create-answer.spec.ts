import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

describe("Create Answer (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });
  it("should be able to create", async () => {
    const response = await request(app.server)
      .post("/answer")
      .send({
        email: "jonhdoe@example.com",
        nome: "Jonh Doe",
        genero: "Homem",
        idade_faixa: "18-24",
        objetivo_fitness: "Emagrecer",
        me_identifico: "16-19",
        objetivo_corpo: "Tonificante e Proporcional",
        me_incomoda: ["Barriga"],
        me_sentir_bem: "Há mais de 3 anos",
        atividade_fisica: "Não faço",
        altura: 175,
        peso_atual: 80.0,
        peso_objetivo: 70.0,
        idade: 22,
        me_sinto: "Motivado(a)",
      });
    expect(response.statusCode).toEqual(201);
  });
});
