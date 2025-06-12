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
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { producto_id, variacion, precio, precioPromocion, esPromocion, enEcommerce, imagen, estado = true, } = data;
    const [result] = yield db_1.pool.query(`INSERT INTO variaciones (producto_id, variacion, precio, precioPromocion, esPromocion, enEcommerce, imagen, estado)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [producto_id, variacion, precio, precioPromocion, esPromocion, enEcommerce, imagen, estado]);
    const id = result.insertId;
    return getById(id);
});
// READ ALL
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query(`SELECT * FROM variaciones WHERE estado = true`);
    return rows;
});
// READ ONE
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query(`SELECT * FROM variaciones WHERE id = ?`, [id]);
    return rows[0] || null;
});
// UPDATE
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = Object.keys(data);
    const values = Object.values(data);
    if (fields.length === 0)
        return null;
    const updates = fields.map(field => `${field} = ?`).join(", ");
    values.push(id);
    yield db_1.pool.query(`UPDATE variaciones SET ${updates} WHERE id = ?`, values);
    return getById(id);
});
// DELETE LÓGICO
const deleteOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.pool.query(`UPDATE variaciones SET estado = false WHERE id = ?`, [id]);
    return getById(id);
});
exports.default = { create, getAll, getById, update, deleteOne };
