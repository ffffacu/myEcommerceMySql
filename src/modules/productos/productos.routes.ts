import { Router } from "express";
import productosControllers from "./productos.controllers";

const router = Router();


router.get("/",productosControllers.getProductos);
router.get("/:id", productosControllers.getProductosPorId);
router.post("/",productosControllers.crearProducto);
router.put("/:id",productosControllers.acatualizarProducto);
router.delete("/:id",productosControllers.borrarProducto)




export default router