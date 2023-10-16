-- CreateTable
CREATE TABLE "TrackSet" (
    "trackSetId" SERIAL NOT NULL,
    "beatmapSetId" INTEGER NOT NULL,
    "songUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleUnicode" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "artistUnicode" TEXT NOT NULL,

    CONSTRAINT "TrackSet_pkey" PRIMARY KEY ("trackSetId")
);

-- CreateTable
CREATE TABLE "Track" (
    "trackId" SERIAL NOT NULL,
    "trackSetId" INTEGER NOT NULL,
    "beatmapId" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "approachRate" DECIMAL(65,30) NOT NULL,
    "noteData" TEXT NOT NULL,
    "breakData" TEXT NOT NULL,
    "beatmapUrl" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("trackId")
);

-- CreateTable
CREATE TABLE "PassResult" (
    "passResultId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trackId" INTEGER NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "hits" INTEGER NOT NULL DEFAULT 0,
    "misses" INTEGER NOT NULL DEFAULT 0,
    "healthBarData" INTEGER NOT NULL DEFAULT 0,
    "replayData" INTEGER NOT NULL,

    CONSTRAINT "PassResult_pkey" PRIMARY KEY ("passResultId")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackSet_beatmapSetId_key" ON "TrackSet"("beatmapSetId");

-- CreateIndex
CREATE UNIQUE INDEX "Track_beatmapId_key" ON "Track"("beatmapId");

-- CreateIndex
CREATE UNIQUE INDEX "PassResult_passResultId_key" ON "PassResult"("passResultId");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_trackSetId_fkey" FOREIGN KEY ("trackSetId") REFERENCES "TrackSet"("trackSetId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassResult" ADD CONSTRAINT "PassResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassResult" ADD CONSTRAINT "PassResult_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("trackId") ON DELETE RESTRICT ON UPDATE CASCADE;
