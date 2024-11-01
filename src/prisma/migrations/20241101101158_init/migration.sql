/*
  Warnings:

  - A unique constraint covering the columns `[shortUrl]` on the table `ShortUrl` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `originalUrl` to the `ShortUrl` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortUrl` to the `ShortUrl` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShortUrl" ADD COLUMN     "originalUrl" TEXT NOT NULL,
ADD COLUMN     "shortUrl" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_shortUrl_key" ON "ShortUrl"("shortUrl");
