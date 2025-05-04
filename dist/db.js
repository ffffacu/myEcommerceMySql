"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const config_1 = __importDefault(require("./config/config"));
exports.pool = (0, promise_1.createPool)({
    host: config_1.default.DB_HOST,
    user: config_1.default.DB_USER,
    password: config_1.default.DB_PASSWORD,
    port: Number(config_1.default.DB_PORT),
    database: config_1.default.DB_DATABASE,
});
async function testConnection() {
    try {
        // Obtiene la conexión usando `await`
        const connection = await exports.pool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        // Aquí puedes realizar las operaciones con la base de datos
        // Finalmente, libera la conexión
        connection.release();
    }
    catch (err) {
        console.error('Error de conexión a la base de datos:', err);
    }
}
// Llama a la función para probar la conexión
testConnection();
