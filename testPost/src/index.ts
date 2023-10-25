import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import e from 'express';
interface ErrorResponse {
    error: string;
}

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

/**
 * Get all userTypes
 * @returns {UserType[]} - Array of userTypes
 * @throws {Error} - Throws error if userTypes cannot be retrieved
*/
app.get('/userType', async (req: Request, res: Response) => {
    try {
        const users = await prisma.userType.findMany();
        res.json(users);
    } catch (error) {
        const errorResponse: ErrorResponse = {
            error: "Internal server error"
        };
        res.status(500).json(errorResponse);
    }
    }
);

/**
 * Post api for creating a new userType
 * @returns {User[]} - Array of userTypes
 * @throws {Error} - Throws error if userType cannot be retrieved
*/
app.post('/userType', async (req: Request, res: Response) => {
    const {userTypeName, userTypeDesc} = req.body;
    if (!userTypeName || !userTypeDesc) {
        const errorResponse: ErrorResponse = {
            error: "Missing required fields"
        };
        res.status(400).json(errorResponse);
        return;
    }

    try{
        const newUserType = await prisma.userType.create({
            data: {
                userTypeName,
                userTypeDesc
            }
        });
        res.status(201).json(newUserType);
    }catch(error){
        const errorResponse: ErrorResponse = {
            error: "Internal server error"
        };
        res.status(500).json(errorResponse);
    }
});

/**
 * Delete api for deleting a userType
 * @throws {Error} - Throws error if userType cannot be retrieved
 */

app.delete('/userType/:userTypeName', async (req: Request, res: Response) => {
    try{
        const userTypeName = req.params.userTypeName;
        const deletedUserType = await prisma.userType.delete({
            where: {
                userTypeName: userTypeName
            }
        });
        res.status(200).json(deletedUserType);
    }catch(error){
        const errorResponse: ErrorResponse = {
            error: "Internal server error"
        };
        res.status(500).json(errorResponse);
    }
});

/**
 * Listen on port 3000
 */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });