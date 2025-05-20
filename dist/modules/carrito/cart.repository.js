"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../lib/db");
// Obtener todos los carritos
const getCart = async () => {
    try {
        const [rows] = await db_1.pool.execute('SELECT * FROM carrito');
        return rows;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los carritos: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los carritos');
    }
};
// Obtener un carrito por ID
const getCartId = async (id) => {
    try {
        const [rows] = await db_1.pool.execute('SELECT * FROM carrito WHERE id = ?', [id]);
        return rows[0];
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener el carrito por ID: ' + error.message);
        }
        throw new Error('Error desconocido al obtener el carrito por ID');
    }
};
// Crear un carrito
const createCart = async (token) => {
    try {
        const [result] = await db_1.pool.execute('INSERT INTO carrito (token, total, descuento) VALUES (?, ?, ?)', [token, 0, 0]);
        return {
            cart_id: result.insertId,
            token,
            total: 0,
            descuento: 0
        };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al crear el carrito: ' + error.message);
        }
        throw new Error('Error desconocido al crear el carrito');
    }
};
// Actualizar carrito
const updateCart = async (id, data) => {
    try {
        const query = 'UPDATE carrito SET ? WHERE id = ?';
        const [result] = await db_1.pool.execute(query, [data, id]);
        if (result.affectedRows === 0) {
            throw new Error('No se encontró el carrito para actualizar');
        }
        return { ...data, cart_id: id };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al actualizar el carrito: ' + error.message);
        }
        throw new Error('Error desconocido al actualizar el carrito');
    }
};
// Eliminar un carrito
const deleteCart = async (id) => {
    try {
        const [result] = await db_1.pool.execute('DELETE FROM carrito WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            throw new Error('No se encontró el carrito para eliminar');
        }
        return { message: 'Carrito eliminado correctamente', cart_id: id };
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al eliminar el carrito: ' + error.message);
        }
        throw new Error('Error desconocido al eliminar el carrito');
    }
};
// Obtener carrito por token
const getCartByToken = async (token) => {
    try {
        const [rows] = await db_1.pool.execute('SELECT * FROM carrito WHERE token = ?', [token]);
        return rows[0];
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al buscar el carrito por token: ' + error.message);
        }
        throw new Error('Error desconocido al buscar el carrito por token');
    }
};
exports.default = { getCart, getCartId, createCart, updateCart, deleteCart, getCartByToken };
