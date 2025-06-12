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
const getClientes = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM clientes");
    return rows;
});
const getClientesId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM clientes WHERE id = ?", [id]);
    return rows;
});
const crearCliente = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).join(", ");
    const placeholder = Object.keys(data).map(() => "?").join(", ");
    const valores = Object.values(data);
    const [rows] = yield db_1.pool.query(`INSERT INTO cliente (${columnas}) VALUES (${placeholder})`, valores);
    const id = rows.insertId;
    return getClientesId(id);
});
const actualizarCliente = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data);
    const valores = Object.values(data);
    const actualizar = columnas.map(columna => `${columna} = ?`).join(", ");
    valores.push(id);
    yield db_1.pool.query(`UPDATE clientes SET ${actualizar} WHERE id = ?`, valores);
    return getClientesId(id);
});
const borrarCliente = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query(`UPDATE clientes SET borrado = true WHERE id = ?`, id);
});
exports.default = { getClientes, getClientesId, crearCliente, actualizarCliente, borrarCliente };
