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
const getCartProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM carrito_productos');
    return rows;
});
const getCartProductId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.execute('SELECT * FROM carrito_productos WHERE carrito_producto_id = ?', [id]);
    return rows[0];
});
const createCartProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.execute('INSERT INTO carrito_productos (cartnumber, product_id, quantity, price) VALUES (?, ?, ?, ?)', [data.cartnumber, data.product_id, data.quantity, data.price]);
    return Object.assign(Object.assign({}, data), { carrito_producto_id: result.insertId });
});
const updateCartProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.execute('UPDATE carrito_productos SET ? WHERE carrito_producto_id = ?', [data, id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto del carrito');
    }
    return Object.assign(Object.assign({}, data), { carrito_producto_id: id });
});
const deleteCartProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [result] = yield db_1.pool.execute('DELETE FROM carrito_productos WHERE carrito_producto_id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto para eliminar');
    }
    return { message: 'Producto eliminado correctamente', carrito_producto_id: id };
});
const getProductsByCartId = (cartId) => __awaiter(void 0, void 0, void 0, function* () {
    if (cartId === undefined)
        return [];
    else {
        const [rows] = yield db_1.pool.execute(`
        SELECT cp.*, v.variacion, v.precio AS precio
        FROM carrito_productos cp
        JOIN variaciones v ON cp.variacion_id = v.id
        WHERE cp.carrito_id = ?
    `, [cartId]);
        return rows;
    }
});
exports.default = {
    getCartProduct,
    getCartProductId,
    createCartProduct,
    updateCartProduct,
    deleteCartProduct,
    getProductsByCartId
};
