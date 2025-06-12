import { Router } from "express";
import pedidosControllers from "./pedidos.controllers";


const router = Router();

router.get("/", pedidosControllers.getPedidos);
router.get("/:id", pedidosControllers.getPedidosId);
router.post("/", pedidosControllers.crearPedido);


export default router