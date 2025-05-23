"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.testConnection = testConnection;
const promise_1 = require("mysql2/promise");
const config_1 = __importDefault(require("../config/config"));
exports.pool = (0, promise_1.createPool)({
    host: config_1.default.DB_HOST,
    user: config_1.default.DB_USER,
    password: config_1.default.DB_PASSWORD,
    port: Number(config_1.default.DB_PORT),
    database: config_1.default.DB_DATABASE,
});
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield exports.pool.getConnection();
            console.log('Conexión exitosa a la base de datos');
            connection.release();
        }
        catch (err) {
            console.error('Error de conexión a la base de datos:', err);
        }
    });
}
