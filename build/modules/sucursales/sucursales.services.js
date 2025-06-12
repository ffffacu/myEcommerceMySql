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
const sucursales_repository_1 = __importDefault(require("./sucursales.repository"));
const getSucursales = () => __awaiter(void 0, void 0, void 0, function* () { return yield sucursales_repository_1.default.getSucursales(); });
const getSucursalId = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield sucursales_repository_1.default.getSucursalId(id); });
const crearSucursal = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data.nombre || !data.direccion || !data.telefono || !data.email) {
        return "Faltan datos para completar la creacion";
    }
    else {
        yield sucursales_repository_1.default.crearSucursal(data);
        return "Sucursal creada correctamente";
    }
});
const actualizarSucursal = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const sucursal = yield sucursales_repository_1.default.getSucursalId(id);
    if (!sucursal) {
        return "Sucursal no encontrada";
    }
    const sucursalActualizada = yield sucursales_repository_1.default.actualizarSucursal(id, data);
    return sucursalActualizada;
});
const borrarSucursal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const sucursal = yield sucursales_repository_1.default.getSucursalId(id);
    if (!sucursal) {
        return "Sucursal no encontrada";
    }
    yield sucursales_repository_1.default.borrarSucursal(id);
    return "Sucursal eliminada correctamente";
});
exports.default = { getSucursalId, getSucursales, crearSucursal, actualizarSucursal, borrarSucursal };
