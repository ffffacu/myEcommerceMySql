import express from 'express';
import router from './routes/index.routes';
import {pool} from './db';
import config from './config/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(`/api`, router)
app.get('/', (req, res) => {
  res.send('API funcionando sin conexión a DB');
});

app.listen(config.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${config.PORT}`);
});
