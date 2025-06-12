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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
const getPedidosProductos = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query('SELECT * FROM pedidos_productos');
    return rows;
});
const getPedidosProductoPorPedidoId = (pedidoId) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query('SELECT * FROM pedidos_productos WHERE pedido_id = ?', pedidoId);
    return rows;
});
const crearPedidoProductos = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => "?").join(', ');
    const valores = Object.values(data);
    yield db_1.pool.query(`INSERT INTO pedidos_productos (${columnas}) VALUES(${placeholders})`, valores);
});
exports.default = { getPedidosProductos, getPedidosProductoPorPedidoId, crearPedidoProductos };
