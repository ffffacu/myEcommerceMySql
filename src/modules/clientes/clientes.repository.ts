import {pool} from "../../lib/db";
import { RowDataPacket } from "mysql2";


export interface Clientes extends RowDataPacket {
    nombre: string
    apellido: string
    dni: number
    cumpleaños: Date
    direccion:string
    email:string
    telefono:number
    observacion?: string
    suscripcion: boolean
}


const getClientes = async (): Promise<Clientes[]> =>{
    const [rows] = await pool.query<Clientes[]>("SELECT * FROM clientes");
    return rows
}

const getClientesId = async (id:number): Promise<Clientes[]> =>{
    const [rows] = await pool.query<Clientes[]>("SELECT * FROM clientes WHERE id = ?",[id]);
    return rows
}

const crearCliente = async (data:Clientes) =>{
    const columnas = Object.keys(data).join(", ");
    const placeholder  = Object.keys(data).map(() => "?").join(", ");
    const valores = Object.values(data);
    const [rows] =await pool.query(`INSERT INTO cliente (${columnas}) VALUES (${placeholder})`,valores);
    const id = (rows as any).insertId;
    return getClientesId(id)
}

const actualizarCliente = async (id:number, data:object) =>{
    const columnas = Object.keys(data);
    const valores = Object.values(data);
    const actualizar = columnas.map(columna => `${columna} = ?` ).join(", ");
    valores.push(id)
    await pool.query(`UPDATE clientes SET ${actualizar} WHERE id = ?`,valores);
    return getClientesId(id)
}

const borrarCliente = async (id: number)  =>{
    await pool.query(`UPDATE clientes SET borrado = true WHERE id = ?`, id)
}


export default{ getClientes, getClientesId, crearCliente, actualizarCliente, borrarCliente}