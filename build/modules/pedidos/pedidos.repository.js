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
const getPedidos = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM pedidos");
    return rows;
});
const getPedidoId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM pedidos WHERE id = ?", [id]);
    return rows;
});
const crearPedido = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columna = Object.keys(data).join(", ");
    const placeholders = Object.values(data).map(() => '?').join(", ");
    const valores = Object.values(data);
    const result = yield db_1.pool.query(`INSERT INTO pedidos (${columna}) VALUES (${placeholders})`, valores);
    const id = result.insertId;
    return getPedidoId(id);
});
exports.default = { getPedidos, getPedidoId, crearPedido };
