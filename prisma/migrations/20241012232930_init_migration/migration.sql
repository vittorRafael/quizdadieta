/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "quiz_respostas" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "idadeFaixa" TEXT NOT NULL,
    "objetivoFitness" TEXT NOT NULL,
    "meIdentifico" TEXT NOT NULL,
    "objetivoCorpo" TEXT NOT NULL,
    "meIncomoda" TEXT NOT NULL,
    "meSentirBem" TEXT NOT NULL,
    "atividadeFisica" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "pesoAtual" TEXT NOT NULL,
    "pesoObjetivo" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "meSinto" TEXT NOT NULL,

    CONSTRAINT "quiz_respostas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quiz_respostas_email_key" ON "quiz_respostas"("email");
