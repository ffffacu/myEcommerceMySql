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
const carrito_repository_1 = __importDefault(require("./carrito.repository"));
const getCart = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield carrito_repository_1.default.getCart();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error('Error al obtener los carritos: ' + error.message);
        }
        throw new Error('Error desconocido al obtener los carritos');
    }
});
const getCartByToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const carrito = yield carrito_repository_1.default.getCartByToken(token);
    if (!carrito) {
        return yield carrito_repository_1.default.createCart(token);
    }
    return carrito;
});
const cartRemnder = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const carrito = yield carrito_repository_1.default.getCartByToken(token);
    return carrito;
});
const updateCart = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return yield carrito_repository_1.default.updateCart(id, data); });
exports.default = { getCart, getCartByToken, cartRemnder, updateCart };
