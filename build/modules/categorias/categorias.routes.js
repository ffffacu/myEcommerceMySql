"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_controllers_1 = __importDefault(require("./categorias.controllers"));
const router = (0, express_1.Router)();
router.get("/", categorias_controllers_1.default.getAllCategorias);
router.post("/", categorias_controllers_1.default.crearCategoria);
router.delete("/:id", categorias_controllers_1.default.borrarCategoria);
router.put("/:id", categorias_controllers_1.default.actualizarCategoria);
exports.default = router;
