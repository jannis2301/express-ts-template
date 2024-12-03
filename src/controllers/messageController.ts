import { NextFunction, Request, Response } from 'express';

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json({ message: 'HELLO CRAZY WORLD!!! BLOB' });
  } catch (err) {
    next(err);
  }
};
