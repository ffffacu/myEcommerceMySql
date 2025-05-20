import {pool} from "../../lib/db";


const getProducts = async ( options: { page?: number; limit?: number }) => {
  const page = options.page || 1;
  const limit = options.limit || 10;
  const offset = (page - 1) * limit;

  const [rows]: any = await pool.query(
    "SELECT * FROM products WHERE estado = true LIMIT ? OFFSET ?",
    [limit, offset]
  );
  return rows;
};

const getProductsById = async (id: number) => {
  const [rows]: any = await pool.query(
    "SELECT * FROM products WHERE id = ? AND estado = true",
    [id]
  );
  return rows[0];
};


const create = async (data: {
  nombre: string;
  marca_id: number;
  categoria_id: number;
  descripcion: string;
  imagen: string;
  singluten: boolean;
  esCombo: boolean;
}) => {
  const { nombre, marca_id, categoria_id, descripcion, imagen, singluten, esCombo } = data;

  const [result]: any = await pool.query(
    `INSERT INTO products (nombre, marca_id, categoria_id, descripcion, imagen, singluten, esCombo) 
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nombre, marca_id, categoria_id, descripcion, imagen, singluten, esCombo]
  );

  const newProductId = result.insertId;
  return getProductsById(newProductId);
};

const update = async (id: number, data: any) => {
  const fields = Object.keys(data);
  const values = Object.values(data);

  if (fields.length === 0) return null;

  const updates = fields.map(field => `${field} = ?`).join(", ");
  values.push(id);

  await pool.query(`UPDATE products SET ${updates} WHERE id = ?`, values);

  return getProductsById(id);
};

const deleteOne = async (id: number) => {
  await pool.query("UPDATE products SET estado = false WHERE id = ?", [id]);
  return getProductsById(id);
};

export default {
  getProducts,
  getProductsById,
  create,
  update,
  deleteOne,
};