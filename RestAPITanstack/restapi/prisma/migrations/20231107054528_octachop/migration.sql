-- CreateTable
CREATE TABLE "Stars" (
    "trackId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "received" INTEGER NOT NULL,

    CONSTRAINT "Stars_pkey" PRIMARY KEY ("trackId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stars_trackId_key" ON "Stars"("trackId");

-- AddForeignKey
ALTER TABLE "Stars" ADD CONSTRAINT "Stars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
