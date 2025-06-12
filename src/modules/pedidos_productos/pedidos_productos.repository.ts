import {pool} from "../../lib/db";
import { RowDataPacket } from "mysql2";


export interface PedidoProducto extends RowDataPacket{
    pedido_id: number
    variacion_id: number
    cantidad: number
    subtotal: number
    total: number
}

const getPedidosProductos = async (): Promise<PedidoProducto[]> => {
    const [rows] = await pool.query<PedidoProducto[]>('SELECT * FROM pedidos_productos');
    return rows
    }

const getPedidosProductoPorPedidoId = async (pedidoId:number):  Promise<PedidoProducto[]> =>{
    const[rows] = await pool.query<PedidoProducto[]>('SELECT * FROM pedidos_productos WHERE pedido_id = ?', pedidoId);
    return rows
}

const crearPedidoProductos = async (data: PedidoProducto): Promise<void> =>{
    const columnas = Object.keys(data).join(', ');
    const placeholders = Object.keys(data).map(() => "?").join(', ');
    const valores = Object.values(data);
    await pool.query(`INSERT INTO pedidos_productos (${columnas}) VALUES(${placeholders})`, valores);
}



    export default { getPedidosProductos, getPedidosProductoPorPedidoId, crearPedidoProductos}