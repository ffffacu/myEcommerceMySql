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
const pedidos_productos_services_1 = __importDefault(require("./pedidos_productos.services"));
const getPedidosProductos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidos = yield pedidos_productos_services_1.default.getPedidosProductos();
        res.status(200).json({ status: "ok", data: pedidos });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer pedidos", Error });
    }
});
const getPedidosProductoPorPedidoId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidoId = _req.params.pedidoId;
        const pedidoPorProductoId = yield pedidos_productos_services_1.default.getPedidosProductoPorPedidoId(Number(pedidoId));
        res.status(200).json({ status: "ok", data: pedidoPorProductoId });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer pedidos por pedido id", Error });
    }
});
exports.default = { getPedidosProductos, getPedidosProductoPorPedidoId };
