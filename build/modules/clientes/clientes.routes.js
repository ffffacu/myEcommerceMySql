"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientes_controllers_1 = __importDefault(require("./clientes.controllers"));
const router = (0, express_1.Router)();
router.get("/", clientes_controllers_1.default.getClientes);
router.get("/:id", clientes_controllers_1.default.getClienteId);
router.post("/", clientes_controllers_1.default.crearCliente);
router.put("/:id", clientes_controllers_1.default.crearCliente);
router.delete("/:id", clientes_controllers_1.default.borrarCliente);
exports.default = router;
