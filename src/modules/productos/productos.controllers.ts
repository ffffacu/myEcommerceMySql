import productosServices from "./productos.services";
import { Handler } from "express";


const getProductos: Handler = async (_req, res) =>{
    try {
        const { limit, page, sort } = _req.params;
        const options = {
        limit: limit || 10,
        page: page || 1,
        sort: {
            price: sort === "asc" ? 1 : -1,
        },
        learn: true,
        };
        const productos = await productosServices.getProducts(options);
        res.status(200).json({status: "ok", data: productos})
    } catch (error) {
        res.status(500).json({status:"Error al traer productos", error})
    }
}

const getProductosPorId: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id
        const productoId = await productosServices.getProductsById(Number(id));
        res.status(200).json({status: "ok", data: productoId});
    } catch (error) {
        res.status(500).json({status:"Error al traer producto por id", error})
    }
}

const acatualizarProducto: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id
        const data = _req.body
        const result = await productosServices.actualizarPorducto(Number(id),data);
        res.status(200).json({status:"Ok", data: result});
    } catch (error) {
        res.status(500).json({status:"Error al actualiza producto", error})
    }
}

const crearProducto: Handler = async (_req, res) =>{
    try {
        const data = _req.body
        const result = await productosServices.crearProducto(data);
        res.status(200).json({status:"ok", data: result})
    } catch (error) {
        res.status(500).json({status:"Error al crear producto",error})
    }
}

const borrarProducto: Handler = async (_req, res) =>{
    try {
        const id = _req.params.id
        const result = await productosServices.borrarProducto(Number(id));
        res.status(200).json({status:"ok", borrado: result});
    } catch (error) {
        res.status(500).json({status:"Error al borrar producto", error})
    }
}
export default {getProductos, getProductosPorId,acatualizarProducto,crearProducto,borrarProducto}