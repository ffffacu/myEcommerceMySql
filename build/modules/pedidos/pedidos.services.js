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
const pedidos_repository_1 = __importDefault(require("./pedidos.repository"));
const getPedidos = () => __awaiter(void 0, void 0, void 0, function* () { return yield pedidos_repository_1.default.getPedidos(); });
const getPedidoId = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield pedidos_repository_1.default.getPedidoId(id); });
const crearPedido = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield pedidos_repository_1.default.crearPedido(data); });
const finalizarPedido = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield pedidos_repository_1.default.finalizarPedido(id); });
exports.default = { getPedidos, getPedidoId, crearPedido, finalizarPedido };
