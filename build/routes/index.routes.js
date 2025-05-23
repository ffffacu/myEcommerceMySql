"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_routes_1 = __importDefault(require("../modules/carrito/carrito.routes"));
const carrito_productos_routes_1 = __importDefault(require("../modules/carrito_productos/carrito_productos.routes"));
const codigoFacilito_routes_1 = __importDefault(require("../modules/consultasCodigoFacilito/codigoFacilito.routes"));
const router = (0, express_1.Router)();
router.use('/carrito', carrito_routes_1.default);
router.use('/codigoFacilito', codigoFacilito_routes_1.default);
router.use('/carritoProductos', carrito_productos_routes_1.default);
exports.default = router;
