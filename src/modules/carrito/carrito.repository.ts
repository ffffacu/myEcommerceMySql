import { pool } from "../../lib/db";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";

interface Cart extends RowDataPacket {
    total: number;
    descuento: number;
    variacion: string;
    precio: number;
    precioPromocion: number;
}

const getCart = async (): Promise<Cart[]> => {
    const [rows] = await pool.execute<Cart[]>('SELECT carrito.total, carrito.descuento, variaciones.variacion, variaciones.precio,carrito_productos.cantidad,variaciones.precioPromocion FROM carrito_productos JOIN carrito ON carrito_productos.carrito_id = carrito.id JOIN variaciones ON carrito_productos.variacion_id = variaciones.id');
    return rows;
}

const getCartId = async (id: string): Promise<Cart | undefined> => {
    const [rows] = await pool.execute<Cart[]>('SELECT * FROM carrito WHERE id = ?', [id]);
    return rows[0];
}

const createCart = async (token: string): Promise<{ id: number; token: string; total: number; descuento: number }> => {
    const [result] = await pool.execute<ResultSetHeader>(
        'INSERT INTO carrito (token, total, descuento) VALUES (?, ?, ?)', 
        [token, 0, 0]
    );
    return {
        id: result.insertId,
        token,
        total: 0,
        descuento: 0
    };
};


const updateCart = async (id: number, data: Record<string, any>): Promise<object & { cart_id: number }> => {
    const fields = Object.keys(data);
    const values = Object.values(data);
    if (fields.length === 0) {
        throw new Error("No hay campos para actualizar");
    }
    const setClause = fields.map(field => `${field} = ?`).join(', ');

    const [result] = await pool.execute<ResultSetHeader>(
        `UPDATE carrito SET ${setClause} WHERE id = ?`,
        [...values, id]
    );
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para actualizar');
    }
    return { ...data, cart_id: id };
};


const deleteCart = async (id: string): Promise<{ message: string; cart_id: string }> => {
    const [result] = await pool.execute<ResultSetHeader>(
        'DELETE FROM carrito WHERE id = ?',
        [id]
    );
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el carrito para eliminar');
    }
    return { message: 'Carrito eliminado correctamente', cart_id: id };
}

const getCartByToken = async (token: string): Promise<Cart | undefined> => {
    const [rows] = await pool.execute<Cart[]>('SELECT * FROM carrito WHERE token = ?', [token]);
    return rows[0];
}

export default {
    getCart,
    getCartId,
    createCart,
    updateCart,
    deleteCart,
    getCartByToken
};


