import { pool } from "../../lib/db";
import { RowDataPacket } from "mysql2";

export interface Variaciones extends RowDataPacket{
  producto_id: number
  variacion: string
  precio: number
  precioPromocion?: number
  esPromocion: boolean
  enEcommerce: boolean
  imagen?:string
  estado: boolean
}

const create = async (data: Variaciones)  => {
   const columnas = Object.keys(data).join(", ");
   const placeholder = Object.keys(data).map(()=> "?").join(",");
   const valores = Object.values(data);
  const [result] = await pool.query(
    `INSERT INTO variaciones (${columnas})
     VALUES (${placeholder})`,
    valores
  );

  const id = (result as any).insertId;
  return getById(id);
};

// READ ALL
const getAll = async ():  Promise<Variaciones[]>  => {
  const [rows] = await pool.query<Variaciones[]>(`SELECT * FROM variaciones WHERE estado = true`);
  return rows;
};

// READ ONE
const getById = async (id: number) => {
  const [rows]: any = await pool.query(`SELECT * FROM variaciones WHERE id = ?`, [id]);
  return rows[0] || null;
};

// UPDATE
const update = async (id: number, data: any) => {
  const fields = Object.keys(data);
  const values = Object.values(data);

  if (fields.length === 0) return null;

  const updates = fields.map(field => `${field} = ?`).join(", ");
  values.push(id);

  await pool.query(`UPDATE variaciones SET ${updates} WHERE id = ?`, values);
  return getById(id);
};

// DELETE LÓGICO
const deleteOne = async (id: number) => {
  await pool.query(`UPDATE variaciones SET estado = false WHERE id = ?`, [id]);
  return getById(id);
};

export default { create, getAll, getById, update, deleteOne };
