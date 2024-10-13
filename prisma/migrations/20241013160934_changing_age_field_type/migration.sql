/*
  Warnings:

  - Changed the type of `idade` on the `quiz_respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP COLUMN "idade",
ADD COLUMN     "idade" INTEGER NOT NULL;
