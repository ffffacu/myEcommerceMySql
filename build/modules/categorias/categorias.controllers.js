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
const categorias_servicios_1 = __importDefault(require("./categorias.servicios"));
const getAllCategorias = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield categorias_servicios_1.default.getAllCategorias();
        res.status(200).json({ status: "Categorias encontradas", data: categorias });
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
const crearCategoria = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoria = _req.body;
        const nuevaCategoria = yield categorias_servicios_1.default.crearCategoria(categoria);
        res.status(200).json({ status: "Categoria creada correctamente", nuevaCategoria });
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
const borrarCategoria = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaId = _req.params.id;
        yield categorias_servicios_1.default.borrarCategoria(Number(categoriaId));
        res.status(200).json({ status: "Categoria Borrada" });
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
const actualizarCategoria = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriaId = _req.params.id;
        const data = _req.body;
        yield categorias_servicios_1.default.actualizarCategoria(Number(categoriaId), data);
        res.status(200).json({ status: "Categoria Actualizada" });
    }
    catch (error) {
        res.status(500).json({ status: "Error", error });
    }
});
exports.default = { getAllCategorias, crearCategoria, borrarCategoria, actualizarCategoria };
