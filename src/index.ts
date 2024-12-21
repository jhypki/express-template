import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import errorHandler from './middlewares/error-handler';
import logger from './middlewares/logger';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app: Express = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(logger);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: 'Not Found',
        statusCode: 404
    });
    next();
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
