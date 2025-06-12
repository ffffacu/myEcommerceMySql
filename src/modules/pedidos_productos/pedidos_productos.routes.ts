import { Router } from "express";
import pedidosProductosControllers from "./pedidos_productos.controllers";

const router = Router();


router.get("/", pedidosProductosControllers.getPedidosProductos);
router.get("/:pedidoId", pedidosProductosControllers.getPedidosProductoPorPedidoId)

export default router