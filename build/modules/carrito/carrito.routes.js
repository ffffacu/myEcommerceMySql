"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_controllers_1 = __importDefault(require("./carrito.controllers"));
const router = (0, express_1.Router)();
router.get("/", carrito_controllers_1.default.getCart);
router.get("/token", carrito_controllers_1.default.getCartByToken);
exports.default = router;
