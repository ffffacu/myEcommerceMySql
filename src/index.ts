import express from 'express';
import router from './routes/index.routes';
import {pool} from './db';
import config from './config/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(`/api`, router)
app.use(`/ping`, async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as Result`)
  res.send(result)
})

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${config.PORT}`);
});
