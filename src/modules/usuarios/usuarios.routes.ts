import { Router } from "express";
import usuariosControllers from "./usuarios.controllers";

const router = Router();

router.get("/login", usuariosControllers.getUsersLogin)

export default router