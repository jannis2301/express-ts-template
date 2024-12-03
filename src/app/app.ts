import express, { Application } from 'express';
import morgan from 'morgan';
import { NODE_ENV } from '../config/envConfig.js';
import messageRoutes from '../routes/messageRoutes.js';
import { ApplicationError } from '../errors/CustomError.js';
import { errorHandler } from '../middleware/errorHandler.js';

const app: Application = express();

// Middleware
if (NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Routes
app.use('/', messageRoutes);

// Show 404 Error, if any other route is selected
app.use('*', () => {
  throw new ApplicationError(
    'NotFoundError',
    `The page you are looking for doesn't exist`
  );
});

// Error handling middleware
app.use(errorHandler);

export default app;
