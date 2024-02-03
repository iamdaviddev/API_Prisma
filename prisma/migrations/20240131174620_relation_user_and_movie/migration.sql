/*
  Warnings:

  - You are about to drop the `MovieRent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MovieRent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "movie_rent" (
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "movie_id"),
    CONSTRAINT "movie_rent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "movie_rent_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
