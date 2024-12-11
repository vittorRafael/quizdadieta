/*
  Warnings:

  - The `me_incomoda` column on the `quiz_respostas` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "quiz_respostas" DROP COLUMN "me_incomoda",
ADD COLUMN     "me_incomoda" TEXT[];
