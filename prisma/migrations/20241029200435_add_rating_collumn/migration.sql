/*
  Warnings:

  - Added the required column `rating` to the `colleges` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_colleges" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "street_id" INTEGER NOT NULL,
    "rating" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "colleges_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categorys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "colleges_street_id_fkey" FOREIGN KEY ("street_id") REFERENCES "streets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_colleges" ("category_id", "created_at", "id", "name", "street_id", "updated_at") SELECT "category_id", "created_at", "id", "name", "street_id", "updated_at" FROM "colleges";
DROP TABLE "colleges";
ALTER TABLE "new_colleges" RENAME TO "colleges";
CREATE UNIQUE INDEX "colleges_category_id_key" ON "colleges"("category_id");
CREATE UNIQUE INDEX "colleges_street_id_key" ON "colleges"("street_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
