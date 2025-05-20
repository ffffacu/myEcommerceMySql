"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carrito_repository_1 = __importDefault(require("./carrito.repository"));
const getCart = async () => {
    try {
        return await carrito_repository_1.default.getCart();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los carritos: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los carritos');
    }
};
const getCartByToken = async (token) => {
    const carrito = await carrito_repository_1.default.getCartByToken(token);
    if (!carrito) {
        return await carrito_repository_1.default.createCart(token);
    }
    return carrito;
};
const cartRemnder = async (token) => {
    const carrito = await carrito_repository_1.default.getCartByToken(token);
    return carrito;
};
exports.default = { getCart, getCartByToken, cartRemnder };
