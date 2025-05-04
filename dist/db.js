"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'switchback.proxy.rlwy.net', // Host de la base de datos
    user: 'root', // Usuario
    password: 'rdMpfMjPjzdnlzmBUrRStAEPfjTlzxXA', // Contraseña
    port: 12592, // Puerto
    database: 'railway', // Nombre de la base de datos
});
