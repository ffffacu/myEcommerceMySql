import { pool } from "../../lib/db";
import { RowDataPacket } from "mysql2";

export interface Marcas extends RowDataPacket{
    nombre: string
    imagen:string
}

const getMarcas = async (): Promise<Marcas[]> =>{
    const [rows] = await pool.query<Marcas[]>("SELECT * FROM marcas");
    return rows
}

const getMarcasId = async (id:number): Promise<Marcas[]> =>{
    const [rows]:any= await pool.query("SELECT * FROM marcas WHERE id = ?",[id])
    return rows
}

const crearMarcas = async (data: Marcas): Promise<Marcas[]> =>{
    const columnas = Object.keys(data).join(", ");
    const placeholders = Object.values(data).map(()=> "?").join(", ");
    const valores = Object.values(data);
    const result = await pool.execute(`INSERT INTO marcas (${columnas}) VALUES (${placeholders})`, valores)
    const id = (result as any).insertId;
    return getMarcasId(id)
}

const actualizarMarcas = async (id:number, data: Object): Promise<Marcas[]> =>{
    const columnas = Object.keys(data)
    const valores = Object.values(data);
    const queryActualizar = columnas.map(columnas => `${columnas} = ?`).join(", ");
    await pool.query(`UPDATE marcas SET ${queryActualizar} WHERE id = ${id}`,valores);
    return getMarcasId(id)
}

const borrarMarcas = async(id:number): Promise<void> =>{
    await pool.query(`UPDATE marcas SET borrado = false WHERE id = ?`,[id])
}
export default { getMarcas, getMarcasId, crearMarcas, actualizarMarcas, borrarMarcas};