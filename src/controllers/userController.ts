import { Request, Response } from 'express';
import State from '../models/State';

export const getStates = async (req: Request, res: Response) => {
  let states = await State.find({});
  res.status(200).json({ states });
}

export const info = async (req: Request, res: Response) => {
  res.status(200).json(true);
}

export const editAction = async (req: Request, res: Response) => {
  res.status(200).json(true);
}