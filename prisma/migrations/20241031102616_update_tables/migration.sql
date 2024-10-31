/*
  Warnings:

  - Added the required column `graduation_type_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "graduation_type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "course_area" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "teaching_modality" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_CoursesToTeachingModality" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CoursesToTeachingModality_A_fkey" FOREIGN KEY ("A") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursesToTeachingModality_B_fkey" FOREIGN KEY ("B") REFERENCES "teaching_modality" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CourseAreaToCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CourseAreaToCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "course_area" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CourseAreaToCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "graduation_type_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "courses_graduation_type_id_fkey" FOREIGN KEY ("graduation_type_id") REFERENCES "graduation_type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_courses" ("created_at", "id", "name", "updated_at") SELECT "created_at", "id", "name", "updated_at" FROM "courses";
DROP TABLE "courses";
ALTER TABLE "new_courses" RENAME TO "courses";
CREATE UNIQUE INDEX "courses_graduation_type_id_key" ON "courses"("graduation_type_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_CoursesToTeachingModality_AB_unique" ON "_CoursesToTeachingModality"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursesToTeachingModality_B_index" ON "_CoursesToTeachingModality"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseAreaToCourses_AB_unique" ON "_CourseAreaToCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseAreaToCourses_B_index" ON "_CourseAreaToCourses"("B");
