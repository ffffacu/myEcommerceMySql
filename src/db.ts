import { createPool } from "mysql2/promise";
import config from "./config/config";



export const pool = createPool({
    host: 'switchback.proxy.rlwy.net', // Host de la base de datos
    user: 'root', // Usuario
    password: 'rdMpfMjPjzdnlzmBUrRStAEPfjTlzxXA', // Contraseña
    port: 12592, // Puerto
    database: 'railway', // Nombre de la base de datos
});

