"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, db_1.testConnection)();
const PUERTO = 3000;
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/api`, index_routes_1.default);
app.use('/health', (req, res) => {
    res.status(200).send('OK');
});
app.use(`/`, async (req, res) => {
    try {
        const [result] = await db_1.pool.query(`SELECT "hello world" as Result`);
        res.send(result);
    }
    catch (error) {
        console.error(`Error al conectar con la base de datos:${error}`);
        res.status(500).json({ error: 'No se pudo conectar con la base de datos' });
    }
});
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto`);
});
