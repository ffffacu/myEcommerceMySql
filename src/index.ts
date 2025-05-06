import express from 'express';
import router from './routes/index.routes';
import { pool, testConnection } from './db';
import config from './config/config';

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

app.use(`/api`, router);


app.use(`/`, async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT "hello world" as Result`);
    res.send(result);
  } catch (error) {
    console.error(`Error al conectar con la base de datos:${error}`);
    res.status(500).json({ error: 'No se pudo conectar con la base de datos' });
  }
});

app.use('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto`);
});
