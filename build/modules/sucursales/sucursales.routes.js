"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sucursales_controllers_1 = __importDefault(require("./sucursales.controllers"));
const router = (0, express_1.Router)();
router.get("/", sucursales_controllers_1.default.getSucursales);
router.get("/:id", sucursales_controllers_1.default.getSucursalId);
router.post("/", sucursales_controllers_1.default.crearSucursal);
router.put("/:id", sucursales_controllers_1.default.actualizarSucursal);
router.delete("/:id", sucursales_controllers_1.default.borrarSucursal);
exports.default = router;
