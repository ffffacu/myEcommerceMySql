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
exports.authenticatorToken = void 0;
const jwt_1 = require("../utils/jwt");
const carrito_services_1 = __importDefault(require("../modules/carrito/carrito.services"));
const carrito_productos_repository_1 = __importDefault(require("../modules/carrito_productos/carrito_productos.repository"));
const authenticatorToken = () => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.cookies.sessionToken;
        let sessionId;
        if (token) {
            const decode = (0, jwt_1.verifyToken)(token);
            sessionId = decode.sessionId;
            if (sessionId) {
                const carrito = yield carrito_services_1.default.cartRemnder(sessionId);
                if (carrito !== null) {
                    const productCart = yield carrito_productos_repository_1.default.getProductsByCartId(carrito === null || carrito === void 0 ? void 0 : carrito.id);
                    if (carrito) {
                        req.productCart = productCart !== null && productCart !== void 0 ? productCart : [];
                    }
                }
                else {
                    req.productCart = [];
                }
            }
        }
        if (!sessionId) {
            const newToken = (0, jwt_1.createToken)();
            res.cookie("sessionToken", newToken, { httpOnly: true });
        }
        next();
    });
};
exports.authenticatorToken = authenticatorToken;
