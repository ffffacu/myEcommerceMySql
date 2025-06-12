import carritoServices from "./carrito.services";
import carrito_productosRepository from "../carrito_productos/carrito_productos.repository";
import { Handler } from "express";


const getCart: Handler = async (_req, res) => {
    try {
        const carrito = await carritoServices.getCart();
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
};

const getCartByToken: Handler = async (_req, res) =>{
    try {
        const tokenExtractor = _req.cookies.sessionToken;
        const carrito = await carritoServices.getCartByToken(tokenExtractor);
        const productosEnCarrito = await carrito_productosRepository.getProductsByCartId(carrito.id);
        res.status(200).json({status:"Succcess", dataCarrito: carrito, dataProductos: productosEnCarrito});
    } catch (error) {
        res.status(500).json({status:"Error", error});
    }
}

export default { getCart, getCartByToken };