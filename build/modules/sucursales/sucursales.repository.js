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
const getSucursales = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM sucursales');
    return rows;
});
const getSucursalId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM sucursales WHERE id = ?', [id]);
    return rows;
});
const crearSucursal = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const valores = Object.values(data);
    yield db_1.pool.execute(`INSERT INTO sucursales (${columnas}) VALUES (${placeholders})`, valores);
});
const actualizarSucursal = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).map(campo => `${campo} = ?`).join(', ');
    const valores = Object.values(data);
    if (columnas.length === 0)
        return null;
    yield db_1.pool.execute(`UPDATE sucursales SET ${columnas} WHERE id= ?`, [...valores, id]);
    const [rows] = yield db_1.pool.execute('SELECT * FROM sucursales WHERE id = ?', [id]);
    return rows.length > 0 ? rows : null;
});
const borrarSucursal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.execute(`UPDATE sucursales SET borrado = false WHERE id= ?`, [id]);
});
exports.default = { getSucursales, getSucursalId, actualizarSucursal, borrarSucursal, crearSucursal };
