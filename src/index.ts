import express from 'express';
import router from './routes/index.routes';
import { pool } from './db';
import config from './config/config';
import path from 'path';
import favicon from 'serve-favicon';

const app = express();


app.use(express.static(path.join(__dirname, 'public'))); 
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); 


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

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${config.PORT}`);
});
