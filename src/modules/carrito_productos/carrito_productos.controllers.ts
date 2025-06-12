import { Handler } from "express";
import carritoServices from "./carrito_productos.services";
import { verifyToken } from "../../utils/jwt";



const addProductToCart:Handler = async (_req, res) => {
    try {
        const tokenExtractor = _req.cookies.sessionToken;
        const token = verifyToken(tokenExtractor);
        if(token){
            const {productId, cantidad, descuento} = _req.body;
            const carritoActualizado = await carritoServices.addProductToCart(tokenExtractor, productId, cantidad, descuento);
            res.status(200).json({status:"Carrito Actualizado", data: carritoActualizado});
        }
    } catch (error) {
        res.status(500).json({status:"Error", error});
    }
}


export default {addProductToCart}