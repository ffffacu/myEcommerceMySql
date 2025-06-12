import { Router } from "express";
import marcasControllers from "./marcas.controllers";


const router = Router();


router.get("/", marcasControllers.getMarcas);
router.get("/:id", marcasControllers.getMarcasId);
router.post("/",marcasControllers.crearMarca);
router.put("/:id", marcasControllers.actualizarMarcas);
router.delete("/:id", marcasControllers.borrarMarca);

export default router