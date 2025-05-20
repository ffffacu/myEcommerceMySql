"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticatorToken = void 0;
const jwt_1 = require("../utils/jwt");
const carrito_services_1 = __importDefault(require("../modules/carrito/carrito.services"));
const carrito_productos_repository_1 = __importDefault(require("../modules/carrito_productos/carrito_productos.repository"));
const authenticatorToken = () => {
    return async (req, res, next) => {
        const token = req.cookies.sessionToken;
        let sessionId;
        if (token) {
            const decode = (0, jwt_1.verifyToken)(token);
            sessionId = decode.sessionId;
            if (sessionId) {
                const carrito = await carrito_services_1.default.cartRemnder(sessionId);
                if (carrito !== null) {
                    const productCart = await carrito_productos_repository_1.default.getProductsByCartId(carrito?.id);
                    if (carrito) {
                        req.productCart = productCart;
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
    };
};
exports.authenticatorToken = authenticatorToken;
