-- CreateTable
CREATE TABLE "colleges" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "street_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "colleges_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categorys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "colleges_street_id_fkey" FOREIGN KEY ("street_id") REFERENCES "streets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "categorys" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "streets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_CollegesToCourses" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CollegesToCourses_A_fkey" FOREIGN KEY ("A") REFERENCES "colleges" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CollegesToCourses_B_fkey" FOREIGN KEY ("B") REFERENCES "courses" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "colleges_category_id_key" ON "colleges"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "colleges_street_id_key" ON "colleges"("street_id");

-- CreateIndex
CREATE UNIQUE INDEX "_CollegesToCourses_AB_unique" ON "_CollegesToCourses"("A", "B");

-- CreateIndex
CREATE INDEX "_CollegesToCourses_B_index" ON "_CollegesToCourses"("B");
