/*
  Warnings:

  - A unique constraint covering the columns `[originalUrl]` on the table `ShortUrl` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_originalUrl_key" ON "ShortUrl"("originalUrl");
