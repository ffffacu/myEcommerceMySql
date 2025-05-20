"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express");
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const db_1 = require("./lib/db");
//import { authenticatorToken } from './middlewares/authenticatorSession.middlewares';
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = __importDefault(require("./config/config"));
//import swaggerUiExpress from 'swagger-ui-express';
//import { specs } from './config/swagger.config';
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
(0, db_1.testConnection)();
const corsOptions = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
//app.use(`/api-docs`, authenticatorToken(), swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
//app.use(`/api`,authenticatorToken(), router);
// Ruta de prueba
app.get('/ping', (_req, res) => {
    res.json({ message: 'pong' });
});
// Tus rutas reales
app.use('/api', index_routes_1.default);
// Ruta 404
app.use((req, res, next) => {
    const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
    res.status(404);
    next(error);
});
// Middleware de errores
app.use((err, _req, res, _next) => {
    console.error('Error capturado:', err.message);
    res.status(res.statusCode !== 200 ? res.statusCode : 500).json({
        error: err.message || 'Error interno del servidor',
    });
});
app.listen(config_1.default.PORT, () => {
    console.log(`Servidor corriendo correctamente`);
});
