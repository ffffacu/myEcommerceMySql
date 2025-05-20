"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carrito_services_1 = __importDefault(require("./carrito.services"));
const getCart = async (req, res) => {
    try {
        const carrito = await carrito_services_1.default.getCart();
        res.status(200).json(carrito);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
};
exports.default = { getCart };
