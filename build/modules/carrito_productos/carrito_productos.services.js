"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carrito_services_1 = __importDefault(require("../carrito/carrito.services"));
const variaciones_services_1 = __importDefault(require("../variaciones/variaciones.services"));
const db_1 = require("../../lib/db");
const addProductToCart = (token, productId, cantidad, descuento) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield carrito_services_1.default.getCartByToken(token);
    const producto = yield variaciones_services_1.default.getVariacionById(productId);
    if (cart && producto && cantidad > 0 && typeof producto.precio === 'number') {
        yield db_1.pool.query('INSERT INTO carrito_productos (carrito_id, variacion_id, cantidad, subtotal) VALUES (?, ?, ?, ?)', [cart.id, producto.id, cantidad, producto.precio]);
        const result = yield carrito_services_1.default.updateCart(cart.id, { total: cart.total + producto.precio * cantidad - descuento, descuento: cart.descuento + descuento });
        return result;
    }
});
exports.default = { addProductToCart };
