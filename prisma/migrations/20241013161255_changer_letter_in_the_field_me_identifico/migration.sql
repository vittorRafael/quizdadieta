/*
  Warnings:

  - You are about to drop the column `me_Identifico` on the `quiz_respostas` table. All the data in the column will be lost.
  - Added the required column `me_identifico` to the `quiz_respostas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP COLUMN "me_Identifico",
ADD COLUMN     "me_identifico" TEXT NOT NULL;
