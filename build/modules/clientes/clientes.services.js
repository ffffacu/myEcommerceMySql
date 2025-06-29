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
const clientes_repository_1 = __importDefault(require("./clientes.repository"));
const getClientes = () => __awaiter(void 0, void 0, void 0, function* () { return yield clientes_repository_1.default.getClientes(); });
const getClientesId = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield clientes_repository_1.default.getClientesId(id); });
const crearCliente = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield clientes_repository_1.default.crearCliente(data); });
const actualizarCliente = (id, data) => __awaiter(void 0, void 0, void 0, function* () { return yield clientes_repository_1.default.actualizarCliente(id, data); });
const borrarCliente = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield clientes_repository_1.default.borrarCliente(id); });
exports.default = { getClientes, getClientesId, actualizarCliente, crearCliente, borrarCliente };
