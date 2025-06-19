"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_controllers_1 = __importDefault(require("./pedidos.controllers"));
const router = (0, express_1.Router)();
router.get("/", pedidos_controllers_1.default.getPedidos);
router.get("/:id", pedidos_controllers_1.default.getPedidosId);
router.post("/", pedidos_controllers_1.default.crearPedido);
router.put("/:id", pedidos_controllers_1.default.finalizarPedido);
exports.default = router;
