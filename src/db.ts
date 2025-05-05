import { createPool, PoolConnection } from "mysql2/promise";
import config from "./config/config";

/*export const pool = createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: Number(config.DB_PORT) ,
    database: config.DB_DATABASE,
});

export async function testConnection() {
    try {
        // Obtiene la conexión usando `await`
        const connection: PoolConnection = await pool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        
        // Aquí puedes realizar las operaciones con la base de datos

        // Finalmente, libera la conexión
        connection.release();
    } catch (err) {
        console.error('Error de conexión a la base de datos:', err);
    }
}*/

import mysql from 'mysql2/promise';

export const testConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: config.DB_HOST,
      port: Number(config.DB_PORT),
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
    });

    console.log('Conexión exitosa a la base de datos');
    await connection.end();
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};




