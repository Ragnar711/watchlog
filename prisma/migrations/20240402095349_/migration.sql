/*
  Warnings:

  - Changed the type of `genre_name` on the `Genre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `media_type` on the `Media` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Movie', 'TVShow', 'Anime');

-- CreateEnum
CREATE TYPE "Genres" AS ENUM ('Drama', 'Action', 'Comedy', 'Fantasy', 'SciFi', 'Horror', 'Romance', 'Thriller', 'Mystery', 'Historical', 'Adventure', 'Biography', 'Documentary', 'Crime', 'Animation', 'Family', 'Music', 'War', 'Western', 'Sport');

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genre_name",
ADD COLUMN     "genre_name" "Genres" NOT NULL;

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "media_type",
ADD COLUMN     "media_type" "Type" NOT NULL;
