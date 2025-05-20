import "express";
import express from 'express';
import router from './routes/index.routes';
import { testConnection } from './lib/db';
import { authenticatorToken } from './middlewares/authenticatorSession.middlewares';
import cookieParser from 'cookie-parser';
import env from "./config/config";
import swaggerUiExpress from 'swagger-ui-express';
import { specs } from './config/swagger.config';

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


app.use(`/api-docs`, authenticatorToken(), swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
app.use(`/api`,authenticatorToken(), router);


app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Ruta de prueba para verificar si el server responde
app.get('/ping', (_req, res) => {
  res.json({ message: 'pong' });
});

// Rutas principales
app.use('/api', router);

// Captura rutas no encontradas (404)
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Middleware de manejo de errores
app.use((err:any, req:any, res:any, _next:any) => {
  console.error(`❌ ERROR en ${req.method} ${req.originalUrl}`);
  console.error(err.stack);

  res.status(res.statusCode !== 200 ? res.statusCode : 500).json({
    error: err.message || 'Error interno del servidor',
  });
});

app.listen(env.PORT, () => {
  console.log(`Servidor corriendo correctamente`);
});
