import { Handler } from "express";
import carritoServices from "./carrito_productos.services";
import { verifyToken } from "../../utils/jwt";



const addProductToCart:Handler = async (_req, res) => {
    try {
        const tokenExtractor = _req.cookies.sessionToken;
        const token = verifyToken(tokenExtractor);
        if(token){
            const {productId, quantity, descuento} = _req.body;
            await carritoServices.addProductToCart(tokenExtractor, productId, quantity, descuento);
            res.status(200).json({status:"Succcess"});
        }
    } catch (error) {
        res.status(500).json({status:"Error", msg:"Error del servidor"});
    }
}

export default {addProductToCart}