"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_productos_controllers_1 = __importDefault(require("./carrito_productos.controllers"));
const router = (0, express_1.Router)();
router.post("/", carrito_productos_controllers_1.default.addProductToCart);
exports.default = router;
