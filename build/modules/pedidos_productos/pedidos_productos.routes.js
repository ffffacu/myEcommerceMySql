"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_productos_controllers_1 = __importDefault(require("./pedidos_productos.controllers"));
const router = (0, express_1.Router)();
router.get("/", pedidos_productos_controllers_1.default.getPedidosProductos);
router.get("/:pedidoId", pedidos_productos_controllers_1.default.getPedidosProductoPorPedidoId);
exports.default = router;
