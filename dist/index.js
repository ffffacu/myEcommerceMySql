"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const db_1 = require("./lib/db");
const authenticatorSession_middlewares_1 = require("./middlewares/authenticatorSession.middlewares");
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
app.get('/productos', (0, authenticatorSession_middlewares_1.authenticatorToken)(), async (req, res) => {
    try {
        // Realizamos la consulta SQL para obtener los productos
        const [rows] = await db_1.pool.execute('SELECT * FROM productos');
        res.json(rows); // Enviamos los productos como respuesta en formato JSON
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});
app.use(`/api`, index_routes_1.default);
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo correctamente`);
});
