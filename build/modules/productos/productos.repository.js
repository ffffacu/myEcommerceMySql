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
const getProductos = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const offset = (page - 1) * limit;
    const [rows] = yield db_1.pool.query("SELECT * FROM products WHERE estado = true LIMIT ? OFFSET ?", [limit, offset]);
    return rows;
});
const getProductosPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query("SELECT * FROM products WHERE id = ? AND estado = true", [id]);
    return rows[0];
});
const crearProducto = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const columnas = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const valores = Object.values(data);
    const [result] = yield db_1.pool.query(`INSERT INTO products (${columnas}) VALUES (${placeholders})`, valores);
    const newProductId = result.insertId;
    return getProductosPorId(newProductId);
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = Object.keys(data);
    const values = Object.values(data);
    if (fields.length === 0)
        return null;
    const updates = fields.map(field => `${field} = ?`).join(", ");
    values.push(id);
    yield db_1.pool.query(`UPDATE products SET ${updates} WHERE id = ?`, values);
    return getProductosPorId(id);
});
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query("UPDATE products SET estado = false WHERE id = ?", [id]);
    return getProductosPorId(id);
});
exports.default = {
    getProductos,
    getProductosPorId,
    crearProducto,
    update,
    deleteOne,
};
