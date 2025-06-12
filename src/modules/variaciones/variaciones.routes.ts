import { Router } from "express";
import variacionesControllers from "./variaciones.controllers";

const router = Router()


router.get("/", variacionesControllers.getVariaciones);
router.get("/:id", variacionesControllers.getVariacionesId);
router.post("/", variacionesControllers.crearVariacion);
router.put("/:id",variacionesControllers.actualizarVariacion);
router.delete("/:id", variacionesControllers.borrarVariacion);


export default router