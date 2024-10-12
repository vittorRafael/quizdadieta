/*
  Warnings:

  - You are about to drop the column `atividadeFisica` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `idadeFaixa` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `meIdentifico` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `meIncomoda` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `meSentirBem` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `meSinto` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `objetivoCorpo` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `objetivoFitness` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `pesoAtual` on the `quiz_respostas` table. All the data in the column will be lost.
  - You are about to drop the column `pesoObjetivo` on the `quiz_respostas` table. All the data in the column will be lost.
  - Added the required column `atividade_fisica` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idade_faixa` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `me_Identifico` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `me_incomoda` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `me_sentir_bem` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `me_sinto` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objetivo_corpo` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objetivo_fitness` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso_atual` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peso_objetivo` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP COLUMN "atividadeFisica",
DROP COLUMN "idadeFaixa",
DROP COLUMN "meIdentifico",
DROP COLUMN "meIncomoda",
DROP COLUMN "meSentirBem",
DROP COLUMN "meSinto",
DROP COLUMN "objetivoCorpo",
DROP COLUMN "objetivoFitness",
DROP COLUMN "pesoAtual",
DROP COLUMN "pesoObjetivo",
ADD COLUMN     "atividade_fisica" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "idade_faixa" TEXT NOT NULL,
ADD COLUMN     "me_Identifico" TEXT NOT NULL,
ADD COLUMN     "me_incomoda" TEXT NOT NULL,
ADD COLUMN     "me_sentir_bem" TEXT NOT NULL,
ADD COLUMN     "me_sinto" TEXT NOT NULL,
ADD COLUMN     "objetivo_corpo" TEXT NOT NULL,
ADD COLUMN     "objetivo_fitness" TEXT NOT NULL,
ADD COLUMN     "peso_atual" TEXT NOT NULL,
ADD COLUMN     "peso_objetivo" TEXT NOT NULL;
