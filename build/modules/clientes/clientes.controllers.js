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
const clientes_services_1 = __importDefault(require("./clientes.services"));
const getClientes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield clientes_services_1.default.getClientes();
        res.status(200).json({ status: "ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "No se pudo traer la lista de clientes", Error });
    }
});
const getClienteId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const result = yield clientes_services_1.default.getClientesId(Number(id));
        res.status(200).json({ status: "ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "No se pudo traer cliente por id", Error });
    }
});
const crearCliente = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const result = yield clientes_services_1.default.crearCliente(data);
        res.status(200).json({ status: "ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "No se pudo crear el cliente", Error });
    }
});
const actualizarCliente = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const id = _req.params.id;
        const result = yield clientes_services_1.default.actualizarCliente(Number(id), data);
        res.status(200).json({ status: "ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "No se pudo actualizar el cliente", Error });
    }
});
const borrarCliente = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        yield clientes_services_1.default.borrarCliente(Number(id));
        res.status(200).json({ status: "Cliente borrado correctamente" });
    }
    catch (error) {
        res.status(500).json({ status: "No se pudo borrar el cliente", Error });
    }
});
exports.default = { getClienteId, getClientes, actualizarCliente, crearCliente, borrarCliente };
