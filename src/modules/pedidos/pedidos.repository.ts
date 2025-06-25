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
    const [rows] = await pool.query<Pedido[]>(`
SELECT 
  p.id AS pedido_id,
  c.nombre,
  c.apellido,
  c.dni,
  p.pago,
  p.direccion,
  p.delivery,
  p.total,
  p.observacion,
  p.finalizado,
  GROUP_CONCAT(
    CONCAT(
      v.variacion, ' x', pd.cantidad,
      ' ($', pd.subtotal, ')'
    ) SEPARATOR ' | '
  ) AS productos
FROM pedidos_productos pd
JOIN pedidos p ON pd.pedido_id = p.id
JOIN variaciones v ON pd.variacion_id = v.id
JOIN clientes c ON p.cliente_id = c.id
WHERE p.finalizado = false
GROUP BY p.id
ORDER BY p.id ASC;
`);
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
    await pool.query("UPDATE pedidos SET finalizado = true WHERE id = ?",id)
}
export default { getPedidos, getPedidoId, crearPedido, finalizarPedido}