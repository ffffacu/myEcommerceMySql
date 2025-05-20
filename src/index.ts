import "express";
import express from 'express';
import router from './routes/index.routes';
import { testConnection } from './lib/db';
import { authenticatorToken } from './middlewares/authenticatorSession.middlewares';
import cookieParser from 'cookie-parser';
//import env from "./config/config";
import swaggerUiExpress from 'swagger-ui-express';
import { specs } from './config/swagger.config';

import cors from 'cors';
const PORT = 3000
const app = express();
testConnection();
const corsOptions = {
  origin: '*', 
  credentials: true,  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(`/api-docs`, authenticatorToken(), swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(`/api`,authenticatorToken(), router);


app.listen(PORT, () => {
  console.log(`Servidor corriendo correctamente`);
});
