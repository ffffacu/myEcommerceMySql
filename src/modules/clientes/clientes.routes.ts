import { Router } from "express";
import clientesControllers from "./clientes.controllers";

const router = Router();

router.get("/",clientesControllers.getClientes);
router.get("/:id",clientesControllers.getClienteId);
router.post("/",clientesControllers.crearCliente);
router.put("/:id",clientesControllers.crearCliente);
router.delete("/:id",clientesControllers.borrarCliente)

export default router