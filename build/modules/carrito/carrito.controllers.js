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
const carrito_services_1 = __importDefault(require("./carrito.services"));
const carrito_productos_repository_1 = __importDefault(require("../carrito_productos/carrito_productos.repository"));
const getCart = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carrito = yield carrito_services_1.default.getCart();
        res.status(200).json(carrito);
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
});
const getCartByToken = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenExtractor = _req.cookies.sessionToken;
        const carrito = yield carrito_services_1.default.getCartByToken(tokenExtractor);
        const productosEnCarrito = yield carrito_productos_repository_1.default.getProductsByCartId(carrito.id);
        res.status(200).json({ status: "Succcess", dataCarrito: carrito, dataProductos: productosEnCarrito });
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
exports.default = { getCart, getCartByToken };
