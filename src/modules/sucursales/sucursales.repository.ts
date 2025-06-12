import {pool} from "../../lib/db"
import { RowDataPacket} from "mysql2"

export interface Sucursal extends RowDataPacket{
    nombre: string,
    direccion: string,
    telefono: number,
    email: string,
    mercadopago:string,
    cerrado: boolean
}

const getSucursales = async (): Promise<Sucursal[]> =>{
   const[rows]= await pool.execute<Sucursal[]>('SELECT * FROM sucursales');
   return rows
}

const getSucursalId = async (id: number): Promise <Sucursal[]> =>{
    const [rows] = await pool.execute<Sucursal[]>('SELECT * FROM sucursales WHERE id = ?', [id]);
    return rows
}

const crearSucursal = async (data:Sucursal):  Promise <void> =>{
    const columnas = Object.keys(data).join(', ')
    const placeholders = Object.keys(data).map(() => '?').join(', ');
    const valores = Object.values(data);
    await pool.execute(
        `INSERT INTO sucursales (${columnas}) VALUES (${ placeholders})`,
        valores);
}

const actualizarSucursal = async (id: number, data: Partial<Sucursal>):Promise <Sucursal[] | null> =>{
    const columnas = Object.keys(data).map(campo => `${campo} = ?`).join(', ')
    const valores = Object.values(data);
    if (columnas.length === 0) return null;
    await pool.execute <Sucursal[]>(`UPDATE sucursales SET ${columnas} WHERE id= ?`,[...valores,id])
    const [rows] = await pool.execute<Sucursal[]>('SELECT * FROM sucursales WHERE id = ?', [id]);
    return rows.length > 0 ? rows : null

} 

const borrarSucursal = async (id: number): Promise<void>=>{
     await pool.execute <Sucursal[]>(`UPDATE sucursales SET borrado = false WHERE id= ?`,[id])
}
export default {getSucursales, getSucursalId, actualizarSucursal, borrarSucursal, crearSucursal}