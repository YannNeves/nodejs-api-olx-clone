import { Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';

export const signin = async (req: Request, res: Response) => {
  res.status(200).json(true);
}

export const signup = async (req: Request, res: Response) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ error: errors.mapped() });
    return;
  }
  const data = matchedData(req);

  res.status(200).json({message: 'Sucesso ao cadastrar', data});
}