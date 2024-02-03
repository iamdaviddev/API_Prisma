-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "realease_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MovieRent" (
    "user_id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,

    PRIMARY KEY ("user_id", "movie_id"),
    CONSTRAINT "MovieRent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovieRent_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
