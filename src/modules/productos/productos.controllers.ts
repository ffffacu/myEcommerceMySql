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
        res.status(500).json({status:"Error al traer productos", Error})
    }
}

export default {getProductos}