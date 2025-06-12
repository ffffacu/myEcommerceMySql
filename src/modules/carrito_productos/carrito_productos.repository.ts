import { pool } from "../../lib/db";
import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';

export interface CartProduct extends RowDataPacket {
    carrito_producto_id: number;
    cartnumber: string;
    product_id: string;
    quantity: number;
    price: number;
}

export interface ProductWithDetails extends CartProduct {
    name: string;
    description: string;
    product_price: number;
}

export interface NewCartProduct {
    carrito_producto_id: number;
    cartnumber: string;
    product_id: string;
    quantity: number;
    price: number;
}

const getCartProduct = async (): Promise<CartProduct[]> => {
    const [rows] = await pool.execute<CartProduct[]>('SELECT * FROM carrito_productos');
    return rows;
};

const getCartProductId = async (id: string): Promise<CartProduct | undefined> => {
    const [rows] = await pool.execute<CartProduct[]>(
        'SELECT * FROM carrito_productos WHERE carrito_producto_id = ?',
        [id]
    );
    return rows[0];
};

const createCartProduct = async (data: {
    cartnumber: string,
    product_id: string,
    quantity: number,
    price: number
}): Promise<NewCartProduct> => {
    const [result] = await pool.execute<ResultSetHeader>(
        'INSERT INTO carrito_productos (cartnumber, product_id, quantity, price) VALUES (?, ?, ?, ?)',
        [data.cartnumber, data.product_id, data.quantity, data.price]
    );
    return { ...data, carrito_producto_id: result.insertId };
};

const updateCartProduct = async (id: number, data: Partial<Omit<CartProduct, 'carrito_producto_id'>>): Promise<NewCartProduct> => {
    const [result] = await pool.execute<ResultSetHeader>(
        'UPDATE carrito_productos SET ? WHERE carrito_producto_id = ?',
        [data, id]
    );
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto del carrito');
    }
    return { ...data, carrito_producto_id: id } as NewCartProduct;
};

const deleteCartProduct = async (id: string): Promise<{ message: string; carrito_producto_id: string }> => {
    const [result] = await pool.execute<ResultSetHeader>(
        'DELETE FROM carrito_productos WHERE carrito_producto_id = ?',
        [id]
    );
    if (result.affectedRows === 0) {
        throw new Error('No se encontró el producto para eliminar');
    }
    return { message: 'Producto eliminado correctamente', carrito_producto_id: id };
};

const getProductsByCartId = async (cartId: string | undefined): Promise<ProductWithDetails[]> => {
    if (cartId === undefined) return [];
    else{
    const [rows] = await pool.execute<ProductWithDetails[]>(`
        SELECT cp.*, v.variacion, v.precio AS precio
        FROM carrito_productos cp
        JOIN variaciones v ON cp.variacion_id = v.id
        WHERE cp.carrito_id = ?
    `, [cartId]);

    return rows;
    }
};


export default {
    getCartProduct,
    getCartProductId,
    createCartProduct,
    updateCartProduct,
    deleteCartProduct,
    getProductsByCartId
};
