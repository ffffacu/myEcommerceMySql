"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
const getCartProduct = async () => {
    const [rows] = await db_1.pool.execute('SELECT * FROM carrito_productos');
    return rows;
};
const getCartProductId = async (id) => {
    const [rows] = await db_1.pool.execute('SELECT * FROM carrito_productos WHERE carrito_producto_id = ?', [id]);
    return rows[0];
};
const createCartProduct = async (data) => {
    const [result] = await db_1.pool.execute('INSERT INTO carrito_productos (cartnumber, product_id, quantity, price) VALUES (?, ?, ?, ?)', [data.cartnumber, data.product_id, data.quantity, data.price]);
    return { ...data, carrito_producto_id: result.insertId };
};
const updateCartProduct = async (id, data) => {
    const [result] = await db_1.pool.execute('UPDATE carrito_productos SET ? WHERE carrito_producto_id = ?', [data, id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto del carrito');
    }
    return { ...data, carrito_producto_id: parseInt(id, 10) };
};
const deleteCartProduct = async (id) => {
    const [result] = await db_1.pool.execute('DELETE FROM carrito_productos WHERE carrito_producto_id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto para eliminar');
    }
    return { message: 'Producto eliminado correctamente', carrito_producto_id: id };
};
const getProductsByCartId = async (cartId) => {
    if (cartId === undefined)
        return [];
    else {
        const [rows] = await db_1.pool.execute(`
        SELECT cp.*, v.name, v.description, v.price AS product_price
        FROM carrito_productos cp
        JOIN variaciones v ON cp.variacion_id = v.variacion_id
        WHERE cp.cart_id = ?
    `, [cartId]);
        return rows;
    }
};
exports.default = {
    getCartProduct,
    getCartProductId,
    createCartProduct,
    updateCartProduct,
    deleteCartProduct,
    getProductsByCartId
};
