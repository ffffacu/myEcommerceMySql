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
const getCart = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT carrito.id,carrito.total, carrito.descuento, variaciones.variacion, variaciones.precio,carrito_productos.cantidad,variaciones.precioPromocion FROM carrito_productos JOIN carrito ON carrito_productos.carrito_id = carrito.id JOIN variaciones ON carrito_productos.variacion_id = variaciones.id');
    return rows;
});
const getCartId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM carrito WHERE id = ?', [id]);
    return rows[0];
});
const createCart = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.execute('INSERT INTO carrito (token, total, descuento) VALUES (?, ?, ?)', [token, 0, 0]);
    return {
        id: result.insertId,
        token,
        total: 0,
        descuento: 0
    };
});
const updateCart = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = Object.keys(data);
    const values = Object.values(data);
    if (fields.length === 0) {
        throw new Error("No hay campos para actualizar");
    }
    const setClause = fields.map(field => `${field} = ?`).join(', ');
    const [result] = yield db_1.pool.execute(`UPDATE carrito SET ${setClause} WHERE id = ?`, [...values, id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para actualizar');
    }
    return Object.assign(Object.assign({}, data), { cart_id: id });
});
const deleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.execute('DELETE FROM carrito WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para eliminar');
    }
    return { message: 'Carrito eliminado correctamente', cart_id: id };
});
const getCartByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM carrito WHERE token = ?', [token]);
    return rows[0];
});
exports.default = {
    getCart,
    getCartId,
    createCart,
    updateCart,
    deleteCart,
    getCartByToken
};
