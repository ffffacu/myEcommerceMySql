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
const marcas_services_1 = __importDefault(require("./marcas.services"));
const getMarcas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marcas = yield marcas_services_1.default.getMarcas();
        res.status(200).json({ status: "ok", data: marcas });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer marcas", Error });
    }
});
const getMarcasId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const marcaId = yield marcas_services_1.default.getMarcasId(Number(id));
        res.status(200).json({ status: "ok", data: marcaId });
    }
    catch (error) {
        res.status(500).json({ status: "Error al buscar marca por id", Error });
    }
});
const crearMarca = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const nuevaMarca = yield marcas_services_1.default.crearMarcas(data);
        res.status(200).json({ status: "ok", data: nuevaMarca });
    }
    catch (error) {
        res.status(500).json({ status: "Error al crear marca", Error });
    }
});
const actualizarMarcas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const data = _req.body;
        const marcaActualizada = yield marcas_services_1.default.actualizarMarcas(Number(id), data);
        res.status(2200).json({ status: "ok", data: marcaActualizada });
    }
    catch (error) {
        res.status(500).json({ status: "Error al actualizar marca", Error });
    }
});
const borrarMarca = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        yield marcas_services_1.default.borrarMarcas(Number(id));
        res.status(200).json({ status: "ok", menssage: "Sucursal eliminada correctamente" });
    }
    catch (error) {
        res.status(500).json({ status: "Error al borrar sucursal", Error });
    }
});
exports.default = { getMarcas, getMarcasId, crearMarca, actualizarMarcas, borrarMarca };
