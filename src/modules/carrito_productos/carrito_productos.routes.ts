import {Router} from "express";
import carritoProductosControllers from "./carrito_productos.controllers";

const router = Router ();


router.post("/", carritoProductosControllers.addProductToCart)

export default router