"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express");
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const db_1 = require("./lib/db");
const authenticatorSession_middlewares_1 = require("./middlewares/authenticatorSession.middlewares");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//import env from "./config/config";
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_config_1 = require("./config/swagger.config");
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
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
app.use(`/api-docs`, (0, authenticatorSession_middlewares_1.authenticatorToken)(), swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_config_1.specs));
app.use(`/api`, (0, authenticatorSession_middlewares_1.authenticatorToken)(), index_routes_1.default);
app.listen(PORT, () => {
    console.log(`Servidor corriendo correctamente`);
});
