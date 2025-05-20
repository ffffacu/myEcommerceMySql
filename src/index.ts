import "express";
import express from 'express';
import router from './routes/index.routes';
import { testConnection } from './lib/db';
//import { authenticatorToken } from './middlewares/authenticatorSession.middlewares';
import cookieParser from 'cookie-parser';
import swaggerUiExpress from 'swagger-ui-express';
import { specs } from './config/swagger.config';

import cors from 'cors';

const app = express();
testConnection();
const PUERTO = 3000;
const corsOptions = {
  origin: '*', 
  credentials: true,  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use(`/api-docs`, swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(`/api`, router);



app.listen(PUERTO, () => {
  console.log(`Servidor corriendo correctamente`);
});
