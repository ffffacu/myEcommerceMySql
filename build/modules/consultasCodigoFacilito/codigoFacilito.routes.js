"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const codigoFacilito_controllers_1 = __importDefault(require("./codigoFacilito.controllers"));
const router = (0, express_1.Router)();
router.get("/tablas", codigoFacilito_controllers_1.default.getTablas);
router.get("/productoMasVendido", codigoFacilito_controllers_1.default.getProductosMasVendidos);
router.get("/mejorCliente", codigoFacilito_controllers_1.default.getMejorCliente);
router.get("/marcasEnEcommerce", codigoFacilito_controllers_1.default.getMarcasEnEcommerce);
router.get("/sucursalesConMasPedidos", codigoFacilito_controllers_1.default.getSucursalesConMasPedidos);
router.get("/productosSinGluten", codigoFacilito_controllers_1.default.getProductosSinGluten);
router.get("/porcentajePedidosCancelados", codigoFacilito_controllers_1.default.getPorcentajePedidosCancelados);
router.get("/productoEnPromocion", codigoFacilito_controllers_1.default.getProductoEnPromocion);
exports.default = router;
