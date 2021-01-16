-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "date" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.date_unique" ON "User"("date");
