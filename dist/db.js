"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const config_1 = __importDefault(require("./config/config"));
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
const promise_1 = __importDefault(require("mysql2/promise"));
const testConnection = async () => {
    try {
        const connection = await promise_1.default.createConnection({
            host: config_1.default.DB_HOST,
            port: Number(config_1.default.DB_PORT),
            user: config_1.default.DB_USER,
            password: config_1.default.DB_PASSWORD,
            database: config_1.default.DB_DATABASE,
        });
        console.log('Conexión exitosa a la base de datos');
        await connection.end();
    }
    catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
};
exports.testConnection = testConnection;
