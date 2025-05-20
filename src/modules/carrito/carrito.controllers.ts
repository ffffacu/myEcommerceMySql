import carritoServices from "./carrito.services";
import { Handler } from "express";


const getCart: Handler = async (_req, res) => {
    try {
        const carrito = await carritoServices.getCart();
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
};

export default { getCart };