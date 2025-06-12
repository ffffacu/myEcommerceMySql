import {pool} from "../../lib/db";
import { RowDataPacket } from "mysql2";

export interface Producto extends RowDataPacket{
   nombre: string;
  marca_id: number;
  categoria_id: number;
  descripcion: string;
  imagen: string;
  singluten: boolean;
  esCombo: boolean;
}


const getProductos = async ( options: { page?: number; limit?: number }) => {
  const page = options.page || 1;
  const limit = options.limit || 10;
  const offset = (page - 1) * limit;

  const [rows]: any = await pool.query(
    "SELECT * FROM products WHERE estado = true LIMIT ? OFFSET ?",
    [limit, offset]
  );
  return rows;
};

const getProductosPorId = async (id: number):Promise<Producto> =>{
  const [rows]: any = await pool.query(
    "SELECT * FROM products WHERE id = ? AND estado = true",
    [id]
  );
  return rows[0];
};


const crearProducto = async (data: object) => {
  const columnas = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map(() => '?').join (', ');
  const valores = Object.values(data);

  const [result]: any = await pool.query(`INSERT INTO products (${columnas}) VALUES (${placeholders})`,valores);
  const newProductId = result.insertId;
  return getProductosPorId(newProductId);
};

const update = async (id: number, data: object) => {
  const fields = Object.keys(data);
  const values = Object.values(data);

  if (fields.length === 0) return null;

  const updates = fields.map(field => `${field} = ?`).join(", ");
  values.push(id);

  await pool.query(`UPDATE products SET ${updates} WHERE id = ?`, values);

  return getProductosPorId(id);
};

const deleteOne = async (id: number) => {
  await pool.query("UPDATE products SET estado = false WHERE id = ?", [id]);
  return getProductosPorId(id);
};

export default {
  getProductos,
  getProductosPorId,
  crearProducto,
  update,
  deleteOne,
};