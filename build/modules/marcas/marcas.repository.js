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
const getMarcas = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM marcas");
    return rows;
});
const getMarcasId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM marcas WHERE id = ?", [id]);
    return rows;
});
const crearMarcas = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).join(", ");
    const placeholders = Object.values(data).map(() => "?").join(", ");
    const valores = Object.values(data);
    const result = yield db_1.pool.execute(`INSERT INTO marcas (${columnas}) VALUES (${placeholders})`, valores);
    const id = result.insertId;
    return getMarcasId(id);
});
const actualizarMarcas = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data);
    const valores = Object.values(data);
    const queryActualizar = columnas.map(columnas => `${columnas} = ?`).join(", ");
    yield db_1.pool.query(`UPDATE marcas SET ${queryActualizar} WHERE id = ${id}`, valores);
    return getMarcasId(id);
});
const borrarMarcas = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query(`UPDATE marcas SET borrado = false WHERE id = ?`, [id]);
});
exports.default = { getMarcas, getMarcasId, crearMarcas, actualizarMarcas, borrarMarcas };
