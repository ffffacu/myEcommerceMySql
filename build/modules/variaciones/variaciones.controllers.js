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
const variaciones_services_1 = __importDefault(require("./variaciones.services"));
const getVariaciones = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variaciones = yield variaciones_services_1.default.getVariaciones();
        res.status(200).json({ status: "Ok", data: variaciones });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer las variaciones", Error });
    }
});
const getVariacionesId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const variacionId = yield variaciones_services_1.default.getVariacionById(Number(id));
        res.status(200).json({ status: "Ok", data: variacionId });
    }
    catch (error) {
        res.status(500).json({ status: "Error al buscar variacion", Error });
    }
});
const crearVariacion = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const nuevaVariacion = yield variaciones_services_1.default.createVariacion(data);
        res.status(200).json({ status: "Ok", data: nuevaVariacion });
    }
    catch (error) {
        res.status(500).json({ status: "Error al crear variacion", error });
    }
});
const actualizarVariacion = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const id = _req.params.id;
        const variacionActualizada = yield variaciones_services_1.default.updateVariacion(Number(id), data);
        res.status(200).json({ status: "Ok", data: variacionActualizada });
    }
    catch (error) {
        res.status(500).json({ status: "Error al actualizar variacion", Error });
    }
});
const borrarVariacion = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const variacionBorrada = yield variaciones_services_1.default.deleteVariacion(Number(id));
        res.status(200).json({ status: "ok", data: variacionBorrada });
    }
    catch (error) {
        res.status(500).json({ status: "Error al borrar sucursal", Error });
    }
});
exports.default = { getVariaciones, getVariacionesId, borrarVariacion, actualizarVariacion, crearVariacion };
