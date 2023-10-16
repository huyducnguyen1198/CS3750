-- CreateTable
CREATE TABLE "UserType" (
    "userTypeName" TEXT NOT NULL,
    "userTypeDesc" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "userTypeName" TEXT NOT NULL,
    "totalPlayTime" INTEGER NOT NULL,
    "exp" INTEGER NOT NULL,
    "pp" INTEGER NOT NULL,
    "stars" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Auth" (
    "authId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("authId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserType_userTypeName_key" ON "UserType"("userTypeName");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Auth_authId_key" ON "Auth"("authId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeName_fkey" FOREIGN KEY ("userTypeName") REFERENCES "UserType"("userTypeName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Auth" ADD CONSTRAINT "Auth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
