import { Router } from "express";
import sucursalesControllers from "./sucursales.controllers";


const router = Router ();

router.get("/", sucursalesControllers.getSucursales)
router.get("/:id", sucursalesControllers.getSucursalId)
router.post("/", sucursalesControllers.crearSucursal)
router.put("/:id", sucursalesControllers.actualizarSucursal)
router.delete("/:id",sucursalesControllers.borrarSucursal)

export default router
