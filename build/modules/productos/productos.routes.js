"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_controllers_1 = __importDefault(require("./productos.controllers"));
const router = (0, express_1.Router)();
router.use("/", productos_controllers_1.default.getProductos);
exports.default = router;
