import { Handler} from "express"; 
import categoriasServicios from "./categorias.servicios";

const getAllCategorias: Handler = async (_req, res) =>{
    try {
        const categorias = await categoriasServicios.getAllCategorias()
        res.status(200).json({status:"Categorias encontradas", data: categorias})
    } catch (error) {
        res.status(500).json({status:"Error", error})
    }
}

const crearCategoria:Handler = async (_req,res) =>{
    try {
        const categoria = _req.body
    const nuevaCategoria = await categoriasServicios.crearCategoria(categoria);
    
    res.status(200).json({status:"Categoria creada correctamente", nuevaCategoria})
    } catch (error) {
        res.status(500).json ({status: "Error", error})
    }
}

const borrarCategoria: Handler = async (_req,res) =>{
    try {
        const categoriaId = _req.params.id

        await categoriasServicios.borrarCategoria(Number(categoriaId))
        res.status (200).json ({status:"Categoria Borrada"});
    } catch (error) {
        res.status(500).json({status:"Error", error})
    }
}

const actualizarCategoria: Handler = async (_req, res) =>{
    try {
        const categoriaId = _req.params.id
        const data = _req.body
        await categoriasServicios.actualizarCategoria(Number(categoriaId),data)
        res.status(200).json({status:"Categoria Actualizada"})
    } catch (error) {
        res.status(500).json({status:"Error", error})
    }
}

export default { getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria};