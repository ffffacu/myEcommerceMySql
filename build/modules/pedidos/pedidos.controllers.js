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
const pedidos_services_1 = __importDefault(require("./pedidos.services"));
const getPedidos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidos = yield pedidos_services_1.default.getPedidos();
        res.status(200).json({ status: "ok", data: pedidos });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer los pedidos", Error });
    }
});
const getPedidosId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const pedido = yield pedidos_services_1.default.getPedidoId(Number(id));
        res.status(200).json({ status: "ok", data: pedido });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer el pedido", Error });
    }
});
const crearPedido = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const nuevoPedido = yield pedidos_services_1.default.crearPedido(data);
        res.status(200).json({ status: "ok", data: nuevoPedido });
    }
    catch (error) {
        res.status(500).json({ status: "Error al crear pedido", Error });
    }
});
const finalizarPedido = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        yield pedidos_services_1.default.finalizarPedido(Number(id));
        res.status(200).json({ status: "Pedido finalizado" });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer el pedido", Error });
    }
});
exports.default = { getPedidos, getPedidosId, crearPedido, finalizarPedido };
