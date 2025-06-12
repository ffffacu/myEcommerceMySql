import { Router } from "express";
import productosControllers from "./productos.controllers";

const router = Router();


router.use("/",productosControllers.getProductos);


export default router