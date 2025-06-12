import {Router} from "express";
import categoriasControllers from "./categorias.controllers";

const router = Router();

router.get("/", categoriasControllers.getAllCategorias);
router.post("/", categoriasControllers.crearCategoria);
router.delete("/:id", categoriasControllers.borrarCategoria);
router.put ("/:id", categoriasControllers.actualizarCategoria)



export default router
