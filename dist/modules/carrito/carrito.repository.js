"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
const getCart = async () => {
    const [rows] = await db_1.pool.execute('SELECT * FROM carrito');
    return rows;
};
const getCartId = async (id) => {
    const [rows] = await db_1.pool.execute('SELECT * FROM carrito WHERE id = ?', [id]);
    return rows[0];
};
const createCart = async (token) => {
    const [result] = await db_1.pool.execute('INSERT INTO carrito (token, total, descuento) VALUES (?, ?, ?)', [token, 0, 0]);
    return {
        id: result.insertId, // Ahora estamos usando 'id' que es el nombre de la columna en la base de datos
        token,
        total: 0,
        descuento: 0
    };
};
const updateCart = async (id, data) => {
    const [result] = await db_1.pool.execute('UPDATE carrito SET ? WHERE id = ?', [data, id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para actualizar');
    }
    return { ...data, cart_id: id };
};
const deleteCart = async (id) => {
    const [result] = await db_1.pool.execute('DELETE FROM carrito WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para eliminar');
    }
    return { message: 'Carrito eliminado correctamente', cart_id: id };
};
const getCartByToken = async (token) => {
    const [rows] = await db_1.pool.execute('SELECT * FROM carrito WHERE token = ?', [token]);
    return rows[0];
};
exports.default = {
    getCart,
    getCartId,
    createCart,
    updateCart,
    deleteCart,
    getCartByToken
};
