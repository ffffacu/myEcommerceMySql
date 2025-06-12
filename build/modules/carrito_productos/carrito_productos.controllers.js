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
const carrito_productos_services_1 = __importDefault(require("./carrito_productos.services"));
const jwt_1 = require("../../utils/jwt");
const addProductToCart = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenExtractor = _req.cookies.sessionToken;
        const token = (0, jwt_1.verifyToken)(tokenExtractor);
        if (token) {
            const { productId, cantidad, descuento } = _req.body;
            const carritoActualizado = yield carrito_productos_services_1.default.addProductToCart(tokenExtractor, productId, cantidad, descuento);
            res.status(200).json({ status: "Carrito Actualizado", data: carritoActualizado });
        }
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
exports.default = { addProductToCart };
