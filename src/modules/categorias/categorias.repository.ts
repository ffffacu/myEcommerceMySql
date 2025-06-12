import {pool} from "../../lib/db";
import {RowDataPacket} from "mysql2/promise";


interface Categoria extends RowDataPacket{
    nombre: string;
    descripcion: string;
    imagen: string;
}

interface CategoriaUpdateData {
  nombre?: string;
  descripcion?: string;
  imagen?: string;
}


const getAllCategorias = async (): Promise<Categoria[]> => {
    const [rows] = await pool.query<Categoria[]>("SELECT * FROM categorias");
    return rows;
};

const crearCategoria = async (categoria: Categoria): Promise<void> => {
    await pool.query("INSERT INTO categorias (nombre, descripcion, imagen) VALUES (?, ?, ?)", [categoria.nombre, categoria.descripcion, categoria.imagen]);
};

const borrarCategoria = async (categoriaId: number) =>{
    await pool.query("DELETE FROM categorias WHERE id = ?",[categoriaId]);
};

const actualizarCategoria = async (id: number, data: CategoriaUpdateData): Promise<void> => {
  const campos: string[] = [];
  const valores: any[] = [];

  if (data.nombre) {
    campos.push("nombre = ?");
    valores.push(data.nombre);
  }
  if (data.descripcion) {
    campos.push("descripcion = ?");
    valores.push(data.descripcion);
  if (data.imagen) {
    campos.push("imagen = ?");
    valores.push(data.imagen);
  }
  if (campos.length === 0) {
    throw new Error("No se proporcionaron campos para actualizar");
  }
  valores.push(id); // ID al final
  const query = `UPDATE categorias SET ${campos.join(", ")} WHERE id = ?`;
  await pool.query(query, valores);
};
}

export default {getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria}