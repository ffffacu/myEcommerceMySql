"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const variaciones_controllers_1 = __importDefault(require("./variaciones.controllers"));
const router = (0, express_1.Router)();
router.get("/", variaciones_controllers_1.default.getVariaciones);
router.get("/:id", variaciones_controllers_1.default.getVariacionesId);
router.post("/", variaciones_controllers_1.default.crearVariacion);
router.put("/:id", variaciones_controllers_1.default.actualizarVariacion);
router.delete("/:id", variaciones_controllers_1.default.borrarVariacion);
exports.default = router;
