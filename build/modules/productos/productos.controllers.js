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
const productos_services_1 = __importDefault(require("./productos.services"));
const getProductos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, page, sort } = _req.params;
        const options = {
            limit: limit || 10,
            page: page || 1,
            sort: {
                price: sort === "asc" ? 1 : -1,
            },
            learn: true,
        };
        const productos = yield productos_services_1.default.getProducts(options);
        res.status(200).json({ status: "ok", data: productos });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer productos", error });
    }
});
const getProductosPorId = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const productoId = yield productos_services_1.default.getProductsById(Number(id));
        res.status(200).json({ status: "ok", data: productoId });
    }
    catch (error) {
        res.status(500).json({ status: "Error al traer producto por id", error });
    }
});
const acatualizarProducto = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const data = _req.body;
        const result = yield productos_services_1.default.actualizarPorducto(Number(id), data);
        res.status(200).json({ status: "Ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "Error al actualiza producto", error });
    }
});
const crearProducto = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = _req.body;
        const result = yield productos_services_1.default.crearProducto(data);
        res.status(200).json({ status: "ok", data: result });
    }
    catch (error) {
        res.status(500).json({ status: "Error al crear producto", error });
    }
});
const borrarProducto = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = _req.params.id;
        const result = yield productos_services_1.default.borrarProducto(Number(id));
        res.status(200).json({ status: "ok", borrado: result });
    }
    catch (error) {
        res.status(500).json({ status: "Error al borrar producto", error });
    }
});
exports.default = { getProductos, getProductosPorId, acatualizarProducto, crearProducto, borrarProducto };
