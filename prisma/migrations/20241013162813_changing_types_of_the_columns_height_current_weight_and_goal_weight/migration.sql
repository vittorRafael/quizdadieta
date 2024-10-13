/*
  Warnings:

  - Changed the type of `altura` on the `quiz_respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peso_atual` on the `quiz_respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `peso_objetivo` on the `quiz_respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP COLUMN "altura",
ADD COLUMN     "altura" INTEGER NOT NULL,
DROP COLUMN "peso_atual",
ADD COLUMN     "peso_atual" DECIMAL(65,30) NOT NULL,
DROP COLUMN "peso_objetivo",
ADD COLUMN     "peso_objetivo" DECIMAL(65,30) NOT NULL;
