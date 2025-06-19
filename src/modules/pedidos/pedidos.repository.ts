import {pool} from "../../lib/db";
import { RowDataPacket } from "mysql2";

export interface Pedido extends RowDataPacket{
    sucursal_id: number
    cliente_id: number
    pago: string
    delivery: boolean
    direccion: string
    total: number
    total_pedido: number
    observacion: string
    cancelado: boolean
    finalizado: boolean
    pedido_pagado: boolean
}


const getPedidos = async (): Promise<Pedido[]> =>{
    const [rows] = await pool.query<Pedido[]>("SELECT * FROM pedidos");
    return rows
}

const getPedidoId = async(id:number): Promise<Pedido[]> =>{
    const [rows] = await pool.query<Pedido[]>("SELECT * FROM pedidos WHERE id = ?", [id]);
    return rows
}

const crearPedido = async (data: Pedido): Promise<Pedido[]> =>{
    const columna = Object.keys(data).join(", ");
    const placeholders = Object.values(data).map(()=> '?').join(", ");
    const valores = Object.values(data);
    const result = await pool.query(`INSERT INTO pedidos (${columna}) VALUES (${placeholders})`,valores)
    const id = (result as any).insertId;
    return getPedidoId(id)
}

const finalizarPedido = async(id:number)=>{
    await pool.query("UPDATE pedidos SET finalizado = true WHERE id = id",id)
}
export default { getPedidos, getPedidoId, crearPedido, finalizarPedido}