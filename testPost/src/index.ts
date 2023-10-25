import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/userType', async (req: Request, res: Response) => {
  const users = await prisma.userType.findMany();
  res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });