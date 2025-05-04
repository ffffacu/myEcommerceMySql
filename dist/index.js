"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/api`, index_routes_1.default);
app.get('/', (req, res) => {
    res.send('API funcionando sin conexión a DB');
});
app.listen(config_1.default.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${config_1.default.PORT}`);
});
