import express, { Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';
import { mongoConnect } from './database/mongo';
import apiRoutes from './routes/api';
import passport from 'passport';

dotenv.config();

const server = express();

mongoConnect();

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileupload());
server.use(passport.initialize());

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  err.status ? res.status(err.status) : res.status(400);
  err.message ? res.json({ error: err.message }) : res.status(400).json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);

server.listen(process.env.PORT, () => {
  console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
