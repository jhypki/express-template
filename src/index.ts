import express, { Express, NextFunction, Request, Response } from 'express';
import errorHandler from './middlewares/error-handler';
import logger from './middlewares/logger';
import { PORT } from './config/env';

const app: Express = express();

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
