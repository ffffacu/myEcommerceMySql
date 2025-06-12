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
const sucursales_services_1 = __importDefault(require("./sucursales.services"));
const getSucursales = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sucursales = yield sucursales_services_1.default.getSucursales();
        res.status(200).json({ mensaje: "ok", data: sucursales });
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener las sucursales", Error });
    }
});
const getSucursalId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const sucursalId = yield sucursales_services_1.default.getSucursalId(Number(id));
        res.status(200).json({ mensaje: "ok", data: sucursalId });
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener la sucursal", Error });
    }
});
const crearSucursal = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const nuevaSucursal = yield sucursales_services_1.default.crearSucursal(data);
        console.log(nuevaSucursal);
        res.status(200).json({ mensaje: `${nuevaSucursal}` });
    }
    catch (error) {
        res.status(500).json({ error: "Error al obtener la sucursal", Error });
    }
});
const actualizarSucursal = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const data = _req.body;
        const sucursalActualizada = yield sucursales_services_1.default.actualizarSucursal(Number(id), data);
        res.status(200).json({ status: "Ok", data: sucursalActualizada });
    }
    catch (error) {
        res.status(500).json({ error: "Error al actualizar la sucursal", Error });
    }
});
const borrarSucursal = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        yield sucursales_services_1.default.borrarSucursal(Number(id));
        res.status(200).json({ status: "Ok", mensaje: "Sucursal borrada exitosamente" });
    }
    catch (error) {
        res.status(500).json({ error: "No pudimos borrar la sucursal", Error });
    }
});
exports.default = { getSucursales, getSucursalId, crearSucursal, actualizarSucursal, borrarSucursal };
