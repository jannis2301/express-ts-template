import { ErrorRequestHandler } from 'express';
import { NODE_ENV } from '../config/envConfig.js';
import { ApplicationError } from '../errors/CustomError.js';

export const errorHandler: ErrorRequestHandler = (
  err,
  _req,
  res,
  _next
): void => {
  // Handle known custom errors
  if (err instanceof ApplicationError) {
    res.status(err.statusCode).json(err.serialize());
    return;
  }

  // Handle unexpected errors
  res.status(500).json({
    message: 'Internal Server Error',
    error: NODE_ENV !== 'production' ? err.message : undefined,
  });
};
