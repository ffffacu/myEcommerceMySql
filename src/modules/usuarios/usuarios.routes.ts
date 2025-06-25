import { Router } from "express";
import usuariosControllers from "./usuarios.controllers";

const router = Router();

router.post("/login", usuariosControllers.getUsersLogin)

export default router