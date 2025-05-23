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
const codigoFacilito_services_1 = __importDefault(require("./codigoFacilito.services"));
const getTablas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tablas = yield codigoFacilito_services_1.default.getTablas();
        res.status(200).json(tablas);
    }
    catch (error) {
        console.error('Error al obtener resumen:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
const getProductosMasVendidos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productosMasVendidos = yield codigoFacilito_services_1.default.getProductosMasVendidos();
        res.status(200).json(productosMasVendidos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos más vendidos' });
    }
});
const getMejorCliente = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mejorCliente = yield codigoFacilito_services_1.default.getMejorCliente();
        res.status(200).json(mejorCliente);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el mejor cliente' });
    }
});
const getMarcasEnEcommerce = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marcasEnEcommerce = yield codigoFacilito_services_1.default.getMarcasEnEcommerce();
        res.status(200).json(marcasEnEcommerce);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener las marcas en ecommerce' });
    }
});
const getSucursalesConMasPedidos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sucursalesConMasPedidos = yield codigoFacilito_services_1.default.getSucursalesConMasPedidos();
        res.status(200).json(sucursalesConMasPedidos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener las sucursales con más pedidos' });
    }
});
const getProductosSinGluten = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productosSinGluten = yield codigoFacilito_services_1.default.getProductosSinGluten();
        res.status(200).json(productosSinGluten);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos sin gluten' });
    }
});
const getPorcentajePedidosCancelados = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const porcentajePedidosCancelados = yield codigoFacilito_services_1.default.getPorcentajePedidosCancelados();
        res.status(200).json(porcentajePedidosCancelados);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el porcentaje de pedidos cancelados' });
    }
});
const getProductoEnPromocion = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productoEnPromocion = yield codigoFacilito_services_1.default.getProductoEnPromocion();
        res.status(200).json(productoEnPromocion);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto en promoción' });
    }
});
exports.default = {
    getProductosMasVendidos,
    getMejorCliente,
    getMarcasEnEcommerce,
    getSucursalesConMasPedidos,
    getProductosSinGluten,
    getPorcentajePedidosCancelados,
    getProductoEnPromocion,
    getTablas
};
