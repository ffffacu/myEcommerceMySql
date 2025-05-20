import "express";
import express from 'express';
import router from './routes/index.routes';
import { testConnection } from './lib/db';
//import { authenticatorToken } from './middlewares/authenticatorSession.middlewares';
import cookieParser from 'cookie-parser';
import env from "./config/config";
//import swaggerUiExpress from 'swagger-ui-express';
//import { specs } from './config/swagger.config';

import cors from 'cors';

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


//app.use(`/api-docs`, authenticatorToken(), swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
//app.use(`/api`,authenticatorToken(), router);


// Ruta de prueba
app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// Tus rutas reales
app.use('/api', router);

// Ruta 404
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Middleware de errores
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error capturado:', err.message);
  res.status(res.statusCode !== 200 ? res.statusCode : 500).json({
    error: err.message || 'Error interno del servidor',
  });
});

app.listen(env.PORT, () => {
  console.log(`Servidor corriendo correctamente`);
});
