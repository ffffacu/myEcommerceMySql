import {pool} from "../../lib/db";
import { RowDataPacket } from "mysql2";


export interface Usuarios extends RowDataPacket{
    usuario: string
    contraseña: string
    sucursal_id: number
}


const getUsersLogin = async (data:{usuario:string, contraseña: string}) => {
    const { usuario, contraseña} = data
     const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ? ",[usuario, contraseña]); 
     return rows
    }


export default {getUsersLogin}