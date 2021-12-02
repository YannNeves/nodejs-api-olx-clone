import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fileupload from 'express-fileupload';
import path from 'path';
import { mongoConnect } from './database/mongo';
const apiRoutes = require('./routes');

dotenv.config();

const server = express();

mongoConnect();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());

server.use(express.static(path.join(__dirname, '../public')));

server.use('/', apiRoutes);

server.listen(process.env.PORT, () => {
  console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
