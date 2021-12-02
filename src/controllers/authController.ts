import { Request, Response } from 'express';

export const signin = async (req: Request, res: Response) => {
  res.status(200).json(true);
}

export const signup = async (req: Request, res: Response) => {
  res.status(200).json(true);
}