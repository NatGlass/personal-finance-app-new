/*
  Warnings:

  - Added the required column `updatedAt` to the `pots` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_pots" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "target" REAL NOT NULL,
    "total" REAL NOT NULL,
    "theme" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "pots_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_pots" ("id", "name", "target", "theme", "total", "userId") SELECT "id", "name", "target", "theme", "total", "userId" FROM "pots";
DROP TABLE "pots";
ALTER TABLE "new_pots" RENAME TO "pots";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
