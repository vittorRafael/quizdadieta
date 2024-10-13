/*
  Warnings:

  - The primary key for the `quiz_respostas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP CONSTRAINT "quiz_respostas_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "quiz_respostas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "quiz_respostas_id_seq";
