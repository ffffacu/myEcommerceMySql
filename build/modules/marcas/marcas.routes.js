"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcas_controllers_1 = __importDefault(require("./marcas.controllers"));
const router = (0, express_1.Router)();
router.get("/", marcas_controllers_1.default.getMarcas);
router.get("/:id", marcas_controllers_1.default.getMarcasId);
router.post("/", marcas_controllers_1.default.crearMarca);
router.put("/:id", marcas_controllers_1.default.actualizarMarcas);
router.delete("/:id", marcas_controllers_1.default.borrarMarca);
exports.default = router;
