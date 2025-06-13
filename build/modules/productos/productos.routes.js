"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = __importDefault(require("./productos.controllers"));
const router = (0, express_1.Router)();
router.get("/", productos_controllers_1.default.getProductos);
router.get("/:id", productos_controllers_1.default.getProductosPorId);
router.post("/", productos_controllers_1.default.crearProducto);
router.put("/:id", productos_controllers_1.default.acatualizarProducto);
router.delete("/:id", productos_controllers_1.default.borrarProducto);
exports.default = router;
