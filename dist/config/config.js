"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'mysql.railway.internal';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '1560067488';
const DB_DATABASE = process.env.DB_DATABASE || 'myEcommerce';
const DB_PORT = process.env.DB_PORT || 3306;
exports.default = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT };
