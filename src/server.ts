import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';
import { mongoConnect } from './database/mongo';

dotenv.config();

const server = express();

mongoConnect();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(path.join(__dirname, '../public')));

server.get('/ping', (req: Request, res: Response) => res.json({ pong: true }));

server.listen(process.env.PORT, () => {
  console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
